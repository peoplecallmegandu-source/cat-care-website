/* Main JS for interactive elements across the site */
(function(){
  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', ()=>{
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Quick check button on home
  const checkBtn = document.getElementById('checkBtn');
  if (checkBtn) {
    checkBtn.addEventListener('click', ()=>{
      checkBtn.classList.add('animate-pulse');
      setTimeout(()=>{
        checkBtn.classList.remove('animate-pulse');
        alert('Quick Check:\n- Water: OK\n- Litter: OK\n- Play: Give 10 minutes now!');
      }, 700);
    });
  }

  // Subscribe form handling (index)
  const subscribeForm = document.getElementById('subscribeForm');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const email = document.getElementById('subEmail').value;
      if (!email || !email.includes('@')) return alert('Please enter a valid email.');
      // Simulate success
      subscribeForm.reset();
      alert('Thanks! You\'re subscribed.');
    });
  }

  // Mini subscribe on contact page
  const miniSubscribe = document.getElementById('miniSubscribe');
  if (miniSubscribe) {
    miniSubscribe.addEventListener('submit', (e)=>{
      e.preventDefault();
      const email = document.getElementById('miniEmail').value;
      if (!email || !email.includes('@')) return alert('Please enter a valid email.');
      miniSubscribe.reset();
      alert('Thanks! You\'ll receive our newsletter.');
    });
  }

  // Contact form handling with validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) return alert('Please fill out all fields.');
      if (!email.includes('@')) return alert('Please enter a valid email.');
      // Simulate submission
      contactForm.reset();
      alert('Message sent! We\'ll reply within 2 business days.');
    });

    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', ()=> contactForm.reset());
    }
  }

  // Copy email button
  const copyEmail = document.getElementById('copyEmail');
  if (copyEmail) {
    copyEmail.addEventListener('click', async ()=>{
      try {
        await navigator.clipboard.writeText('hello@purrfectcare.example');
        copyEmail.textContent = 'Copied!';
        setTimeout(()=> copyEmail.textContent = 'Copy Email', 2000);
      } catch (err) {
        alert('Unable to copy. Email: hello@purrfectcare.example');
      }
    });
  }

  // FAQ accordion
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(btn => {
    btn.addEventListener('click', ()=>{
      const parent = btn.parentElement;
      const content = parent.querySelector('.faq-content');
      const icon = btn.querySelector('svg');
      if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0';
        icon.classList.remove('rotate-180');
      } else {
        // close other open
        document.querySelectorAll('.faq-content').forEach(c=> c.style.maxHeight = '0');
        document.querySelectorAll('.faq-toggle svg').forEach(s=> s.classList.remove('rotate-180'));
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('rotate-180');
      }
    });
  });

  // Tips filtering
  const tipFilters = document.querySelectorAll('.tip-filter');
  const tipCards = document.querySelectorAll('.tip-card');
  tipFilters.forEach(btn => {
    btn.addEventListener('click', ()=>{
      const type = btn.getAttribute('data-filter');
      tipFilters.forEach(b=> b.classList.remove('bg-amber-200'));
      btn.classList.add('bg-amber-200');
      tipCards.forEach(card => {
        if (type === 'all' || card.dataset.type === type) {
          card.classList.remove('hidden');
          card.classList.add('transform', 'transition', 'duration-200');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Small helper: ensure any dynamic heights for FAQ set correctly on load if any open
  window.addEventListener('load', ()=>{
    document.querySelectorAll('.faq-content').forEach(c=>{
      if (c.style.maxHeight && c.style.maxHeight !== '0px') c.style.maxHeight = c.scrollHeight + 'px';
    });
  });

})();
