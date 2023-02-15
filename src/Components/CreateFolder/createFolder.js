import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createFile } from './../../Redux/actionCreator';
import axios from 'axios';

function CreateFolder(props) {
    const [fileName, setfileName] = useState('');

    const mainURL = "http://localhost:8000";

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
            border: "1px solid black",
            position: 'absolute',
            top: '35vh',
            left: '1vw',
            width: '400px',
            height: '100px',
            padding: '10px',
            textAlign: 'center',
        }}>
            <p>Add folder in {props.parent}</p>
            <input onChange={(e) => handleOnChange(e)} type="text" />
            <div>
                <button onClick={() => props.setenableCreateFile(false)}>Cancel</button>
                <button onClick={() => createFile(fileName, props.parent)}>Create</button>
            </div>
        </div>
    )
}

export default CreateFolder