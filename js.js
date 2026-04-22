// O'yin yuklanganda saqlangan ballni olish, agar bo'lmasa 0 deb olish
let score = localStorage.getItem('myScore') ? parseInt(localStorage.getItem('myScore')) : 0;

// Sahifa yuklanganda ballni ekranda ko'rsatish
document.getElementById('coin').innerText = score;

function tap(event) {
    score++;
    
    // Yangi ballni ekranga chiqarish
    document.getElementById('coin').innerText = score;
    
    // Ballni xotiraga (localStorage) saqlash
    localStorage.setItem('myScore', score);

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
