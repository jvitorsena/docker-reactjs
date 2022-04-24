import React, { useState, useEffect } from "react";

export default function TaskTable() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            // const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=50');
            const response = await fetch('http://localhost:3080/tarefas');
            const postsData = await response.json();
            setTasks(postsData.results);
        };
        fetchPosts();
    }, []);

    console.log(tasks)

    return (
        <div>
            {/* {tasks.map((task) => {
                <div key={task.div}>

                </div>
            })} */}
        </div>
    )
}