import ElementsData from './elementsData';
import Container from './container';
import ImageTemplate from './imageTemplate';
import ButtonTemplate from './buttonTemplate';
import DescriptionTemplate from './descriptionTemplate';

const FactoryElements = {
    Container,
    ImageTemplate,
    ButtonTemplate,
    DescriptionTemplate
};

 const CreateTemplateElement = (type, parent) => {  
	if ((parent != null) && (type in (ElementsData.Elements)) && (type in FactoryElements)) {
        let templateElementData = ElementsData.Elements[type];
        templateElementData.parent = parent;
        const templateElement = FactoryElements[type];

        let Element = {};
        Element = new templateElement(templateElementData);
        Element.element.addEventListener("click", (e) => {
		  Element.AddClickEvent();
        });

        return Element.element;
	} 
}

export default CreateTemplateElement;