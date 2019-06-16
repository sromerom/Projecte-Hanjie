
//atributs per la suma total de partides
var e1;
var e2;
var e3;

if (localStorage.getItem("GuanyadesFacil") === null) {
  e1 = 0;
} else {
  e1 = parseInt(localStorage.getItem("GuanyadesFacil"));
}


if (localStorage.getItem("GuanyadesIntermig") === null) {
  e2 = 0;
} else {
  e2 = parseInt(localStorage.getItem("GuanyadesIntermig"));
}

if (localStorage.getItem("GuanyadesDificil") === null) {
  e3 = 0;
} else {
  e3 = parseInt(localStorage.getItem("GuanyadesDificil"));
}

var total = parseInt(e1 + e2 + e3);
//Suma total de partides fetes
document.querySelector('#totalAcabades').innerHTML = total;

if (localStorage.getItem("primerTempsRealitzat") === null) {

} else {

  if (localStorage.getItem("primerTempsRealitzat") == "true") {
    document.querySelector('#anteriorTemps').innerHTML = localStorage.getItem("tempsRealitzat");

    var z = parseString(localStorage.getItem("tempsRealitzat"));
    localStorage.setItem("millorTemps", z);
    localStorage.setItem("primerTempsRealitzat", false);
  } else {

    document.querySelector('#anteriorTemps').innerHTML = localStorage.getItem("tempsRealitzat");
    var esmillor = comprovaMillorTemps(localStorage.getItem("millorTemps"), localStorage.getItem("tempsRealitzat"))
  }

  if (localStorage.getItem("radioDificultat") === null || localStorage.getItem("radioDificultat") == "facil") {
    document.querySelector('#millorTempsFacil').innerHTML = localStorage.getItem("millorTemps");
  }

}



if (esmillor) {
  var z = parseString(localStorage.getItem("tempsRealitzat"));
  localStorage.setItem("millorTemps", z);
  document.querySelector('#millorTempsFacil').innerHTML = z;
}


//API charts de google
google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var dadesIntents = google.visualization.arrayToDataTable([
    ["Dificultat", "Intents", { role: "style" }],
    ["Nivell facil", e1, "green"],
    ["Nivell intermig", e2, "orange"],
    ["Nivell difícil", e3, "red"]
  ]);

  var dadesIntents2 = new google.visualization.DataView(dadesIntents);
  dadesIntents2.setColumns([0, 1,
    {
      calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation"
    },
    2]);

  var optionsIntents = {
    title: "Total de vegades que s'ha aconseguit acabar la partida",
    width: 600,
    height: 400,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };

  var grafic1 = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
  grafic1.draw(dadesIntents2, optionsIntents);

}


//Funcio per comprovar si el temps fet es el millor global o no
function comprovaMillorTemps(tempsBatir, tempsActual) {
  var divTempsABatir = tempsBatir.split(":");
  var divTempsActual = tempsActual.split(":");

  if (parseInt(divTempsABatir[0]) > parseInt(divTempsActual[0])) {
    return true;
  } else if (parseInt(divTempsABatir[0]) <= parseInt(divTempsActual[0]) && parseInt(divTempsABatir[1]) > parseInt(divTempsActual[1])) {
    return true;
  } else if (parseInt(divTempsABatir[2]) > parseInt(divTempsActual[2]) && parseInt(divTempsABatir[1]) <= parseInt(divTempsActual[1]) && parseInt(divTempsABatir[0]) <= parseInt(divTempsActual[0])) {
    return true;
  }


  return false;
}


function parseString(millorTemps) {
  var x = millorTemps;
  return x;
}


