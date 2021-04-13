const ADD_TASK = "ADD-TASK";
const UPDATE_TASK = "UPDATE-TASK";
const DELETE_TASK = "DELETE-TASK";
const MARK_COMPLITED = "MARK-COMPLITED";
const MARK_IMPORTANT = "MARK-IMPORTANT";

let initialState = {
  todoListData: [
    {
      id: 0,
      itemLabel: "First task",
      itemBody:
        "Aliquip esse anim commodo tempor adipisicing minim mollit qui anim.",
      isComplited: false,
      isImportant: true,
      category: "other",
    },
  ],
};

export default function todoListReducer(state = initialState, payload) {
  switch (payload.type) {
    case ADD_TASK: {
      let newTask = {
        id:
          state.todoListData.length != 0
            ? state.todoListData[state.todoListData.length - 1].id + 1
            : 0,
        itemLabel: "newTask",
        itemBody: payload.todoListItem,
        isComplited: false,
        isImportant: true,
        category: "other",
      };
      return {
        ...state,
        todoListData: [...state.todoListData, newTask],
      };
    }
    case DELETE_TASK: {
      debugger;
      return {
        ...state,
        todoListData: state.todoListData.filter(
          (todoItem) => todoItem.id != payload.id
        ),
      };
    }
    default: {
      return state;
    }
  }
}

export const addTaskActionCreator = (payload) => {
  return { type: ADD_TASK, todoListItem: payload };
};

export const deleteTaskActionCreator = (id) => {
  debugger;
  return { type: DELETE_TASK, id: id };
};
