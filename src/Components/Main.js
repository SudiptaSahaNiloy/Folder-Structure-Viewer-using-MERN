import React from 'react';
import Folder from './Folder/Folder';

function Main() {
    return (
        <div style={{
            position: 'relative',
            top: '20vh',
            left: '40vw',
            width: '200px',
            border: '1px solid black',
            padding: '20px',
        }}>
            Folder Structure
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Folder />
                <Folder />
                <Folder />
            </div>
        </div>
    )
}

export default Main