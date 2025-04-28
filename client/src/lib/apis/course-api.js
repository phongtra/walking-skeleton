import { PUBLIC_API_URL } from "$env/static/public";

const createCourse = async (name) => {
  const data = { name };

  const response = await fetch(`${PUBLIC_API_URL}/api/courses`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  return await response.json();
};

const readCourses = async () => {
  const response = await fetch(`${PUBLIC_API_URL}/api/courses`);
  return await response.json();
};
const readCourse = async (id) => {
  const response = await fetch(`${PUBLIC_API_URL}/api/courses/${id}`);
  return await response.json();
};
const deleteCourse = async (id) => {
  const response = await fetch(`${PUBLIC_API_URL}/api/courses/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};

export { createCourse, readCourses, readCourse, deleteCourse };