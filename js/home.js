const slogans = [
  "Eat Fresh, Live Better",
  "Mindful Moves for a Happy Soul",
  "Fuel Your Body with Nature"
];
let i = 0;
setInterval(() => {
  i = (i + 1) % slogans.length;
  document.getElementById("hero-quote").textContent = slogans[i];
}, 3000);


const tips = [
  "Drink 8 glasses of water today.",
  "Take a 10-min mindful walk.",
  "Add leafy greens to your meals.",
  "Stretch for 5 mins every hour.",
  "Replace soda with herbal tea."
];
document.getElementById("daily-tip").textContent =
  tips[new Date().getDate() % tips.length];

document.getElementById("newsletter").addEventListener("submit", e => {
  e.preventDefault();
  const email = e.target.querySelector("input").value;
  localStorage.setItem("newsletterEmail", email);
  alert("🎉 Subscribed successfully!");
});
