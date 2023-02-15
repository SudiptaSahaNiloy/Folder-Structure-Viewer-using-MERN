import axios from "axios";
import * as actionTypes from "./actionTypes.js";

const mainURL = "https://file-structure-mern-api.onrender.com";

export const deleteFile = (fileName) => {
    console.log(fileName);
    // const URL = mainURL + "/files";
    // axios.delete(URL, { fileName: fileName })
    //     .then(response => console.log(response.data));
}

export const createFileResponse = (newFile) => {
    return {
        type: actionTypes.CREATE_FILE,
        payload: newFile,
    }
}

export const createFile = (fileName, parent) => dispatch => {
    console.log(fileName);
    console.log(parent);
    const file = {
        fileName: fileName,
        parent: parent
    }
    const URL = mainURL + "/files";
    axios.post(URL, file)
        .then(response => dispatch(createFileResponse(response.data)));
}

export const getFilesResponse = (files) => {
    return {
        type: actionTypes.GET_CHILDREN_FILES,
        payload: files,
    }
}

export const getFiles = (parent) => dispatch => {
    const URL = mainURL + "/files/getFiles";
    axios.post(URL, { parent: parent })
        .then(response => dispatch(getFilesResponse(response.data)));
}