import * as React from 'react';

export default function RoleSelector(props) {
	const { roles, onSelect } = props;
	return (
		<div className="role-selector">
			<ul>
			{roles.map(role => (
				<li key={role} onClick={() => onSelect(role)}>{role}</li>
			))}
			</ul>
		</div>
	)
}