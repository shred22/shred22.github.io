'use strict';

document.querySelector('.homeLink').addEventListener('click', function () {
    console.log("home event Listener")
    document.querySelector('.aboutMe-jumbotron').classList.add('hidden-custom');
       

});


document.querySelector('.aboutMe-link').addEventListener('click', function () {
    console.log("aboutME event Listener")
    document.querySelector('.aboutMe-jumbotron').classList.remove('hidden-custom');
    document.querySelector('.h1Tron').textContent ="About Me";
    document.querySelector('.p-tron').textContent= "If you've read all 3 accordians above this, then you already know most of me."

});

document.querySelector('.cl').addEventListener('click', function () {
    console.log("contactMe event Listener")
    document.querySelector('.aboutMe-jumbotron').classList.remove('hidden-custom');
    document.querySelector('.h1Tron').textContent ="Contact Me";
    document.querySelector('.p-tron').textContent= "Connect with me at: shreyas.dange22@gmail.com"
    //document.querySelector('.aboutMe-jumbotron').classList.add('hidden-custom');
    //showJumbotron(".contactMe-jumbotron", ".hidden-custom")
     

});

  