const joi = require('joi');

const campgroundSchema = joi.object({
    campground: joi.object({
      title: joi.string().required(),
      // image: joi.string().required(),
      description: joi.string().required(),
      price: joi.number().required().min(0),
      location: joi.string().required()
    }).required(),
    deleteImages: joi.array()
  });

const reviewSchema = joi.object({
  review: joi.object({
    rating: joi.number().required().min(1).max(5),
    body: joi.string().required()
  }).required()
})

module.exports.campgroundSchema = campgroundSchema;
module.exports.reviewSchema = reviewSchema;