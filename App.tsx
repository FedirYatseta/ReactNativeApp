import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, FlatList } from 'react-native';
import Header from './components/Header/Header';
import { useState } from 'react';
import ListItem from './components/ListItem/ListItem';
import Form from './components/Form/Form';

type Todo = {
  text: string,
  key: number
}

export default function App() {
  const [list, setList] = useState<Todo[]>([

    { text: 'Buy coffee', key: 1 },
    { text: 'Create an app', key: 2 },
    { text: 'Play on the football', key: 3 },
    { text: 'Walking with dogs', key: 4 },
  ]);
  console.log('list', list)
  const addHandler = (text: string) => {
    setList((prevList) => {
      return [
        { text: text, key: list.length + 1 },
        ...prevList
      ]
    })
  }

  const deleteHandle = (id: number) => {
    setList((prevList) => {
      return prevList.filter(item => item.key !== id)
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View>
        <Form addHandler={addHandler} />
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <ListItem item={item} deleteHandle={deleteHandle} />
          )} />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  text: {
    color: 'red'
  }
});
