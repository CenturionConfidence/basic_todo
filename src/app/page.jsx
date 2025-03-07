'use client';

import { useState, useEffect } from 'react';
import Header from '../app/components/Header'
import { useRouter } from 'next/navigation';
import { CgFileDocument } from "react-icons/cg";
import { RiDeleteBin6Line } from "react-icons/ri";




export default function App() {
  const router = useRouter();
  // const [data, setData] = useState([]);
  // const taskLength = data ? data.length : 0;

  // useEffect(() => {
  //   // This code runs only in the browser
  //   const storedData = localStorage.getItem('taskList');
  //   setData(JSON.parse(storedData));
  //   console.log(storedData)
  // }, []);

  const navigateToCreateTask = () => {
    router.push('/createTask');
  }

  // const deleteTask = (taskId) => {
  //   const updatedData = data.filter((task => task.id !== taskId));
  //   setData(updatedData);
  //   // localStorage.setItem('taskList', JSON.stringify(updatedData));
  // }


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
          <h1 className="font-semibold text-[#4EA8DE] text-xl">Task </h1>
          <h1 className="font-semibold text-[#8284FA] text-xl">Completed </h1>
        </div>
        <hr className="max-w-5xl mx-5 lg:mx-auto mt-5"/>
        {/* {data == null 
        ? <div className='max-w-5xl lg:mx-auto mt-10 mx-5'>
            <CgFileDocument className="text-gray-400 mx-auto text-7xl mt-10"/>
            <h1 className="text-gray-400 text-center text-xl font-semibold mt-10">You don't have any task registered yet!</h1>
            <p className="text-gray-400 text-center mt-5">Create task and organize your to-do items.</p>
          </div>
        : 
              <ul className='max-w-5xl lg:mx-auto mt-10 mx-5'>
                {data.map((item, index) => (
                  <li 
                    className='text-white flex justify-between my-7 px-5 rounded-xl bg-[#333333] py-5' 
                    key={index}>{item} <RiDeleteBin6Line onClick={() => deleteTask(index)} /></li>
                ))}
                
              </ul>} */}
      </div>
    </>
  );
}


