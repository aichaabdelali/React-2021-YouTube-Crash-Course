const Task = ({ task }) => {
  return (
    <div>
      <h3>{task.text}</h3>
      <h5>{task.date}</h5>
    </div>
  );
};

export default Task;
