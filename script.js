const facts = ['I am an EMT', 'I am a Scorpio', 'I was once modeled for Walmart advertising as a baby', 'I play League of Legends', 'I have never left the US'];
let hexColor = '';
const neonBackground = 'images/gif/background.gif'
const randomFactP = document.getElementsByClassName('randomFact')[0];
const buttonFact = document.getElementsByTagName('button')[0];
const btnColorChange = document.getElementById('random-background');
const btnResetBackground = document.getElementsByTagName('button')[2];

buttonFact.addEventListener('click', () => {
    randomFactP.textContent = facts[Math.floor(Math.random()*facts.length)];
});

const randomHexColor = () => {
    hexColor = '#';
    for (let i = 0; i < 6; i++) {
     const hexVal = 'abcdef0123456789';
     const hexChar = hexVal.charAt(Math.floor(Math.random() * 16));
    let randomHex = hexChar;
     hexColor += randomHex;
 }
 return hexColor;
}

btnColorChange.addEventListener('click', () => {
    document.documentElement.style.removeProperty('background-image');
    document.documentElement.style.background = randomHexColor();
});

btnResetBackground.addEventListener('click', () => {
    document.documentElement.style.background = `url(${neonBackground})`;
    document.documentElement.style.backgroundSize = 'cover';
    document.documentElement.style.backgroundAttachment = 'fixed';
});