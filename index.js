const homeBtn = document.getElementById('homeBtn');
        const aboutBtn = document.getElementById('aboutBtn');
        const signInBtn = document.getElementById('signInBtn');
        const backBtn = document.getElementById('backBtn');
        const RegisterBtn= document.getElementById('registerBtn');


        homeBtn.addEventListener('click', () => {
            window.location.href='index.html';
            homeBtn.classList.add('underline-blue');
            aboutBtn.classList.remove('underline-blue');
            signInBtn.classList.remove('underline-blue');
          
        });

        aboutBtn.addEventListener('click', () => {
            window.location.href='about.html';
            homeBtn.classList.remove('underline-blue');
            aboutBtn.classList.add('underline-blue');
            signInBtn.classList.remove('underline-blue');
           
        });

        signInBtn.addEventListener('click', () => {
            window.location.href='login.html';
            homeBtn.classList.remove('underline-blue');
            aboutBtn.classList.remove('underline-blue');
            signInBtn.classList.add('underline-blue');
        
        });
        RegisterBtn.addEventListener('click', () => {
            window.location.href='register.html';
            homeBtn.classList.remove('underline-blue');
            aboutBtn.classList.remove('underline-blue');
            signInBtn.classList.add('underline-blue');
        
        });
