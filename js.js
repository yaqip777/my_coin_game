// 1. O'yinni boshlaganda saqlangan ballni yuklab olamiz
// Agar saqlangan ball bo'lmasa, 0 deb oladi
let score = localStorage.getItem('userScore') ? parseInt(localStorage.getItem('userScore')) : 0;

// Sahifa yuklanganda ekranda saqlangan ballni ko'rsatish
document.getElementById('coin').innerText = score;

function tap(event) {
    score++;
    
    // Ekranda yangilash
    document.getElementById('coin').innerText = score;

    // 2. Ballni brauzer xotirasiga (LocalStorage) saqlash
    localStorage.setItem('userScore', score);

    // Effekt chiqarish funksiyasi
    createScoreEffect(event);
}

function createScoreEffect(event) {
    const effect = document.createElement('div');
    effect.innerText = '+1';
    effect.className = 'score-animation';

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
