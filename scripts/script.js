/*
document.getElementsByClassName('tecla_pom')[0].addEventListener('click', function() {
    // var pom = document.getElementById('som_tecla_pom');
    // pom.play();
    document.querySelector('#som_tecla_pom').play();
});

document.querySelector('.tecla_clap').addEventListener('click', function() {
    document.querySelector('#som_tecla_clap').play();
});

document.querySelector('.tecla_tim').addEventListener('click', function() {
    document.querySelector('#som_tecla_tim').play();
});

document.querySelector('.tecla_puff').addEventListener('click', function() {     
    document.querySelector('#som_tecla_puff').play();
});

document.querySelector('.tecla_splash').addEventListener('click', function() {
    document.querySelector('#som_tecla_splash').play();
});

document.querySelector('.tecla_toim').addEventListener('click', function() {
    document.querySelector('#som_tecla_toim').play();
});

document.querySelector('.tecla_psh').addEventListener('click', function() {
    document.querySelector('#som_tecla_psh').play();
});

document.querySelector('.tecla_tic').addEventListener('click', function() {
    document.querySelector('#som_tecla_tic').play();
});

document.querySelector('.tecla_tom').addEventListener('click', function() {
    document.querySelector('#som_tecla_tom').play();
});
*/

document.querySelectorAll('.tecla').forEach(function(tecla) {
    tecla.addEventListener('click', function() {
        var som = document.querySelector('#som_' + tecla.classList[1]);
        som.play();
    });

    tecla.addEventListener('keydown', function(event) {
        
        if (event.key == 'Enter' || event.key == 'Space') {
            tecla.classList.add('ativa');
        }
    });

    tecla.addEventListener('keyup', function() {
        tecla.classList.remove('ativa');
    });
});

