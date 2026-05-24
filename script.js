const form = document.querySelector("#contactForm");
const statusMessage = document.querySelector("#formStatus");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  statusMessage.textContent = "Sending your inquiry...";

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(data).toString()
  })
    .then(() => {
      form.reset();
      statusMessage.textContent = "Thanks. Your inquiry was sent and saved.";
    })
    .catch(() => {
      statusMessage.textContent = "Something went wrong. Please email hello@completesourcing.com.";
    });
});
