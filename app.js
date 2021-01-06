const mainMenu = document.querySelector('.mobileMainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const mobilNavFirstSubElement = document.querySelector('#mobilNavFirstSub');
const mobilNavSecondSubElement = document.querySelector('#mobilNavSecondSub');
const mobilNavThirdSubElement = document.querySelector('#mobilNavThirdSub');




openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.transform = 'translateX(0)';
};

function close() {
    mainMenu.style.transform = 'translateX(100%)';
};

function mobilNavFirstSub() {
    if (mobilNavFirstSubElement.style.maxHeight === "200px") {
        mobilNavFirstSubElement.style.maxHeight = '0';
    } else {
        mobilNavFirstSubElement.style.maxHeight = '200px';
    }
    mobilNavSecondSubElement.style.maxHeight = '0';
    mobilNavThirdSubElement.style.maxHeight = '0';
};

function mobilNavSecondSub() {
    console.log(143);
    if (mobilNavSecondSubElement.style.maxHeight === "200px") {
        mobilNavSecondSubElement.style.maxHeight = '0';
    } else {
        mobilNavSecondSubElement.style.maxHeight = '200px';
    }
    mobilNavFirstSubElement.style.maxHeight = '0';
    mobilNavThirdSubElement.style.maxHeight = '0';
};

function mobilNavThirdSub() {
    if (mobilNavThirdSubElement.style.maxHeight === "200px") {
        mobilNavThirdSubElement.style.maxHeight = '0';
    } else {
        mobilNavThirdSubElement.style.maxHeight = '200px';
    }
    mobilNavFirstSubElement.style.maxHeight = '0';
    mobilNavSecondSubElement.style.maxHeight = '0';
};