let task = prompt("What would you like to do?");
const toDoList = ['A, B'];
while (task !== "quit") {
    if (task === "list") {
        console.log("&&&&&&&&&&");
        for (let i = 0; i < toDoList.length; i++) {
            console.log(`${i}: ${toDoList[i]}`);
        }
        console.log("&&&&&&&&&&");
    } else if (task === "new") {
        const add = prompt("Enter a new ToDo:");
        toDoList.push(add);
        console.log(`${add} added to the list.`)
    } else if (task === "delete") {
        const remove = parseInt(prompt("Input the index of the entry you would like to delete:"));
        if (!Number.isNaN(remove)) {
            const deleted = toDoList.splice(remove, 1);
            console.log(`OK, deleted ${deleted[0]}`);
        } else {
            console.log("Unknown index")
        }
    }
    task = prompt("What would you like to do?");
}
console.log("OK, You quit the app.")