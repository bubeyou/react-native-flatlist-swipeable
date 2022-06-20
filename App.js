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
import { Swipeable } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons/Ionicons";

const App = () => {
  const defaultEmployees = [
    { id: 10, name: "Alesandro Del Piero" },
    { id: 20, name: "Christaino Ronaldo" },
    { id: 30, name: "Rudd Van Nistelrooy" },
  ];
  const [employees, setEmployees] = useState(defaultEmployees);
  const deleteEmployee = (id) => {
    const tempEmployee = employees.filter((em) => {
      return em.id != id;
    });
    setEmployees(tempEmployee);
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id.toString}
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
      >
        ItemSeparateComponent ={" "}
        {() => {
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
      </FlatList>
    </SafeAreaView>
  );
};

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

export default App;
