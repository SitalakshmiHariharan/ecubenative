import React, {useState} from 'react'
import { View, Text, StyleSheet,Image, Button, Alert } from 'react-native'
import {  SafeAreaView } from 'react-native-safe-area-context';
import Details from './Details';
import Booking from './Booking';

export default function ListItem({item,key}) {

    const [show,setShow] = useState(false);
    const [booking,setBooking] = useState(false);

    const detailsHandler = () => {        
        setShow(true)       
    } 

    const bookingHandler = () =>{
        setBooking(true)
    }

    return (       
        <SafeAreaView styles={styles.listItem} key={key}>
            <Text styles={styles.textval}>
            {item.name}
            </Text>
           <Image source={{uri:item.imageUrl}} style={styles.placeImage}/>
        
           <Button  
            styles = {styles.buttons}          
            title="Movie Details"
            color="black"
            onPress={detailsHandler}
            />  
            <Button            
            title="Book Now"
            color="coral"
            onPress={bookingHandler}
            />  
            
            {show ?   
            <View> <Details name={item.name} genre={item.type} rate={item.rate} desc={item.desc} /> </View> :
            null}
            
            {booking ?
            <View> <Booking name={item.name}/></View> :
            null    
            }
            
        </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({
    listContainer:{
        width:"70%",
        padding:10,
        alignItems:'center',        
        justifyContent:'center'
      },
    listItem:{
        width:"80%",
        padding:35,
        marginTop:2,
        color:'#191970',
        backgroundColor: '#eee',
        alignSelf:'stretch',
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    placeImage:{
        marginRight:18,
        marginLeft:150,
        height:150,
        width:150,
    },
    textval:{
        textAlign:'center',
        marginLeft:50,
        fontSize:30,   
    }   
})
