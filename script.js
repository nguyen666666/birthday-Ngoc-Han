function openDoor() {
  document.getElementById("door-scene").style.display = "none";
  document.getElementById("birthday-room").style.display = "block";
}

function showMessages() {
  let messages = [
    "🎉 Chúc Ngọc Hân tuổi mới nhiều niềm vui và sức khỏe!",
    "💖 Mong mọi ước mơ của bạn đều trở thành hiện thực!",
    "🎈 Chúc bạn luôn cười thật tươi và đáng yêu như bây giờ!",
    "❤️ Tôi là Nguyên... cảm ơn Hân đã là điều đặc biệt trong cuộc sống của tôi!"
  ];

  let i = 0;
  let msgDiv = document.getElementById("messages");
  msgDiv.innerHTML = "";
  
  let interval = setInterval(() => {
    if (i < messages.length) {
      let p = document.createElement("p");
      p.textContent = messages[i++];
      msgDiv.appendChild(p);
    } else {
      clearInterval(interval);
      setTimeout(() => {
        document.getElementById("wish").style.display = "block";
        let wishText = document.getElementById("wishText");
        wishText.textContent = "Ước...";
        setTimeout(() => {
          wishText.textContent = "Thôi!";
          setTimeout(() => {
            wishText.innerHTML = "<strong style='font-size: 24px;'>I Love You ❤️</strong>";
          }, 1000);
        }, 6000);
      }, 1000);
    }
  }, 1500);
}
