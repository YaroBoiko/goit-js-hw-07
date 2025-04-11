const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault(); // Зупиняємо перезавантаження сторінки

  const {
    elements: { email, password }
  } = event.currentTarget;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue
  };

  console.log(formData); // Вивід у консоль
  form.reset(); // Очищення форми
});
