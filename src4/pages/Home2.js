import React from 'react';
import { View,Text,TouchableOpacity } from "react-native";
class Home2 extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Home</Text>
                <TouchableOpacity style={styles.touchable} onPress={()=>{
                    this.props.navigation.toggleDrawer()
                }} >
                    <View style={styles.container2}>
                        <Text style={{color:'white'}}>GO</Text>
                    </View>
                    
                </TouchableOpacity>
                
            </View>
        )
    }
}
export default Home2;
const styles={
    container:{
        display:'flex',
        flex:1,
        borderColor:'red',
        borderWidth:1,
        alignItems:'center'
    },
    touchable:{
        borderWidth:1,
        borderColor:'blue',
        width:60,
        height:40
    },
    container2:{
        display:'flex',
        flex:1,
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center'
    },
}