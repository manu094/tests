let newColor = 'hsl(0, 20%, 90%)';
let element1 = document.getElementById('visual-catch');
let element2 = document.getElementById('fpagetitle');
let element1Triggered = false;
let idle = true;
let animationArray = ['&#60#&#62',
                    '&#60#&#62_',
                    '&#60#&#62_',
                    '&#60#&#62',
                    '&#60#&#62',
                    '&#60#&#62_',
                    '&#60#&#62_',
                    '&#60#&#62',
                    '&#60#&#62',
                    '&#60#&#62_',
                    '&#60#_',
                    '&#60_',
                    '_',
                    'C_',
                    'Cr_',
                    'Cre_',
                    'Crea_',
                    'Creat_',
                    'Create_',
                    'Create._',
                    'Create._',
                    'Create.',
                    'Create.',
                    'Create._',
                    'Create._',
                    'Create.',

                    // '&#60C&#62',
                    // '&#60Cr&#62',
                    // '&#60Cre&#62',
                    // '&#60Crea&#62',
                    // '&#60Creat&#62',
                    // '&#60Create&#62',
                    // '&#60Create.&#62',
                    // '&#60Create.&#62'
                    ];

let interval = 200;

let animate = () => {
    element1.style.color = newColor;
    let counter = 1
    let replace = () => {
        element1.innerHTML = animationArray[counter];
        counter++;
        if (counter === animationArray.length) {
            clearInterval(pushFrame);
        }
    }
    const pushFrame = setInterval(replace, interval);
    element1Triggered = true;
}

let unanimate = () => {
    element1.style.color = '';
    let counter = animationArray.length - 1;
    let replace = () => {
        counter--;
        element1.innerHTML = animationArray[counter];
        if (counter === 0) {
            clearInterval(pushFrame);
        }
    }
    const pushFrame = setInterval(replace, interval);
    element1Triggered = false;
}

let titleInteract = () => {
    if (idle) {
        if (element1Triggered) {
            unanimate();
        } else {
            animate()
        }
    }
}

window.addEventListener('load', titleInteract);