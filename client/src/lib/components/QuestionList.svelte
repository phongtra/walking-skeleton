<script>
    import QuestionItem from "./QuestionItem.svelte";
  
    import { useQuestionState } from "../states/questionState.svelte.js";
    let { courseId } = $props();
    let questionState = useQuestionState();
    $effect(() => {
        questionState.getQuestions(courseId);
    });
    </script>
  
  <ul>
      {#each questionState.questions as question}
        {#if question.title}
       <QuestionItem courseId={courseId} {question}  />
       {:else}
       <div />
        {/if}
      {/each}
    </ul>
    