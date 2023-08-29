import { createContext, useReducer } from "react";

const Context = createContext();
function ThemContext({ children }) {
  const changeData = (state, acton) => {
    switch (acton.type) {
      default:
        return state;
      case "CHANGE_COLOR":
        return { ...state, color: acton.payload }
    case "TOGGLE_OPENER":
        return {...state, isOpen: acton.payload}
    }
  };
  const [state, dispatch] = useReducer(changeData, {
    color: "red",
    isOpen: false,
  });
  const isOpener = () => {
    dispatch({
        type:"TOGGLE_OPENER",
        payload : !state.isOpen
    })
  };
  const changeColor = () => {
    dispatch({
      type: "CHANGE_COLOR",
      payload: "yellow",
    });
  };

  return (
    <Context.Provider value={{ ...state, changeColor, isOpener }}>
      {children}
    </Context.Provider>
  );
}
export { ThemContext, Context };
