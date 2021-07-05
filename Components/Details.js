import React from 'react'
import { Text, View } from 'react-native'


const Details = (props) => {
    return (
        <View style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}>
           <Text> Details of {props.name} </Text> 
           <Text> GENRE: {props.genre} </Text>
           <Text> RATING: {props.rate} </Text>
           <Text> SYNOPSIS: {props.desc} </Text>
        </View>
    )
}

export default Details;