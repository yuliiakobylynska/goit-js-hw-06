const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', newInput);

function newInput(event)  {
    outputName.textContent = event.currentTarget.value;

    if (outputName.textContent === "") {
        return outputName.textContent = 'Anonymous';
     }
}