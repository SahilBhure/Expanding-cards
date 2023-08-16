const panels = document.querySelectorAll('.panel');
const body = document.querySelector('body');

panels.forEach((panel) => {
    panel.addEventListener('click', () =>{
        removeActiveClasses()
        panel.classList.add('active');
        body.style.backgroundImage = panel.style.backgroundImage;
        body.classList.add('background');
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
