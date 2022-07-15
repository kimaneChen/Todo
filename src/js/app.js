var removeSVG =
  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
var completeSVG =
  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';

let Todo = {
  taskTitles: [],
  taskComplete: [],
  todoDOM: document.getElementById("todo"),
  completeDOM: document.getElementById("completed"),

  init: function () {
    document.getElementById("task__add").addEventListener("click", () => {
      var todoName = document.getElementById("task__name").value;
      if (!!todoName) {
        this.addItem(todoName);
      }
    });
  },

  renderToList: function () {
    if (this.taskTitles.length === 0 && this.taskComplete.length === 0) return;
    this.taskTitles.map((item) => this.addItemToDOM(item, this.todoDOM));
    this.taskComplete.map((item) => this.addItemToDOM(item, this.completeDOM));
  },

  addItem: function (value) {
    this.addItemToDOM(value, this.todoDOM);
    this.taskTitles.unshift(value);
  },

  removeItem: function () {
    var item = this.parentNode.parentNode;
    var list = item.parentNode;
    var liIndex = Array.prototype.indexOf.call(list.children, item);
    if (list.id !== "complete") {
      Todo.taskTitles.splice(liIndex, 1);
    } else {
      Todo.taskComplete.splice(liIndex, 1);
    }

    list.removeChild(item);
  },

  completeItem: function () {
    var item = this.parentNode.parentNode;
    var list = item.parentNode;
    var liIndex = Array.prototype.indexOf.call(list.children, item);
    Todo.taskTitles.splice(liIndex, 1);
    list.removeChild(item);

    console.log(item.value);

    Todo.taskComplete.unshift(item.innerText);
    Todo.addItemToDOM(item.innerText, Todo.completeDOM);
  },

  addItemToDOM: function (value, listCommon) {
    var itemLi = document.createElement("li");
    itemLi.innerText = value;

    var buttons = document.createElement("div");
    buttons.classList.add("buttons");

    var removeBtn = document.createElement("button");
    removeBtn.classList.add("remove");
    removeBtn.innerHTML = removeSVG;

    removeBtn.addEventListener("click", this.removeItem);

    buttons.appendChild(removeBtn);
    if (listCommon === Todo.todoDOM) {
      var completeBtn = document.createElement("button");
      completeBtn.classList.add("complete");
      completeBtn.innerHTML = completeSVG;

      completeBtn.addEventListener("click", this.completeItem);
      buttons.appendChild(completeBtn);
    }
    itemLi.appendChild(buttons);
    listCommon.insertBefore(itemLi, listCommon.children[0]);
  }
};

Todo.init();
Todo.renderToList();