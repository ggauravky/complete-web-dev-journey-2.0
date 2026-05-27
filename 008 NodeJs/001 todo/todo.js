const fs=require('fs');
const filePath='./todos.json';

const loadTasks=()=>{
    try{
        const dataBuffer=fs.readFileSync(filePath);
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch (error){
        return [];
    }
}

const savetasks=(tasks)=>{
    const dataJSON=JSON.stringify(tasks);
    fs.writeFileSync(filePath,dataJSON);
}

const addTask=(task)=>{
    const tasks=loadTasks();
    tasks.push({task});
    savetasks(tasks);
    console.log("task added ",task)
}

const listTasks=()=>{
    const tasks=loadTasks();
    tasks.forEach((tasks,index)=>console.log(`${index+1}-${tasks.task}`))
};

const command=process.argv[2];
const argument=process.argv[3];

if(command === 'add'){
    addTask(argument);
}else if(command === 'list'){
    listTasks();
}else if(command ==='remove'){
    removeTask(parseInt(argument));
}else{
    console.log('Invalid command. Use "add", "list", or "remove".');
}


// node todo.js add "buy milk"     
// node todo.js add "my name is gaurav"

// node todo.js list         