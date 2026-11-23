/* ===== EDIT HERE: your WhatsApp number (country code, no + or spaces) and business name ===== */
const WHATSAPP_NUMBER = "234XXXXXXXXXX";
const BUSINESS_NAME = "[BUSINESS NAME]";

const MESSAGES = {
  general: "I would like to request a quote for my event.",
  decor: "I would like a quote for event decoration.",
  cake: "I would like to order a custom cake.",
  food: "I would like a quote for event food and confectionery.",
  wedding: "I am planning a wedding and would like a quote for décor, cake, and confectionery.",
  birthday: "I am planning a birthday party and would like a quote.",
  corporate: "I am planning a corporate event/conference and would like a quote."
};

document.querySelectorAll("[data-wa]").forEach(a => {
  const msg = `Hello ${BUSINESS_NAME}, ${MESSAGES[a.dataset.wa] || MESSAGES.general}`;
  a.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  a.target = "_blank"; a.rel = "noopener";
});

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
