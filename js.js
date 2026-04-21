function tap(event) {
    coin += power;
    updateCoin();

    // Effekt yaratish
    createClickEffect(event);
}

function createClickEffect(event) {
    const effect = document.createElement("div");
    effect.classList.add("click-animation");
    effect.innerText = "+" + power;

    // Sichqoncha yoki barmoq bosilgan joyni aniqlash
    // Agar event bo'lsa (onclick="tap(event)" qilsangiz yaxshiroq)
    let x, y;
    if (event && event.clientX) {
        x = event.clientX;
        y = event.clientY;
    } else {
        // Agar event berilmasa, ekranning o'rtasiga chiqarish
        x = window.innerWidth / 2;
        y = window.innerHeight / 2;
    }

    effect.style.left = x + "px";
    effect.style.top = y + "px";

    document.body.appendChild(effect);

    // 0.8 soniyadan keyin elementni o'chirib tashlash (xotirani to'ldirmaslik uchun)
    setTimeout(() => {
        effect.remove();
    }, 800);
}
