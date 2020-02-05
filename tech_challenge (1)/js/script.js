function pageAnimate() {

    function heroAppear() {
        var heroMsg = document.querySelector('.hero-msg');
        var heroPosition = heroMsg.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;
    
        if(heroPosition < screenPosition) {
            heroMsg.classList.add('hero-msg-effect')
        }
    }
    
        window.addEventListener('scroll', heroAppear);
    
    function welcomeRoll() {
        var welcomeSec = document.querySelector('.welcome-section')
        var welcomePosition = welcomeSec.getBoundingClientRect().top;
        screenPosition = window.innerHeight / 2;
    
        if(welcomePosition < screenPosition) {
            welcomeSec.classList.add('welcome-section-expand')
        }
    }    
    
    window.addEventListener('scroll', welcomeRoll);


    function webDev() {
        var webClm = document.querySelector('.web-dev');
        var webDevPosition = webClm.getBoundingClientRect().top;
        screenPosition = window.innerHeight / 2;
        
        if(webDevPosition < screenPosition) {
            webClm.classList.add('web-dev-roll')
        }
    }
    window.addEventListener('scroll', webDev);

    function teamDev() {
        var teamClm = document.querySelector('.team');
        var teamPosition = teamClm.getBoundingClientRect().top;
        screenPosition = window.innerHeight / 2;
        
        if(teamPosition < screenPosition) {
            teamClm.classList.add('team-roll')
        }
    }
    window.addEventListener('scroll', teamDev);

    
    
    function jsDev() {
        var jsClm = document.querySelector('.javascript');
        var jsPosition = jsClm.getBoundingClientRect().top;
        screenPosition = window.innerHeight / 1.7;
        
        if(jsPosition < screenPosition) {
            jsClm.classList.add('javascript-roll')
        }
    }
    window.addEventListener('scroll', jsDev);

    function studentDev() {
        var studentClm = document.querySelector('.student');
        var studentPosition = studentClm.getBoundingClientRect().top;
        screenPosition = window.innerHeight / 1.7;
        
        if(studentPosition < screenPosition) {
            studentClm.classList.add('student-roll')
        }
    }
    window.addEventListener('scroll', studentDev);

}
pageAnimate();




    