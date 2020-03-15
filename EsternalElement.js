import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImgAvatar from './ImgAvatar';

export default class EsternalElement extends React.Component{
    constructor(props){
        super(props);
        this.props.component = {
            img: " ",
            name: " ",
            surname: " ",
            role: " ",
        }
    }
    render(){
     return ( 
  <View style = {styles.container}>
    <ImgAvatar routeImg={this.props.component.img}/>
    <Text> {"Name: " + this.props.component.name}</Text> 
    <Text> {"Surname: " + this.props.component.surname}</Text> 
    <Text> {"Role: " + this.props.component.role}</Text> 
  </View >
        );   
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",  
        padding: 10,
        borderBottomWidth: 1      
    }
})
