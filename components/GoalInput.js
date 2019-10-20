import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const borderColor = "green";

const styles = StyleSheet.create({
  secContainer: {
    // flexDirection: "column" this is default
    flex: 1, // take as much space as parent ele gives , else only taks as much space as child eles do
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },
  button: {
    width: "40%" // 40% from parent - button container View compo here
  }
});

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    // update the state each time textinput receive keystroke
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.secContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler} // takes in a func execute each time this receives a key stroke
          value={enteredGoal} // pass text back into that textinput
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
