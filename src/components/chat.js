import React from 'react';
import { Text, Thumbnail } from 'native-base';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

export default ({ chatDetail: { avatar, username, msg } }) => (
  <View style={styles.main}>
    <TouchableOpacity style={styles.avatarContainer}>
      <Thumbnail source={avatar} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.msgContainer}>
      <View style={styles.msgDetailsContainer}>
        <View style={styles.msgAuthorContainer}>
          <Text style={styles.author}>{username}</Text>
        </View>
        <View style={styles.msgTextContainer}>
          <Text note style={styles.msg}>
            {msg}
          </Text>
        </View>
      </View>
      <View style={styles.msgDateContainer}>
        <Text note style={styles.date}>
          Yesterday
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  avatarContainer: {
    flex: 1,
  },
  msgContainer: {
    flex: 4,
    flexDirection: 'row',
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
    borderBottomWidth: 0.5,
  },
  msgDetailsContainer: {
    flex: 4,
    flexDirection: 'column',
  },
  msgTextContainer: {
    flex: 1,
  },
  msgAuthorContainer: {
    flex: 1,
  },
  msgDateContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  msg: {
    color: 'rgba(0,0,0,0.5)',
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
  },
  author: {
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.8)',
  },
});
