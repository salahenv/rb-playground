import React, { Fragment, useState } from 'react';
import File from '../components/file';

const data = [
    {
        id: 1,
        label: 'Documentry',
        children: [
            {
                id: 11,
                label: 'Lion King',
            },
            {
                id: 12,
                label: 'Earth',
                children: [
                    {
                        id: 121,
                        label: 'Our Planet 1',
                    },
                    {
                        id: 122,
                        label: 'Our Planet 1',
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        label: 'Horror',
        children: [
            {
                id: 31,
                label: 'Black door',
            },
            {
                id: 32,
                label: 'Real',
                children: [
                    {
                        id: 321,
                        label: 'The lady next door',
                    },
                    {
                        id: 322,
                        label: 'Evident',
                        children: [
                            {
                                id: 3221,
                                label: 'XXX',
                            },
                            {
                                id: 3221,
                                label: 'XXXX',
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        label: 'Sci Fi',
        children: [
            {
                id: 21,
                label: 'Spiderman',
            },
            {
                id: 22,
                label: 'Ironman',
            }
        ]
    },
]

const FileExplorer = () => {
    return (
        <Fragment>
            <div className='flex'>
                <div className='flex-1/4 h-full'>
                    <File data = {data} />
                </div>
            </div>
            
        </Fragment>
        
    )
}

export default FileExplorer;