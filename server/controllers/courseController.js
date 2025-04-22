import { zValidator } from "zValidator";

import * as courseRepository from "../repositories/courseRepository.js";
import { courseValidator } from "../validator.js";

const createCourse = [zValidator("json", courseValidator), async (c) => {
  const course = await c.req.valid("json");
  return c.json(await courseRepository.create(course));
}];

const getCourses = async (c) => {
  return c.json(await courseRepository.readAll());
};

const getCourse = async (c) => {
  const id = c.req.param("id");
  return c.json(await courseRepository.readOne(id));
};


const deleteCourse = async (c) => {
  const id = c.req.param("id");
  return c.json(await courseRepository.remove(id));
};

export { createCourse, deleteCourse, getCourse, getCourses };
