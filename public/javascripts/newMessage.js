document.getElementById("newMessageText").addEventListener("keydown", (e) => {
	if (e.key === "Enter" && !e.shiftKey) {
		e.preventDefault();
		e.target.form.requestSubmit();
	}
});
