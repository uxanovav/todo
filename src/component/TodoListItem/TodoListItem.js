const TodoListItem = ({
  itemLabel,
  itemBody,
  isComplited,
  isImportant,
  category,
}) => {
  return (
    <div>
      <ul>
        <li>{itemLabel}</li>
        <li>{itemBody}</li>
      </ul>
    </div>
  );
};

export default TodoListItem;
