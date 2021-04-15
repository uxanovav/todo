const ADD_TASK = "ADD-TASK";
const UPDATE_TASK = "UPDATE-TASK";
const DELETE_TASK = "DELETE-TASK";
const MARK_COMPLITED = "MARK-COMPLITED";
const MARK_IMPORTANT = "MARK-IMPORTANT";
const EDIT_TASK = "EDIT-TASK";
const CATEGORY_RENAME = "CATEGORY_RENAME";

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
      category: "Work",
      currentLabel: "",
      currentText: "",
    },
    {
      id: 1,
      itemLabel: "Anim quis elit enim.",
      itemBody: "Amet ullamco velit nostrud anim.",
      isComplited: false,
      isImportant: false,
      isEdit: false,
      category: "Shop",
      currentLabel: "",
      currentText: "",
    },
    {
      id: 2,
      itemLabel: "Voluptate minim occaecat ea velit.",
      itemBody:
        "Magna sint amet deserunt laborum dolore pariatur commodo mollit aliqua excepteur amet ex consequat fugiat.",
      isComplited: false,
      isImportant: false,
      isEdit: false,
      category: "Work",
      currentLabel: "",
      currentText: "",
    },
    {
      id: 3,
      itemLabel: "Consequat ex laboris irure fugiat reprehenderit eu.",
      itemBody: "Reprehenderit mollit deserunt id exercitation.",
      isComplited: false,
      isImportant: false,
      isEdit: false,
      category: "Shop",
      currentLabel: "",
      currentText: "",
    },
    {
      id: 4,
      itemLabel: "Tempor consequat adipisicing.",
      itemBody:
        "Esse ipsum irure sunt duis commodo sit aliquip eiusmod dolore minim qui duis pariatur.",
      isComplited: false,
      isImportant: false,
      isEdit: false,
      category: "Work",
      currentLabel: "",
      currentText: "",
    },
    {
      id: 5,
      itemLabel: "Ut id exercitation aliqua eiusmod excepteur.",
      itemBody: "Eu enim voluptate aliqua nostrud occaecat cupidatat ex.",
      isComplited: false,
      isImportant: false,
      isEdit: false,
      category: "Other",
      currentLabel: "",
      currentText: "",
    },
    {
      id: 6,
      itemLabel: "Irure deserunt nisi est.",
      itemBody: "Esse laboris nulla eiusmod excepteur ex duis nisi non.",
      isComplited: false,
      isImportant: false,
      isEdit: false,
      category: "Other",
      currentLabel: "",
      currentText: "",
    },
  ],
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
          return todoItem;
        }),
      };
    }
    case CATEGORY_RENAME: {
      return {
        ...state,
        todoListData: state.todoListData.map((todoItem) => {
          if (todoItem.category === payload.oldCategory) {
            todoItem.category = payload.newCategory;
          }
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

export const categoryRenameActionCreator = (newCategory, oldCategory) => {
  return {
    type: CATEGORY_RENAME,
    newCategory: newCategory,
    oldCategory: oldCategory,
  };
};
