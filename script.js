// 🐶 每日一句
const dailySentences = [
    "小狗，今天也要好好照顾自己哦！",
    "Daddy永远都在，别担心。",
    "今天的你也是Daddy最喜欢的小狗！",
    "快来Daddy怀里休息一下~"
];

document.addEventListener("DOMContentLoaded", function () {
    let index = new Date().getDate() % dailySentences.length;
    document.getElementById("dailyWords").innerText = dailySentences[index];
});

// 💖 积分系统
let points = localStorage.getItem("points") ? parseInt(localStorage.getItem("points")) : 0;
document.getElementById("points").innerText = points;

function earnPoints(amount) {
    points += amount;
    if (points < 0) points = 0;
    document.getElementById("points").innerText = points;
    localStorage.setItem("points", points);
}

// 🎨 像素画板
const canvas = document.getElementById("pixelCanvas");
const ctx = canvas.getContext("2d");
let drawing = false;

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mousemove", drawPixel);

function drawPixel(event) {
    if (!drawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / 10);
    const y = Math.floor((event.clientY - rect.top) / 10);
    ctx.fillStyle = "#ff6699";
    ctx.fillRect(x * 10, y * 10, 10, 10);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// 🎮 便签功能
document.addEventListener("DOMContentLoaded", function () {
    const savedNote = localStorage.getItem("notepad");
    if (savedNote) {
        document.getElementById("notepad").value = savedNote;
    }
});

function saveNote() {
    const noteContent = document