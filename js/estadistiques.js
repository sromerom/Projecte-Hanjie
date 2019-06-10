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
document.querySelector('#totalAcabades').innerHTML = total;

if (localStorage.getItem("primerTempsRealitzat") === null) {

} else {

  if (localStorage.getItem("primerTempsRealitzat") == "true") {
    console.log("Primera vez!!")
    document.querySelector('#anteriorTemps').innerHTML = localStorage.getItem("tempsRealitzat");
    console.log("Anterior tiempo" + localStorage.getItem("millorTemps"))

    var z = parseString(localStorage.getItem("tempsRealitzat"));
    localStorage.setItem("millorTemps", z);
    localStorage.setItem("primerTempsRealitzat", false);
  } else {
    console.log("Ya no lo es!!")
    console.log(localStorage.getItem("millorTemps"))
    document.querySelector('#anteriorTemps').innerHTML = localStorage.getItem("tempsRealitzat");
    var esmillor = comprovaMillorTemps(localStorage.getItem("millorTemps"), localStorage.getItem("tempsRealitzat"))
    console.log(esmillor)
  }

}

document.querySelector('#millorTemps').innerHTML = localStorage.getItem("millorTemps");




if (esmillor) {
  var z = parseString(localStorage.getItem("tempsRealitzat"));
  localStorage.setItem("millorTemps", z);
  document.querySelector('#millorTemps').innerHTML = z;

}




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


  function comprovaMillorTemps(tempsBatir, tempsActual) {
    var divTempsABatir = tempsBatir.split(":");
    var divTempsActual = tempsActual.split(":");

    console.log("Temps a batir: " + divTempsABatir);
    console.log("Temps actual: " + divTempsActual);
    console.log(divTempsABatir[2])
    console.log(divTempsActual[2])

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


