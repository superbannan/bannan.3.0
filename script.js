let money = 0;
let perClick = 1;
let inventory = 0;
let upgradeCost = 10;

const bananaTypes = [
    'Regular Banana',
    'Golden Banana',
    'Rare Banana',
    'Legendary Banana'
];

const moneyDisplay = document.getElementById('money');
const perClickDisplay = document.getElementById('perClick');
const inventoryDisplay = document.getElementById('inventory');
const upgradeBtn = document.getElementById('upgradeBtn');
const upgradeCostDisplay = document.getElementById('upgradeCost');
const sellBtn = document.getElementById('sellBtn');
const banana = document.getElementById('banana');
const message = document.getElementById('message');

// Click handler
banana.addEventListener('click', () => {
    money += perClick;
    updateDisplay();
});

// Upgrade handler
upgradeBtn.addEventListener('click', () => {
    if (money >= upgradeCost) {
        money -= upgradeCost;
        perClick *= 2;
        upgradeCost *= 4;
        updateDisplay();
        showMessage('Click upgraded!');
    } else {
        showMessage('Not enough money for upgrade!');
    }
});

// Sell handler
sellBtn.addEventListener('click', () => {
    if (inventory > 0) {
        const price = Math.floor(Math.random() * 100000) + 1;
        money += price;
        inventory--;
        updateDisplay();
        showMessage(`Sold a banana for $${price}!`);
    } else {
        showMessage('No bananas to sell!');
    }
});

// Random banana generator
setInterval(() => {
    inventory++;
    updateDisplay();
    const randomBanana = bananaTypes[Math.floor(Math.random() * bananaTypes.length)];
    showMessage(`You got a ${randomBanana}!`);
}, 120000); // 2 minutes in milliseconds

function updateDisplay() {
    moneyDisplay.textContent = money;
    perClickDisplay.textContent = perClick;
    inventoryDisplay.textContent = `${inventory} bananas`;
    upgradeCostDisplay.textContent = upgradeCost;
    upgradeBtn.disabled = money < upgradeCost;
}

function showMessage(text) {
    message.textContent = text;
    setTimeout(() => {
        message.textContent = '';
    }, 3000);
}

// Initial display update
updateDisplay();
