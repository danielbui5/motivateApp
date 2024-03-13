import React, { useState } from "react";
import { Pressable, Text, TextInput, View, Keyboard } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from "./styles";

function NumNotifications({ navigation }) {
    const [notifInput, setNotifInput] = useState('');
    const [isInputValid, setInputValid] = useState(false);

    // Function to handle changes in text input
    const handleNotifInput = (text) => {
        // Limit the input to 2 characters
        if (/^\d{0,2}$/.test(text)) {
            setNotifInput(text);
            setInputValid(parseInt(text, 10) <= 20); // Set input validity state
            if (text.length === 2) {
                Keyboard.dismiss(); // Close the keyboard when input length is 2
            }
        }
    };

    // Function to handle navigation to the next page
    const handlePress = () => {
        if (isInputValid) {
            navigation.navigate('SelectRandomSpecified');
        }
    };

    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', padding: 30 }}>
            <View style={{ marginTop: 175 }}>
                <Text style={styles.setupDisplayText}>  
                    How many notifications would you like to receive from us daily?
                </Text>
            </View>

            {/* Setup text to be aligned with input */}
            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 100, borderBottomWidth: 2, paddingBottom: 5 }}>
                <Text style={styles.buttonDefaultText}>
                    Number: 
                </Text>
                {/* Place where number will be inputted */}
                <View style={{ paddingLeft: 3 }}>
                    <TextInput
                        editable 
                        placeholder="..."
                        textAlign="center"
                        maxLength={2} 
                        value={notifInput}
                        onChangeText={handleNotifInput}
                        keyboardType="numeric"
                        style={styles.buttonDefaultText}
                    />
                </View>
            </View>

            {/* Conditionally displays warning if input is greater than 20 */}
            {parseInt(notifInput, 10) > 20 ? (
                <Text style={{marginTop: 30, textAlign:'center', color: 'red', fontWeight: 'normal'}}>
                    You can only choose a number equal to 20 or less
                </Text>
            ) : null}
            
            {/* Conditionally renders the navigation button if input is greater than 20 */}
            {isInputValid ? (
                <View style={{ marginTop: 170 }}>
                    <Pressable onPress={handlePress}>
                        <View>
                            <FontAwesomeIcon icon={faCircleChevronRight} size={40} />
                        </View> 
                    </Pressable>
                </View>
            ) : null}
        </View>
    );
}

export default NumNotifications;