
document.getElementById("colorQuadre").addEventListener("change", function(){
    var colorSeleccio = document.querySelector("#colorQuadre").value;
    localStorage.setItem("colorSeleccio", colorSeleccio);
});

document.getElementById("colorQuadricula").addEventListener("change", function(){
    var colorQuadricula = document.querySelector("#colorQuadricula").value;
    localStorage.setItem("colorQuadricula", colorQuadricula);
});

document.getElementById("colorExterior").addEventListener("change", function(){
    var colorExterior = document.querySelector("#colorExterior").value;
    localStorage.setItem("colorExterior", colorExterior);
});

document.getElementById("colorNumeros").addEventListener("change", function(){
    var colorNumeros = document.querySelector("#colorNumeros").value;
    localStorage.setItem("colorNumeros", colorNumeros);
});


function dificultatValue(radioElegit) {
    localStorage.setItem("radioDificultat", radioElegit);
}

function modeNocturn(eleccio) {
    localStorage.setItem("eleccioModeNocturn", eleccio);
}

function modeFacil(eleccio) {
    localStorage.setItem("modeFacil", eleccio);
}

function temporitzador(eleccio) {
    localStorage.setItem("temporitzador", eleccio);
}

function restaurar() {
    localStorage.clear();
}




