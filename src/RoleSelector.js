import * as React from 'react';

export default function RoleSelector(props) {
	const { roles, onSelect } = props;
	return (
		<div>
			<div className="task">
				<p className="task__text">Choose your role:</p>
			</div>
			<div className="task-actions">
				<div className="task-actions__buttons">
					{roles.map(role => (
						<a className="task-actions__button" key={role} onClick={() => onSelect(role)}>{role}</a>
					))}
				</div>
			</div>
		</div>
	)
}
