const textArray = ["Yes you do", "It's okay it won't bite", "Maybe pick the one on the left?", "Nope still on the right...", "Stop pushing my buttons ;-;", "Is this really want you want?!", "Think of the children", "Why would you do such a thing", "Please press the yes", "I'm getting angry", "Fine, if that's what you want", "I'm gone next time"];
let count = 0;

const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    document.getElementById("initialBox").style.visibility = "hidden";
    document.getElementById("finalBox").style.visibility = "visible";
});

noBtn.addEventListener('click', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    
    if(textArray[count] == null)
    {
        document.querySelector('.no-btn').style.display = "none";
    }
    noBtn.innerHTML = textArray[count];
    noBtn.style.width = "fit-content";
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
    yesBtn.style.width = (yesBtn.offsetWidth + 25) + 'px';
    yesBtn.style.height = (yesBtn.offsetHeight + 25) + 'px';
    count++;
});
