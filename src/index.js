import CreateTemplateElement from './TemplateElements';

const addNewContainer = () => {
  let containerWraper = document.getElementById("containerWraper")
  let container = CreateTemplateElement('Container', containerWraper);
  let ImageTemplate = CreateTemplateElement('ImageTemplate', container); 
  let buttonTemplate = CreateTemplateElement('ButtonTemplate', container);
  let descriptionTemplate = CreateTemplateElement('DescriptionTemplate', container);
}

document.getElementById("btnNewContainer").addEventListener("click", (e) => {
	addNewContainer();	
});

window.addEventListener('DOMContentLoaded', () => {
	addNewContainer();
});


