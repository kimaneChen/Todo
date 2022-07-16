
let Todo = {
  taskTitles: [],
  taskComplete: [],
  todoDOM: document.getElementById("todo"),
  completeDOM: document.getElementById("completed"),

  // init: function () {
  //   document.getElementById("task__name").addEventListener("keyup", (e) => {
  //     if (e.key === 'Enter'){
  //       var todoName = document.getElementById("task__name").value;
  //       if (!!todoName) {
  //         this.addItem(todoName);
  //       }
  //     }
  //   });
  // },

  // renderToList: function () {
  //   if (this.taskTitles.length === 0 && this.taskComplete.length === 0) return;
  //   this.taskTitles.map((item) => this.addItemToDOM(item, this.todoDOM));
  //   this.taskComplete.map((item) => this.addItemToDOM(item, this.completeDOM));
  // },

  addItem: function (value) {
    var todoItem = {
      todoTask: 'value',
      completed: false,
    };
    this.addItemToDOM(todoItem, this.todoDOM);
    this.taskTitles.unshift(todoItem);
  },

  // removeItem: function () {
  //   var item = this.parentNode.parentNode;
  //   var list = item.parentNode;
  //   var liIndex = Array.prototype.indexOf.call(list.children, item);
  //   if (list.id !== "complete") {
  //     Todo.taskTitles.splice(liIndex, 1);
  //   } else {
  //     Todo.taskComplete.splice(liIndex, 1);
  //   }

  //   list.removeChild(item);
  // },

  // completeItem: function () {
  //   var item = this.parentNode.parentNode;
  //   var list = item.parentNode;
  //   var liIndex = Array.prototype.indexOf.call(list.children, item);
  //   Todo.taskTitles.splice(liIndex, 1);
  //   list.removeChild(item);

  //   console.log(item.value);

  //   Todo.taskComplete.unshift(item.innerText);
  //   Todo.addItemToDOM(item.innerText, Todo.completeDOM);
  // },

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

// Todo.init();
// Todo.renderToList();
