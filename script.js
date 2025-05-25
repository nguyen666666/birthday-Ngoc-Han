const messageBox = document.getElementById("messageBox");
const messageText = document.getElementById("messageText");

const messages = {
  1: "Từ Anh: Anh luôn nhớ khoảnh khắc đầu tiên chúng ta nói chuyện – em còn chả thèm rep, và rep chậm điên. Nhưng không sao em vẫn là cô gái anh thật sự chú ý đến.",
  2: "Từ Anh: Có những ngày không lý do đặc biệt, nhưng chỉ cần nghĩ đến em, Anh đã thấy ấm áp lạ kỳ(câu này anh bịa copy trên mạng á).",
  3: "Từ Anh: Nếu có điều ước, Anh ước mình có thể bên em trong những lúc em mỉm cười, và cả khi em buồn, này real nha không xạo.",
  4: "Từ Anh (Lá thư cuối): Em à, anh nghĩ anh thật sự thích em lắm, tuy dạo gần đây ai cũng bận không thể dành nhiều thời gian cho nhau tuy vậy anh muốn em biết là em là duy nhất, số 1 trong mắt anh kkk và cuối cùng là anh chúc em sinh nhật vui vẻ, ngủ mơ được ăn 10 cái bánh kem hải sản super max, và mong em tuổi mới nếu thức khuya thì lùn đi 6cm, thế nhá baby"
};

function openLetter(id) {
  messageText.textContent = messages[id];
  messageBox.classList.remove("hidden");
}

function closeMessage() {
  messageBox.classList.add("hidden");
}
