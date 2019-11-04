import React from 'react';
import {ScrollView,View,TextInput,TouchableOpacity,Image,StyleSheet,Text,Alert,Vibration} from 'react-native';
const styles=StyleSheet.create({
    container:{
        display:"flex",
        flex:1,
        padding:10,
        justifyContent:'space-around'
    },
    header:{
        fontWeight:'bold',
        fontSize:40,
    },
    inputView:{
        width:'90%',
        height:'auto',
        display:'flex',
        marginBottom:20
    },
    inputContainer:{
        height:'auto',
        width:'100%'
    },
    button:{
        width:100,
        height:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'purple',
        elevation:10
    },
    input:{
        borderBottomWidth:1,
        height:40,
        marginTop:5
    }
})

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            pass:'',
            mobile:'',
            validityName:false,
            validityEmail:false,
            validityMobile:false,
            validityPass:false,
            valid:true
        }
    }
    setName= (event,text) =>{
        const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const re = /^\d{10}$/;
        if(event==='name')
        this.setState({name:text,validityName:false})
        else if(event==='email'){
            this.setState({email:text},()=>{
                if(reg.test(this.state.email))
                this.setState({validityEmail:false})
                else
                this.setState({validityEmail:true})
            })
        }
        else if(event === 'mobile' ){
            this.setState({mobile:text},()=>{
                if(re.test(this.state.mobile))
                this.setState({validityMobile:false})
                else
                this.setState({validityMobile:true})
            })
        }
        else if(event === 'pass')
        this.setState({pass:text,validityPass:false},()=>{
            if(this.state.pass.length < 6 )
            this.setState({validityPass:true})
            else
            this.setState({validityPass:false})
        })

       // this.setState({[event]:text})
    }
    show=async()=>{
        if(this.state.name==='' )
        this.setState({validityName:true})
        if(this.state.email==='')
        this.setState({validityEmail:true})
        if(  this.state.pass==='')
        this.setState({validityPass:true})
        if( this.state.mobile==='')
        this.setState({validityMobile:true})
        
        if(await !this.state.validityEmail && await !this.state.validityMobile && await !this.state.validityName && await !this.state.validityPass){
            Alert.alert('Data Submitted')
           // Vibration.vibrate(10000)
            this.setState({validityEmail:false,validityName:false,validityMobile:false,validityPass:false})
        }
        
        
        
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.header}>SignUp</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.inputView}>
                        <Text>Name</Text>
                        <TextInput 
                        onChangeText={(text)=>this.setName('name',text)}
                        value={this.state.name}
                        style={{...styles.input,borderBottomColor:this.state.validityName?'red':'black'}}/>
                        {this.state.validityName && <Text style={{color:'red'}}>Invalid Name</Text>}
                        
                    </View>
                    <View style={styles.inputView}>
                        <Text>Email</Text>
                        <TextInput 
                        onChangeText={(text)=>this.setName('email',text)}
                        value={this.state.email}
                        style={{...styles.input,borderBottomColor:this.state.validityEmail?'red':'black'}}
                        keyboardType='email-address'
                        />
                        {this.state.validityEmail && <Text style={{color:'red'}}>Invalid Mail</Text>}
                        
                    </View>
                    <View style={styles.inputView}>
                        <Text>Mobile</Text>
                        <TextInput 
                        onChangeText={(text)=>this.setName('mobile',text)}
                        value={this.state.mobile}
                        style={{...styles.input,borderBottomColor:this.state.validityMobile?'red':'black'}}
                        keyboardType='number-pad'
                        />
                        {this.state.validityMobile && <Text style={{color:'red'}}>Invalid Mobile Number</Text>}
                        
                    </View>
                    <View style={styles.inputView}>
                        <Text>Password</Text>
                        <TextInput 
                        onChangeText={(text)=>this.setName('pass',text)}
                        value={this.state.pass}
                        style={{...styles.input,borderBottomColor:this.state.validityPass?'red':'black'}}
                        secureTextEntry={true}
                        />
                        {this.state.validityPass && <Text style={{color:'red'}}>Invalid Password</Text>}
                        
                    </View>
                </View>
                <TouchableOpacity style={styles.button}  onPress={this.show}><Text style={{color:'white'}}>ADD</Text></TouchableOpacity>
            </View>
        )
    }
}
export default Form;