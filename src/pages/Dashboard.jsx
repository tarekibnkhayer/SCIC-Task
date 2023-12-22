import { FaCirclePlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div className="lg:max-w-6xl md:max-w-2xl max-w-xs mx-auto grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3">
            {/* 1st column */}
            <div>
            <h2>Want to create a task</h2>
            <FaCirclePlus className="mt-3 text-3xl ml-12" onClick={() => navigate('/createTask')}></FaCirclePlus>
        </div>
        {/* 2nd column[Display all tasks] */}
        <div>
           Previous Task
        </div>
          {/* 3rd column[to-do lists] */}
          <div >
            To-do
        </div>
        {/* 4th column[ongoing] */}
        <div>
           Ongoing
        </div>
        {/* 5th column[completed] */}
        <div>
            completed
        </div>
      
        </div>
    );
};

export default Dashboard;