<script>
   
    import { useQuestionState } from "../states/questionState.svelte.js";
    let questionState = useQuestionState();
    let {question} = $props()
    console.log(question)
</script>

<li>
    <h1>{question.title}</h1>
    <p>{question.description}</p>
    <button onclick={() => questionState.deleteQuestion(question)}>Delete</button>
    <button onclick={() => questionState.upvoteQuestion(question)}>Upvote</button>
    <p>Upvotes: {question.vote}</p>
  </li>