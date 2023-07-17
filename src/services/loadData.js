
function setRequest(url) {
    try {
        const parse = "http://localhost:8081/archivo/get/reporte/"+url.nombreDocumento;
        return parse;
    } catch (error) {
        console.log("Error on setRequest", error);
    }
}

export { setRequest};