// Mobile menu
const burger = document.querySelector(".burger"), nav = document.querySelector(".nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
document.querySelectorAll("#menu a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open"); burger.setAttribute("aria-expanded", false);
}));

// Gallery filter
const btns = document.querySelectorAll(".filters button");
btns.forEach(b => b.addEventListener("click", () => {
  btns.forEach(x => x.classList.toggle("on", x === b));
  document.querySelectorAll(".g").forEach(g => g.hidden = b.dataset.f !== "all" && g.dataset.c !== b.dataset.f);
}));

// Fade-in on scroll
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll(".sec .card, .sec h2, .steps li").forEach(el => { el.classList.add("fade"); io.observe(el); });
}
document.getElementById("yr").textContent = new Date().getFullYear();
