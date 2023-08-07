import React, { useEffect, useState } from "react";

const UploadAndDisplayImage = () => {
    const formData = new FormData();
    const img = document.querySelector('input[type="file"]');
    const [selectedImage, setSelectedImage] = useState(null);
    const [signUrl, setSignUrl] = useState("");
    const [userId, setUserId] = useState("1000689373");
    const [state, setState] = useState(true);

    const saveSign = async (formData) => {
        try {
            const result = await fetch("http://localhost:8081/archivo/upload", {
                method: "POST",
                body: formData
            });
            const parsedResponse = await result.json();
            alert("Success: "+parsedResponse );
        } catch (error) {
            console.log("Error xd", error);
        }
    }

    const userTest1 = () => {
        setUserId("1000456123");
        fetchSign("1000456123");
    }
    const userTest2 = () => {
        setUserId("1000689373");
        fetchSign("1000689373");
    }

    const fetchSign = async (id) => {
        try {
            const result = await fetch("http://localhost:8081/archivo/get/firma/" + id);
            const imageBlob = await result.blob();
            if (result.ok) {
                setState(false);
            } else {
                setState(true);
            }
            const imageURL = URL.createObjectURL(imageBlob);
            setSignUrl(imageURL);
        } catch (error) {
            console.log("Error on fetchSign", error);
        }
    }

    useEffect(() => {
        fetchSign(userId);
    }, [])

    const handleImageInput = (event) => {
        setSelectedImage(event.target.files[0]);
        setSignUrl(URL.createObjectURL(event.target.files[0]))
    }

    const handleSaveImage = () => {
        formData.append("file", img.files[0]);
        formData.append("usuario",userId);
        saveSign(formData);
    }

    return (
        <div>
            <h1>Firma</h1>
            <img alt="not found"
                width={"250px"}
                src={signUrl} />
            <br />
            {state && (
                <div>
                    <input
                        type="file"
                        name="myImage"
                        onChange={(event) => {
                            handleImageInput(event);
                        }}
                    />
                    <br/>
                    <button onClick={handleSaveImage}>Guardar</button>
                </div>
            )}
            <br />
            <button onClick={userTest2}>Firma</button>
            <button onClick={userTest1}>No Firma</button>

        </div>
    );
};

export default UploadAndDisplayImage;