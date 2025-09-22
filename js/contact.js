document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const feedback = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };
  localStorage.setItem("feedback", JSON.stringify(feedback));
  document.getElementById("confirmation").textContent = "Thank you! Your message has been saved.";
  e.target.reset();
});


document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});
