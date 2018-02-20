import * as React from 'react';

export default function Step(props) {
	const { role, score, text, options, onSelect } = props;
	return (
		<div className="tasks-layout">
			<header className="tasks-header">
				<div className="tasks-header__role">{role}</div>
				<div className="tasks-header__score tasks-header__score--increased">{score} {score === 1 ? 'point' : 'points'}</div>
			</header>
			<div className="task">
				<p className="task__label">Next task</p>
				<p className="task__text" dangerouslySetInnerHTML={{ __html: text }} />
			</div>
			<div className="task-actions">
				<p className="task-actions__label">{options.title}</p>
				<div className="task-actions__buttons">
					{options.values.map((value, index) => (
						<a className="task-actions__button" onClick={() => onSelect(index === options.correct)}>{value}</a>
					))}
				</div>
			</div>
		</div>
	)
}