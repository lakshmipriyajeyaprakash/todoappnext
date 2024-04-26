import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const TaskComponent = ({ task, key, editTask, deleteTask,handleCheckBoxChange,isChecked }) => {
    
    return (
        <div key={key} className='border border-spacing-1 border-gray-300 sm:rounded-lg hover:shadow-slate-100 transition-colors mt-2 px-2 py-2'>
            <ul className="flex flex-col">
                <li className="flex justify-between">
                    <input type='checkbox' onChange={()=>handleCheckBoxChange(task.id)} checked={isChecked}></input>
                    <span>{task.taskObj}</span>
                    <div className='flex gap-2'>
                    <button onClick={()=>editTask(task.id)}><FaEdit></FaEdit></button>
                    <button onClick={()=>deleteTask(task.id)}><MdDelete></MdDelete></button>
                    </div>
                </li>
            </ul>
        </div>
  )
}

export default TaskComponent
