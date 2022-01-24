import React, { useState } from 'react'
import { useNavigate  } from "react-router-dom";
const Quiz = () => {
    const questions = [
		{
			questionText: 'm',
			answerOptions: [
				{ answerText: 'A', isCorrect: false },
				{ answerText: 'W', isCorrect: false },
				{ answerText: 'M', isCorrect: true },
				{ answerText: 'X', isCorrect: false },
			],
		},
		{
			questionText: 'h',
			answerOptions: [
				{ answerText: 'A', isCorrect: false },
				{ answerText: 'H', isCorrect: true },
				{ answerText: 'C', isCorrect: false },
				{ answerText: 'B', isCorrect: false },
			],
		},
		{
			questionText: 'I',
			answerOptions: [
				{ answerText: 'I', isCorrect: true },
				{ answerText: 'N', isCorrect: false },
				{ answerText: 'A', isCorrect: false },
				{ answerText: 'M', isCorrect: false },
			],
		},
		{
			questionText: 'n',
			answerOptions: [
				{ answerText: 'Q', isCorrect: false },
				{ answerText: 'P', isCorrect: false },
				{ answerText: 'M', isCorrect: false },
				{ answerText: 'N', isCorrect: true },
			],
		},
        {
			questionText: 'Y',
			answerOptions: [
				{ answerText: 'Q', isCorrect: false },
				{ answerText: 'P', isCorrect: false },
				{ answerText: 'M', isCorrect: false },
				{ answerText: 'Y', isCorrect: true },
			],
		},
	];
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    const navigate = useNavigate();
    const handleGoHome =()=>{
        navigate('/');
    }

    return (
        <div className='flex w-screen h-screen items-center justify-center text-white bg-themeone-lime font-mono '>
			{showScore ? (
                <div className="flex flex-col space-y-6">
                    <div className='flex font-2xl text-black'>
                        You scored {score} out of {questions.length}
                    </div>
                    <button className="text-black bg-themeone-orange p-4 rounded-md" onClick={handleGoHome}>Go Home</button>
                </div>
			) : (
				<div className="flex flex-col space-y-4 bg-themeone-blue p-8 rounded-lg ">
					<div className='flex flex-col'>
						<div className='flex text-2xl'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div>
                            <img src={require("../assets/" + questions[currentQuestion].questionText + ".png")}/>
                        </div>
					</div>
					<div className='flex flex-col space-y-4'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} className="flex items-left p-4 rounded-md hover:bg-themeone-yellow hover:text-themeone-orange">{answerOption.answerText}</button>
						))}
					</div>
				</div>
			)}
		</div>
    )
}

export default Quiz
