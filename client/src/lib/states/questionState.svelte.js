import { browser } from "$app/environment";
import * as questionApi from "$lib/apis/question-api";

let questionState = $state([]);

const QUESTIONS = "questions";
if (browser ) {
    questionApi.readQuestionss().then((questions) => {
        questionState = questions;
    }
    );
}


const useQuestionState = () => {
  return {
    get questions() {
      return questionState;
    },
    addQestion: async (e) => {
        const question = Object.fromEntries(new FormData(e.target));
        const newQuestion = await questionApi.createQuestion(
            question.title,
            question.text
        );
        questionState.push(newQuestion);
        e.target.reset();
        e.preventDefault();
    },
    deleteQuestion: async (question) => {
        const deletedQuestion = await questionApi.deleteQuestion(question.id);
        questionState = questionState.filter((q) => q.id !== deletedQuestion.id);
    },
    upvoteQuestion: async (question) => {
        const upvotedQuestion = await questionApi.upvoteQuestion(question.id);
        const editedQuestion = questionState.find((q) => q.id === upvotedQuestion.id);
        editedQuestion.upvotes = upvotedQuestion.upvotes;
    }
  };
};

export { useQuestionState };
