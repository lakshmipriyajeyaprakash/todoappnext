"use client";
import React, { useState } from "react";
import TaskComponent from "./TaskComponent";

const AddTask = () => {
  const [taskId, setTaskId] = useState(1);
  const [taskAdded, setTaskAdded] = useState([]);
  const [buttonName, setButtonName] = useState("Add Task");
  const [updateId, setUpdateId] = useState();
  const [task, setTask] = useState("");
  console.log(task);
  console.log(taskAdded);
  const handleSubmit = (e) => {
    e.preventDefault();
    const taskObject = {
      id: taskId,
      taskObj: task,
    };
    if (buttonName === "Add Task") {
      setTaskId((prevtaskId) => prevtaskId + 1);
      setTaskAdded((prevTaskAdded) => [...prevTaskAdded, taskObject]); // Updated state using callback function
    } else {
      const updatedTaskAdded = taskAdded.reduce((prev, curr) => {
        if (curr.id === updateId) {
          prev.push({ ...curr, taskObj: task });
        } else {
          prev.push(curr);
        }
        return prev;
      }, []);
      setTaskAdded(updatedTaskAdded);
      setButtonName("Add Task");
    }
    setTask(""); // Clear input field after adding task
    setUpdateId(null);
  };
  /* Disable button task when no input is provided */
  const taskaddDisabled = task.trim() === "" ? true : false;
  const editTask = (taskId) => {
    setButtonName("Update Task");
    setUpdateId(taskId);
  };
  const deleteTask = (removeTask) => {
    console.log(removeTask);
    const filtered = taskAdded.filter(
      (removeItem) => removeItem.id !== removeTask
    );
    setTaskAdded(filtered);
  };
  const [isChecked, setIsChecked] = useState(false);
  const [completed, setCompleted] = useState([]);
  console.log(completed);
  const handleCheckBoxChange = (taskId) => {
    setIsChecked(true);
    setCompleted((prevCompleted) => [...prevCompleted, taskAdded[taskId]]);
  };

  return (
    <div>
      <form
        className="flex justify-center items-center gap-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={task}
          className="border h-10 rounded-md placeholder-gray-100 bg-transparent flex-1 w-full"
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="submit" // Added type attribute for submit button
          disabled={taskaddDisabled}
          className="bg-blue-500 rounded-lg text-gray-50 p-1 hover:bg-blue-50 text-gray-800 ease-in ease-out"
        >
          {buttonName}
        </button>
      </form>
      {taskAdded &&
        taskAdded.map((task, index) => (
          <TaskComponent
            className="sm:mt-10"
            task={task}
            key={index}
            editTask={editTask}
            deleteTask={deleteTask}
            handleCheckBoxChange={handleCheckBoxChange}
            isChecked={isChecked}
          />
        ))}
    </div>
  );
};

export default AddTask;
