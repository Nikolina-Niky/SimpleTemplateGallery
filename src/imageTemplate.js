import ElementsData from './elementsData';
import {CreateElement} from './common';

class ImageTemplate {
	constructor (element) {
		 this.element = CreateElement(element); 
		 let childP = ElementsData.Elements['ImageTemplateChildP'];
		 childP.parent = this.element;
		 this.childP = CreateElement(childP);
		 this.childImg = null;
	};
	
 	AddClickEvent() {
		let promptValue = prompt("Add url:");
		if ((promptValue != null) && (promptValue != "")) {
			let childImg = ElementsData.Elements['ImageTemplateChildImg'];
			childImg.parent = this.element;
			if (this.element.hasChildNodes()) {
				 this.element.removeChild(this.element.firstChild);
			}
			this.childImg = CreateElement(childImg);
			this.childImg.src = promptValue;
			this.element.classList.remove('doted');
		}
	}
};

export default ImageTemplate;
