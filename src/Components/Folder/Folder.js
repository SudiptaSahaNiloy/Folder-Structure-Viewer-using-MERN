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
  const [availabeFiles, setavailabeFiles] = useState(false);
  const [files, setfiles] = useState([]);

  const mainURL = "http://localhost:8000";

  // console.log(props.folder.parent);

  const handleShowFiles = () => {
    setshowFiles(!showFiles);

    showFiles ? getFile(props.folder.fileName) : getFile("");
  }

  const getFile = async (parent) => {
    // console.log(parent);
    try {
      const URL = mainURL + "/files/getFiles";
      const response = await axios.post(URL, { parent: parent });
      response.data.length === 0 ? setavailabeFiles(true) : setavailabeFiles(false);
      setfiles(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const deleteFile = async (_id) => {
    try {
      const URL = mainURL + "/files";
      await axios.delete(URL, { data: { _id: _id } })
        .then(response => {
          console.log(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  const Allfiles = files.map((item) => {
    return (
      <div style={{ height: "auto" }}>
        <Folder folder={item} />
      </div>
    )
  })

  const NoFiles = () => {
    return (
      <p style={{ marginLeft: '50px', border: '1px solid black', width: '300px', height: '30px', padding: "20px", borderRadius: '10px' }}>
        No Files Available
      </p>
    )
  }

  return (
    <div>
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
        {props.folder.parent !== "null" ? <FontAwesomeIcon onClick={() => deleteFile(props.folder._id)} style={{ marginLeft: '5px', color: 'red' }} size="lg" icon={faCircleXmark} /> : null}
        <FontAwesomeIcon onClick={() => setenableCreateFile(true)} style={{ marginLeft: '160px', color: 'green' }} size="lg" icon={faFolderPlus} />
        {enableCreateFile ? <CreateFolder parent={props.folder.fileName} setenableCreateFile={setenableCreateFile} /> : null}
      </div >
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '20px', marginLeft: '50px' }}>
        {Allfiles}
      </div>
      <div>
        {availabeFiles && showFiles ? NoFiles() : null}
      </div>
    </div>
  )
}

export default Folder;