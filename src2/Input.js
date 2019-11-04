import React from 'react';
import {ScrollView,View,TextInput,TouchableOpacity,Image,StyleSheet,Text,Alert} from 'react-native';
const styles=StyleSheet.create({
    container:{
        display:"flex",
        flex:1,
        padding:10,
        borderColor:'red',
        borderWidth:1
    },
    inputView:{
        width:'100%',
        height:40,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignContent:'center'
    },
    button:{
        width:100,
        height:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue',
        elevation:10,
    },
    input:{
        borderColor:'blue',
        borderWidth:1,
        width:700,
        flex:1,
    }
})

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:''
        }
    }
    setName=text=>{
        this.setState({name:text})
    }
    show=()=>{
        Alert.alert(this.state.name)
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <TextInput 
                    onChangeText={this.setName}
                    value={this.state.name}
                    placeholder='Enter name'
                    style={styles.input}/>
                    <TouchableOpacity style={styles.button}  onPress={this.show}><Text style={{color:'white'}}>ADD</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default Input;