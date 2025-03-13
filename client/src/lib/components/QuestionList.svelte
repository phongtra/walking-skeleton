<script>
    import QuestionItem from "./QuestionItem.svelte";
  
    import { useQuestionState } from "../states/questionState.svelte.js";
    let questionState = useQuestionState();
    </script>
  
  <ul>
      {#each questionState.questions as question}
        <QuestionItem {question}  />
      {/each}
    </ul>
    