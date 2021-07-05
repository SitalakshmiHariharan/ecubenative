import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Confirmation = (props) => {
    return (
        <View>
            <Text> {props.seats} tickets has been booked successfully for the {props.time} show for {props.name} </Text>
            <Text> Thank You. Enjoy your show!!</Text>
        </View>
    )
}

export default Confirmation;