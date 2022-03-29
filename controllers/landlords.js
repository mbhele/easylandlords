const Landlord = require('../models/landlord');
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });
const { cloudinary } = require("../cloudinary");


module.exports.index = async (req, res) => {
    const landlords = await Landlord.find({}).populate('popupText');
    res.render('landlords/index', { landlords })
}

module.exports.renderNewForm = (req, res) => {
    res.render('landlords/new');
}

module.exports.createLandlord = async (req, res, next) => {
    const geoData = await geocoder.forwardGeocode({
        query: req.body.landlord.location,
        limit: 1
    }).send()
    const landlord = new Landlord(req.body.landlord);
    landlord.geometry = geoData.body.features[0].geometry;
    landlord.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    landlord.author = req.user._id;
    await landlord.save();
    console.log(landlord);
    req.flash('success', 'Successfully made a new landlord!');
    res.redirect(`/landlords/${landlord._id}`)
}

module.exports.showLandlord = async (req, res,) => {
    const landlord = await Landlord.findById(req.params.id).populate({
        path: 'reviews',
        populate: {
            path: 'author'
        }
    }).populate('author');
    if (!landlord) {
        req.flash('error', 'Cannot find that landlord!');
        return res.redirect('/landlords');
    }
    res.render('landlords/show', { landlord });
}

module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const landlord = await Landlord.findById(id)
    if (!landlord) {
        req.flash('error', 'Cannot find that landlord!');
        return res.redirect('/landlord');
    }
    res.render('landlords/edit', { landlord });
}

module.exports.updateLandlord = async (req, res) => {
    const { id } = req.params;
    console.log(req.body);
    const landlord = await Landlord.findByIdAndUpdate(id, { ...req.body.landlord });
    const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }));
    landlord.images.push(...imgs);
    await landlord.save();
    if (req.body.deleteImages) {
        for (let filename of req.body.deleteImages) {
            await cloudinary.uploader.destroy(filename);
        }
        await landlord.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } })
    }
    req.flash('success', 'Successfully updated landlord!');
    res.redirect(`/landlords/${landlord._id}`)
}

module.exports.deleteLandlord = async (req, res) => {
    const { id } = req.params;
    await Landlord.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted landlord')
    res.redirect('/landlords');
}