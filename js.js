// Telegram Web App API ni ishga tushiramiz
const tg = window.Telegram.WebApp;
tg.expand(); // O'yinni to'liq ekranga yoyish

let score = 0;

// 1. Telegram bazasidan ballni yuklab olish
tg.CloudStorage.getItem('userScore', (err, value) => {
    if (!err && value) {
        score = parseInt(value);
        document.getElementById('coin').innerText = score;
    }
});

function tap(event) {
    score++;
    document.getElementById('coin').innerText = score;

    // 2. Ballni Telegram CloudStorage-ga saqlash
    tg.CloudStorage.setItem('userScore', score.toString());

    createScoreEffect(event);
}

function createScoreEffect(event) {
    const effect = document.createElement('div');
    effect.innerText = '+1';
    effect.className = 'score-animation';

    let x = (event.touches && event.touches[0]) ? event.touches[0].clientX : event.clientX;
    let y = (event.touches && event.touches[0]) ? event.touches[0].clientY : event.clientY;

    effect.style.left = x + 'px';
    effect.style.top = y + 'px';

    document.body.appendChild(effect);
    setTimeout(() => effect.remove(), 800);
}

function upgrade() {
    tg.showAlert("Upgrade tizimi tez orada ishga tushadi! Hozircha ball yig'ishda davom eting.");
}
