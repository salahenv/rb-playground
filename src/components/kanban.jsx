import React, { useEffect, useState, useRef } from 'react';
import { generateId } from '../Utils/generateId';

const kanbanData = [
    {
        id: 'todo',
        label: 'Todo',
        data: {
            items: [
                {
                    taskId: 1,
                    name: 'Task'
                },
                {
                    taskId: 2,
                    name: 'Task'
                }
            ]
        }
    },
    {
        id: 'doing',
        label: 'Doing',
        data: {
            items: []
        }
    },
    {
        id: 'done',
        label: 'Done',
        data: {
            items: []
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

const KanbanColumn = (props) => {

    const {column, updateKanbanData} = props;
    const [showInput, setShowInput] = useState(false);
    const [taskName, setTaskName] = useState('');
    const id = useRef(2);

    const onTaskNameChange = (value) => {
        setTaskName(value);
    }
    const onAddTask = () => {
        const taskId = id.current + 1;
        id.current = taskId;
        column.data.items.push({
            taskId: taskId,
            name: taskName
        });
        updateKanbanData(column);
        setTaskName('');
        setShowInput(false);
    }

    return (
        <div className='border border-gray-600 p-4 min-w-[200px] max-h-[100vh] overflow-y-scroll'>
            <div>{column.label}</div>
            <div>{
                column.data.items.map((item) => {
                    return (
                        <div>
                            <div className='bg-rose-100 p-2 mb-2'>
                                <div>{item.name}-{item.taskId}</div>
                            </div>
                        </div>
                        
                    )
                })
            }</div>
            {
                showInput ? 
                    <div>
                        <input 
                            className='p-2 border border-blue-600 rounded-md mb-1' 
                            value = {taskName} 
                            placeholder='task name'
                            onChange = {(e) => onTaskNameChange(e.target.value)} 
                        />
                        <div 
                            className='w-full border border-blue-600 p-2 text-center text-blue-600 rounded-md' 
                            onClick={() => onAddTask()}>Add
                        </div>
                    </div> :
                    <div 
                        className='w-full border border-blue-600 p-2 text-center text-blue-600 rounded-md' 
                        onClick={() => setShowInput(true)}>Add + 
                    </div>
            }
        </div>
    )
}

const KanbanBoard = () => {

    const [kanbanData, setKanbanData] = useState([]);

    const getData = async () => {
        const data = await getKanbanData();
        setKanbanData(data);
    }

    const updateKanbanData = (column) => {
        kanbanData.map((col) => {
            return column.id === col.id ? column : col
        })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <div className='flex gap-1'>
                {
                    kanbanData.map((column, index) => {
                        return <KanbanColumn updateKanbanData = {updateKanbanData} key={index} column = {column}/>
                    })
                }
            </div>
        </div>
    )
}

export default KanbanBoard;