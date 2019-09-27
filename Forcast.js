import React from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
export default class Forecast extends React.Component {
    render() {
    return (
    <View style = {styles.container}>
    <Text style={styles.padding}>{this.props.main}</Text>
    <Text style={styles.padding}>{this.props.description}</Text>
    <Text style={styles.padding}>{this.props.temp}°C</Text>
    
    </View>
    );
    }
   }
   const styles = StyleSheet.create({
    padding:{
        fontSize:30,color:'white',textAlign:"center"
    },
    
    container: { paddingTop: 15 ,
    backgroundColor:'black',
    opacity: 0.7,
    },
    backdrop: { width: '100%', height: '100%',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    
    },
    
   });
   
   