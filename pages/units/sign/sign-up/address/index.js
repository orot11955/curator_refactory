import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const Post = (props) => {

    const styleObject = {
        border: "black solid 1px",
        background: "black",
        position: "fixed",
        left: 230,
        top: 200,
        height: 500,
        width: 300,
    }

    const complete = (data) =>{
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)

        props.setCompany({
            ...props.company,
            address:fullAddress,
        })
    }

    return (
        <div >
            <DaumPostcode
                style={styleObject}
                className="postmodal"
                autoClose
                onComplete={complete} />
        </div>
    );
};

export default Post;


