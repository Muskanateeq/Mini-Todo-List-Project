#! /usr/bin/env node 
import inquirer from "inquirer";
let list = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            message: "What do you want to add in todolist", name: "todolist", type: "input"
        },
        {
            message: "Are you sure  you want to add more todolist", name: "Moretodolist", type: "confirm", default: "false"
        },
    ]);
    list.push(addtask.todolist);
    condition = addtask.Moretodolist;
    console.log(list);
}
