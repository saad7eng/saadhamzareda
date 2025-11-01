const form = document.getElementById('signupForm');
const nameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // empêche l'envoi du formulaire
  let valid = true;

  // Vérification du nom
  if (nameInput.value.trim().length < 3) {
    nameError.style.display = 'block';
    valid = false;
  } else {
    nameError.style.display = 'none';
  }

  // Vérification de l'email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.style.display = 'block';
    valid = false;
  } else {
    emailError.style.display = 'none';
  }

  if (valid) {
    alert('Inscription réussie !');
    form.reset();
  }
});
