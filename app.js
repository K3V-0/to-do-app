function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new li
    let checkbox = document.createElement('input');

    //create remove button
    let button = document.createElement('button');

    //create button text
    let btnName = document.createTextNode('remove');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the button to the li
    newLi.appendChild(button);

    // attach text to button
    button.appendChild(btnName);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

  });
}

window.onload = function() {
  onReady();
};
