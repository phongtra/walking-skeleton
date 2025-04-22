import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { logger } from "@hono/hono/logger";

import * as courseController from "./controllers/courseController.js";
import * as questionController from "./controllers/questionController.js";

const app = new Hono();


let courses = []

app.use("/*", cors());
app.use("/*", logger());



app.get('/api/courses', courseController.getCourses)

app.get('/api/courses/:id', courseController.getCourse)

app.post('/api/courses', ...courseController.createCourse)

app.delete('/api/courses/:id', courseController.deleteCourse)

app.get('/api/courses/:id/questions', questionController.getQuestions)
app.post('/api/courses/:id/questions', ...questionController.createQuestion)

app.post('/api/courses/:id/questions/:qId/upvote', questionController.updateVote)

app.delete('/api/courses/:id/questions/:qId', questionController.deleteQuestion)



export default app;