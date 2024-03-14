import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from "./styles";

function SelectRandomSpecified({ navigation }) {
    const [nextPage, setNextPage] = useState(false);
    const [selectedRandom, setSelectedRandom] = useState(false);
    const [selectedSpecified, setSelectedSpecified] = useState(false);

    // Function to navigate to the next page when the button is pressed
    const handlePress = () => {
        setNextPage(true);

        // If random is slected, navigate straight to welcome to app
        if (selectedRandom) {
            // Navigate to the next page
            navigation.navigate('PreferencesSet');
            // Else, specified has been selected
            // Navigate to choose preferred times
        } else {
            navigation.navigate('SelectSpecifiedTimes');
        }
    };

    return (
        // Displays text for age selection page
        <View style={{flexDirection: 'column', alignItems: 'center', padding: 30}}>
            <View style={{marginTop: 175}}>
                <Text style={styles.setupDisplayText}> 
                    Would you prefer to receive notifications randomly or at specified times?
                </Text>
            </View>
                
            {/* Buttons to select age range */}
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 135}}>
                {/* On press, choose under 18 */}
                <Pressable onPress={() => { setSelectedRandom(true); setSelectedSpecified(false) }}>
                    <View style={[styles.setupButtonContainer, selectedRandom ? styles.setupButtonOnClick : null]}>
                        <Text style={[styles.buttonDefaultText, selectedRandom ? styles.buttonOnClickText : null]}> 
                            Random
                        </Text>
                    </View>
                </Pressable>

                {/* On press, choose 18 and over */}
                <Pressable onPress={() => { setSelectedSpecified(true); setSelectedRandom(false) }}>
                    <View style={[styles.setupButtonContainer, selectedSpecified ? styles.setupButtonOnClick : null]}>
                        <Text style={[styles.buttonDefaultText, selectedSpecified ? styles.buttonOnClickText : null]}> 
                            Specified
                        </Text>
                    </View>
                </Pressable>
            </View>

            {/* Button to navigate to the next page, only appears once 
            one of the age selections above have been chosen */}
            {selectedRandom || selectedSpecified ? (
                <View style={{marginTop: 80}}>
                    <Pressable onPress={handlePress}>
                        <View style={{}}>
                            <FontAwesomeIcon icon={faCircleChevronRight} size={40} />
                        </View> 
                    </Pressable>
                </View>
            ) : null}
            
        </View>
    );
}

export default SelectRandomSpecified;