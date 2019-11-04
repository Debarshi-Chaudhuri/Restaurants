import React,{ Component } from "react";
import { View,Text,Image,TouchableOpacity,ScrollView } from "react-native";
import messi from '../assets/messi.jpg'
class Restaurants extends Component{
    constructor(props){
        super(props);
        this.state={
            name:''
        }
    }
    change=()=>{
        this.setState({name:'Thank You'})
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textHeader}>Restaurants</Text>
                <Image source={{uri:'https://nrai.org/site/wp-content/uploads/2018/04/Barbeque-Nation-Mahadevapura-1-e1523267116192-660x400.jpg'}} style={styles.image} />
                <View style={styles.imageContainer}>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Image source={{uri:'https://www.barbequenation.com/wp-content/uploads/2019/03/Malabar-Muttai-Roast-600x400.jpg'}} style={styles.imageList} />
                        <Image source={{uri:'https://www.barbequenation.com/wp-content/uploads/2018/12/paneer.png'}} style={styles.imageList} />
                        <Image source={{uri:'https://www.barbequenation.com/wp-content/uploads/2019/03/ricepalak-600x802.jpg'}} style={styles.imageList} />
                        <Image source={{uri:'https://www.barbequenation.com/wp-content/uploads/2018/12/dare-600x554.png'}} style={styles.imageList} />
                        <Image source={{uri:'https://www.barbequenation.com/wp-content/uploads/2019/03/riceball-600x764.jpg'}} style={styles.imageList} />
                        <Image source={{uri:'https://www.barbequenation.com/wp-content/uploads/2018/12/cake-1.png'}} style={styles.imageList} />
                        <Image source={{uri:'https://www.barbequenation.com/wp-content/uploads/2018/12/prawn.png'}} style={styles.imageList} />
                    </ScrollView>
                </View>
                <Text style={styles.textContent} >The first restaurant opened in January 2006 in Mumbai, and the following year, a second outlet was opened in Bangalore. In 2007, additional restaurants were opened in Bangalore and Hyderabad.As of 2008, the company had plans to open centres across Dubai, Singapore, and the United Kingdom, after establishing itself as a major restaurant chain in India.</Text>
                <View style={styles.buttonContent}>
                    <TouchableOpacity style={styles.touchable} onPress={this.change}>
                        <Text style={styles.textButton}>Book Now</Text>
                    </TouchableOpacity>
                    <Text style={styles.textThanking}>{this.state.name}</Text>
                </View>
                
                
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
        padding:10
    },
    buttonContent:{
        display:'flex',
        alignItems:'center'
    },
    textContent:{
        marginTop:10,
        fontSize:15,
        textAlign:'center',
    },
    textButton:{
        textAlign:'center',
    },
    textHeader:{
        fontSize:40,
        color:'red',
        fontWeight:'bold'
    },
    image:{
        height:250,
        width:340,
        marginTop:10
    },
    imageList:{
        marginTop:10,
        marginRight:10,
        width:100,
        height:100
    },
    imageContainer:{
        display:'flex',
        flexDirection:'row',
    },
    touchable:{
        borderWidth:1,
        borderColor:'blue',
        width:100,
        height:30,
        justifyContent:'center',
        marginTop:10
    },
    textThanking:{
        marginTop:10,
        textAlign:'center',
        fontWeight:'bold'
    }
}
export default Restaurants;
/* 
import Dimensions
const width=Dimensions.get('Auto).width
now in styles width=width
*/