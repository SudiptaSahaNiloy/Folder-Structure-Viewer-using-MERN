import React, { useEffect } from 'react';
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
    useEffect(() => {
        props.getFiles('root');
    }, [props.files]);

    // console.log(props.files);

    return (
        <div style={{
            position: 'relative',
            top: '20vh',
            left: '40vw',
            width: '400px',
            border: '1px solid black',
            padding: '20px',
        }}>
            Folder Structure
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                {props.files.map((item) => {
                    return (
                        <Folder folder={item} />
                    )
                })}
                {/* <Folder /> */}
                {/* <Folder /> */}
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)