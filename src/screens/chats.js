import React, { Component } from 'react';

import { FlatList, StyleSheet } from 'react-native';
import { Fab, Icon } from 'native-base';

import Chat from '../components/chat';

class Chats extends Component {
  state = {
    chats: [
      {
        username: 'Captain America',
        avatar: require('../img/cap.png'),
        msg: 'Hey Everyone !',
      },
      {
        username: 'Guardians of the Galaxy',
        avatar: require('../img/guardians.jpg'),
        msg: 'Hello!... Groot stop!',
      },
      {
        username: 'Iron Man',
        avatar: require('../img/iron-man.jpg'),
        msg: 'Some help here!',
      },
      {
        username: 'Liam Neeson',
        avatar: require('../img/liam-neeson.jpg'),
        msg: 'I will find you and I will kill you.',
      },
      {
        username: 'Mark Zuckerberg',
        avatar: require('../img/mark.jpg'),
        msg: '😃😎    👍',
      },
      {
        username: 'Peter Parker (Spiderman)',
        img: require('../img/pete.jpg'),
        msg: 'With great power comes great responsibility 🕸💪',
      },
      {
        username: 'Thor',
        avatar: require('../img/thor.jpg'),
        msg: "Cause that's what heroes do 😎",
      },
    ],
  };

  render() {
    const { chats } = this.state;

    return (
      <>
        <FlatList
          data={chats}
          keyExtractor={(item) => item.username}
          renderItem={({ item }) => {
            return <Chat chatDetail={item} key={item.username} />;
          }}
        />

        <Fab style={styles.fab}>
          <Icon name="reader" />
        </Fab>
      </>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#075E54',
  },
});

export default Chats;
