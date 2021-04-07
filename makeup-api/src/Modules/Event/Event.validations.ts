import * as Joi from "joi";
import { MAX_DESCRIPTION_LENGTH, MAX_STRING_LENGTH } from "src/Const/validation.const";

export const EventCreateBodyValidation = Joi.object({
  title: Joi.string().required().max(MAX_STRING_LENGTH),
  description: Joi.string().required().max(MAX_DESCRIPTION_LENGTH),
  dateFrom: Joi.date().required().greater('now'),
  dateTo: Joi.date().required().greater(Joi.ref('dateFrom')),
  numOfArtists: Joi.number().required(),
  numOfArtistsPerModel: Joi.number(),
});
