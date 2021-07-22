import express from "express";
import { v4 as uuidv4 } from 'uuid';

import getQuiz from "./../utils/getQuiz.js";
import reformQuiz from "../utils/reformQuiz.js";

const router = express.Router();

const activeQuizzes = {};

router.post("/", async (req, res) => {
    try {
        if (!req.body.name)
            return res.status(400).json({ message: "Please enter your full name !" });

        const data = await getQuiz(req.body);

        if (data.response_code !== 0)
            return res.status(400).json({ message: "An error has occured !" });

        const uuid = uuidv4();
        activeQuizzes[uuid] = data.results;
        const reformedData = reformQuiz(data.results);

        return res.status(200).json({ questions: reformedData, name: req.body.name, uuid: uuid });
    } catch (error) {
        return res.status(400).json({ message: "An error has occured !" });
    }
});

export default router;