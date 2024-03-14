import { React, useState } from "react";
import { Text, View, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from "./styles";

function PreferencesSet({ navigation }) {
    const [nextPage, setNextPage] = useState(false);

    // Function to navigate to the next page when the button is pressed
    const handlePress = () => {
        setNextPage(true);

        navigation.navigate('HomePage');
    };

    return (
        <View style={{flexDirection: 'column', alignItems: 'center', padding: 50}}>
            <View style={{marginTop: 240}}>
                <Text style={styles.setupDisplayText}>  
                    Preferences set. Welcome to Motivate
                </Text>
            </View>

            {/* Pressable button triggering handlePress */}
            <View style={{marginTop: 330}}>
                <Pressable onPress={handlePress}>
                    <FontAwesomeIcon icon={faCircleChevronRight} size={40} />
                </Pressable>
            </View>
        </View>
    );
}

export default PreferencesSet;