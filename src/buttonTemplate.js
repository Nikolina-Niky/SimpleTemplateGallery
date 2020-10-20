import ElementsData from './elementsData';
import {CreateElement, AddToggleEvent} from './common';

class ButtonTemplate  {
	constructor(element) {
		this.element = CreateElement(element);
		let childStrong = ElementsData.Elements['ButtonTemplateChildStrong'];
		childStrong.parent = this.element;
		this.childStrong = CreateElement(childStrong);
	}

	AddClickEvent() {
		AddToggleEvent(this.element);
	}
};

export default ButtonTemplate;
