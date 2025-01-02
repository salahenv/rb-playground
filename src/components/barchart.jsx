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
                            }} className={'group relative bar w-4 ' + d.className}>
                                <div className='hidden absolute left-[-50%] top-[-20] text-white bg-black px-2 py-1 group-hover:block'>{d.team}-{d.ticket}</div>
                            </div>
                        })
                    }
                </div>
            </div>
           
        </div>
        
    ) 
}

export default Barchart