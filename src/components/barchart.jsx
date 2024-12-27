import React, { useEffect, useState } from 'react';

const Barchart = ({data}) => {
    const [heights, setHeights] = useState([]);

    useEffect(()=> {
        const maxHeight = Math.max(...data.map((d) => d.ticket));
        const computedHeights = data.map((d) => {
            return `${Math.ceil((d.ticket/maxHeight)*100)}%`;
        })
        setHeights(computedHeights);
    }, [])

    return (
        <div className='flex justify-center bg-cyan-500'>
            <div className='relative h-[250px] w-[450px] pl-4 pb-4'>
                <div className='flex items-end h-full justify-between border border-l-black border-b-black'>
                    {
                        data.map((d, index) => {
                            return <div style={{
                                height: heights[index]
                            }} className='bg-red-100 w-4'></div>
                        })
                    }
                </div>
                <div className='absolute top-[50%] translateX-[-50%] translateY-[-50%] rotate-[270deg]'>Ticket</div>
            </div>
           
        </div>
        
    ) 
}

export default Barchart