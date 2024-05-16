import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View, TouchableOpacity, FlatList, Alert, ImageBackground} from 'react-native';
import { useTheme } from '../utils/ThemeContext';

const imagebg = require('../../assests/bg.png');
const imagemoipg = require('../../assests/moipg.jpeg');
const imgS1 = require('../../assests/PoliceServices.jpeg');
const imgS2 = require('../../assests/TrafficServices.jpeg');
const img1 = require('../../assests/Accident.jpeg');
const img2 = require('../../assests/Fines.jpeg');
const img3 = require('../../assests/messingPerson.jpeg');
const img4 = require('../../assests/PayVehicle.jpeg');

const NUM_PAIRS = 6; // Change this to adjust the number of pairs

const generateCards = (numPairs) => {
  let cards = [];

  cards.push({ id: 0, src: imgS1, flipped: false, matched: false, iconName: 'S1'});
  cards.push({ id: 1, src: imgS2, flipped: false, matched: false, iconName: 'S2'});
	cards.push({ id: 2, src: img1, flipped: false, matched: false, iconName: 'S2' });
	cards.push({ id: 3, src: img2, flipped: false, matched: false, iconName: 'S2' });
	cards.push({ id: 4, src: img3, flipped: false, matched: false, iconName: 'S1' });
	cards.push({ id: 5, src: img4, flipped: false, matched: false, iconName: 'S2' });
	cards.push({ id: 6, src: imgS2, flipped: false, matched: false, iconName: 'S2' });
	cards.push({ id: 7, src: imgS2, flipped: false, matched: false, iconName: 'S2' });

  return cards.sort(() => Math.random() - 0.5);
};

export default function Memorygm({ navigation }) {
	const { theme } = useTheme();
  const [cards, setCards] = useState(generateCards(NUM_PAIRS));
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedIds, setMatchedIds] = useState([]);

  const handleCardPress = (id) => {
    const selectedCard = cards.find(card => card.id === id);
    if (selectedCards.length === 2 || selectedCard.matched) return;

	if (selectedCards.find(card => card.id === selectedCard.id) || selectedCards.find(card => card.src === selectedCard.src))
	{
		return;
	}

    const updatedCards = cards.map(card =>
      card.id === id ? { ...card, flipped: true } : card
    );
    setCards(updatedCards);
    setSelectedCards([...selectedCards, selectedCard]);
  };

 useEffect(() => {
  if (selectedCards.length === 2) {
    const [firstCard, secondCard] = selectedCards;
    if (firstCard.iconName === secondCard.iconName) {
      setMatchedIds([...matchedIds, firstCard.id, secondCard.id]);
      setCards(prevCards =>
        prevCards.map(card =>
          card.id === firstCard.id || card.id === secondCard.id ? { ...card, matched: true } : card
        )
      );
    }
    setTimeout(() => {
      setCards(prevCards =>
        prevCards.map(card =>
          card.flipped && !card.matched ? { ...card, flipped: false } : card
        )
      );
      setSelectedCards([]);
    }, 500); // Reset selected cards after half second
  }

  if (matchedIds.length === cards.length) {
    Alert.alert('Congratulations!', 'All cards matched!', [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
  }
}, [selectedCards]);


const renderCard = ({ item }) => {
  return (
    <TouchableOpacity onPress={() => handleCardPress(item.id)} style={[styles.card, item.flipped && styles.flippedCard, item.matched && styles.matchedCard]}>
       {item.flipped ? (
			<ImageBackground source={item.src} style={{ width: '100%', height: '100%' }} />
		) : (
			<ImageBackground source={imagemoipg} style={{ width: '100%', height: '100%' }} />
      )}
    </TouchableOpacity>
  );
};

  return (
		

		
<ImageBackground source={imagebg} resizeMode="cover" 
				style={styles.containerbg}>
					<View style={{...StyleSheet.absoluteFillObject, backgroundColor : theme.bgoverlay}} />
    <View style={styles.container}>
		<View>
			<FlatList
				data={cards}
				renderItem={renderCard}
				keyExtractor={(item) => item.id.toString()}
				numColumns={4} // Change this to adjust the number of columns
			/>
		</View>
    </View>
	<TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={30} color="#fff" />
      </TouchableOpacity>
	</ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerbg: {
    flex: 2,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	marginVertical:50,
    paddingTop: 50,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00f',
    margin: 5,
    height: 80,
    width: 80,
  },
  flippedCard: {
    backgroundColor: '#f00',
	borderWidth: 2,  
    borderColor: '#fff', 
  },
  matchedCard: {
    backgroundColor: '#0f0', // color to represent matched cards
	borderWidth: 2, 
    borderColor: '#0f0', 
  },
    backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
});