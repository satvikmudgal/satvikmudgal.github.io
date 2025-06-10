document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const pronoun = form.pronoun.value;

    if (!name || !email || !message) {
      alert("Please fill out all required fields.");
      return;
    }

    console.log("Contact Form Submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Pronoun:", pronoun);
    console.log("Message:", message);

    alert(
      "Thank you, " + name + "! Your message has been submitted successfully."
    );
    form.reset();
  });
});
