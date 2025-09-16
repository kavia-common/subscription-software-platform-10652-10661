// Shared JS for static screens.
// Placeholder: hook for dynamic behaviors if needed later.

(function(){
  // Example: focus ring for keyboard users
  let mouseDown = false;
  document.addEventListener('mousedown', () => { mouseDown = true; document.body.classList.add('using-mouse'); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      mouseDown = false;
      document.body.classList.remove('using-mouse');
    }
  });
})();
