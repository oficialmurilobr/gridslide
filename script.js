function toggleSlide() {
    const primary = document.querySelector(".primary");
    const second = document.querySelector(".second");
    const third = document.querySelector(".third");

    primary.classList.add("fadeOut");
    second.classList.add("fadeOut");
    third.classList.add("fadeOut");
    
    setTimeout(()=>{
        primary.classList.remove("fadeOut");
        second.classList.remove("fadeOut");
        third.classList.remove("fadeOut");

        primary.classList.add('third');
        second.classList.add('primary');
        third.classList.add('second');

        primary.classList.remove('primary');
        second.classList.remove('second');
        third.classList.remove('third');        
    }, 1000);

    primary.classList.remove("fadeIn");
    second.classList.remove("fadeIn");
    third.classList.remove("fadeIn");
}
   
setInterval(toggleSlide, 3000);
