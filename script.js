const facts = ['I am an EMT', 'I am a Scorpio', 'I was once modeled for Walmart advertising as a baby', 'I play League of Legends', 'I have never left the US'];

const randomFactP = document.getElementsByClassName('randomFact')[0];
const btnElement = document.getElementsByTagName('button')[0];

btnElement.addEventListener('click', () => {
    randomFactP.textContent = facts[Math.floor(Math.random()*facts.length)];
});



