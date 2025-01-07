import React, { useEffect, useState, useRef } from 'react';

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
        }, 0)
    })
}

const KanbanColumn = (props) => {

    const {column, updateKanbanData, updateKanbanDataAfterDrop} = props;
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

    const handleDragStart = (e, taskId) => {
        e.dataTransfer.setData('dragInfo', JSON.stringify({
            taskId: taskId, 
            originalColumnId: column.id
        }));
        e.dataTransfer.effectAllowed = 'move';
    }

    const handleDrop = (e) => {
        e.preventDefault();
        let dragInfo = e.dataTransfer.getData('dragInfo');
        if (dragInfo) {
            dragInfo = JSON.parse(dragInfo);
            // Remove from current column and add to this column
            updateKanbanDataAfterDrop(dragInfo.taskId, dragInfo.originalColumnId, column.id);
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault(); // Necessary to allow dropping
    }

    return (
        <div 
            className='border border-gray-600 p-4 min-w-[200px] max-h-[100vh] overflow-y-scroll'
            onDrop = {handleDrop}
            onDragOver={handleDragOver}
        >
            <div>{column.label}</div>
            <div>{
                column.data.items.map((item) => {
                    return (
                        <div onDragStart={(e) => handleDragStart(e, item.taskId)} draggable="true" className='bg-rose-100 p-2 mb-2'>
                            <div>{item.name}-{item.taskId}</div>
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
    const [showAddColumn, setShowAddColumn] = useState(false);
    const [columnName, setColumnName] = useState('');

    const getData = async () => {
        const data = await getKanbanData();
        setKanbanData(data);
    }

    const updateKanbanData = (column) => {
        const uKanbanData = kanbanData.map((col) => {
            return column.id === col.id ? column : col
        })
        setKanbanData(uKanbanData);
    }

    const updateKanbanDataAfterDrop = (taskId, dragColId, dropColId) => {
        // find and remove
        let updateKanbanData;
        const foundTask = kanbanData.find((col) => col.id === dragColId).data.items.find((task) => task.taskId === taskId);
        updateKanbanData = kanbanData.map((column) => {
            if(column.id !== dragColId) return column;
            const filteredItems = column.data.items.filter((item) => item.taskId !== taskId);
            return {
                ...column,
                data: {
                    items: filteredItems
                }
            }
        });
        updateKanbanData = updateKanbanData.map((column) => {
            if(column.id !== dropColId) {
                return column;
            }
            const addedItems = [...column.data.items, foundTask]; 
            return {
                ...column,
                data: {
                    items: addedItems
                }
            }
        });
        setKanbanData(updateKanbanData);
    }

    const onAddColumn = () => {
        const column = {
            id: columnName.split(' ').join('_'),
            label: columnName,
            data: {
                items: []
            }
        }
        setKanbanData([...kanbanData, column]);
        setColumnName('');
        setShowAddColumn(false);
    }

    const onColumnNameChange = (value) => {
        setColumnName(value);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <div className='flex gap-1'>
                {
                    kanbanData.map((column, index) => {
                        return <KanbanColumn 
                            updateKanbanData = {updateKanbanData} 
                            key={index} column = {column}
                            updateKanbanDataAfterDrop = {updateKanbanDataAfterDrop}
                        />
                    })
                }
                {
                    showAddColumn ? 
                    <div>
                        <input 
                            className='p-2 border border-blue-600 rounded-md mb-1' 
                            value = {columnName} 
                            placeholder='task name'
                            onChange = {(e) => onColumnNameChange(e.target.value)} 
                        />
                        <div 
                            className='w-full border border-blue-600 p-2 text-center text-blue-600 rounded-md' 
                            onClick={() => onAddColumn()}>Add
                        </div>
                    </div> : 
                    <div>
                        <div className='p-2 border border-blue-600 rounded-md text-blue-600' onClick={() => setShowAddColumn(true)}>Add Columns</div>
                    </div>
                }
            </div>
        </div>
    )
}

export default KanbanBoard;