import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  const defaultEmployees = [
    { id: "11", name: "Alesandro Del Piero" },
    { id: "202", name: "Christaino Ronaldo" },
    { id: "310", name: "Rudd Van Nistelrooy" },
    { id: "40323", name: "David Beckham" },
  ];
  const [employees, setEmployees] = useState(defaultEmployees);
  const deleteEmployee = (id) => {
    console.log("delete account id = $id");
    const tempEmployee = employees.filter((employee) => {
      return employee.id != id;
    });
    setEmployees(tempEmployee);
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Swipeable
              renderRightActions={() => {
                return (
                  <TouchableOpacity
                    style={styles.deleteContainer}
                    onpress={() => deleteEmployee(item.id)}
                  >
                    <Ionicons name="trash" size={28} color="white" />
                  </TouchableOpacity>
                );
              }}
            >
              <View style={styles.child}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            </Swipeable>
          );
        }}
        ItemSeparateComponent={() => {
          return (
            <View
              style={{
                borderBottomColor: "lightgrey",
                borderBottomWidth: 1,
                marginHorizontal: 10,
              }}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: "stretch",
  },
  child: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    height: 60,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    color: "lightslategrey",
    textAlign: "left",
    padding: 20,
  },
  deleteContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    width: "20%",
  },
});
