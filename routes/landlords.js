const express = require('express');
const router = express.Router();
const landlords = require('../controllers/landlords');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validateLandlord } = require('../middleware');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

const Landlord = require('../models/landlord');

router.route('/')
    .get(catchAsync(landlords.index))
    .post(isLoggedIn, upload.array('image'), validateLandlord, catchAsync(landlords.createLandlord))


router.get('/new', isLoggedIn, landlords.renderNewForm)

router.route('/:id')
    .get(catchAsync(landlords.showLandlord))
    .put(isLoggedIn, isAuthor, upload.array('image'), validateLandlord, catchAsync(landlords.updateLandlord))
    .delete(isLoggedIn, isAuthor, catchAsync(landlords.deleteLandlord));

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(landlords.renderEditForm))



module.exports = router;