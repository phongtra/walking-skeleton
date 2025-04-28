<script>
    import { useCourseState } from "$lib/states/courseState.svelte";
    let courseState = useCourseState();
    $effect(() => {
        courseState.getCourses()
    })
</script>
<svelte:head>
  <title>Courses</title>
</svelte:head>
<h1>Courses</h1>
<ul>
    {#each courseState.courses as course}
        {#if course.name}
            <li>
                <a href={`/courses/${course.id}`}>{course.name}</a>
            </li>
        {:else}
            <div />
        {/if}
    {/each}
</ul>

<form onsubmit={courseState.addCourse} class="mx-auto w-full max-w-md space-y-4">
    <label class="label" for="name">Name</label>
    <input class="input" id="name" name="name" type="text" placeholder="Enter a new course" />
    <input class="w-full btn preset-filled-primary-500" type="submit" value="Add course" />
  </form>