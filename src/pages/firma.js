import React, { useEffect, useState } from "react";
import { setImageRequest } from "../services/loadData";

const UploadAndDisplayImage = () => {
    let sign = "";
    const [selectedImage, setSelectedImage] = useState(null);
    const [signUrl, setSignUrl] = useState("");
    const [userId, setUserId] = useState("");
    const [state, setState] = useState(true);

    const loadSign = () => {
        try {
            //setSignUrl(setImageRequest(userId));
            sign = setImageRequest(userId);
            console.log(sign);
            setSignUrl(sign);
            console.log(signUrl);
        } catch (error) {
            console.log("Error on loadSign", error);
        }
    }

    const userTest1 = () =>{
        setUserId("1000456123");
        setState(true);
        loadSign();
    }
    const userTest2 = () =>{
        setUserId("1000689373");
        setState(false);
        loadSign();
    }
/*
    useEffect(() => {
        loadSign();
    }, [])
*/
    return (
        <div>
            <h1>Firma</h1>

            {selectedImage && (
                <div>
                    <img
                        alt="not found"
                        width={"250px"}
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
            )}
            <img alt="xxxx"
                width={"250px"}
                src={signUrl} />

            {state && (
                <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                    }}
                />
            )}
            <button onClick={userTest2}>Firma</button>
            <button onClick={userTest1}>No Firma</button>

        </div>
    );
};

export default UploadAndDisplayImage;