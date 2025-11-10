"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const voterIDcontroller_1 = require("../controller/voterIDcontroller");
exports.router = express_1.default.Router();
/**
 * @swagger
 * /voterid:
 *    post:
 *     summary: voterID verification
 *     tags:
 *       -  verify Voter ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  epicNumber:
 *                    type: string
 *                    example: NUO1234561
 *                  stateName:
 *                     type: string
 *                     example: Kerala
 *
 *     responses:
 *        200:
 *          description: verify Voter ID
 *
 */
exports.router.post("/voterid", voterIDcontroller_1.getVoterID);
