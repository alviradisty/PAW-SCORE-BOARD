let opsi = Array.from(document.getElementsByClassName('score'));

opsi.forEach((e) => {
    e.addEventListener('touchstart', event => {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }, false);

    e.addEventListener('touchend', event => {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        touchSwipped();
    }, false);  

    e.addEventListener('mousedown', event => {
        event.preventDefault();
        mousedownX = event.clientX;
        mousedownY = event.clientY;
    }, false);

    e.addEventListener('mouseup', event => {
        event.preventDefault();
        mouseupX = event.clientX;
        mouseupY = event.clientY;
        mouseSwipped();
    }, false);

    function mouseSwipped() {
        let score = parseInt(e.textContent);
        if (Math.abs(mouseupX - mousedownX) > 0 || Math.abs(mouseupY - mousedownY) > 0) {
            if(mouseupY < mousedownY && score < 21) {
                let jmlhScore = score + 1;
                if (jmlhScore < 10) {
                  e.innerHTML = `${jmlhScore}`;
                } else {
                  e.innerHTML = jmlhScore;
                }
              }
              
            if(mouseupY > mousedownY && score > 0) {
                let jmlhScore = score - 1;
                if (jmlhScore < 10) {
                  e.innerHTML = `${jmlhScore}`;
                } else {
                  e.innerHTML = jmlhScore;
                }
              } 
          }
    }

    function touchSwipped() {
        let score = parseInt(e.textContent);
        if(touchendY < touchstartY && score < 21) {
            let jmlhScore = score + 1;
            if(jmlhScore < 10) {
                e.innerHTML = `${jmlhScore}`;
            }
            else{
                e.innerHTML = jmlhScore;
            }
        }

        if(touchendY > touchstartY && score > 0) {  
            let jmlhScore = score - 1;
            if(jmlhScore < 10) {
                e.innerHTML = `${jmlhScore}`;
            }
            else{
            e.innerHTML = jmlhScore;
            }
        }
    }
})