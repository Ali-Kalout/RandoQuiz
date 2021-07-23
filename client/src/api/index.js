import axios from "axios";

const API = axios.create({ baseURL: "https://randoquizback.herokuapp.com" });

export const fetchQuiz = form => API.post("/", form);
export const sumbitQuiz = (answers, uuid) => API.post("/submit", { answers: answers, uuid: uuid });