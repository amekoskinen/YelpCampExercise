const joi = require('joi');

const campgroundSchema = joi.object({
    campground: joi.object({
      title: joi.string().required(),
      image: joi.string().required(),
      description: joi.string().required(),
      price: joi.number().required().min(0),
      location: joi.string().required()
    }).required()
  });

module.exports.campgroundSchema = campgroundSchema;