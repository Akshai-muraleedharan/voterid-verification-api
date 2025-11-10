import express from "express"
import type { Router } from "express"
import { getVoterID } from "../controller/voterIDcontroller";



export const router: Router = express.Router();

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

router.post("/voterid", getVoterID)
