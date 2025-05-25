const messageBox = document.getElementById("messageBox");
const messageText = document.getElementById("messageText");

const messages = {
  1: "Từ Anh: Anh luôn nhớ khoảnh khắc đầu tiên chúng ta nói chuyện – em còn chả thèm rep, và rep chậm điên. Nhưng không sao em vẫn là cô gái anh thật sự chú ý đến.",
  2: "Từ Anh: Có những ngày không lý do đặc biệt, nhưng chỉ cần nghĩ đến em, Anh đã thấy ấm áp lạ kỳ(câu này anh bịa copy trên mạng á).",
  3: "Từ Anh: Nếu có điều ước, Anh ước mình có thể bên em trong những lúc em mỉm cười, và cả khi em buồn, này real nha không xạo.",
  4: "Từ Anh (Lá thư cuối): Em à, Anh biết điều này có thể đến bất ngờ, nhưng thật lòng, Anh thích em. Anh không biết tương lai ra sao, nhưng hôm nay – ngày đặc biệt của em – Anh muốn em biết: có một người luôn dõi theo em, âm thầm và chân thành. I Love You 3000 ❤️"
};

function openLetter(id) {
  messageText.textContent = messages[id];
  messageBox.classList.remove("hidden");
}

function closeMessage() {
  messageBox.classList.add("hidden");
}
