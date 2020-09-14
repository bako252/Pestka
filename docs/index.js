window.addEventListener('load', ()=> {
    const buttonanim = document.querySelector(".button");
    const start_anim = document.querySelector(".start_anim");
    
    buttonanim.addEventListener('click', function(){
        createB();
    });

    const createB= () => {
        const bubble = document.createElement("div");
        start_anim.appendChild(bubble);
        bubble.style.backgroundColor = "#F0F3F4";
        bubble.style.animation = "jump 1.500s ease";
        bubble.addEventListener('animationend', function(){
            start_anim.removeChild(this);
        });
    };
});