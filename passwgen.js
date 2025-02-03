const passwordInput =document.querySelector('.password-box input');
const copyIcon =document.querySelector('.password-box .copy-icon');
const rangeInput =document.querySelector('.range-box input');
const sliderNumber =document.querySelector('.range-box .slider-number');
const generateButton =document.querySelector('.generate-button');

let allchars="!#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

const generatePassword = ()=>{
    let newPassword="";

    for(let i=0;i<rangeInput.value;i++){
        let randomNumbers=Math.floor(Math.random()*allchars.length);
        newPassword+=allchars[randomNumbers];
    }
    passwordInput.value=newPassword;
    copyIcon.classList.replace("fa-clipboard","fa-copy");
};

rangeInput.addEventListener("input",()=>{
    sliderNumber.innerText=rangeInput.value;
    generatePassword();
});

copyIcon.addEventListener("click",()=>{
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.classList.replace("fa-copy","fa-clipboard");
});

generatePassword();
generateButton.addEventListener("click",generatePassword);