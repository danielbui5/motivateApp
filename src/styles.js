import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    setupTextContainer: {
        alignItems:'center',
        justifyContent:'center',
        flex: 1,
    },
    setupDisplayText: {
        fontWeight: 'bold',
        fontSize: 28,
        color: 'black',
        textAlign: 'center'
    },
    buttonDefaultText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black'
    },
    setupButtonContainer: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: 'white',
        paddingTop: 20, 
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        margin: 10
    },
    setupButtonDefault: {
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    setupButtonOnClick: {
        backgroundColor: 'black',
    },
    buttonOnClickText: {
        color: 'grey'
    },
})

export default styles