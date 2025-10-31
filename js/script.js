 (function() {
      const passwordInput = document.getElementById('password');
      const toggleBtn = document.getElementById('togglePassword');
      const toggleIcon = document.getElementById('toggleIcon');

      toggleBtn.addEventListener('click', function() {
        const isHidden = passwordInput.type === 'password';
        passwordInput.type = isHidden ? 'text' : 'password';

        if (isHidden) {
          toggleIcon.classList.replace('fa-eye', 'fa-eye-slash');
          toggleBtn.setAttribute('aria-label', 'Nascondi password');
          toggleBtn.setAttribute('title', 'Nascondi password');
        } else {
          toggleIcon.classList.replace('fa-eye-slash', 'fa-eye');
          toggleBtn.setAttribute('aria-label', 'Mostra password');
          toggleBtn.setAttribute('title', 'Mostra password');
        }
      });
    })();