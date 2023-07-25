
function setRequest(url) {
    try {
        const parse = "http://localhost:8081/archivo/get/reporte/" + url.nombreDocumento;
        return parse;
    } catch (error) {
        console.log("Error on setRequest", error);
    }
}

function setImageRequest(id) {
    try {
        const parse = "http://localhost:8081/archivo/get/firma/" + id;
        if (verifyResponse(parse)) {
            return parse;
        }
        console.log("Hello");
        console.log(verifyResponse(parse));
        return verifyResponse(parse);
    } catch (error) {
        console.log("Error on setImageRequest", error);
    }
}

function verifyResponse(url) {
    try {
        const tryRequest = async () => {
            const response = await fetch(url);
            console.log(response.status);
            if (response.status !== 200) {
                console.log("False");
                return false;
            }
            console.log("true");
            return true;
        }

        return tryRequest;

        
    } catch (error) {
        console.log("Error on verifyResponse", error)
    }
}

const repNames = {
    "0": "Datos básicos Semilleros",
    "1": "Integrantes activos Semilleros",
    "2": "Producción Semilleros",
    "3": "Participación en eventos Semilleros",
    "4": "Participación en convocatorias Semilleros",
    "5": "Proyectos en convocatorias abiertas Semilleros",
    "6": "Proyectos activos Semilleros",
    "7": "Proyectos finalizados Semilleros",
    "8": "Investigadores en formación Semilleros",
    "9": "Uso de presupuesto Semilleros",
    "10": "Producción GI",
    "11": "Integrantes activos GI",
    "12": "Datos básicos GI",
    "13": "Participación en eventos GI",
    "14": "Participación en convocatorias GI",
    "15": "Proyectos en convocatorias abiertas GI",
    "16": "Proyectos activos GI",
    "17": "Proyectos finalizados GI",
    "18": "Investigadores en formación",
    "19": "Uso de presupuesto GI",
    "20": "Semilleros en un programa",
    "21": "Grupos de investigación en un programa",
    "22": "Información de un proyecto",
    "23": "Actividad en un periodo Semilleros",
    "24": "Actividad en un periodo GI",
    "25": "Uso de presupuesto en periodo Semilleros",
    "26": "Uso de presupuesto en periodo GI"
};

export { setRequest, setImageRequest, repNames };