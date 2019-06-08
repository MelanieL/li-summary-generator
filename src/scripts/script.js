const generateButton = document.querySelector('.generateButton');
const answers = [];

function saveAnswer(){
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
    console.log(answers);
};

function generateSummary(){

};

generateButton.addEventListener('click', saveAnswer);