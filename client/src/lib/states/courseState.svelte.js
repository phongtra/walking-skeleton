import * as courseApi from "$lib/apis/course-api";

let courseState = $state([]);


const useCourseState = () => {
  return {
    get courses() {
      return courseState;
    },
    getCourses: async () =>  {
        const courses = await courseApi.readCourses()
        courseState = courses;
    },
    addCourse: async (e) => {
        const course = Object.fromEntries(new FormData(e.target));
        const newCourse = await courseApi.createCourse(
           course.name
        );
        courseState.push(newCourse);
        e.target.reset();
        e.preventDefault();
    },
    deleteCourse: async (course) => {
        const deleteCourse = await courseApi.deleteCourse(course.id);
        courseState = courseState.filter((c) => c.id !== deleteCourse.id);
    }
  };
};

export { useCourseState };
