import { useState } from "react";
import { Text, View } from 'react-native';

function SelectSpecifiedTimes({ navigation }) {
    const [nextPage, setNextPage] = useState(false);

    return (
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View style={{marginTop: 240}}>
                <Text style={styles.setupDisplayText}>  
                    Preferences set. Welcome to Motivate
                </Text>
            </View>
        </View>
    );
}

export default SelectSpecifiedTimes;