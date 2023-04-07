import throttle from 'lodash.throttle'

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('[type="email"]'),
    textarea: document.querySelector('[name="message"]')
};

const formData = {email: '', message: ''};

const STOREGE_KEY = 'fedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {

    formData[evt.target.name] = evt.target.value;
        
    localStorage.setItem(STOREGE_KEY, JSON.stringify(formData));

    }

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(STOREGE_KEY);
};

populateForm();

function populateForm() {
    const savedForm = localStorage.getItem(STOREGE_KEY);

    if (savedForm) {
     
        const parsetLocalStorage = JSON.parse(savedForm);

        const email = parsetLocalStorage.email;
        const message = parsetLocalStorage.message;

        refs.input.value = email;
        refs.textarea.value = message;

    };
}
