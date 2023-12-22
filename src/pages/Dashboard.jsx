import { FaCirclePlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useServer from "../myHooks/useServer";
import { useEffect, useState } from "react";
import useAuth from "../myHooks/useAuth";

const Dashboard = () => {
    const navigate = useNavigate();
    const {user} = useAuth()
    const server = useServer();
    const [todos, setTodos] = useState([]);
    useEffect(() => {
      server.get(`/tasks?email=${user?.email}`)
      .then(res => setTodos(res.data))
    },[server, user?.email]);
    console.log(todos);
    return (
        <div className="lg:max-w-6xl md:max-w-2xl max-w-xs mx-auto grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3">
            {/* 1st column */}
            <div>
            <h2 className="text-2xl font-bold mb-4">Create a task</h2>
            <hr />
            <FaCirclePlus className="mt-3 text-3xl ml-12" onClick={() => navigate('/createTask')}></FaCirclePlus>
        </div>
        {/* 2nd column[Display prev tasks] */}
        <div>
        <h2 className="text-2xl font-bold mb-4">Previous task</h2>
            <hr />
        </div>
          {/* 3rd column[to-do lists] */}
          <div >
            <h2 className="text-2xl font-bold mb-4">To-do List</h2>
            <hr />
            <div className="mt-4 space-y-4">
              {
                todos?.map(todo => <div key={todo._id} className="card  bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                  <h2 className="">{todo.title}</h2>
                  {/* <div className="card-actions flex flex-col">
                    <button className="btn "></button>
                    <button className="btn "></button>
                  </div> */}
                </div>
              </div>)
              }
            </div>
        </div>
        {/* 4th column[ongoing] */}
        <div>
        <h2 className="text-2xl font-bold mb-4">Ongoing</h2>
            <hr />
        </div>
        {/* 5th column[completed] */}
        <div>
        <h2 className="text-2xl font-bold mb-4">Completed</h2>
            <hr />
        </div>
      
        </div>
    );
};

export default Dashboard;