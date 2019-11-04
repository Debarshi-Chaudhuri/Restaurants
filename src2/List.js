import React from 'react';
import {ScrollView,View,Text,TouchableOpacity,Image,FlatList,Alert} from 'react-native';

const styles={
    container:{
        display:'flex',
        flex:1,
        alignItems:'center',
        padding:10,
    },
    list:{
        width:'100%',
        height:60,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        marginBottom:10,
        display:'flex',
        flex:1,
        flexDirection:'row',
    },
    scroll:{
        width:'100%',
        display:'flex',
        flex:1,
    },
    image:{
        width:50,
        height:50,
        borderRadius:25
    },
    listLeft:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexBasis:'20%'
    },
    listRight:{
        display:'flex',
        flex: 1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingLeft:10
    },
    online:{
        width:10,
        height:10,
        borderRadius:5,
        right:10,
        position:'absolute',
    },
    button:{
        width:100,
        height:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue',
        elevation:10,
    }
}
const message=(name)=>{
    Alert.alert(name)
}
const Item=(props)=>{
    return(
        <TouchableOpacity style={styles.list} onPress={()=>message(props.item.name)}>
            <View style={styles.listLeft}>
                <Image style={styles.image} source={{uri:props.item.imageUrl}}/>
            </View>
            <View style={styles.listRight}>
                <Text>{props.item.name}</Text>
                <View style={{
                    ...styles.online,
                    backgroundColor:props.item.status === 'online' ? 'green':'red'}}></View>
            </View>
        </TouchableOpacity>
    )
}
class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    name:'A',
                    imageUrl:'https://vignette.wikia.nocookie.net/theoffice/images/9/96/Prisonmike.png/revision/latest/scale-to-width-down/350?cb=20100327171549',
                    status:'online'
                },
            ]
        }
    }
    
    add=()=>{
        const newItem={
            name:'A',
            imageUrl:'https://vignette.wikia.nocookie.net/theoffice/images/9/96/Prisonmike.png/revision/latest/scale-to-width-down/350?cb=20100327171549',
            status:'online'
        }
        this.setState({data:[...this.state.data,newItem]})
    }
    renderList=({item})=>{
        return(<Item item={item} />)
    }
    render(){
        return(
            <View style={styles.container}>
                {/*<ScrollView >
                    {
                        this.state.data.map(
                            (item)=><Item key={item.name} item={item} />
                        )
                    }
                </ScrollView>*/}
                <FlatList 
                    style={styles.scroll}
                    data={this.state.data}
                    keyExtractor={item=>item.name}
                    renderItem={this.renderList}
                />
                <TouchableOpacity onPress={this.add} style={styles.button}>
                    <Text style={{color:'white'}}>ADD</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default List;
