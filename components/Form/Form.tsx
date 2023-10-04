import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, Button } from "react-native"

const Form = ({ addHandler }: any) => {

    const [text, setText] = useState('')

    const onChange = (e: any) => {
        console.log(e)
        setText(e)
    }
    return (
        <View>
            <TextInput onChangeText={onChange}
                style={styles.input}
                placeholder='Add new task'
            />
            <View style={styles.button}>
                <Button title='Add task' onPress={() => addHandler(text)} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginHorizontal: '20%',
        width: '60%',
    },
    button: {
        marginHorizontal: '20%',
        width: '60%',
        marginTop: 20,
    }

})

export default Form;
