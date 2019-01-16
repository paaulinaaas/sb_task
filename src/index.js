import style from './scss/style.scss';

const inputs = document.querySelectorAll('.input');
const buttons = document.querySelectorAll('.btn');

// overview of all forms that are available
const forms = {
    signup: 'signup',
    login: 'login'
};
let activeForm = forms.signup; // default active is signup;

function initialize() {
    console.log('initialized!');
    document.getElementById('signupSwitch').addEventListener('click', switchToSignupForm);
    document.getElementById('loginSwitch').addEventListener('click', switchToLoginForm);

    document.getElementById('signupSubmit').addEventListener('click', validateSignupForm);
    document.getElementById('loginSubmit').addEventListener('click', validateLoginForm);
}

initialize();

function switchToSignupForm() {
    if (activeForm === forms.signup) {
        return; // do nothing when the active form is already 'signup'
    }

    activeForm = forms.signup;
    console.log('should switch to signup form');
    console.log('activeForm', activeForm);
}

function switchToLoginForm() {
    if (activeForm === forms.login) {
        return; // do nothing when the active form is already 'login'
    }

    activeForm = forms.login;
    console.log('should switch to login form');
    console.log('activeForm', activeForm);
}

// function toggleForm() {
//     inputs.forEach(input => {
//         input.classList.remove('warning')
//     });
//
//     buttons.forEach(() => {
//         // FIXME: Not sure why this is here
//         // buttons.forEach(btn => {
//         //     btn.classList.remove('btn--active')
//         // })
//         event.target.classList.add('btn--active')
//         if(event.target.classList.contains('btn__signup')) {
//             document.getElementById('logIn').classList.remove('active')
//             document.getElementById('signUp').classList.add('active')
//         } else if (event.target.classList.contains('btn__login')) {
//             document.getElementById('signUp').classList.remove('active')
//             document.getElementById('logIn').classList.add('active') // let login = true to let signup = false
//         }
//     });
// }

// function formValidate() {
//     console.log('should validate form');
//
//     // for (let i = 0; i <inputs.length; i++) {
//     //     inputs[i].classList.remove('warning');
//     //     if (!inputs[i].value) {
//     //         console.log(inputs[i]);
//     //         inputs[i].classList.add('warning')
//     //     }
//     //     let inputType = inputs[i].getAttribute('type')
//     //     if (inputType == 'email') {
//     //         validateEmail(inputs[i].value)
//     //     }
//     // }
// }

function validateLoginForm() {
    console.log('should validate login form');
}

function validateSignupForm() {
    console.log('should validate signup form');
}

// //EMAIL VALIDATION (for adding extra 'warning' class when not valid)
// function validateEmail(email) {
//     return /\S+@\S+\.\S+/.test(email);
// }
