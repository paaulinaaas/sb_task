import style from './scss/style.scss';

// const inputs = document.querySelectorAll('.input');
const buttonElements = document.querySelectorAll('.btn');
const formElements = document.querySelectorAll('form');

// overview of all forms that are available
const forms = {
    signup: 'signup',
    login: 'login'
};
let activeForm = forms.signup; // default active form is signup;


initialize();

function initialize() {
    setActiveClasses();

    document.getElementById('signupSwitch').addEventListener('click', () => switchToForm(forms.signup));
    document.getElementById('loginSwitch').addEventListener('click', () => switchToForm(forms.login));

    document.getElementById('signupSubmit').addEventListener('click', validateSignupForm);
    document.getElementById('loginSubmit').addEventListener('click', validateLoginForm);
}

function switchToForm(type) {
    if (activeForm === type) {
        return; // do nothing when the active form is already the given type
    }

    activeForm = type;
    removeActiveClasses();
    setActiveClasses();

    console.log(`switched to ${type} form`);
    console.log('activeForm', activeForm);
}

function setActiveClasses() {
    // FIXME 1: this could be done way better by adding a class to the element conditionally based on the activeForm, but for now I'll leave this as is
    document.getElementById(`${activeForm}Switch`).classList.add('btn--active');
    document.getElementById(`${activeForm}Form`).classList.add('active');
}

function removeActiveClasses() {
    // FIXME 2: this could be done way better by adding a class to the element conditionally based on the activeForm, but for now I'll leave this as is
    buttonElements.forEach(btnEle => {
        btnEle.classList.remove('btn--active');
    });
    formElements.forEach(formEle => {
        formEle.classList.remove('active');
    });
}

function validateSignupForm() {
    const signupForm = {
        signupName: document.getElementById('signupName'),
        signupSurname: document.getElementById('signupSurname'),
        signupEmail: document.getElementById('signupEmail'),
        signupPassword: document.getElementById('signupPassword')
    };

    if (isFormValid(signupForm)) {
        submitForm(forms.signup, signupForm);
    }
}

function validateLoginForm() {
    const loginForm = {
        loginEmail: document.getElementById('loginEmail'),
        loginPassword: document.getElementById('loginPassword')
    };

    if (isFormValid(loginForm)) {
        submitForm(forms.login, loginForm);
    }
}

function isFormValid(form) {
    // Loops over all elements in the form and then checks the validity via HTML5 validations
    for (const key of Object.keys(form)) {
        if (!form[key].checkValidity()) {
            // if any value of the checkValidity() method returns false then the form is invalid
            console.log('form is invalid!')
            return false;
        }
    }

    // if all checkValidity()'s pass then the form is valid
    return true;
}

function submitForm(type, form) {
    const formData = {};
    // Loops over all elements in the form and then gets the values from the inputs
    for (const key of Object.keys(form)) {
        formData[key] = form[key].value;
    }

    console.log(`submit ${type}Form =>`, formData);
}
