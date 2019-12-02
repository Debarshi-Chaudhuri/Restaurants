import React from 'react';
import { View,Text } from "react-native";
class User extends React.Component{
    
    render(){
        return(
            <View style={styles.container}>
                <Text>User</Text>
            </View>
        )
    }
}
export default User;
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