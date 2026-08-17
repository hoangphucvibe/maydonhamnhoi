const calcBtn = document.getElementById('calcBtn');
const nameInput = document.getElementById('nameInput');
const result = document.getElementById('result');

const traits = [
    "Độ nhảm: 100% - Thượng thừa không ai địch nổi!",
    "Độ lười: 99.9% - Thở thôi cũng thấy mệt.",
    "Độ thông minh: Âm vô cùng, nhưng được cái may mắn.",
    "Tương lai: Sắp trở thành tỷ phú... trong giấc mơ.",
    "Đặc điểm nhận dạng: Hay cười một mình như lập trình viên thiếu ngủ.",
    "Chưa đăng ký kênh tôi",
    "Chưa like và chưa subscribe"
];

calcBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if(!name) {
        result.innerText = "Chưa nhập tên mà đòi đo hả bạn trẻ? 🛑";
        return;
    }
    const randomTrait = traits[Math.floor(Math.random() * traits.length)];
    result.innerHTML = `Kết quả cho <b>${name}</b>:<br><span style="color: #ff4757;">${randomTrait}</span>`;
});