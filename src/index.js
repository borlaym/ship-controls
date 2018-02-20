import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import RoleSelector from './RoleSelector';
import Step from './Step';
import scenario from './scenario.json';

const model = {
	role: null,
	score: 0,
	step: 0
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
	const currentStep = scenario[model.role][model.step];
	const callback = (correct) => {
		if (correct) {
			model.score = model.score + 1;
		}
		model.step = model.step + 1;
		render();
	}
	const view = <Step
		role={model.role}
		score={model.score}
		title={currentStep.title}
		options={currentStep.options}
		onSelect={callback}
	/>
	return ReactDOM.render(view, document.getElementById('root'));
}

render();


registerServiceWorker();
