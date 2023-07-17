
function setRequest(url) {
    try {
        let parse = JSON.stringify(url);
        let temp = JSON.parse(parse);
        parse = "http://localhost:8081/archivo/get/reporte/"+temp.nombreDocumento;
        return parse;
    } catch (error) {
        console.log("Error on setRequest", error);
    }
}

export { setRequest};