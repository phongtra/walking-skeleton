import * as questionApi from "$lib/apis/question-api";

let questionState = $state([]);



const useQuestionState = () => {
  return {
    get questions() {
      return questionState;
    },
    getQuestions: async (courseId) =>  {
            const questions = await questionApi.readQuestionss(courseId)
            questionState = questions;
        },
    addQestion: async (courseId, e) => {
        const question = Object.fromEntries(new FormData(e.target));
        const newQuestion = await questionApi.createQuestion(
          courseId,
            question.title,
            question.text
        );
        questionState.push(newQuestion);
        e.target.reset();
        e.preventDefault();
    },
    deleteQuestion: async (courseId, question) => {
        const deletedQuestion = await questionApi.deleteQuestion(courseId, question.id);
        questionState = questionState.filter((q) => q.id !== deletedQuestion.id);
    },
    upvoteQuestion: async (courseId, question) => {
        const upvotedQuestion = await questionApi.upvoteQuestion(courseId,question.id);
        const editedQuestion = questionState.find((q) => q.id === upvotedQuestion.id);
        editedQuestion.upvotes = upvotedQuestion.upvotes;
    }
  };
};

export { useQuestionState };
