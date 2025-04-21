import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { logger } from "@hono/hono/logger";
import postgres from "postgres";

const app = new Hono();
const sql = postgres();

let courses = []

app.use("/*", cors());
app.use("/*", logger());



app.get('/courses', (c) => c.json({"courses":
  [
    {"id": 1, "name": "Web Software Development" },
    {"id": 2, "name": "Device-Agnostic Design" }
  ]
}))

app.get('/courses/:id', c => c.json({"course": {"id": Number(c.req.param('id')), "name": "Course Name" }}))

app.post('/courses', async c => {
  const body = await c.req.json()
  return c.json({course: {id: 3, name: body.name}})
})

app.get('/courses/:id/questions', c => c.json(courses))
app.post('/courses/:id/questions', async c => {
  const body = await c.req.json()
  body.id = courses.length + 1
  body.upvotes = 0
  courses.push(body)
  return c.json(body)
})

app.post('/courses/:id/questions/:qId/upvote',  c => {
  const questionId =  Number(c.req.param("qId"))
  const course = courses.find(co => co.id === questionId)
  course.upvotes++
  return c.json(course)
})

app.delete('/courses/:id/questions/:qId', c => {
  const questionId =  Number(c.req.param("qId"))
  const course = courses.find(co => co.id === questionId)
  courses = courses.filter(co => co.id !== questionId)
  return c.json(course)
})



export default app;