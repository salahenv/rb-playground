import React from 'react';

const data = [
    {
        team: 'A',
        ticket: 30,
    },
    {
        team: 'A',
        ticket: 40,
    },
    {
        team: 'A',
        ticket: 60,
    }
]

const Barchart = () => {
    return (
        <div className='relative w-[80%] h-[500px]'>
            <div className='w-full h-full pl-4 pb-4'>
                <div className='h-full w-full flex border border-l-black border-b-black'>
                    {
                        data.map(({ticket}) => {
                            return (
                                <div className='bg-red'  style={{height: `${ticket}%`}}></div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='absolute top-[50%] rotate-[270deg] translate-x-[-50%]'>Total number of ticket</div>
            <div className='absolute left-[50%] translate-y-[-50%]'>Teams</div>
        </div>
    )
}

export default Barchart