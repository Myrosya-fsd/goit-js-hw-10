const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    formData.email = '';
    formData.message = '';
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
});
