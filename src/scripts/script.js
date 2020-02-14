const generateButton = document.querySelector('.generateButton');
const resetButton = document.querySelector('.resetButton');
const form = document.getElementById('form');
const resultCntr = document.querySelector('.result');
const generatedSummary = document.querySelector('.summary');
const answers = [];

// This forces the window to open at the top. Implemented to avoid form reset confusion because page is refreshed.
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

function showSummaryCntr() {
    resultCntr.classList.remove('hide');
    resultCntr.classList.add('show');
};

function hideSummaryCntr() {
    resultCntr.classList.add('hide');
    resultCntr.classList.remove('show');
};

function saveAnswer(event) {
    // Use a for each instead?
    console.log('Event has submitted');
    const firstName = document.getElementById('firstname').value;
    const title = document.getElementById('title').value;
    const industry = document.getElementById('industry').value;
    const skill1 = document.getElementById('skill1').value;
    const skill2 = document.getElementById('skill2').value;
    const softskill1 = document.getElementById('softskill1').value;
    const softskill2 = document.getElementById('softskill2').value;
    const hobby = document.getElementById('hobby').value;
    const like = document.getElementById('like').value;
    event.preventDefault();
    answers.push(firstName, title, industry, skill1, skill2, softskill1, softskill2, hobby, like);
    generateSummary();
};

function generateSummary(){
    const html =
    `<p>My name is ${answers[0]} and I’m an experienced ${answers[1]} in the ${answers[2]} industry.</p>
    <p>I specialize in ${answers[3]} and ${answers[4]}. My co-workers would say I’m ${answers[5]} and ${answers[6]}.</p>
    <p>In my spare time, I enjoy ${answers[7]} and ${answers[8]}.</p>`
    generatedSummary.innerHTML = html;
    showSummaryCntr();
    window.scrollTo(0, document.body.scrollHeight);
};

function resetAll() {
    location.reload(true);
};

// generateButton.addEventListener('submit', saveAnswer);
form.addEventListener('submit', saveAnswer);
resetButton.addEventListener('click', resetAll);
