import ElementsData from './elementsData';
import {CreateElement} from './common.js';

 class DescriptionTemplate {
	constructor(element) {
		this.element = CreateElement(element);
		let childP = ElementsData.Elements['DescriptionTemplateChildP'];
 		childP.parent = this.element;
     	this.childP = CreateElement(childP);
	};

 	AddClickEvent() {
        let promptValue = prompt("Add description:");
		if ((promptValue != null) && (promptValue != "")) {
        	 this.childP.innerText = promptValue;
        	 this.childP.classList.remove('center');
        	 this.element.classList.remove('doted');
     	}
	}
};

export default DescriptionTemplate;
