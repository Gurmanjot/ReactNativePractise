import { connect } from "react-redux";
import TodoList from "../components/Todolist";
import { toggleTodo, deleteTodo } from "../actions/index";

const mapStateToProps = state => ({
  todos: state.todos
});

// const mapDispatchToProps = dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id)),
//   deleteTodo: id => dispatch(deleteTodo(id))
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList);

export default connect(
  mapStateToProps,
  { toggleTodo, deleteTodo }
)(TodoList);
