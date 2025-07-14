const Task = (props) => {
  return(
    <div>
      Task
    </div>
  );
}
const App = () => {
  const state = {
    data: [
      { id: 1, title: "bath", completed: false },
      { id: 2, title: "dinner", completed: true },
      { id: 3, title: "dishwash", completed: false }
    ],
  };
  return (
    <div>
      <Task />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);