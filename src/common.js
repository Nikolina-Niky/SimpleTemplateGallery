const AddProperties=(obj, newElement) => {
    let count;
    if (obj.type == 'Container') {
        count = document.getElementsByClassName('container').length + 1;
    } else {
        count = document.getElementsByClassName('container').length;
    }
    newElement.id = obj.id + count; 
    for (let i = 0; i < obj.classList.length; i++) {
        newElement.classList.add(obj.classList[i]);
    }
    if (obj.hasOwnProperty('text')) {
        newElement.innerText = obj.text;
    }
}

const CreateElement = (element) => {
    let newElement = document.createElement(element.tag);
    AddProperties(element, newElement);
    element.parent.appendChild(newElement);
    return newElement;
}

const AddToggleEvent = (el) => {
    el.classList.toggle("active");
    let toggleEl = el.nextElementSibling;
    if (toggleEl.style.display === "block") {
        toggleEl.style.display = "none";
    } else {
        toggleEl.style.display = "block";
    }
}

export {CreateElement, AddToggleEvent};