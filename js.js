let score = 0;

function tap(event) {
    score++;
    document.getElementById('coin').innerText = score;

    // Effekt yaratish
    createScoreEffect(event);
}

function createScoreEffect(event) {
    const effect = document.createElement('div');
    effect.innerText = '+1';
    effect.className = 'score-animation';

    // Sichqoncha yoki barmoq bosilgan joyni aniqlash
    const x = event.clientX || event.touches[0].clientX;
    const y = event.clientY || event.touches[0].clientY;

    effect.style.left = x + 'px';
    effect.style.top = y + 'px';

    document.body.appendChild(effect);

    // 0.8 soniyadan keyin elementni o'chirib tashlash
    setTimeout(() => {
        effect.remove();
    }, 800);
}
