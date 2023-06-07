import { useEffect, useState } from "react";
import CodeFlask from 'codeflask';
import './Editor.css'
import { Link } from 'react-router-dom'
import { TaskService } from '../service/task.service.js'

const CodeFlask_CONTAINER_ID = 'flask-editor';

function Editor() {
    const [task, setTask] = useState('');

    useEffect(() => {
        const flask = new CodeFlask(`#${CodeFlask_CONTAINER_ID}`, {
            lineNumbers: true,
            language: 'js'
        });
        // flask.onUpdate((code) => {
        //     // do something with code here.
        //     // this will trigger whenever the code
        //     // in the editor changes.
        //     console.log('code changes: ', code);
        // });
        const new_content = 'let it = "go"';
        flask.updateCode(new_content);
        setTask(TaskService.getRandomTask());
    });

    return (
        <div className='editor-wrapper'>
            <header>
                <Link to="/">Live code session</Link>
            </header>
            <div className="task">
                <div dangerouslySetInnerHTML={{ __html: task }} />
            </div>
            <div className="container">
                <div id={CodeFlask_CONTAINER_ID} style={{ width:'100%', height:500, position: 'relative'}} />
            </div>
            <footer>(c) Copyright {new Date().getFullYear()}</footer>
        </div>
    )
}

export default Editor