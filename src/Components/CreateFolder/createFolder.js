import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createFile } from './../../Redux/actionCreator';
import axios from 'axios';

function CreateFolder(props) {
    const [fileName, setfileName] = useState('');

    const mainURL = "https://file-structure-mern-api.onrender.com";

    const handleOnChange = (e) => {
        setfileName(e.target.value);
    }

    const createFile = (fileName, parent) => {
        // console.log(parent);
        try {
            const file = {
                fileName: fileName,
                parent: parent
            }
            const URL = mainURL + "/files";
            axios.post(URL, file)
                .then(response => {
                    console.log(response.data);
                    props.setenableCreateFile(false);
                });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div style={{
            // border: "solid black",
            borderRadius: '10px',
            WebkitBoxShadow: "20px 25px 84px -11px rgba(0,0,0,0.75)",
            MozBoxShadow: "20px 25px 84px -11px rgba(0,0,0,0.75)",
            boxShadow: "20px 25px 84px -11px rgba(0,0,0,0.75)",
            position: 'absolute',
            top: '20vh',
            right: '18vw',
            width: '400px',
            height: '200px',
            padding: '10px',
            textAlign: 'center',
        }}>
            <p style={{paddingTop: '20px'}}>Add folder in {props.parent}</p>
            <input style={{width: '300px', marginBottom: '20px'}} onChange={(e) => handleOnChange(e)} type="text" />
            <div>
                <button style={{width: "80px", padding: '10px', marginRight: '10px'}} onClick={() => props.setenableCreateFile(false)}>Cancel</button>
                <button style={{ width: "80px", padding: '10px' }} onClick={() => createFile(fileName, props.parent)}>Create</button>
            </div>
        </div>
    )
}

export default CreateFolder