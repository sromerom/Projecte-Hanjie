
var canvas = document.getElementById('hanjie');
var ctx = canvas.getContext('2d');
var bounding = canvas.getBoundingClientRect();

canvas.addEventListener("click", function (ev) {
    var x = ev.clientX - bounding.left;
    var y = ev.clientY - bounding.top;
    console.log("HE FET CLICK!!", x, y);
    taulell.seleccionarCasella(x, y);
})

//ctx.fillStyle = "orange";
//ctx.fillRect(0, 0, canvas.width, canvas.height);

var numeros = [1, 5, 6, 3, 1, 6];
var numeros2 = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12]
];

var files = 0;
var columnes = 0;
var dificultat = 8;
var widthCanvasTotal = canvas.width;
var heightCanvasTotal = canvas.height;

console.log(widthCanvasTotal);
console.log(heightCanvasTotal);















/*
for (var i = 200; i < canvas.height; i += 50) {
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.height, i);
    ctx.stroke();
}
*/
var taulell = {
    caselles: [],
    width: 400,
    height: 400,
    init: function () {
        numeroQuadrats = dificultat;
        var widthBox = 400 / numeroQuadrats;
        var heightBox = 400 / numeroQuadrats;
        for (var i = 0; i < numeroQuadrats; i++) {
            for (var j = 0; j < numeroQuadrats; j++) {
                if ((i + j) % 2 === 0) {
                    var colorCasella = 'white';
                    var colorLletra = 'black'
                }
                this.caselles.push(new Casella(i * widthBox + 200, j * heightBox + 200, widthBox, heightBox, colorCasella, colorLletra, (j * numeroQuadrats) + i + 1))
            }
        }
        this.pintar();

    },



























    initExterior: function () {
        numeroQuadrats = dificultat;
        widthBox = 400 / numeroQuadrats;
        heightBox = 400 / numeroQuadrats;


        for (var j = heightCanvasTotal - 300; j > 0; j -= heightBox, columnes++) {
            files = 0;
            for (var i = 500; i - 200> 0; i -= 50, files++) {
                ctx.fillStyle = "black";
                ctx.strokeRect(i - widthBox, j - heightBox, 0, heightBox);
                ctx.font = "25px Arial";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "red";
            }
        }
        for (var j = 450; j - 150 > 0; j-=50) {
            for (var i = 200; i > 0; i -= 50) {
                ctx.fillStyle = "black";
                ctx.strokeRect(i - 50, j, 50, 0);
                ctx.font = "25px Arial";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "red";
            }
        }

    

        /*
for (var i = 200; i < canvas.height; i += 50) {
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.height, i);
    ctx.stroke();
}
*/
    },










    pintar: function () {
        for (var i = 0; i < this.caselles.length; i++) {
            this.caselles[i].pintar();
        }
    },
    seleccionarCasella: function (x, y) {
        console.log("Ha entrada en seleccionar casella")
        for (var i = 0; i < this.caselles.length; i++) {
            if (this.caselles[i].x1 <= x && this.caselles[i].x1 + this.caselles[i].width >= x &&
                this.caselles[i].y1 <= y && this.caselles[i].y1 + this.caselles[i].height >= y) {
                this.caselles[i].selecciona();
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
        ctx.beginPath();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "black";
        ctx.rect(this.x1, this.y1, this.width, this.height);

        if (this.marcat) {
            ctx.fillStyle = "#FF0000";
        } else {
            ctx.fillStyle = "white";
        }
        ctx.fillRect(this.x1, this.y1, this.width, this.height);
        ctx.stroke();

    }
}


taulell.init();
taulell.initExterior();

