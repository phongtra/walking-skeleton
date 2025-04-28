<script>
    import * as courseApi from "$lib/apis/course-api.js";
  import QuestionForm from "$lib/components/QuestionForm.svelte";
  import QuestionList from "$lib/components/QuestionList.svelte";
    let { data } = $props();
    let course = $state({});
    
    const getCourse = async () => {
        course = await courseApi.readCourse(data.courseId);
    };

    $effect(() => {
        getCourse();
    });
</script>
<svelte:head>
  <title>{course.name}</title>
</svelte:head>
<h1>{course.name}</h1>

<QuestionList courseId={data.courseId} />

<QuestionForm courseId={data.courseId} />
