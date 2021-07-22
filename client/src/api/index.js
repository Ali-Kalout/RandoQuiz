import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchQuiz = form => API.post("/", form);
export const sumbitQuiz = (answers, uuid) => API.post("/submit", { answers: answers, uuid: uuid });