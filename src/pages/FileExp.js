import React, { Fragment, useState } from 'react';
import File from '../components/file';

const FileExplorer = () => {
    return (
        <Fragment>
            <div className='flex'>
                <div className='flex-1/4 h-full'>
                    <File />
                </div>
            </div>
            
        </Fragment>
        
    )
}

export default FileExplorer;