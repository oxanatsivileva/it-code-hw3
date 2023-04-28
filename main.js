document.addEventListener('DOMContentLoaded', () => {
const tasksList = document.querySelector('.todo'),
    addForm = document.querySelector('.add'),
    addInput = addForm.querySelector('.add__input'),
    addBtn = document.querySelector('.add__btn'),
    canselBtn = document.querySelector('.cansel'),
    pushBtn = document.querySelector('.push__btn');


const taskDB = {
    tasks: [
        "Учить JavaScript",
        "Учить TypeScript",
        "Учить Vue.js",
    ]
};
 // добавить задачу
addBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let newItem = addInput.value;

    if (newItem) {
        taskDB.tasks.push(newItem);
        createTasksList(taskDB.tasks, tasksList);
    } 

    addInput.value = "";
});

function createTasksList(items, parent) {
    parent.innerHTML = "";
    // создать список
    items.forEach((item) => {
        parent.innerHTML += `
            <li class="todo__item">
                <div contenteditable="false" id="idcontenteditable" class="todo__item-name">${item}</div>
                <div class="todo__item-btns">
                    <button class="push__btn"><img src="assets/push.svg" alt="add"></button>
                    <button class="edit"><img src="assets/edit.svg" alt="edit"></button>
                    <button class="delete"><img src="assets/delete.svg" alt="delete"></button>
                </div>
            </li>
        `;
    });
    // удалить задачу
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.parentElement.remove();
            taskDB.tasks.splice(i, 1);
            createTasksList(taskDB.tasks, tasksList);

        });
    });
    // изменить задачу
    document.querySelectorAll('.edit').forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.previousElementSibling.classList.add('open');
            btn.parentElement.previousElementSibling.contentEditable = 'true';
            btn.parentElement.previousElementSibling.style.border = '2px outset red';
        });
    });


    taskDB.tasks.forEach((id) => {
        tvirtual = document.querySelectorAll("#idcontenteditable");
        tvirtual.onkeydown = IS_VIRT;
        function IS_VIRT() {
        submit.style.display = "block";
        idtextarea.innerHTML = idcontenteditable.innerHTML;
        }
    })

    document.querySelectorAll('.push__btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.classList.remove('open');
            btn.parentElement.previousElementSibling.contentEditable = 'false';
            btn.parentElement.previousElementSibling.style.border = 'none';
        });
    });




    // сбросить текст в инпуте
    canselBtn.addEventListener('click', (event) => {
        event.preventDefault();
        addInput.value = "";

    })
}

createTasksList(taskDB.tasks, tasksList);
});



