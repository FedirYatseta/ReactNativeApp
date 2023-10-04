import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const ListItem = ({ item, deleteHandle }: any) => {
    return (
        <TouchableOpacity>
            <Text style={styles.text} onPress={() => deleteHandle(item.key)}>
                {item.text}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: '#f8f8f8',
        borderWidth: 1,
        width: '60%',
        marginTop: 20,
        marginLeft: '20%',
    }

})

export default ListItem;
