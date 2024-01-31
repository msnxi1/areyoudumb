const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

let counter = 0;

yesBtn.addEventListener('click', () => {
    question.innerHTML = "HAHAHAH DUMBASS";
    counter = 0;
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';

    counter++;
    
    if (counter === 3) {
        question.innerHTML = "Bruh just accept it";
    } else if (counter === 6){
        question.innerHTML = "Ishi buddy its ok"
    } else if (counter === 9) {
        question.innerHTML = "Keep going I'm almost there"
    } else if (counter === 12) {
        question.innerHTML = "BTW the color is #C21807 ;)"
    } else if (counter === 15) {
        question.innerHTML = "Bruh I'm just gonna wait"
    }

})
