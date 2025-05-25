const openBtn = document.getElementById("openBtn");
const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const cakeImg = document.getElementById("cakeImg");
const messages = document.getElementById("messages");
const wish = document.getElementById("wish");
const end = document.getElementById("end");

openBtn.addEventListener("click", () => {
  scene1.classList.add("hidden");
  scene2.classList.remove("hidden");

  // Hiện lời chúc sau 2 giây
  setTimeout(() => {
    messages.classList.remove("hidden");
  }, 2000);
});

cakeImg.addEventListener("click", () => {
  wish.classList.remove("hidden");

  setTimeout(() => {
    wish.classList.add("hidden");
    end.classList.remove("hidden");
  }, 6000);
});
