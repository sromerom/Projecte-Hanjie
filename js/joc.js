
var canvas = document.getElementById('hanjie');
var ctx = canvas.getContext('2d');
var bounding = canvas.getBoundingClientRect();

canvas.addEventListener("click", function (ev) {
    var x = ev.clientX - bounding.left;
    var y = ev.clientY - bounding.top;
    taulell.seleccionarCasella(x, y);
})

//Carregam el mode nocturn
if (localStorage.getItem("eleccioModeNocturn") === "si") {
    document.querySelector('body').style.backgroundColor = "black";
    document.querySelector('main').style.backgroundColor = "#434951";
}

var iniciTemp = false;

if (localStorage.getItem("colorExterior") === null) {
    ctx.fillStyle = "orange";
} else {
    ctx.fillStyle = localStorage.getItem("colorExterior");
}

ctx.fillRect(0, 0, canvas.width, canvas.height);


if (localStorage.getItem("radioDificultat") === null) {
    var dificultatElegida = "facil";
    document.querySelector("#rellotge").innerHTML = "Nivell elegit: Fàcil";
} else {
    var dificultatElegida = localStorage.getItem("radioDificultat");
    document.querySelector("#rellotge").innerHTML = "Nivell elegit: " + dificultatElegida;
}

var dificultat;
var files = 0;
var columnes = 0;
var widthCanvasTotal = canvas.width;
var heightCanvasTotal = canvas.height;
var numerosColumnes;
var numerosFiles;
var solucio;
var totalSelec;

//Carregam el numeros exteriors en dificultat facil
if (dificultatElegida == "facil") { // 6
    dificultat = 8;
    solucio = 1062;
    totalSelec = 31;
    numerosColumnes = [
        [3, 4, 3, 4, 8, 2, 4, 1],
        [99, 99, 99, 99, 99, 1, 99, 1]
    ];

    numerosFiles = [
        [1, 4, 5, 8, 1, 1, 3, 1],
        [1, 99, 99, 99, 4, 2, 99, 99]
    ];
    //Carregam el numeros exteriors en dificultat "intermig"
} else if (dificultatElegida == "intermig") { //
    dificultat = 16;
    solucio = 14156;
    totalSelec = 107;
    numerosColumnes = [
        [3, 4, 5, 4, 5, 6, 3, 2, 4, 8, 8, 2, 4, 2, 1, 0],
        [99, 99, 99, 99, 99, 99, 2, 2, 2, 2, 2, 6, 6, 4, 99, 99],
        [99, 99, 99, 99, 99, 99, 1, 5, 6, 3, 1, 2, 99, 99, 99, 99],
        [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 1, 1, 99, 99, 99, 99]
    ];

    numerosFiles = [
        [0, 6, 2, 10, 8, 5, 7, 3, 1, 5, 3, 5, 7, 4, 5, 3, 3],
        [99, 99, 3, 99, 2, 4, 3, 3, 8, 99, 99, 99, 99, 3, 99, 99],
        [99, 99, 99, 99, 99, 2, 2, 3, 99, 99, 99, 99, 99, 99, 99, 99]
    ];
    //Carregam el numeros exteriors en dificultat "dificil"
} else if (dificultatElegida == "dificil") {
    dificultat = 24;
    solucio = 82373;
    totalSelec = 287;
    numerosColumnes = [
        [24, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 24],
        [99, 1, 12, 11, 1, 8, 1, 1, 1, 8, 5, 5, 6, 2, 1, 1, 1, 1, 1, 1, 1, 12, 1, 99],
        [99, 99, 1, 2, 5, 2, 3, 2, 4, 5, 1, 1, 1, 1, 5, 7, 7, 4, 3, 5, 2, 1, 99, 99],
        [99, 99, 99, 1, 1, 1, 4, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 99, 99, 99],
        [99, 99, 99, 99, 99, 1, 1, 1, 1, 99, 6, 1, 1, 1, 2, 4, 2, 1, 2, 1, 1, 99, 99, 99],
        [99, 99, 99, 99, 99, 99, 99, 1, 1, 99, 1, 2, 1, 1, 3, 1, 1, 1, 1, 1, 99, 99, 99, 99],
        [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 1, 99, 99, 1, 99, 1, 1, 1, 1, 99, 99, 99, 99],
        [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 1, 1, 99, 99, 99, 99, 99],
        [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 11, 99, 99, 99, 99, 99, 99]
    ];

    numerosFiles = [
        [24, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 24],
        [99, 1, 4, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 20, 1, 3, 2, 2, 4, 1, 99],
        [99, 99, 1, 1, 4, 6, 6, 1, 1, 1, 1, 1, 2, 3, 2, 5, 1, 3, 5, 1, 3, 1, 99, 99],
        [99, 99, 99, 1, 1, 1, 1, 4, 5, 5, 3, 2, 2, 1, 2, 1, 99, 2, 6, 2, 1, 99, 99, 99],
        [99, 99, 99, 99, 1, 1, 1, 4, 3, 6, 1, 1, 1, 1, 1, 1, 99, 1, 1, 1, 1, 99, 99, 99],
        [99, 99, 99, 99, 99, 99, 99, 1, 1, 1, 4, 1, 5, 1, 1, 99, 99, 1, 99, 1, 99, 99, 99, 99],
        [99, 99, 99, 99, 99, 99, 99, 1, 1, 1, 2, 3, 1, 1, 1, 99, 99, 1, 99, 99, 99, 99, 99, 99],
        [99, 99, 99, 99, 99, 99, 99, 1, 1, 99, 1, 1, 1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99]
    ];
}

var taulell = {
    caselles: [],
    width: 400,
    height: 400,
    init: function () {
        numeroQuadrats = dificultat;
        var widthBox = this.width / numeroQuadrats;
        var heightBox = this.height / numeroQuadrats;
        for (var i = 0; i < numeroQuadrats; i++) {
            for (var j = 0; j < numeroQuadrats; j++) {

                if (localStorage.getItem("colorSeleccio") === null) {
                    var colorCasella = "grey";
                } else {
                    var colorCasella = localStorage.getItem("colorSeleccio");
                }

                if (localStorage.getItem("colorQuadricula") === null) {
                    var colorBackground = "white";
                } else {
                    var colorBackground = localStorage.getItem("colorQuadricula")
                }

                this.caselles.push(new Casella(i * widthBox + 150, j * heightBox + 150, widthBox, heightBox, colorBackground, colorCasella, (j * numeroQuadrats) + i))
            }
        }
        this.pintar();

    },

    //Carregam els bordes exteriors amb els seus respectius numeros
    initExterior: function () {
        numeroQuadrats = dificultat;
        widthBox = this.width / numeroQuadrats;
        heightBox = this.height / numeroQuadrats;
        if (localStorage.getItem("colorNumeros") === null) {
            var colorLletra = "white";
        } else {
            var colorLletra = localStorage.getItem("colorNumeros");
        }

        for (var j = heightCanvasTotal - this.height; j > 0; j -= heightBox, columnes++) {
            files = 0;
            for (var i = widthCanvasTotal; i - 150 > 0; i -= widthBox, files++) {
                ctx.fillStyle = "black";
                ctx.strokeRect(i - widthBox, j - heightBox, 0, heightBox);

                if (columnes < numerosColumnes.length) {
                    ctx.font = (widthBox / 1.5) + "px Arial";
                    ctx.textBaseline = "middle";
                    ctx.textAlign = "center";
                    ctx.fillStyle = colorLletra;
                    if (numerosColumnes[columnes][files] == 99) {
                    } else {
                        ctx.fillText(numerosColumnes[columnes][files], i - (widthBox / 2), j - (heightBox / 2));
                    }
                }
            }
        }


        columnes = 0;
        files = 0;

        for (var i = widthCanvasTotal - this.width; i > 0; i -= widthBox, columnes++) {
            files = 0;
            for (var j = heightCanvasTotal; j - 150 > 0; j -= widthBox, files++) {
                ctx.fillStyle = "black";
                ctx.strokeRect(i - widthBox, j - heightBox, widthBox, 0);

                if (columnes < numerosFiles.length) {
                    ctx.font = (widthBox / 1.5) + "px Arial";
                    ctx.textBaseline = "middle";
                    ctx.textAlign = "center";
                    ctx.fillStyle = colorLletra;

                    if (numerosFiles[columnes][files] == 99) {
                    } else {
                        ctx.fillText(numerosFiles[columnes][files], i - (widthBox / 2), j - (heightBox / 2));
                    }
                }
            }
        }
    },
    //Reiniciam el taulell
    reinit: function () {
        alert("Reiniciant joc...");
        setTimeout(function () {
            for (var i = 0; i < taulell.caselles.length; i++) {
                if (taulell.caselles[i].marcat) {
                    taulell.caselles[i].marcat = false;

                }
            }
            taulell.caselles = [];
            width = 400;
            height = 400;
            taulell.init();
            taulell.initExterior();
        }, 3000);
    },



    pintar: function () {
        for (var i = 0; i < this.caselles.length; i++) {
            this.caselles[i].pintar();
        }
    },
    seleccionarCasella: function (x, y) {
        if (localStorage.getItem("temporitzador") === "si") {
            if (!iniciTemp) {
                play();
                iniciTemp = true;
            }
        }
        for (var i = 0; i < this.caselles.length; i++) {
            if (this.caselles[i].x1 <= x && this.caselles[i].x1 + this.caselles[i].width >= x &&
                this.caselles[i].y1 <= y && this.caselles[i].y1 + this.caselles[i].height >= y) {
                this.caselles[i].selecciona();
                comprovaMarcades(this.caselles);

            }
        }


    }
};


function Casella(x1, y1, width, height, background, colorValor, valor) {
    this.x1 = x1;
    this.y1 = y1;
    this.width = width;
    this.height = height;
    this.background = background;
    this.colorValor = colorValor;
    this.valor = valor;
    this.marcat = false;
    this.selecciona = function () {
        this.marcat = !this.marcat;
        this.pintar();
    };
    this.pintar = function () {

        if (this.marcat) {
            ctx.fillStyle = this.colorValor;
        } else {
            ctx.fillStyle = this.background;
        }

        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "black";
        ctx.rect(this.x1, this.y1, this.width, this.height);
        ctx.fillRect(this.x1, this.y1, this.width, this.height);
        ctx.stroke();

    }
}

//Funcio que comprova si hem guanyat o no
function comprovaMarcades(caselles) {
    var marcades = 0;
    var valueTotal = 0;
    for (var i = 0; i < caselles.length; i++) {
        if (caselles[i].marcat) {
            marcades++;
            valueTotal = valueTotal + caselles[i].valor;
        }
    }
    if (marcades == totalSelec && valueTotal == solucio) {
        alert("Has guanyat!")
        var acabatsFacil;
        var acabatsIntermig;
        var acabatsDificil;
        pause();
        if (localStorage.getItem("temporitzador") === null || localStorage.getItem("temporitzador") == "no") {

        } else {
            var tempsFet = document.querySelector("#rellotge").innerHTML;
            if (localStorage.getItem("tempsRealitzat") === null) {
                localStorage.setItem("primerTempsRealitzat", true);
            }
            localStorage.setItem("tempsRealitzat", tempsFet);
        }

        stop();
        iniciTemp = false;


        if (localStorage.getItem("GuanyadesFacil") === null) {
            acabatsFacil = 0;
        } else {
            acabatsFacil = parseInt(localStorage.getItem("GuanyadesFacil"));
        }



        if (localStorage.getItem("GuanyadesIntermig") === null) {
            acabatsIntermig = 0;
        } else {
            acabatsIntermig = localStorage.getItem("GuanyadesIntermig");
        }


        if (localStorage.getItem("GuanyadesDificil") === null) {
            acabatsDificil = 0;
        } else {
            acabatsDificil = localStorage.getItem("GuanyadesDificil");
        }


        if (dificultatElegida == "facil") {
            localStorage.setItem("GuanyadesFacil", parseInt(acabatsFacil + 1));
        } else if (dificultatElegida == "intermig") {
            localStorage.setItem("GuanyadesIntermig", parseInt(acabatsIntermig + 1));
        } else {
            localStorage.setItem("GuanyadesDificil", parseInt(acabatsDificil + 1));
        }
        taulell.reinit();
    }

}

//Inicialitzam el taulell i el exterior del taulell
taulell.init();
taulell.initExterior();


//Temporitzador del hanjie
var timer;

var temps = {
    hores: 0,
    minuts: 0,
    segons: 0
}
function play() {
    if (!timer) {
        timer = setInterval(function () {
            temps.segons++;

            if (temps.segons === 60) {
                temps.segons = 0;
                temps.minuts++;
            }

            if (temps.minuts === 60) {
                temps.minuts = 0;
                temps.hores++;
            }

            paint(temps);
        }, 1000)
    }
}

function pause() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function stop() {
    pause();

    temps = {
        hores: 0,
        minuts: 0,
        segons: 0
    }
    paint(temps);
}

function paint(temps) {
    if (localStorage.getItem("temporitzador") == "si") {
        document.querySelector('#rellotge').innerHTML = temps.hores + ":" + temps.minuts + ":" + temps.segons;
    }
}

