const form = document.querySelector("#contactForm");
const statusMessage = document.querySelector("#formStatus");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = data.get("name").trim();
  const email = data.get("email").trim();
  const company = data.get("company").trim();
  const message = data.get("message").trim();

  const subject = encodeURIComponent(`New sourcing inquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\n\nProject details:\n${message}`
  );

  window.location.href = `mailto:hello@completesourcing.com?subject=${subject}&body=${body}`;
  statusMessage.textContent = "Your email app should open with the inquiry ready to send.";
});
