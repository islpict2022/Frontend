import React from 'react'
import image1 from '../assets/isl.webp'
import { useNavigate  } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const handleClickQuiz=(e)=> {
        navigate('/quiz');
    }

    return (
        <div className="font-serif">
            <div className="flex relative">
                <img src={image1} className="w-screen h-screen"/>
                <div className="flex absolute w-screen h-screen items-center justify-center ">
                <div className="flex flex-col space-y-8 p-24 bg-white bg-opacity-40">
                    <div className="text-4xl">Indian Sign Language Prediction and Learning</div>
                    <div className="flex flex-row space-x-10 justify-center text-2xl">
                        <button className="bg-indigo-500 hover:bg-indigo-700 text-white text-center py-2 px-8 rounded-full">
                        Predict
                        </button>
                        <button href="#" class="bg-indigo-500 hover:bg-indigo-700 text-white text-center py-2 px-8 rounded-full" onClick={handleClickQuiz}>
                        Quiz
                        </button>
                    </div>
                
                </div>
                </div>
            </div>
         </div>
    )
}

export default HomePage
