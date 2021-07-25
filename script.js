/* Your code here */

onClickDoneButton = (event) => {
    let target = getEventTarget(event);
    let li = target.closest("li");
    li.classList.toggle("checked");
}

onClickDeleteButton = (event) => {
    let target = getEventTarget(event);
    let li = target.closest("li");
    let ul = li.closest("ul");
    let nodes = Array.from(li.closest("ul").children);
    let index = nodes.indexOf(li);

    ul.removeChild(li);

    arrlist = JSON.parse(localStorage.getItem("myTodo"));
    if (arrlist == null) {
        arrlist = [];
    }
    arrlist.splice(arrlist.length - index - 1, 1);
    localStorage.setItem("myTodo", JSON.stringify(arrlist));
}

getEventTarget = (event) => {
    event = event || window.event;
    return event.target || event.srcElement;
}

var arrlist = JSON.parse(localStorage.getItem("myTodo"));
if (arrlist == null) {
    arrlist = [];
}

for (let i = 0; i < arrlist.length; i++) {
    var list = document.createElement("Li");
    var text = document.createTextNode(arrlist[i]);
    list.appendChild(text);

    var myList = document.getElementById("myList");
    myList.insertBefore(list, myList.childNodes[0]);

    var doneButton = document.createElement("BUTTON");
    doneButton.textContent = "DONE";
    doneButton.className = "donebutton";

    var deleteButton = document.createElement("BUTTON");
    deleteButton.textContent = "DELETE";
    deleteButton.className = "deletebutton";

    doneButton.onclick = function (event) {
        onClickDoneButton();
    };

    deleteButton.onclick = function (event) {
        onClickDeleteButton();
    };

    list.appendChild(doneButton);
    doneButton.style.visibility = "hidden";
    list.appendChild(deleteButton);
    deleteButton.style.visibility = "hidden";

    list.onmouseenter = function (event) {
        var list0 = event.target;
        var children = list0.childNodes;
        for (var i = 0, len = children.length; i < len; i++) {
            if (i > 0) {
                children[i].style.visibility = "visible";
            }
        }
    };

    list.onmouseleave = function (event) {
        var list0 = event.target;
        var children = list0.childNodes;
        for (var i = 0, len = children.length; i < len; i++) {
            if (i > 0) {
                children[i].style.visibility = "hidden";
            }
        }
    };
}

var input = document.getElementById("myTodo");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        myOnClick();
    }
});

myOnClick = () => {
    var inputValue = document.getElementById("myTodo").value;
    document.getElementById("myTodo").value = "";
    if (inputValue === "") {
        alert("Task cannot be empty");
    } else {
        var list = document.createElement("Li");
        var text = document.createTextNode(inputValue);
        list.appendChild(text);

        var myList = document.getElementById("myList");
        myList.insertBefore(list, myList.childNodes[0]);

        arrlist.push(inputValue);

        var doneButton = document.createElement("BUTTON");
        doneButton.textContent = "DONE";
        doneButton.className = "donebutton";

        var deleteButton = document.createElement("BUTTON");
        deleteButton.textContent = "DELETE";
        deleteButton.className = "deletebutton";

        doneButton.onclick = function (event) {
            onClickDoneButton();
        };

        deleteButton.onclick = function (event) {
            onClickDeleteButton();
        };

        list.appendChild(doneButton);
        doneButton.style.visibility = "hidden";
        list.appendChild(deleteButton);
        deleteButton.style.visibility = "hidden";

        list.onmouseenter = function (event) {
            var list0 = event.target;
            var children = list0.childNodes;
            for (var i = 0, len = children.length; i < len; i++) {
                if (i > 0) {
                    children[i].style.visibility = "visible";
                }
            }
        };
        
        list.onmouseleave = function (event) {
            var list0 = event.target;
            var children = list0.childNodes;
            for (var i = 0, len = children.length; i < len; i++) {
                if (i > 0) {
                    children[i].style.visibility = "hidden";
                }
            }
        };
    }
    localStorage.setItem("myTodo", JSON.stringify(arrlist));
}