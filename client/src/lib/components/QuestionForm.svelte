<script>
    import { useQuestionState } from "../states/questionState.svelte.js";
    let questionState = useQuestionState();
  </script>

<form onsubmit={questionState.addQestion} class="mx-auto w-full max-w-md space-y-4">
    <label class="label" for="title">Question</label>
    <input class="input" id="title" name="title" type="text" placeholder="Enter a new question" />
    <label class="label" for="text">Add question text</label>
    <textarea class="textarea" id="text" name="text"placeholder="Enter text of question"></textarea>
    <input class="w-full btn preset-filled-primary-500" type="submit" value="Add Question" />
  </form>