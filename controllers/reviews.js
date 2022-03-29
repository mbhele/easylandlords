const Landlord = require('../models/landlord');
const Review = require('../models/review');

module.exports.createReview = async (req, res) => {
    const landlord = await Landlord.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    landlord.reviews.push(review);
    await review.save();
    await landlord.save();
    req.flash('success', 'Created new review!');
    res.redirect(`/landlords/${landlord._id}`);
}

module.exports.deleteReview = async (req, res) => {
    const { id, reviewId } = req.params;
    await Landlord.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Successfully deleted review')
    res.redirect(`/landlords/${id}`);
}
