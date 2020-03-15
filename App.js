import React from 'react';
import { StyleSheet, View, ScrollView, Text} from 'react-native';
import EsternalElement from "./EsternalElement"
import {comonentpass} from "./ComponentPass"
export default function App() {
  return ( 
  <View style = {styles.container}>
    <View style = {styles.header}>
      <Text style = {styles.textHeader}>Juventus players</Text>
    </View>
    <ScrollView style = {styles.scrollviewstyle}>{comonentpass.users.map((user, index) => (
    <EsternalElement key = {index} component={user}/>
   ))}
    </ScrollView>
  </View >
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 100,
    borderBottomWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  scrollviewstyle:{
    flex: 1
  },
  textHeader: {
    color: "black",
    fontSize: 25,
  }
});