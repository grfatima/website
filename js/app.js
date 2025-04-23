const buttons = document.querySelectorAll(".button0");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Successful");
  });
});
