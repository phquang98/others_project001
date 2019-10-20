// Import built-in compo
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import uuid from "uuid";

// Import custom compo
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

// Stylesheet section
const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});

// Function compo
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]); // separate state to manage our goals
  const [isAddMode, setIsAddMode] = useState(false);

  // debugging part, checking if delete the right goal ele
  let courseGoalsStr = "";
  for (let i = 0; i < courseGoals.length; i++) {
    courseGoalsStr += `
    ID: ${courseGoals[i].id} | Value: ${courseGoals[i].value} `;
  }
  console.log("---");
  console.log("Rendering the app");
  console.log("---");
  console.log(`The arr contains all the goals are: ${courseGoalsStr}`);

  const addGoalHandler = goalTitle => {
    // this must stay here to manage the [courseGoals, setCourseGoals]
    // also App compo are only things access to flatlist and goalinput
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: uuid.v4(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    // hdebug example, check if delete the goal ele correctly
    console.log(`TO BE DELETED: ${goalId}`);
    console.log(courseGoals);
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId); // returns a new arr based on old arr and what the func param do
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}
