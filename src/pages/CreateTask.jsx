

const CreateTask = () => {
    const currentDate = new Date().toISOString().split("T")[0];
    const handleCreateTask = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const des = form.des.value;
        const priority = form.priority.value;
        const deadline = form.deadline.value;
        console.log(title, des, priority, deadline);
        
    }
    return (
        <div>
        <div className="bg-[#F4F3F0] rounded-md  p-20 w-2/3 mx-auto">
          <h1 className="text-5xl  font-normal text-[#374151] text-center font-Rancho">
           Create New Task
          </h1>
          <form className="card-body" onSubmit={handleCreateTask}>
            <div className="flex w-full gap-6">
              <div className="w-1/2">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter Your Task Title"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  name="des"
                  placeholder="Enter Task Description"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="w-full">
            <label className="label">
                  <span className="label-text">Priority</span>
                </label>
            <select name="priority" className="input  min-w-full">
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
            <div className="form-field">
              <label className="form-label">Deadline</label>
              <div className="form-control">
                <input
                  name="deadline"
                  placeholder="Type here in BDT"
                  required
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