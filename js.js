const tg = window.Telegram.WebApp;
tg.expand();

let score = 0;
let power = 1; // Har bir tap uchun beriladigan ball

// Telegramdan ma'lumotlarni yuklash
tg.CloudStorage.getItems(['userScore', 'userPower'], (err, values) => {
    if (!err) {
        if (values.userScore) score = parseInt(values.userScore);
        if (values.userPower) power = parseInt(values.userPower);
        
        document.getElementById('coin').innerText = score;
        updateUpgradeButton(); // Tugma matnini yangilash
    }
});

function tap(event) {
    score += power; // Endi +1 emas, power qancha bo'lsa shuncha qo'shadi
    document.getElementById('coin').innerText = score;

    tg.CloudStorage.setItem('userScore', score.toString());
    createScoreEffect(event);
}

function createScoreEffect(event) {
    const effect = document.createElement('div');
    effect.innerText = '+' + power; // Necha ball qo'shilayotganini ko'rsatadi
    effect.className = 'score-animation';

    let x = (event.touches && event.touches[0]) ? event.touches[0].clientX : event.clientX;
    let y = (event.touches && event.touches[0]) ? event.touches[0].clientY : event.clientY;

    effect.style.left = x + 'px';
    effect.style.top = y + 'px';

    document.body.appendChild(effect);
    setTimeout(() => effect.remove(), 800);
}

function upgrade() {
    let cost = power * 100; // Upgrade narxi: 100, 200, 300...

    if (score >= cost) {
        score -= cost; // Pulni yechib olish
        power += 1;    // Kuchni oshirish
        
        // Yangi ma'lumotlarni saqlash
        document.getElementById('coin').innerText = score;
        tg.CloudStorage.setItem('userScore', score.toString());
        tg.CloudStorage.setItem('userPower', power.toString());
        
        updateUpgradeButton();
        tg.showAlert("Tabriklaymiz! Endi har bir tap " + power + " ball beradi.");
    } else {
        tg.showAlert("Mablag' yetarli emas! Sizga yana " + (cost - score) + " coin kerak.");
    }
}

function updateUpgradeButton() {
    let cost = power * 100;
    document.getElementById('upgrade-btn').innerText = "UPGRADE (Narxi: " + cost + ")";
}
