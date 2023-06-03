function goToPage(pageId) {
    // Verstecke alle Seiten
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    // Zeige die gewünschte Seite
    document.getElementById(pageId).style.display = 'block';
}


const circle = document.querySelector("#circle");
let time = 1000; // Dauer in Millisekunden für eine Seite des Rechtecks
let timeout;

function animateCircle() {
    circle.style.transition = `all ${time}ms linear`;
    circle.style.left = 'calc(100% - 20px)';
    timeout = setTimeout(() => {
        circle.style.top = 'calc(100% - 20px)';
        timeout = setTimeout(() => {
            circle.style.left = '0px';
            timeout = setTimeout(() => {
                circle.style.top = '0px';
                timeout = setTimeout(() => {
                    animateCircle();
                }, time);
            }, time);
        }, time);
    }, time);
}

function stopAnimation() {
    clearTimeout(timeout);
}

// Starte die Animation wenn die Atemübungs-Seite aufgerufen wird
function goToPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page) => {
        page.style.display = 'none';
        stopAnimation(); // Stoppe die Animation wenn die Seite verlassen wird
    });

    const page = document.querySelector('#' + pageId);
    page.style.display = 'block';
    if (pageId === 'breathing-exercise') {
        animateCircle();
    }
}