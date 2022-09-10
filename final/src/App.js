import React, { useState, useEffect } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Personality',
			answerOptions: [
				{ answerText: 'Outgoing', bStyle: "talker" },
				{ answerText: 'Dominating', bStyle: "doer"},
				{ answerText: 'Easygoing', bStyle: "supporter"},
				{ answerText: 'No-Nonsense', bStyle: "controller" },
			],
		},
		{
			questionText: 'Environment',
			answerOptions: [
				{ answerText: 'Cluttered/Pictures', bStyle: "talker" },
				{ answerText: 'Trophies/Awards', bStyle: "doer"},
				{ answerText: 'Keepsakes/Relics', bStyle: "supporter"},
				{ answerText: 'Order/Charts', bStyle: "controller" },
			],
		},
		{
			questionText: 'Personal Style',
			answerOptions: [
				{ answerText: 'People-Oriented', bStyle: "talker" },
				{ answerText: 'Results-Oriented', bStyle: "doer"},
				{ answerText: 'Process-Oriented', bStyle: "supporter"},
				{ answerText: 'Facts-Oriented', bStyle: "controller" },
			],
		},
		{
			questionText: 'Responsiveness',
			answerOptions: [
				{ answerText: 'Friendly/Affable', bStyle: "talker" },
				{ answerText: 'Impatient/Restless', bStyle: "doer"},
				{ answerText: 'Steady/Reserved', bStyle: "supporter"},
				{ answerText: 'Cool/Distant', bStyle: "controller" },
			],
		},
		{
			questionText: 'Listening',
			answerOptions: [
				{ answerText: 'Drifting', bStyle: "talker" },
				{ answerText: 'Impatient', bStyle: "doer"},
				{ answerText: 'Willing', bStyle: "supporter"},
				{ answerText: 'Selective', bStyle: "controller" },
			],
		},
		{
			questionText: 'Talking',
			answerOptions: [
				{ answerText: 'About People', bStyle: "talker" },
				{ answerText: 'About Achievement', bStyle: "doer"},
				{ answerText: 'About Functions', bStyle: "supporter"},
				{ answerText: 'About Organization', bStyle: "controller" },
			],
		},
		{
			questionText: 'Relations',
			answerOptions: [
				{ answerText: 'Empathizes with Others', bStyle: "talker" },
				{ answerText: 'Directs Others', bStyle: "doer"},
				{ answerText: 'Accepts Others', bStyle: "supporter"},
				{ answerText: 'Assesses Others', bStyle: "controller" },
			],
		},
		{
			questionText: 'Decisiveness',
			answerOptions: [
				{ answerText: 'Popular/Emotional', bStyle: "talker" },
				{ answerText: 'Quick/Impulsive', bStyle: "doer"},
				{ answerText: 'Slow/Studied', bStyle: "supporter"},
				{ answerText: 'Objective/Fact-Based', bStyle: "controller" },
			],
		},
		{
			questionText: 'Time Usage',
			answerOptions: [
				{ answerText: 'Socializes at the expense of time', bStyle: "talker" },
				{ answerText: 'Always pushed for time', bStyle: "doer"},
				{ answerText: 'Respects time but not pushed', bStyle: "supporter"},
				{ answerText: 'Values & manages time well', bStyle: "controller" },
			],
		},
		{
			questionText: 'Pace',
			answerOptions: [
				{ answerText: 'Enthusiastic', bStyle: "talker" },
				{ answerText: 'Fast', bStyle: "doer"},
				{ answerText: 'Steady', bStyle: "supporter"},
				{ answerText: 'Controlled', bStyle: "controller" },
			],
		},
		{
			questionText: 'Voice',
			answerOptions: [
				{ answerText: 'Emotional/Animated', bStyle: "talker" },
				{ answerText: 'Emotional/Direct', bStyle: "doer"},
				{ answerText: 'Unemotional/Low-Keyed', bStyle: "supporter"},
				{ answerText: 'Unemotional/Reserved', bStyle: "controller" },
			],
		},
		{
			questionText: 'Gestures',
			answerOptions: [
				{ answerText: 'Open', bStyle: "talker" },
				{ answerText: 'Impatient', bStyle: "doer"},
				{ answerText: 'Measured', bStyle: "supporter"},
				{ answerText: 'Closed', bStyle: "controller" },
			],
		},
		{
			questionText: 'Dress',
			answerOptions: [
				{ answerText: 'Stylish', bStyle: "talker" },
				{ answerText: 'Formal', bStyle: "doer"},
				{ answerText: 'Conforming', bStyle: "supporter"},
				{ answerText: 'Conservative', bStyle: "controller" },
			],
		},
		{
			questionText: 'Manner',
			answerOptions: [
				{ answerText: 'Friendly', bStyle: "talker" },
				{ answerText: 'Dominating', bStyle: "doer"},
				{ answerText: 'Accepting', bStyle: "supporter"},
				{ answerText: 'Evaluating', bStyle: "controller" },
			],
		},
		{
			questionText: 'Conversation',
			answerOptions: [
				{ answerText: 'People', bStyle: "talker" },
				{ answerText: 'Bottom Line', bStyle: "doer"},
				{ answerText: 'Systems', bStyle: "supporter"},
				{ answerText: 'Facts', bStyle: "controller" },
			],
		},
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [behaviorScore, setBehaviorScore] = useState({Talker: 0, Doer: 0, Supporter: 0, Controller:0,})
	const [behaviorType, setBehaviorType] = useState("")

	useEffect(() => {
		if(showScore){
			const keys = Object.keys(behaviorScore)
			const values = keys.map(key => {return behaviorScore[key]})
			const max = Math.max.apply(null, values)
			setBehaviorType(Object.keys(behaviorScore).find(key => behaviorScore[key]===max))
		}
	}, [showScore, behaviorScore])

	const handleTryAgainClick = () => {
		setCurrentQuestion(0);
		setBehaviorScore({Talker: 0, Doer: 0, Supporter: 0, Controller:0,});
		setShowScore(false);
		setBehaviorType("");
	};

	const handleAnswerOptionClick = (bStyle) => {
		if(bStyle === "talker"){
			setBehaviorScore(prevState => ({...prevState, Talker: behaviorScore.Talker + 1}))
		}
		if(bStyle === "doer"){
			setBehaviorScore(prevState => ({...prevState, Doer: behaviorScore.Doer + 1}))
		}
		if(bStyle === "supporter"){
			setBehaviorScore(prevState => ({...prevState, Supporter: behaviorScore.Supporter + 1}))
		}
		if(bStyle === "controller"){
			setBehaviorScore(prevState => ({...prevState, Controller: behaviorScore.Controller + 1}))
		}
		
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You are a {behaviorType}
					<button onClick={() => handleTryAgainClick()}>Try Again</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.bStyle)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
