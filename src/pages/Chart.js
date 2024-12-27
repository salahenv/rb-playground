import React, { Fragment, useState } from 'react';
import Barchart from '../components/barchart';
const data = [
    {
        team: 'A',
        ticket: 30,
        className: 'bg-red-200'
    },
    {
        team: 'B',
        ticket: 40,
        className: 'bg-green-200'
    },
    {
        team: 'C',
        ticket: 60,
        className: 'bg-blue-200'
    },
    {
        team: 'D',
        ticket: 50,
        className: 'bg-slate-200'
    },
    {
        team: 'E',
        ticket: 70,
        className: 'bg-cyan-200'
    }
]

const Chart = () => {
    const [showBarchart, setShowBarchart] = useState(false);
    return (
        <Fragment>
            <button className='py-2 px-1 text-white bg-blue-600 rounded-sm' onClick={() => {setShowBarchart((prev) => !prev)}}>Toggle Chart</button>
            {
                showBarchart ? 
                    <Barchart data = {data} /> : null
            }
        </Fragment>
        
    )
}

export default Chart;