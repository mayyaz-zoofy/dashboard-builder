export const conditionalPriorityRendering = (current, priority) => {
    if (priority) {
        return priority === current;
    }
    return current === 1;
}