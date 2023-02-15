import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getFiles } from '../Redux/actionCreator';
import Folder from './Folder/Folder';

const mapStateToProps = (state) => {
    return ({
        files: state.files,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        getFiles: (parent) => dispatch(getFiles(parent)),
    })
}

function Main(props) {
    const [files, setfiles] = useState([]);

    useEffect(() => {
        props.getFiles('null');
    }, [props.files]);

    // setfiles(props.files);

    return (
        <div style={{
            position: 'relative',
            top: '5vh',
            left: '40vw',
            width: '400px',
            // border: '1px solid black',
            padding: '20px',
        }}>
            Folder Structure
            {/* <FontAwesomeIcon onClick={() => setenableCreateFile(true)} style={{ marginLeft: '80px', color: 'green' }} size="lg" icon={faFolderPlus} /> */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                {props.files.map((item) => {
                    return (
                        <Folder folder={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)