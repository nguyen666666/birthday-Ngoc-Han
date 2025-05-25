const messageBox = document.getElementById("messageBox");
const messageText = document.getElementById("messageText");

const messages = {
  1: "Từ Nguyên: Tớ luôn nhớ khoảnh khắc đầu tiên mình nói chuyện – thật tự nhiên, thật dễ thương. Ngày đó, và cả bây giờ, cậu vẫn luôn dịu dàng như thế.",
  2: "Từ Nguyên: Có những ngày chẳng có lý do gì đặc biệt, nhưng chỉ cần nghĩ đến tên cậu, tớ đã thấy ấm áp lạ kỳ.",
  3: "Từ Nguyên: Nếu có điều ước, tớ ước mình có thể bên cậu trong những lúc cậu mỉm cười, và cả khi cậu buồn.",
  4: "Từ Nguyên (Lá thư cuối): Hân à, tớ biết có thể điều này đến bất ngờ, nhưng thật lòng, tớ thích cậu. Tớ không biết tương lai sẽ ra sao, nhưng hôm nay – ngày đặc biệt của cậu – tớ muốn cậu biết: có một người luôn dõi theo cậu, âm thầm, và chân thành. I Love You 3000 ❤️"
};

function openLetter(id) {
  messageText.textContent = messages[id];
  messageBox.classList.remove("hidden");
}

function closeMessage() {
  messageBox.classList.add("hidden");
}
