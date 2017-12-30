function onReady() {
  const addToDoForm = document.getElementById("addToDoForm");
  const newToDoText = document.getElementById("newToDoText");
  const toDoList = document.getElementById("toDoList");
  const deleteButton = document.getElementById("deleteButton");

    // add event listener to addToDoForm to listen for the submit event
  addToDoForm.addEventListener("submit", (event) => {

    // prevent default behavior of page reload when submit event is triggered
    event.preventDefault();

    // get the text input when submit event is triggered
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement("li");

    //create a new li
    let checkbox = document.createElement("input");

    //create remove button
    let removeButton = document.createElement("button");

    // //create button text
    // let btnName = document.createTextNode("remove");

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // // attach the button to the li
    // newLi.appendChild(removeButton);

    // attach text to button
    // removeButton.appendChild(btnName);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = "";


});

deleteButton.addEventListener("click", event => {

    let toDos = document.getElementsByTagName("li");

    for (var i = toDos.length - 1; i >= 0; i--) {

      if (toDos[i].children[0].checked == true) {

        toDos[i].remove();

      }

    }

  });
}

window.onload = function() {
  onReady();
};
