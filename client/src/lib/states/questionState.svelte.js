import { browser } from "$app/environment";
let initialQuestions = [];

const QUESTIONS = "questions";
if (browser && localStorage.hasOwnProperty(QUESTIONS)) {
    initialQuestions = JSON.parse(localStorage.getItem(QUESTIONS));
}
let questionState = $state(initialQuestions);

const useQuestionState = () => {
  return {
    get questions() {
      return questionState;
    },
    addQestion: (e) => {
        const question = Object.fromEntries(new FormData(e.target));
        console.log(question)
        question.id = crypto.randomUUID();
        question.vote = 0
        questionState.push(question);
        localStorage.setItem(QUESTIONS, JSON.stringify(questionState))
        e.target.reset();
        e.preventDefault();
    },
    deleteQuestion: (question) => {
        questionState = questionState.filter((q) => q.id !== question.id);
        localStorage.setItem(QUESTIONS, JSON.stringify(questionState))
    },
    upvoteQuestion: (question) => {
        question.vote += 1
        localStorage.setItem(QUESTIONS, JSON.stringify(questionState))
    }
  };
};

export { useQuestionState };
