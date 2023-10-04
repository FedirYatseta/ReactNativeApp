import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Header = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>List to do</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    main: {
        paddingTop: 20,
        height: 70,
        backgroundColor: 'red'
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }

})

export default Header;
