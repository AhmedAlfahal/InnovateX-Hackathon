import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BubbleChat = ({message, isSender}) => {
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [isFinish, setIsFinish] = useState(false);
  const [isFinishrender, setIsFinishrender] = useState(false);

  useEffect(() => {
    let timer;
    let currentIndex = 0;
    setDisplayedMessage('');
    setIsFinishrender(false);
    console.log(message);
    setDisplayedMessage(message);

    const hideBubbleTimer = setTimeout(() => {
      setDisplayedMessage('');
      setIsFinishrender(true);
    }, 4000);
    return () => clearTimeout(hideBubbleTimer);
  }, [message]);

  if (!isFinishrender) {
    return (
      <View
        style={[
          styles.container,
          isSender ? styles.senderContainer : styles.receiverContainer,
        ]}>
        <View
          style={[
            styles.bubble,
            isSender ? styles.senderBubble : styles.receiverBubble,
          ]}>
          <Text style={styles.message}>{displayedMessage}</Text>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: -220,
    marginBottom: 170,
    alignItems: 'flex-end',
  },
  bubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 5,
    overflow: 'hidden',
  },
  senderContainer: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  receiverContainer: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  senderBubble: {
    backgroundColor: '#DCF8C6',
  },
  receiverBubble: {
    backgroundColor: '#FFFFFF',
  },
  message: {
    fontSize: 16,
  },
  tail: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    position: 'absolute',
    zIndex: -1,
  },
});

export default BubbleChat;
