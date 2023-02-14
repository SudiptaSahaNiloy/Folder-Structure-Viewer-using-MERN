import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderPlus, faCircleXmark, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { deleteFile } from '../../Redux/actionCreator';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return ({
    deleteFile: (fileId) => dispatch(deleteFile(fileId))
  })
}

function Folder(props) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'row', alignItems: 'center',
      padding: '10px',
      marginTop: '20px',
      marginBottom: '10px',
      border: '1px solid black',
      borderRadius: '10px',
      width: '260px',
      height: '30px'
    }}>
      <FontAwesomeIcon style={{ marginRight: '5px', color: 'black' }} size="lg" icon={faCaretDown} />
      {props.folder.fileName}
      <FontAwesomeIcon onClick={() => props.deleteFile(props.folder._id)} style={{ marginLeft: '5px', color: 'red' }} size="lg" icon={faCircleXmark} />
      <FontAwesomeIcon style={{ marginLeft: '80px', color: 'green' }} size="lg" icon={faFolderPlus} />
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Folder);