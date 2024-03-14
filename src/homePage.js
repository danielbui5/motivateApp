import { React, useState } from "react"
import { Text, View, Pressable } from 'react-native';
import {Calendar} from 'react-native-calendars';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faHouse, faBookmark } from '@fortawesome/free-solid-svg-icons';
import styles from "./styles"

function HomePage({ navigation }) {
    const [selected, setSelected] = useState('');
    const [naviagteSettings, setNavigateSettings] = useState(false);
    const [navigateHistory, setNavigateHistory] = useState(false);

    return (
        <View >
            <View style={styles.calendarStyle}>
                <Calendar
                    onDayPress={day => {
                        setSelected(day.dateString);
                    }}
                    markedDates={{
                        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
                    }}
                />
            </View>

            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <View style={{position: 'absolute', bottom: 0}}>
                    <FontAwesomeIcon icon={faBookmark} size={40}/>
                    <FontAwesomeIcon icon={faHouse} size={40}/>
                    <FontAwesomeIcon icon={faUser} size={40}/>
                </View>
            </View> 
        </View>
    )
}

export default HomePage