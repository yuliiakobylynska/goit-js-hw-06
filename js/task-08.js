
const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", checkSubmit);

function checkSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all fields");
  }

  const result = { email: email.value, password: password.value };
  console.log(result);
  event.currentTarget.reset();
}
