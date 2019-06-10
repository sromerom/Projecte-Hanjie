

document.getElementById("colorQuadre").addEventListener("change", function(){
    var colorSeleccio = document.querySelector("#colorQuadre").value;
    console.log(colorSeleccio);
    localStorage.setItem("colorSeleccio", colorSeleccio);
});

document.getElementById("colorQuadricula").addEventListener("change", function(){
    var colorQuadricula = document.querySelector("#colorQuadricula").value;
    console.log(colorQuadricula);
    localStorage.setItem("colorQuadricula", colorQuadricula);
});

document.getElementById("colorExterior").addEventListener("change", function(){
    var colorExterior = document.querySelector("#colorExterior").value;
    console.log(colorExterior);
    localStorage.setItem("colorExterior", colorExterior);
});

document.getElementById("colorNumeros").addEventListener("change", function(){
    var colorNumeros = document.querySelector("#colorNumeros").value;
    console.log(colorNumeros);
    localStorage.setItem("colorNumeros", colorNumeros);
});


function dificultatValue(radioElegit) {
    console.log(radioElegit)
    localStorage.setItem("radioDificultat", radioElegit);
}

function modeNocturn(eleccio) {
    console.log(eleccio)
    localStorage.setItem("eleccioModeNocturn", eleccio);
}

function modeFacil(eleccio) {
    console.log(eleccio)
    localStorage.setItem("modeFacil", eleccio);
}

function temporitzador(eleccio) {
    console.log(eleccio)
    localStorage.setItem("temporitzador", eleccio);
}

function restaurar() {
    localStorage.clear();
}




