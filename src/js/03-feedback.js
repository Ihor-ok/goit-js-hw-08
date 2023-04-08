import throttle from 'lodash.throttle'

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('[type="email"]'),
    textarea: document.querySelector('[name="message"]')
};

const STOREGE_KEY_INPUT = 'fedback-input-state';
const STOREGE_KEY_TEXTAREA = 'fedback-textarea-state';

const formData = {

};

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onInput, 500));
refs.textarea.addEventListener('input', throttle(onTextarea, 500));

populateInput();
populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    

    const savedFormInput = localStorage.getItem(STOREGE_KEY_INPUT);
    const savedFormTextarea = localStorage.getItem(STOREGE_KEY_TEXTAREA);
    
    if (savedFormInput) {
        formData.email = savedFormInput;
    }

      if (savedFormTextarea) {
        formData.message = savedFormTextarea;
    }

    console.log(formData);

    localStorage.removeItem(STOREGE_KEY_INPUT);
    localStorage.removeItem(STOREGE_KEY_TEXTAREA);
};

function onInput(evt) {
    localStorage.setItem(STOREGE_KEY_INPUT, evt.target.value);
    formData[evt.target.name] = evt.target.value;

};

function onTextarea(evt) {
    localStorage.setItem(STOREGE_KEY_TEXTAREA, evt.target.value);
    formData[evt.target.name] = evt.target.value;
};

function populateInput() {
    refs.input.value = localStorage.getItem(STOREGE_KEY_INPUT);
};

function populateTextarea() {
    refs.textarea.value = localStorage.getItem(STOREGE_KEY_TEXTAREA);
};




// Далі виконання завданя з збереженням в localStorage рядка у вигляді об'єкта з ключем'fedback-form-state'
// така реалізаціє не дозволяє після перезавантаження сторінки змінювати в 
// localStorage окремо значення Email або Message.


// const formData = { email: '', message: '' };


// const STOREGE_KEY = 'fedback-form-state';


// refs.form.addEventListener('submit', onFormSubmit);
// refs.form.addEventListener('input', throttle(onFormInput, 500));

// populateForm();

// function onFormInput(evt) {
  
//     formData[evt.target.name] = evt.target.value;
//     localStorage.setItem(STOREGE_KEY, JSON.stringify(formData));
// };



// function onFormSubmit(evt) {
//     evt.preventDefault();
//     evt.currentTarget.reset();
//     console.log(formData);
//     localStorage.removeItem(STOREGE_KEY);
// };



// function populateForm() {
//     const savedForm = localStorage.getItem(STOREGE_KEY);

//     if (savedForm) {
//         const parsetLocalStorage = JSON.parse(savedForm);

//     console.log(parsetLocalStorage);

//     const email = parsetLocalStorage.email;
//     const message = parsetLocalStorage.message;
    
//     refs.input.value = email;
//     refs.textarea.value = message;
//     };
    
   
// }
