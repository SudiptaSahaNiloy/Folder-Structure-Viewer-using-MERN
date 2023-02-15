import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderPlus, faCircleXmark, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { deleteFile, getFiles } from '../../Redux/actionCreator';
import { connect } from 'react-redux';
import CreateFolder from '../CreateFolder/createFolder';
import axios from 'axios';

function Folder(props) {
  const [showFiles, setshowFiles] = useState(true);
  const [enableCreateFile, setenableCreateFile] = useState(false);
  const [files, setfiles] = useState([]);

  const mainURL = "http://localhost:8000";

  const handleShowFiles = () => {
    setshowFiles(!showFiles);

    showFiles ? getFile(props.folder.fileName) : getFile("");
  }

  const getFile = async (parent) => {
    try {
      const URL = mainURL + "/files/getFiles";
      const response = await axios.post(URL, { parent: parent })
      setfiles(response.data);
      // .then(response => setfiles(response.data));
    } catch (err) {
      console.log(err);
    }
  }



  const deleteFile = async (_id) => {
    try {
      const URL = mainURL + "/files";
      await axios.delete(URL, { data: { _id: _id } })
        .then(response => console.log(response));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{
      display: 'flex', flexDirection: 'row', alignItems: 'center',
      padding: '20px',
      marginTop: '20px',
      marginBottom: '10px',
      border: '1px solid black',
      borderRadius: '10px',
      width: '260px',
      height: '30px'
    }}>
      <FontAwesomeIcon onClick={() => handleShowFiles()} style={{ marginRight: '5px', color: 'black' }} size="lg" icon={faCaretDown} />
      {props.folder.fileName}
      <FontAwesomeIcon onClick={() => deleteFile(props.folder._id)} style={{ marginLeft: '5px', color: 'red' }} size="lg" icon={faCircleXmark} />
      <FontAwesomeIcon onClick={() => setenableCreateFile(true)} style={{ marginLeft: '80px', color: 'green' }} size="lg" icon={faFolderPlus} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '250px', marginRight: '100px' }}>
        {files.map((item) => {
          // console.log(item);
          return (
            <Folder folder={item} />
          )
        })}
      </div>
      {enableCreateFile ? <CreateFolder parent={props.folder.fileName} setenableCreateFile={setenableCreateFile} /> : null}
    </div>
  )
}

export default Folder;