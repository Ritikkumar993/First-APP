import { useContext, useState } from "react";
import { formatDate } from "../utils/Dateutil";
import TaskContext from "../context/TaskContext";

const Task = ({ task: incomingTask }) => {
    const { title, description, createdDate, taskId } = incomingTask;
    const { deleteTask, editTask } = useContext(TaskContext);
    const [ isEditing, setEditing ] = useState(false);
    const [ task, setTask ] = useState(incomingTask);

    let handleInputchange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    if (isEditing) {
        return (
            <div className="card">
                <div className="content">
                <div className="ui form">
                    <div className="field">
                        
                        <input
                        type="text"
                        spellCheck="false" 
                        data-ms-editable="true" 
                        placeholder="Task Title"
                        name="title"       
                        onChange={handleInputchange}
                        value={task.title}         
                        />
                     </div>
               
                    <div className="meta">{formatDate(createdDate)}</div>
                <div className="field">
                
                    <textarea
                    rows="2"
                    spellCheck="false"
                    data-ms-editable="true"
                    placeholder="Task description"
                    name="description"
                    onChange={handleInputchange}
                    value={task.description}
                    />
                </div>
                   
                    </div>
                </div>
                <div className="extra content">
                <div className="ui two buttons">
                    <div 
                    className="ui basic green button"
                    onClick={() => {editTask(task);
                        setEditing(false);

                    }}
                    >
                        Save
                        </div>
                    <div 
                    className="ui basic red button" 
                    onClick={() => setEditing(false)}
                    >
                        Cancel
                    </div>
                </div>
                </div>
            </div>
    
            );
    }

    else {
         
   
    return (
        <div className="card">
            <div className="content">
                <div className="header">{title}</div>
                <div className="meta">{formatDate(createdDate)}</div>
                <div className="description">{description}</div>
            
            </div>
            <div className="extra content">
            <div className="ui two buttons">
                <div 
                className="ui basic green button"
                onClick={() => setEditing(!isEditing)}
                >Edit</div>
                <div 
                className="ui basic red button" 
                onClick={() => deleteTask(taskId)}
                >Delete
                </div>
            </div>
            </div>
        </div>

        );  
    }
};

export default Task; 