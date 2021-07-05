import React, { useState } from "react";
import { Text, View, Picker, StyleSheet, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Confirmation from './Confirmation';

const Booking = (props) => {

    const [selectedValue, setSelectedValue] = useState("1");
    const [showTime,setShowTime] = useState("6.00 PM")
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [confirm,setConfirm] = useState (false)

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    const confirmHandler = () =>{
       setConfirm(true) 
    }

    return (
        <View style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}>
        <Text> Please fill in below details to book your ticket</Text>            
            <Button title="Pick Your Date" onPress={showDatePicker} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <Text> Number of tickets: </Text>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 20, width: 75 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}            >
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
            </Picker>
            <Text> Show time: </Text>
            <Picker
                selectedValue={showTime}
                style={{ height: 20, width: 75 }}
                onValueChange={(itemValue, itemIndex) => setShowTime(itemValue)}            >
                <Picker.Item label="12PM" value="12:00 PM" />
                <Picker.Item label="6PM" value="6:00 PM" />                
            </Picker>
            <Button            
            title="CONFIRM"
            color="green"
            onPress={confirmHandler}
            />  

            {confirm ?
                <View> <Confirmation name={props.name} seats={selectedValue} time={showTime} /></View> :
                null    
                }

        </View>
    ) 
}

export default Booking;