import React, { useEffect, useState } from 'react';

const kanbanData = [
    {
        label: 'Todo',
        data: {
            items: [
                {
                    taskId: 1,
                    name: 'Task 1'
                },
                {
                    taskId: 2,
                    name: 'Task 2'
                },
                {
                    taskId: 2,
                    name: 'Task 3'
                },
                {
                    taskId: 2,
                    name: 'Task 4'
                },
                {
                    taskId: 2,
                    name: 'Task 5'
                },
                {
                    taskId: 2,
                    name: 'Task 6'
                },
                {
                    taskId: 2,
                    name: 'Task 7'
                },
                {
                    taskId: 2,
                    name: 'Task 8'
                },
                {
                    taskId: 2,
                    name: 'Task 9'
                },
                {
                    taskId: 2,
                    name: 'Task 10'
                },
                {
                    taskId: 2,
                    name: 'Task 11'
                },
                {
                    taskId: 2,
                    name: 'Task 12'
                },
                {
                    taskId: 2,
                    name: 'Task 13'
                },
                {
                    taskId: 2,
                    name: 'Task 14'
                },
                {
                    taskId: 2,
                    name: 'Task 15'
                },
                {
                    taskId: 2,
                    name: 'Task 16'
                }
            ]
        }
    },
    {
        label: 'Doing',
        data: {
            items: [
                {
                    taskId: 3,
                    name: 'Doing 1'
                },
            ]
        }
    },
    {
        label: 'Done',
        data: {
            items: [
                {
                    taskId: 3,
                    name: 'Done 1'
                },
            ]
        }
    },
];

const getKanbanData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(kanbanData);
        }, 1000)
    })
}

const KanbanBoard = () => {

    const [kanbanData, setKanbanData] = useState([]);

    const getData = async () => {
        const data = await getKanbanData();
        setKanbanData(data);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <div className='flex gap-1'>
                {
                    kanbanData.map((column) => {
                        return (
                            <div className='border border-gray-600 p-4 min-w-[200px] max-h-[100vh] overflow-y-scroll'>
                                <div>{column.label}</div>
                                <div>{
                                    column.data.items.map((item) => {
                                        return (
                                            <div>
                                                <div className='bg-rose-100 p-2 mb-2'>
                                                    <div>{item.name}</div>
                                                </div>
                                            </div>
                                            
                                        )
                                    })
                                }</div>
                                <div className='w-full border border-blue-500 p-2 text-center'>Add + </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default KanbanBoard;