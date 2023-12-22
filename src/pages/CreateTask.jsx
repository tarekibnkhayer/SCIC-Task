import useAuth from "../myHooks/useAuth";
import useServer from "../myHooks/useServer";
import { useForm } from "react-hook-form";


const CreateTask = () => {
  const {user} = useAuth();
  const server = useServer();
  const { register, handleSubmit } = useForm();
    const currentDate = new Date().toISOString().split("T")[0];
    const onSubmit = data => {
        const task = {
         title: data.title,
         des: data.des,
         priority: data.priority,
         deadline: data.deadline,
         email: user.email
        }
        console.log(task);
        server.post('/tasks', task)
        .then(res => console.log(res.data))
        .catch(err => console.error(err));
    }
    return (
        <div>
        <div className="bg-[#F4F3F0] rounded-md  p-20 w-2/3 mx-auto">
          <h1 className="text-5xl  font-normal text-[#374151] text-center font-Rancho">
           Create New Task
          </h1>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full gap-6">
              <div className="w-1/2">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                {...register("title", {required: true})}
                  type="text"
                  placeholder="Enter Your Task Title"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="w-1/2">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  {...register('des', {required: true})}
                  type="text"
                  placeholder="Enter Task Description"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="w-full">
            <label className="label">
                  <span className="label-text">Priority</span>
                </label>
            <select
             {...register('priority', {required: true})}
             className="input  min-w-full">
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
            <div className="form-field">
              <label className="form-label">Deadline</label>
              <div className="form-control">
                <input
                  {...register("deadline", {required: true})}
                  placeholder="Type here in BDT"
                  type="date"
                  min={currentDate}
                  className="input max-w-full"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Create Task"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    );
};

export default CreateTask;