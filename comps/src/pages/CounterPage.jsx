import { produce } from "immer";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE = "setValue";
const ADD_VALUE_TO_COUNT = "submitValue";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      // With immer
      state.count = state.count + 1;
      return;
    // without immer npm psckage
    // return {
    //   ...state,
    //   count: state.count + 1,
    // };
    case DECREMENT_COUNT:
      // With immer
      state.count = state.count - 1;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    case SET_VALUE:
      state.valueToAdd = action.payload;
      return;
    default:
      throw new Error("unexpected action type: " + action.type);
    // return state;
  }
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: SET_VALUE,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count: {state.count}</h1>
      <div className="flex flex-row justify-between w-64">
        <Button primary onClick={increment}>
          Increment
        </Button>
        <Button primary onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot </label>
        <input
          value={state.valueToAdd}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-100 border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
