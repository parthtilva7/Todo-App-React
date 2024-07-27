import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Header from "./src/components/Header/Header";
import Tasks from "./src/components/Tasks/Tasks";
import Form from "./src/components/Form/Form";
import styles from "./src/styles/main";
import uuid from "react-uuid";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();
export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      description: "Walk the dog",
      done: true,
    },
    {
      id: uuid(),
      description: "Wash the car",
      done: false,
    },
    {
      id: uuid(),
      description: "Finish the lab",
      done: false,
    },
  ]);
  const handleAddTask = (taskDescription, taskDone) => {
    const updatedTasks = [...tasks];
    updatedTasks.push({
      id: uuid(),
      description: taskDescription,
      done: taskDone,
    });
    setTasks(updatedTasks);
  };
  const handleStatusChange = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  const handleTaskRemoval = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="List">
            {(props) => (
              <SafeAreaView style={{ flex: 1 }}>
                <Tasks
                  {...props}
                  tasks={tasks}
                  onStatusChange={handleStatusChange}
                  onTaskRemoval={handleTaskRemoval}
                />
              </SafeAreaView>
            )}
          </Tab.Screen>
          <Tab.Screen name="Add">
            {(props) => (
              <SafeAreaView style={{ flex: 1 }}>
                <Form {...props} onAddTask={handleAddTask} />
              </SafeAreaView>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
