import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from "./styles";

function SelectAge({ navigation }) {
    const [nextPage, setNextPage] = useState(false);
    const [selectedUnder18, setSelectedUnder18] = useState(false);
    const [selectedOver18, setSelectedOver18] = useState(false);

    // Function to navigate to the next page when the button is pressed
    const handlePress = () => {
        setNextPage(true);
        // Navigate to the next page
        navigation.navigate('NextPage');
    };

    return (
        // Displays text for age selection page
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View style={{marginTop: 175}}>
                <Text style={styles.setupDisplayText}> 
                    To help us better curate your experience, tell us your age range
                </Text>
            </View>
                
            {/* Buttons to select age range */}
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 135}}>
                {/* On press, choose under 18 */}
                <Pressable onPress={() => { setSelectedUnder18(true); setSelectedOver18(false) }}>
                    <View style={[styles.setupButtonContainer, selectedUnder18 ? styles.setupButtonOnClick : null]}>
                        <Text style={[styles.buttonDefaultText, selectedUnder18 ? styles.buttonOnClickText : null]}> 
                            Under 18 
                        </Text>
                    </View>
                </Pressable>

                {/* On press, choose 18 and over */}
                <Pressable onPress={() => { setSelectedOver18(true); setSelectedUnder18(false) }}>
                    <View style={[styles.setupButtonContainer, selectedOver18 ? styles.setupButtonOnClick : null]}>
                        <Text style={[styles.buttonDefaultText, selectedOver18 ? styles.buttonOnClickText : null]}> 
                            18 and over 
                        </Text>
                    </View>
                </Pressable>
            </View>

            {/* Button to navigate to the next page, only appears once 
            one of the age selections above have been chosen */}
            {selectedUnder18 || selectedOver18 ? (
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

export default SelectAge;