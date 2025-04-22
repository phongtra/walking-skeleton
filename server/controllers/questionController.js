import { zValidator } from "zValidator";

import * as questionRepository from "../repositories/questionRepository.js";
import { questionValidator } from "../validator.js";

const createQuestion = [zValidator("json", questionValidator), async (c) => {
    const courseId = c.req.param("id");
  const question = await c.req.valid("json");
  return c.json(await questionRepository.create(courseId, question));
}];

const getQuestions = async (c) => {
    const courseId = c.req.param("id");
  return c.json(await questionRepository.readAll(courseId));
};

const updateVote = async (c) => {
  const courseId = c.req.param("id");
  const questionId = c.req.param("qId");
  return c.json(await questionRepository.updateVote(courseId, questionId));
};


const deleteQuestion = async (c) => {
  const courseId = c.req.param("id");
  const questionId = c.req.param("qId");
  return c.json(await questionRepository.remove(courseId, questionId));
};

export { createQuestion, deleteQuestion, updateVote, getQuestions };
