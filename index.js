import express from "express";
import tasks from "./routes/tasks";
const app = express();

app.use("/tasks", tasks);

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`App listening at port ${PORT}`);
    
});