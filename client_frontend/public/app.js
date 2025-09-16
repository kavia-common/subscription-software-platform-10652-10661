/* Mirror of assets/app.js for client delivery via <script src="/app.js"> */
(function(){
  let mouseDown = false;
  document.addEventListener('mousedown', () => { mouseDown = true; document.body.classList.add('using-mouse'); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      mouseDown = false;
      document.body.classList.remove('using-mouse');
    }
  });
})();
