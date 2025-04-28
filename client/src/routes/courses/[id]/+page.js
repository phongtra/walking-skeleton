export function load({ params }) {
    const { id } = params;
    return {
        courseId: id,
    };
}