import { PUBLIC_API_URL } from "$env/static/public";

const createQuestion = async (courseId, title, text) => {
  const data = { title, text };

  const response = await fetch(`${PUBLIC_API_URL}/api/courses/${courseId}/questions`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  return await response.json();
};

const readQuestionss = async (courseId) => {
  const response = await fetch(`${PUBLIC_API_URL}/api/courses/${courseId}/questions`);
  return await response.json();
};

const upvoteQuestion = async (courseId, id) => {
  const response = await fetch(`${PUBLIC_API_URL}/api/courses/${courseId}/questions/${id}/upvote`, {
    method: "POST",
  });
  return await response.json();
}

const deleteQuestion = async (courseId, id) => {
  const response = await fetch(`${PUBLIC_API_URL}/api/courses/${courseId}/questions/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};

export { createQuestion, readQuestionss, upvoteQuestion, deleteQuestion };