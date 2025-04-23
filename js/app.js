const buttons = document.querySelectorAll(".button0");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Successful");
  });
});

btn.addEventListener("click", () => {
  const email = input.value;

  if (
    !email.includes("@") ||
    !email.includes(".") ||
    email.indexOf("@") === 0 ||
    email.endsWith("@") ||
    email.endsWith(".")
  ) {
    alert("Zehmet olmasa duzgun e-mail daxil edin!");
    input.focus();
    input.value = "";
  } else {
    alert("E-mail qebul olundu: " + email);
    input.value = "";
    input.focus();
  }
});
