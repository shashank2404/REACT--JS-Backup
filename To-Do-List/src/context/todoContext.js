import { createContext,useContext } from "react";

export const ToDoContext = createContext({
    todos : [
        {
            id:1,
            todo : "todo msg",
            completed : false,
        }
    ],
    addToDo : (todo)=> {},
    updatedToDo : (id,todo)=> {},
    deleteToDo : (id)=> {},
    toggleToDo : (id)=> {},
});

export const useToDo = ()=> {
    return useContext(ToDoContext)
}

export const TodoProvider = ToDoContext.Provider;

