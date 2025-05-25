const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const room = document.getElementById("partyRoom");
const final = document.getElementById("final");
const cake = document.getElementById("cake");
const msg = document.querySelector(".msg");

openBtn.onclick = () => {
  intro.classList.add("hidden");
  room.classList.remove("hidden");

  setTimeout(() => {
    msg.textContent = "Lời chúc từ bạn bè: 🎈";
  }, 1000);

  setTimeout(() => {
    msg.textContent = "💬 'Chúc Hân tuổi mới thật nhiều niềm vui, luôn xinh đẹp và hạnh phúc nha!' - Một người bạn";
  }, 3000);

  setTimeout(() => {
    msg.textContent = "💬 'Cảm ơn vì đã đến bên mình' - Nguyên 💙";
  }, 6000);

  setTimeout(() => {
    msg.textContent = "Nhấn vào bánh kem để ước nhé!";
  }, 9000);
};

cake.onclick = () => {
  msg.textContent = "Ước đi... 🎁";
  setTimeout(() => {
    msg.textContent = "Thổi nến nào... 🕯️💨";
    cake.style.display = "none";
    setTimeout(() => {
      room.classList.add("hidden");
      final.classList.remove("hidden");
    }, 3000);
  }, 6000);
};
