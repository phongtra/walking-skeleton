<script>
   
    import { useQuestionState } from "../states/questionState.svelte.js";
    let questionState = useQuestionState();
    let {question, courseId} = $props()
    console.log(courseId)
</script>

<li>
    <h1>{question.title}</h1>
    <p>{question.text}</p>
    <button onclick={() => questionState.deleteQuestion(courseId, question)}>Delete</button>
    <button onclick={() => questionState.upvoteQuestion(courseId, question)}>Upvote</button>
    <p>Upvotes: {question.upvotes}</p>
  </li>