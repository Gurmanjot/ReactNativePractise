const initial = {
  todoCollection: [],
  visible: "ALL"
};

const todos = (state = initial, action) => {
  // console.log(action.type);
  switch (action.type) {
    case "ADD_TODO":
      return {
        todoCollection: [
          ...state.todoCollection,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ],
        visible: "ALL"
      };
    case "TOGGLE_TODO":
      return {
        todoCollection: state.todoCollection.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
        visible: "ALL"
      };

    case "DELETE_TODO":
      return {
        todoCollection: state.todoCollection.filter(todo => todo.id !== action.id),
        visible: "ALL"
      };

    case "ALL":
      console.log("all agya");
      return {
        todoCollection: [...state.todoCollection],
        visible: "ALL"
      };

    case "PENDING":
      console.log("pending agya");
      return {
        todoCollection: [...state.todoCollection],
        visible: "PENDING"
      };

    case "COMPLETED":
      console.log("complete agya");
      return {
        todoCollection: [...state.todoCollection],
        visible: "COMPLETED"
      };

    default:
      return state;
  }
};

export default todos;
