(function() {
  // theme toggle
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme');
  if (stored === 'light') root.classList.add('light');
  const setIcon = () => toggle.textContent = root.classList.contains('light') ? '🌞' : '🌙';
  setIcon();
  toggle.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    setIcon();
  });
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const menu = document.getElementById('menuList');
  menuBtn.addEventListener('click', () => {
    const open = menu.style.display === 'flex';
    menu.style.display = open ? 'none' : 'flex';
    menuBtn.setAttribute('aria-expanded', String(!open));
  });

  // pricing toggle
  const billingToggle = document.getElementById('billingToggle');
  const plans = Array.from(document.querySelectorAll('.plan'));
  function renderPrices() {
    const yearly = billingToggle.checked;
    plans.forEach(p => {
      const amountEl = p.querySelector('.amount');
      if (!amountEl) return;
      const m = amountEl.getAttribute('data-m');
      const y = amountEl.getAttribute('data-y');
      amountEl.textContent = yearly ? y : m;
    });
  }
  if (billingToggle) {
    billingToggle.addEventListener('change', renderPrices);
    renderPrices();
  }

  // demo contact form
//   const send = document.getElementById('sendBtn');
//   if (send) {
//     send.addEventListener('click', () => {
//       alert('Thanks! This is a demo form. Connect Formspree/Netlify or your backend to receive submissions.');
//     });
//   }
})();
