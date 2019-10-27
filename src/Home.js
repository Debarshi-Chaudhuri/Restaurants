import React,{ Component } from "react";
import { View,Text,Image,TouchableOpacity } from "react-native";
import messi from '../assets/messi.jpg'
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            name:''
        }
    }
    change=()=>{
        this.setState({name:'Zidane'})
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textHeader}>Hello World</Text>
                <Image source={{uri:'https://e0.365dm.com/19/10/768x432/skysports-lionel-messi-barcelona_4814112.jpg?20191023224555'}} style={styles.image} />
                <Image source={messi} style={styles.image} />
                <Text>{this.state.name}</Text>
                <TouchableOpacity style={styles.touchable} onPress={this.change}>
                    <Text style={styles.textButton}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles={
    container:{
        display:'flex',
        flex:1,
        borderColor:'red',
        borderWidth:1,
        alignItems:'center'
    },
    textButton:{
        textAlign:'center'
    },
    textHeader:{
        fontSize:20,
        color:'red'
    },
    image:{
        width:200,
        height:100
    },
    touchable:{
        borderWidth:1,
        borderColor:'blue',
        width:60,
        height:40
    }
}
export default Home;