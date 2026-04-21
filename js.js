const tg = window.Telegram.WebApp;
tg.expand();

let score = 0;
let power = 1; // Har bir tap uchun beriladigan ball

// 1. Telegram bazasidan ball va kuchni yuklab olish
tg.CloudStorage.getItems(['userScore', 'userPower'], (err, values) => {
    if (!err) {
        if (values.userScore) score = parseInt(values.userScore);
        if (values.userPower) power = parseInt(values.userPower);
        
        document.getElementById('coin').innerText = score;
        updateUpgradeButton(); 
    }
});

function tap(event) {
    score += power; 
    document.getElementById('coin').innerText = score;

    // Ballni saqlash
    tg.CloudStorage.setItem('userScore', score.toString());

    createScoreEffect(event);
}

function createScoreEffect(event) {
    const effect = document.createElement('div');
    effect.innerText = '+' + power;
    effect.className = 'score-animation';

    let x = (event.touches && event.touches[0]) ? event.touches[0].clientX : event.clientX;
    let y = (event.touches && event.touches[0]) ? event.touches[0].clientY : event.clientY;

    effect.style.left = x + 'px';
    effect.style.top = y + 'px';

    document.body.appendChild(effect);
    setTimeout(() => effect.remove(), 800);
}

// MANA SHU FUNKSIYA ENDI ISHLAYDI:
function upgrade() {
    let cost = power * 100; // Upgrade narxi

    if (score >= cost) {
        score -= cost; // Pulni yechib olish
        power += 1;    // Kuchni oshirish (endi +2, +3 beradi)
        
        document.getElementById('coin').innerText = score;
        
        // Yangi ma'lumotlarni Telegramga saqlash
        tg.CloudStorage.setItem('userScore', score.toString());
        tg.CloudStorage.setItem('userPower', power.toString());
        
        updateUpgradeButton();
        tg.showAlert("Muvaffaqiyatli! Endi har bir tap " + power + " coin beradi.");
    } else {
        tg.showAlert("Mablag' yetarli emas! Sizga yana " + (cost - score) + " coin kerak.");
    }
}

function updateUpgradeButton() {
    let cost = power * 100;
    document.getElementById('upgrade-btn').innerText = "UPGRADE (Narxi: " + cost + ")";
}
