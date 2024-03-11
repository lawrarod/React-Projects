import { useReducer } from 'react'

const initialTasks = []

const ACTIONS = {
    ADD: 'add task',
    ERASE: 'erase task'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD:
            return [...state,
            { id: Date.now(), name: action.payload }
            ]
        case ACTIONS.ERASE:
            return state.filter(task => task.id !== action.payload)
        default:
            return state
    }
}

export const ToDoList = () => {

    const [tasks, dispatch] = useReducer(reducer, initialTasks)

    const handleSubmit = (event) => {
        event.preventDefault()

        dispatch({
            type: ACTIONS.ADD,
            payload: event.target[0].value
        })

        event.target[0].value = ''

    }

    const handleErase = (id) => {
        dispatch({
            type: ACTIONS.ERASE,
            payload: id
        })
    }

    console.table(tasks)

    return (
        <>
            <div className='form-container'>
                <h1>To-Do App</h1>
                <form className='form' onSubmit={handleSubmit}>
                    <input className='form-control' type='text' placeholder='Ex: Feed the dogs' />
                    <input className='btn btn-light' type='submit' value='Add Task' />
                </form>
                <ul className='list-group'>
                    {tasks.map(task => (
                        <li key={task.id} className='list-group-item' contentEditable>{task.name}
                            <button onClick={() => handleErase(task.id)} className='btn btn-outline-danger'>erase</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
