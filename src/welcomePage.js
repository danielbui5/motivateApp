import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './styles';

function Welcome({ navigation }) {
    const [pressButton, setButtonPressed] = useState(false);

    // Function to navigate to the next page when the button is pressed
    const handlePress = () => {
        setButtonPressed(true);
        // Navigate to the next page
        navigation.navigate('SelectAge');
    };

    return (
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View style={{marginTop: 240}}>
                <Text style={styles.setupDisplayText}>  
                    Welcome to Motivate
                </Text>
            </View>    

            {/* Pressable button triggering handlePress */}
            <View style={{marginTop: 330}}>
                <Pressable onPress={handlePress}>
                    {/* <View> */}
                        <FontAwesomeIcon icon={faCircleChevronRight} size={40} />
                    {/* </View>  */}
                </Pressable>
            </View>
        </View>
    );
}

export default Welcome;
