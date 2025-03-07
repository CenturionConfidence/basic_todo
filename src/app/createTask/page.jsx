'use client';


import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import Header from '../components/Header';
import Link from 'next/link';

function CreateTask() {
  const [buttonText, setButtonText] = useState('Create Task');
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isTaskAvailable, setIsTaskAvailable] = useState(false);


  // const color = [
  //   {color: 'red', value: '#FF0000'},
  //   {color: 'green', value: '#00FF00'},
  //   {color: 'blue', value: '#0000FF'},
  //   {color: 'yellow', value: '#FFFF00'},
  //   {color: 'orange', value: '#FFA500'},
  //   {color: 'purple', value: '#800080'},
  //   {color: 'pink', value: '#FFC0CB'},
  //   {color: 'brown', value: '#A52A2A'},
  //   {color: 'black', value: '#000000'},
  //   {color: 'white', value: '#FFFFFF'},
  // ];

 const handleInputChange = (e) => {
    const value = e.target.value;
    setTask(value);

    // Update button text based on input value
    if (value.trim() === '') {
      setButtonText('Create Task'); // Default text if input is empty
    } else {
      setButtonText(`save`); // Dynamic text based on input
    }
  };

  const addTask = () => {
    setTasks((prevTasks) => [...prevTasks, task]);
    console.log(tasks);
    setTask('');

    // localStorage.setItem('taskList', JSON.stringify(tasks));
  };


  return (
    <>
        <Header />
        <div className=' overflow-hidden text-white mt-10'>
              <Link href={`/`}>
                <div className='max-w-5xl lg:mx-auto mt-10 mx-5'>
                  <IoMdArrowRoundBack 
                      className="text-xl cursor-pointer" />
                </div>
              </Link>
            <div className='max-w-5xl lg:mx-auto mt-10 mx-5'>
                <h1 className="mt-10 text-blue-300 text-xl font-semibold">Title</h1>
                <input 
                  className="w-full flex items-center justify-center px-5 border-gray-200 border-2 rounded-xl h-[7vh]"
                    type="text" 
                    value={task} 
                    onChange={handleInputChange}
                />
            </div>
            <div className='max-w-5xl lg:mx-auto mt-10 mx-5'>
                <h1 className=" lg:mx-auto w-screen mt-10 text-blue-300 text-xl font-semibold">color</h1>
                {/* <ul className='flex justify-between mt-5'>
                  {color.map((item) => (
                    <li 
                      className=' rounded-full w-20 h-20 flex'
                      key={item.color}
                      style={{backgroundColor: item.value}}>
                      
                    </li>
                  ))}
              </ul> */}
            </div>
              <Link href={`/`}>
                <div className='max-w-5xl lg:mx-auto mt-10 mx-5'>
                  <button 
                        onClick={addTask}
                        className=" w-full bg-[#1E6F9F] rounded-xl p-5 flex items-center justify-center font-bold">{buttonText}
                      </button>
                </div>
              </Link>
           
        </div>
    </>
  );
}

export default CreateTask;