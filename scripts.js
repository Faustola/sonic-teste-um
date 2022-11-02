let i = 0;
let viradoDireita = true;
let viradoEsquerda = false;
let dx;
let dy;
let px;
let py;
let vel;
let obj;
let tmp;
let pulo;
let io = 0;

window.addEventListener('keydown', function(evt) {
    let sonic = document.getElementById("sonic");

    if (evt.key === "w" && i == 0) {
        sonic.src="images/dash.png";
        sonic.classList.add("sonic-pulo");
        i++;
        io++;

        function paraPulo() {
            sonic.classList.remove('sonic-pulo');
            i--;
            io--;
            if (viradoEsquerda == true && viradoDireita == false) {
                sonic.src="images/sonic-esquerda.gif";
            };
            if (viradoDireita == true && viradoEsquerda == false) {
                sonic.src="images/sonic-direita.gif";
            };
          }

          setTimeout(paraPulo, 800);
    }


    if (evt.key === "s" && i == 0) {
        sonic.src="images/dash.png";
        sonic.classList.add("sonic-ataque");
        i++;
        io++;

        function paraAtaque() {
            sonic.classList.remove('sonic-ataque');
            i--;
            io--;
            if (viradoEsquerda == true && viradoDireita == false) {
                sonic.src="images/sonic-esquerda.gif";
            };
            if (viradoDireita == true && viradoEsquerda == false) {
                sonic.src="images/sonic-direita.gif";
            };
          }

          setTimeout(paraAtaque, 800);
    }
});


function inicia() {
    dx = 0;
    dy = 0;
    px = 0;
    py = 0;
    vel = 3;
    pulo = 20;
    obj = document.getElementById("sonic");

    document.addEventListener("keydown", function (evt) {
        if (evt.key === "a" && i == 0) {
            viradoEsquerda = true;
            viradoDireita = false
            dx = -1;
            sonic.src="images/sonic-dois.gif";
        }
        if (evt.key === "d" && i == 0) {
            viradoDireita = true;
            viradoEsquerda = false;
            dx = 1;
            sonic.src="images/sonic.gif";
        }
    });

    document.addEventListener("keyup", function (evt) {
        if (evt.key === "a") {
            dx = 0;
            sonic.src="images/sonic-esquerda.gif";
            if (io == 1) {
                sonic.src="images/dash.png";
            }
        }
        if (evt.key === "d") {
            dx = 0;
            sonic.src="images/sonic-direita.gif";
            if (io == 1) {
                sonic.src="images/dash.png";
            }
        }
    });

    tmp = setInterval(enterFrame, 10);
}



function enterFrame() {
    px += dx * vel;

    sonic.style.left=px+"px";
}

window.addEventListener("load", inicia());
