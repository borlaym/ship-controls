import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import RoleSelector from './RoleSelector';
import scenario from './scenario.json';

const model = {
	role: null
};

function render() {
	if (!model.role) {
		const callback = (role) => {
			model.role = role;
			render();
		}
		const view = <RoleSelector roles={Object.keys(scenario)} onSelect={callback} />
		return ReactDOM.render(view, document.getElementById('root'));
	}
	const view = (
		<h1>{model.role}</h1>
	)
	return ReactDOM.render(view, document.getElementById('root'));
}

render();


registerServiceWorker();
