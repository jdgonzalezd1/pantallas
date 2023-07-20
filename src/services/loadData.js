
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

export { setRequest, setImageRequest };