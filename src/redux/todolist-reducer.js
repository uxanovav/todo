const ADD_TASK = "ADD-TASK";
const UPDATE_TASK = "UPDATE-TASK";
const DELETE_TASK = "DELETE-TASK";
const MARK_COMPLITED = "MARK-COMPLITED";
const MARK_IMPORTANT = "MARK-IMPORTANT";
const EDIT_TASK = "EDIT-TASK";

let initialState = {
  todoListData: [
    {
      id: 0,
      itemLabel: "First task",
      itemBody:
        "Aliquip esse anim commodo tempor adipisicing minim mollit qui anim.",
      isComplited: false,
      isImportant: false,
      isEdit: false,
      category: "other",
      currentLabel: "",
      currentText: "",
    },
  ],
  categoryData: [{ label: "work" }, { label: "other" }, { label: "buy" }],
};

export default function todoListReducer(state = initialState, payload) {
  switch (payload.type) {
    case ADD_TASK: {
      let newTask = {
        id:
          state.todoListData.length !== 0
            ? state.todoListData[state.todoListData.length - 1].id + 1
            : 0,
        itemLabel: payload.todoListItem.newLabel,
        itemBody: payload.todoListItem.newText,
        isComplited: false,
        isImportant: false,
        isEddited: false,
        category: payload.todoListItem.newCategory,
        currentLabel: payload.todoListItem.newLabel,
        currentText: payload.todoListItem.newLabel,
      };
      return {
        ...state,
        todoListData: [...state.todoListData, newTask],
      };
    }
    case DELETE_TASK: {
      return {
        ...state,
        todoListData: state.todoListData.filter(
          (todoItem) => todoItem.id !== payload.id
        ),
      };
    }
    case MARK_IMPORTANT: {
      return {
        ...state,
        todoListData: state.todoListData.map((todoItem) => {
          if (todoItem.id === payload.id) {
            todoItem.isImportant = !todoItem.isImportant;
          }
          return todoItem;
        }),
      };
    }
    case MARK_COMPLITED: {
      return {
        ...state,
        todoListData: state.todoListData.map((todoItem) => {
          if (todoItem.id === payload.id) {
            todoItem.isComplited = !todoItem.isComplited;
          }
          return todoItem;
        }),
      };
    }
    case EDIT_TASK: {
      return {
        ...state,
        todoListData: state.todoListData.map((todoItem) => {
          if (todoItem.id === payload.id) {
            todoItem.isEdit = !todoItem.isEdit;
          } else {
            todoItem.isEdit = false;
          }
          return todoItem;
        }),
      };
    }
    case UPDATE_TASK: {
      return {
        ...state,
        todoListData: state.todoListData.map((todoItem) => {
          if (todoItem.id === payload.id) {
            todoItem.itemLabel = payload.newLabel;
            todoItem.itemBody = payload.newText;
            todoItem.category = payload.newCategory;
          }
          debugger;

          return todoItem;
        }),
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
  return { type: DELETE_TASK, id: id };
};

export const markImportantActionCreator = (id) => {
  return { type: MARK_IMPORTANT, id: id };
};

export const markComplitedActionCreator = (id) => {
  return { type: MARK_COMPLITED, id: id };
};

export const updateTaskAcionCreator = (id, newLabel, newText, newCategory) => {
  return {
    type: UPDATE_TASK,
    id: id,
    newLabel: newLabel,
    newText: newText,
    newCategory: newCategory,
  };
};

export const editTaskAcitonCreator = (id) => {
  return { type: EDIT_TASK, id: id };
};
