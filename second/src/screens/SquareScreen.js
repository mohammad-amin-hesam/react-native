import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
const CHANGE_RED = "CHANGE_RED";
const CHANGE_BLUE = "CHANGE_BLUE";
const CHANGE_GREEN = "CHANGE_GREEN";

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_RED:
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case CHANGE_GREEN:
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case CHANGE_BLUE:
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = props => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: CHANGE_RED, amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: CHANGE_RED, amount: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: CHANGE_BLUE, amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: CHANGE_BLUE, amount: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: CHANGE_GREEN, amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: CHANGE_GREEN, amount: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
      <View>
        <Text>{`rgb(${red}, ${green}, ${blue})`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
