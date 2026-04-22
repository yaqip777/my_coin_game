// 1. Ball va tap kuchini xotiradan olish
let score = localStorage.getItem('myScore') ? parseInt(localStorage.getItem('myScore')) : 0;
let tapValue = localStorage.getItem('tapValue') ? parseInt(localStorage.getItem('tapValue')) : 1;
let upgradeCost = 100;

// 2. Sahifa yuklanganda ballni ekranda ko'rsatish
document.getElementById('coin').innerText = score;

function tap(event) {
    score += tapValue; 
    document.getElementById('coin').innerText = score;
    localStorage.setItem('myScore', score); 
    createScoreEffect(event);
}

function createScoreEffect(event) {
    const effect = document.createElement('div');
    effect.innerText = '+' + tapValue;
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

    setTimeout(() => { effect.remove(); }, 800);
}

// 3. Upgrade tugmasi bosilganda ishlaydigan yangi funksiya
function upgrade() {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        tapValue += 1; // Har bosganda beriladigan ballni oshirish
        
        localStorage.setItem('myScore', score);
        localStorage.setItem('tapValue', tapValue);
        
        document.getElementById('coin').innerText = score;
        alert("Tabriklaymiz! Endi har bir bosish: +" + tapValue);
    } else {
        alert("Mablag' yetarli emas! Sizga 100 ball kerak.");
    }
}
