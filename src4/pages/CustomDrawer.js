import React from 'react';
import {View,TouchableOpacity,Text} from 'react-native';

class CustomDrawer extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.touchable} onPress={()=>{
                        this.props.navigation.navigate('home')
                    }} >
                    <View style={styles.container2}>
                        <Text style={{color:'white'}}>GO HOME</Text>
                    </View>
                        
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable} onPress={()=>{
                        this.props.navigation.navigate('user')
                    }} >
                    <View style={styles.container2}>
                        <Text style={{color:'white'}}>GO USER</Text>
                    </View>
                        
                </TouchableOpacity>
            </View>
        )
    }
}
export default CustomDrawer;
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