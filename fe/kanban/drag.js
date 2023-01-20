const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");

draggables.forEach((task) => {
	task.addEventListener("dragstart", () => {
		task.classList.add("is-dragging");
	});
	task.addEventListener("dragend", () => {
		task.classList.remove("is-dragging");
	});
});

droppables.forEach((zone) => {
	zone.addEventListener("dragover", (element) => {
		element.preventDefault();

		const bottomTask = insertAboveTask(zone, element.clientY);
		const curTask = document.querySelector(".is-dragging");

		if (!bottomTask) {
			zone.appendChild(curTask);
		} else {
			zone.insertBefore(curTask, bottomTask);
		}
	});
});

const insertAboveTask = (zone, mouseY) => {
	const elements = zone.querySelectorAll(".task:not(.is-dragging)");

	let closestTask = null;
	let closestOffset = Number.NEGATIVE_INFINITY;

	elements.forEach((task) => {
		const { top } = task.getBoundingClientRect();

		const offset = mouseY - top;

		if (offset < 0 && offset > closestOffset) {
			closestOffset = offset;
			closestTask = task;
		}
	});

	return closestTask;
};
