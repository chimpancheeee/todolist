const submit = document.getElementById("submit")
const username = document.getElementById("name");
const username_KEY = "username"
const hidden1Elements = document.querySelectorAll(".hidden_1");
const hidden2Element = document.querySelector(".hidden_2");

function handleSubmit(event) {
    event.preventDefault();
    const userName = username.value;
    localStorage.setItem(username_KEY, userName);
    hidden2Element.textContent = `Hello, ${username.value}`;
    hidden1Elements.forEach((el) => el.classList.add("hidden"))
    hidden2Element.classList.remove("hidden");
}

const savedUserName = localStorage.getItem(username_KEY);

if (savedUserName === null) {
    hidden1Elements.forEach((el)=> el.classList.remove("hidden"));
    submit.addEventListener("click", handleSubmit);
}else {
    hidden1Elements.forEach((el)=> el.classList.add("hidden"));
    hidden2Element.textContent = `Hello, ${savedUserName}`;
    hidden2Element.classList.remove("hidden");
}