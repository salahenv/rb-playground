import React, { useEffect, useState } from 'react';

const data = [
    {
        team: 'A',
        ticket: 30,
        className: 'bg-red-200'
    },
    {
        team: 'A',
        ticket: 40,
        className: 'bg-green-200'
    },
    {
        team: 'A',
        ticket: 60,
        className: 'bg-blue-200'
    }
]

const Barchart = () => {
    const [d, setD] = useState(data);
    const [heights, setHeights] = useState([]);
    useEffect(() => {
        const maxTicket = Math.max(...data.map((d)=> d.ticket));
        const heights = data.map(( d ) => Math.ceil((d.ticket / maxTicket) * 100));
        setTimeout(() => {
            setHeights(heights)
        }, 100)
    }, [])
   
    return (
        
        <div className='min-w-[300px] min-h-[250px] bg-cyan-100 pl-4 pb-4'>
            <div className='bg-pink-100 h-full w-full border border-l-black border-b-black'>
                <div className='h-full w-full flex flex-row justify-between items-end'>
                    {
                        d.map(({ticket, className, calculatedHeight}, index) => {
                          
                            return (
                                <div className={`${className} px-2`} style={{
                                    height: `${0 | heights[index]}%`,
                                    transition: 'height 5s ease'
                                }}></div>
                            )
                        })
                    }
                </div>
            </div>
          
        </div>
    )
}

export default Barchart