'use client';

import { useState, useEffect } from 'react';
import Header from '../app/components/Header'
import { useRouter } from 'next/navigation';
import { CgFileDocument } from "react-icons/cg";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";




export default function App() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const taskLength = data ? data.length : 0;
  const completedTaskLength = data.filter(task => task.isCompleted).length;

  useEffect(() => {
    // This code runs only in the browser
    const storedData = localStorage.getItem('taskList');
    setData(storedData ? JSON.parse(storedData) : []);
    console.log(storedData)
  }, []);

  const navigateToCreateTask = () => {
    router.push('/createTask');
  }

  const deleteTask = (taskId) => {
    // Filter out the task with the matching ID
    const updatedData = data.filter((task) => task.id !== taskId);
  
    // Update the state with the filtered tasks
    setData(updatedData);
    console.log(updatedData)
  
    // Update the localStorage with the new task list
    localStorage.setItem('taskList', JSON.stringify(updatedData));
  };

  
  const toggleTaskCompletion = (taskId) => {
    const updatedData = data.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setData(updatedData);
    localStorage.setItem('taskList', JSON.stringify(updatedData));
  };


  return (
    <>
      <Header/>
      <div className='max-w-5xl lg:mx-auto -mt-10 mx-5'>
              <button 
                    onClick={navigateToCreateTask}
                    className=" cursor-pointer w-full bg-[#1E6F9F] rounded-xl p-5 text-white font-bold">Create Task
                  </button>
      </div>
      <div className='text-white'>
        <div className="max-w-5xl mx-5 lg:mx-auto mt-20 flex justify-between">
          <h1 className="font-semibold text-[#4EA8DE] text-xl">Task ({taskLength})</h1>
          <h1 className="font-semibold text-[#8284FA] text-xl">Completed ({completedTaskLength})</h1>
        </div>
        <hr className="max-w-5xl mx-5 lg:mx-auto mt-5"/>
        {data === null ? ( // Render a loading state while data is being fetched
          <div className='max-w-5xl lg:mx-auto mt-10 mx-5'>
            <CgFileDocument className="text-gray-400 mx-auto text-7xl mt-10" />
            <h1 className="text-gray-400 text-center text-xl font-semibold mt-10">
              Loading tasks...
            </h1>
          </div>
        ) : data.length === 0 ? ( // Render fallback content if no tasks exist
          <div className='max-w-5xl lg:mx-auto mt-10 mx-5'>
            <CgFileDocument className="text-gray-400 mx-auto text-7xl mt-10" />
            <h1 className="text-gray-400 text-center text-xl font-semibold mt-10">
              You don't have any task registered yet!
            </h1>
            <p className="text-gray-400 text-center mt-5">
              Create task and organize your to-do items.
            </p>
          </div>
        ) : (
        <ul className='max-w-5xl lg:mx-auto mt-10 mx-5'>
        {data.map((item) => (
          <li key={item.id}>
            <div className='flex items-center my-7 px-5 rounded-xl bg-[#333333] py-5'>
            {item.isCompleted 
            ? <FaCheckCircle className='text-green-500 mr-5 text-2xl'/> 
            : <FaRegCircle className='text-white-500 mr-5 text-2xl' />}
              <div className='text-white flex justify-between w-full'>
                <span
                  className={`cursor-pointer ${
                    item.isCompleted ? 'line-through' : ''
                  }`}
                  onClick={() => toggleTaskCompletion(item.id)} // Toggle completion
                >
                  
                  {item.title} {/* Render the task title */}
                </span>
                <span className='text-gray-400'>{item.isCompleted ? 'Completed' : 'Pending'}</span>
                  {/* Render the task status */}
                  <RiDeleteBin6Line
                    className="cursor-pointer"
                    onClick={() => deleteTask(item.id)} // Pass the task ID to deleteTask
                  />
              </div>
            </div>
          </li>
        ))}
      </ul>
        )}
      </div>
    </>
  );
}


