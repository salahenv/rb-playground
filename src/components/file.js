import React, { useState } from 'react';
import '../components/css/file.css';

const Node = (props) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className='px-4 py-2 p-4'>
            <div className='flex'>
                <div className={`${expanded ? 'rotate-[90deg]' : ''} mr-2 text-white`}>{">"}</div>
                <div className='text-white' onClick={() => {setExpanded((expanded) => !expanded)}}>{props.data.label}</div>
            </div>
            <div>
                {
                    expanded ? 
                    <Nodes data ={props.data.children} /> : null
                }
            </div>
        </div>
    )
}

const Nodes = (props) => {
    return(
        <div>
            {
                props.data.map((info, index) => {
                    if(info.hasOwnProperty('children')) {
                        return <Node key = {index} data = {info} level = {props.level}/> 
                    } else {
                        return <div className='flex items-center px-4 py-2' key = {index}>
                            <div className='h-1 w-1 rounded-full bg-white mr-4'></div>
                            <div className='text-white'>{info.label}</div>
                        </div>
                    }
                })
            }
        </div>
    )
}

export default Nodes