// Ambil elemen butang dan mesej dari HTML
const loveBtn = document.getElementById("loveBtn");
const message = document.getElementById("message");

// Event Listener: Bila butang ditekan
loveBtn.addEventListener("click", function() {
    message.textContent = "I Love You ❤"; // Papar mesej
});