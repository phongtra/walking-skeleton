<script>
    import { useQuestionState } from "../states/questionState.svelte.js";
    let questionState = useQuestionState();
  </script>

<form onsubmit={questionState.addQestion}>
    <label for="title">Question</label>
    <input id="title" name="title" type="text" placeholder="Enter a new question" />
    <label for="text">Add question text</label>
    <textarea id="text" name="text"placeholder="Enter text of question"></textarea>
    <input type="submit" value="Add Question" />
  </form>