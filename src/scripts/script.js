const generateButton = document.querySelector('.generateButton');
const resetButton = document.querySelector('.resetButton');
const form = document.querySelector('.form');
const resultCntr = document.querySelector('.result')
const generatedSummary = document.querySelector('.summary');
const input = document.querySelectorAll('.input');
let answers = [];

// This forces the window to open at the top. Implemented to avoid form reset confusion because page is refreshed.
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function showSummaryCntr() {
    resultCntr.classList.remove('hide');
    resultCntr.classList.add('show');
};

function hideSummaryCntr() {
    resultCntr.classList.add('hide');
    resultCntr.classList.remove('show');
};

function validateFields() {
    for (i = 0; i < answers.length; ++i) {
        if (answers[i] == '') {
            console.log(answers);
            alert(
            "Ooops! Looks like you forgot a field. Please complete the for to get your summary."
            );
            // let answers = [];
            return false;
        } 
    }
    generateSummary();
};

function saveAnswer() {
    // Use a for each instead?
    const firstName = document.getElementById('firstname').value;
    const title = document.getElementById('title').value;
    const industry = document.getElementById('industry').value;
    const skill1 = document.getElementById('skill1').value;
    const skill2 = document.getElementById('skill2').value;
    const softskill1 = document.getElementById('softskill1').value;
    const softskill2 = document.getElementById('softskill2').value;
    const hobby = document.getElementById('hobby').value;
    const like = document.getElementById('like').value;
    answers.push(firstName, title, industry, skill1, skill2, softskill1, softskill2, hobby, like);
    validateFields();
};


function generateSummary(){
    const html =
        `<p>My name is ${answers[0]} and I’m an experienced ${answers[1]} in the ${answers[2]} industry.</p>
        <p>I specialize in ${answers[3]} and ${answers[4]}. My co-workers would say I’m ${answers[5]} and ${answers[6]}.</p>
        <p>In my spare time, I enjoy ${answers[7]} and ${answers[8]}.</p>`
    generatedSummary.innerHTML = html;
    showSummaryCntr();
};

function resetAll() {
    location.reload(true);
};


generateButton.addEventListener('click', saveAnswer);
resetButton.addEventListener('click', resetAll);
