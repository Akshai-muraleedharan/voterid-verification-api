"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.voterIdValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.voterIdValidation = joi_1.default.object({
    epicNumber: joi_1.default.string().trim().uppercase().pattern(/^[A-Z0-9]{10}$/).required().messages({
        "string.empty": "EPIC number is required",
        "string.pattern.base": "EPIC number must be 10 alphanumeric number"
    }),
    stateName: joi_1.default.string().required().pattern(/^[A-Z][a-z]*( [A-Z][a-z]*)*$/).messages({
        "string.pattern.base": "Use capitalized words only (e.g., 'Kerala').",
        "string.empty": "State name is required",
        "any.required": "State name is missing"
    })
});
