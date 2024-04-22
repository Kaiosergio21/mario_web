document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') { 
        let marioIframe = document.querySelector('#mario');
        marioIframe.classList.add('mario_jump');
        setTimeout(function() {
            marioIframe.classList.remove('mario_jump');
        }, 500);
    }
});
  