import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faCircleXmark, faCaretDown } from '@fortawesome/free-solid-svg-icons'

function Folder() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'row', alignItems: 'center',
      padding: '10px',
      marginTop: '20px',
      marginBottom: '10px',
      border: '1px solid black',
      borderRadius: '10px',
      width: '160px',
      height: '30px'
    }}>
      <FontAwesomeIcon style={{ marginRight: '5px', color: 'black' }} size="5px" icon={faCaretDown} />
      Root
      <FontAwesomeIcon style={{ marginLeft: '5px', color: 'red' }} size="5px" icon={faCircleXmark} />
      <FontAwesomeIcon style={{ marginLeft: '70px', color: 'green' }} size="5px" icon={faFolderPlus} />
    </div>
  )
}

export default Folder