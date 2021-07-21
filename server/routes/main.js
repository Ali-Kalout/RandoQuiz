import express from "express";
import { v4 as uuidv4 } from 'uuid';

import getQuiz from "./../utils/getQuiz.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const data = await getQuiz(req.body);

        if (!req.body.name)
            return res.status(400).json({ message: "Please enter your full name !" });

        return res.status(200).json({ questions: data, name: req.body.name, uuid: uuidv4() });
    } catch (error) {
        return res.status(400);
    }
});

// reform each question before sending the whole quiz
// question of form {question:"", answers:[mixed and suffled]}

export default router;