let score = 0;

function tap(event) {
    score++;
    document.getElementById('coin').innerText = score;

    // Effekt chiqarish funksiyasi
    createScoreEffect(event);
}

function createScoreEffect(event) {
    const effect = document.createElement('div');
    effect.innerText = '+1';
    effect.className = 'score-animation';

    // Bosilgan joyni aniqlash (Telefon va Kompyuter uchun)
    let x, y;
    if (event.touches && event.touches.length > 0) {
        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
    } else {
        x = event.clientX;
        y = event.clientY;
    }

    effect.style.left = x + 'px';
    effect.style.top = y + 'px';

    document.body.appendChild(effect);

    setTimeout(() => {
        effect.remove();
    }, 800);
}

function upgrade() {
    alert("Tez orada yangi funksiyalar qo'shiladi!");
}
