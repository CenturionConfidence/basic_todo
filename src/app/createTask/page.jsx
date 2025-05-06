'use client';


import React, { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import Header from '../components/Header';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function CreateTask() {
  const [buttonText, setButtonText] = useState('Create Task');
  const [task, setTask] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isTaskAvailable, setIsTaskAvailable] = useState(false);
  
  const router = useRouter();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('taskList')) || [];
    setTasks(storedTasks);
  }, []);


  const color = [
    {color: 'red', value: '#FF0000'},
    {color: 'green', value: '#00FF00'},
    {color: 'blue', value: '#0000FF'},
    {color: 'yellow', value: '#FFFF00'},
    {color: 'orange', value: '#FFA500'},
    {color: 'purple', value: '#800080'},
    {color: 'pink', value: '#FFC0CB'},
    {color: 'brown', value: '#A52A2A'},
    {color: 'black', value: '#000000'},
    {color: 'white', value: '#FFFFFF'},
  ];

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
    if (task.trim() === '') {
      return; // Prevent adding empty tasks
    }
  
    const newTask = {
      id: Date.now(), // Unique ID for the task
      title: task, // Task title
      color: selectedColor, // Selected color
      isCompleted: false, // Default to not completed
    };

    const updatedTasks = [...tasks, newTask]; // Create a new array with the new task
    setTasks(updatedTasks); // Update the state with the new task list
    setTask(''); // Clear the input field
    localStorage.setItem('taskList', JSON.stringify(updatedTasks)); // Save the updated task list to localStorage
    setTimeout(() => {
      router.push('/'); // Redirect to the home page
    }, 100);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    console.log(color)
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
                <ul className='flex justify-between mt-5'>
                  {color.map((item) => (
                    <li 
                      className={`rounded-full w-20 h-20 flex
                          ${selectedColor === item.value ? 'border-4 border-white' : ''}`}
                      key={item.color}
                      onClick={() => handleColorSelect(item.value)}
                      style={{backgroundColor: item.value}}>
                    </li>
                  ))}
              </ul>
            </div>
              
                <div className='max-w-5xl lg:mx-auto mt-10 mx-5'>
                  <button 
                        onClick={addTask}
                        className="w-full bg-[#1E6F9F] rounded-xl p-5 flex items-center justify-center font-bold">{buttonText}
                      </button>
                </div>
              
           
        </div>
    </>
  );
}

export default CreateTask;