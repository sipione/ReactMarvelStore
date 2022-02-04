import React from "react";
import { ErrorBoxMain, ErrorTextBox, ErrorTextContent } from "../Components/error404Components/box";


const Error404 =()=>{

    return(
        <ErrorBoxMain>
            <ErrorTextBox>
                <ErrorTextContent>ERROR 404 PAGE NOT FOUND</ErrorTextContent>
            </ErrorTextBox>

            <ErrorTextBox>
                <ErrorTextContent>THERE IS NO SIGN OF INTELLIGENT LIFE</ErrorTextContent>
            </ErrorTextBox>
        </ErrorBoxMain>
    )
}

export default Error404