function loadJson(data,element) {
    while(element.options.length > 1){
        element.remove(1);
    }
    var opt = null;
    data.map((item) => {
        opt = document.createElement('option');
        opt.value = item.id;
        opt.innerHTML = item.nombre;
        element.appendChild(opt);
    })   
}

function loadGrupo(data, status) {
    try {
        var gruposInv = document.getElementById("grupoInvestigacion");
        switch (status) {
            case '1001':
                loadJson(data, gruposInv);
                break;
            default:
                break;
        }
    } catch (error) {
        console.log("Error", error);
    }
}

function loadSemillero(data, status){
    try {
        var semillero = document.getElementById("semilleros");
        switch (status) {
            case '3003':
                loadJson(data, semillero);
                break;
            default:
                break;
        }
    } catch (error) {
        console.log("Error", error);
    }
}

function loadPrograma(data, status){
    try {
        var programa = document.getElementById("programa");
        switch (status) {
            case '1001':
                loadJson(data, programa);
                break;
            default:
                break;
        }
    } catch (error) {
        console.log("Error", error);
    } 
}

export {loadGrupo, loadSemillero, loadPrograma};