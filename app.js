document.addEventListener('DOMContentLoaded', () => {
  // Get all input fields
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const loginButton = document.getElementById('login-button');
  const loginForm = document.getElementById('login-form');
  const errorMessage = document.getElementById('error-message');
  const successMessage = document.getElementById('success-message');
  const loadingIndicator = document.getElementById('loading-indicator');

  // Add event listeners to input fields
  emailInput.addEventListener('focus', () => {
    emailInput.classList.add('focus:border-' + getPrimaryColor());
  });
  emailInput.addEventListener('blur', () => {
    emailInput.classList.remove('focus:border-' + getPrimaryColor());
  });
  passwordInput.addEventListener('focus', () => {
    passwordInput.classList.add('focus:border-' + getPrimaryColor());
  });
  passwordInput.addEventListener('blur', () => {
    passwordInput.classList.remove('focus:border-' + getPrimaryColor());
  });
  confirmPasswordInput.addEventListener('focus', () => {
    confirmPasswordInput.classList.add('focus:border-' + getPrimaryColor());
  });
  confirmPasswordInput.addEventListener('blur', () => {
    confirmPasswordInput.classList.remove('focus:border-' + getPrimaryColor());
  });

  // Add event listener to login button
  loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    // Validate input fields
    if (email === '' || password === '' || confirmPassword === '') {
      showErrorMessage('جميع الحقول مطلوبة');
      return;
    }
    if (!validateEmail(email)) {
      showErrorMessage('البريد الإلكتروني غير صحيح');
      return;
    }
    if (password !== confirmPassword) {
      showErrorMessage('كلمة المرور غير متطابقة');
      return;
    }

    // Show loading indicator
    loadingIndicator.classList.remove('hidden');
    loginButton.classList.add('opacity-50', 'pointer-events-none');

    // Simulate login request
    setTimeout(() => {
      // Hide loading indicator
      loadingIndicator.classList.add('hidden');
      loginButton.classList.remove('opacity-50', 'pointer-events-none');

      // Show success message
      showSuccessMessage('تم تسجيل الدخول بنجاح');

      // Save user data to local storage
      saveUserData(email, password);
    }, 2000);
  });

  // Add event listener to login form
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  // Helper functions
  function getPrimaryColor() {
    return '#6366f1';
  }

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function showErrorMessage(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    setTimeout(() => {
      errorMessage.classList.add('hidden');
    }, 3000);
  }

  function showSuccessMessage(message) {
    successMessage.textContent = message;
    successMessage.classList.remove('hidden');
    setTimeout(() => {
      successMessage.classList.add('hidden');
    }, 3000);
  }

  function saveUserData(email, password) {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  }

  // Animate entrance
  document.body.classList.add('animate-fade-in');
});