document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('newForm');
  const msg = document.getElementById('msgSubmit');

  function showMessage(text, color = 'green', timeout = 5000) {
    if (!msg) return;
    msg.textContent = text;
    msg.classList.remove('input-error', 'input-success');
    msg.classList.add(color === 'red' ? 'input-error' : 'input-success');
    msg.style.display = 'block';
    if (timeout > 0) {
      setTimeout(() => {
        msg.style.display = 'none';
        msg.classList.remove('input-error', 'input-success');
      }, timeout);
    }
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const requiredFields = Array.from(form.querySelectorAll('[required]'));
    const allFilled = requiredFields.every((el) => {
      return String(el.value).trim() !== '';
    });

    if (!allFilled) {
      showMessage('Please fill all required fields.', 'red', 4000);
      return;
    }

    showMessage('We have received your mail, We will get back to you soon!', 'green', 5000);
    form.reset();
  });
});
