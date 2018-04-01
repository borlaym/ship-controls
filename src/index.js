import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import RoleSelector from './RoleSelector';
import Step from './Step';
import EndScreen from './EndScreen';
import scenario from './scenario.json';

const model = {
	role: null,
	score: 0,
	maxScore: 0,
	step: 0
};
var view = "";

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
			model.score++;
		}
		model.step++;
		model.maxScore++;
		render();
	}
	if (typeof currentStep !== 'undefined') {

		view = <Step
			role={model.role}
			score={model.score}
			text={currentStep.text}
			options={currentStep.options}
			onSelect={callback}
		/>
	} else {

		view = <EndScreen
			role={model.role}
			score={model.score}
			maxScore={model.maxScore}
		/>
	}
	return ReactDOM.render(view, document.getElementById('root'));
}

render();


registerServiceWorker();
