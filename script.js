window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "red", 
        "orange", 
        "yellow", 
        "green", 
        "blue", 
        "purple", 
        "pink"
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            // sounds[index].currentTime = 0;
            sounds[index].load();
            sounds[index].play().loop();

            createBubbles(index);
        });
    });

    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
    }
});
