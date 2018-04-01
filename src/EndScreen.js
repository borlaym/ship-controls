import * as React from 'react';

export default function EndScreen(props) {
	const { role, score, maxScore } = props;
	return (
		<div className="tasks-layout">
			<header className="tasks-header">
				<div className="tasks-header__role">{role}</div>
				<div className="tasks-header__score tasks-header__score--increased">{score} {score === 1 ? 'point' : 'points'}</div>
			</header>
			<div className="task">
				<p className="task__text task__condition">Congratulations, <br/>you are in orbit!</p>
				<p className="task__text">Your score: {Math.round(100*score/maxScore)}%</p>
			</div>
		</div>
	)
}
