import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class ImgAvatar extends React.Component {
    render(){
    return ( 
        <View style = {styles.containerImg}>
            <Image style={styles.photo} source={this.props.routeImg}></Image>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    containerImg:{
        alignItems: "center",
        justifyContent: "center", 
        width: 90,
        height: 90,
        borderColor: "pink",
        borderWidth:3,
        borderRadius: 100,
        overflow: "hidden",
    },
    photo:{
        flex: 1,
        resizeMode: "contain"
    }
})
