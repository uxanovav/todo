const TodoListItem = ({
  id,
  itemLabel,
  itemBody,
  isComplited,
  isImportant,
  category,
  deleteTask,
}) => {
  const onDelete = () => {
    debugger;
    deleteTask(id);
  };
  return (
    <div>
      <ul>
        <li>{itemLabel}</li>
        <li>{itemBody}</li>
      </ul>
      <button onClick={onDelete}>x</button>
    </div>
  );
};

export default TodoListItem;
