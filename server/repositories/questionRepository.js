import postgres from "postgres";

const sql = postgres();

const create = async (courseId, question) => {
  const result = await sql`INSERT INTO questions (course_id, title, text)
    VALUES (${courseId}, ${question.title}, ${question.text})
    RETURNING *`;
  return result[0];
};

const readAll = async (courseId) => {
  return await sql`SELECT * FROM questions WHERE course_id = ${courseId}`;
};

const readOne = async (courseId, questionId) => {
  const result = await sql`SELECT * FROM questions WHERE course_id = ${courseId} AND id = ${questionId}`;
  return result[0];
};

const update = async (courseId, questionId, question) => {
  const result = await sql`UPDATE questions
    SET title = ${question.title}, text = ${question.text}
    WHERE course_id = ${courseId} AND id = ${questionId}
    RETURNING *`;
  return result[0];
};

const updateVote = async (courseId, questionId) => {
    const result = await sql`UPDATE questions
    SET upvotes = upvotes + 1
    WHERE course_id = ${courseId} AND id = ${questionId}
    RETURNING *`;
  return result[0];   
}

const remove = async (courseId, questionId) => {
  const result = await sql`DELETE FROM questions WHERE course_id = ${courseId} AND id = ${questionId} RETURNING *`;
  return result[0];
};

export { create, readAll, readOne, remove, update, updateVote };
