import React from 'react';
import { View, Text, Image } from 'react-native';
import {
  BorderlessButton,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Pattern from '../../../assets/patterns/6x3.svg';
import Pokeball from '../../../assets/patterns/pokeball.svg';
import Bulbasaur from '../../../assets/Bulbasaur.png';
import Tag from '../Tag';

import styles from './styles';

const Card: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <View>
      <TouchableNativeFeedback
        style={styles.container}
        onPress={() => navigate('Profile')}
      >
        <Text style={styles.pokeNum}>#001</Text>
        <Text style={styles.pokeName}>Bulbasaur</Text>
        <View style={styles.types}>
          <Tag />
          <Tag />
        </View>

        <Pattern
          style={styles.pattern}
          width={80}
          fill="#fff"
          fillOpacity={0.2}
        />
        <Pokeball
          style={styles.pokeball}
          width={145}
          height={145}
          fillOpacity={0.1}
        />
      </TouchableNativeFeedback>
      <BorderlessButton
        style={styles.image}
        onPress={() => navigate('Profile')}
      >
        <Image source={Bulbasaur} />
      </BorderlessButton>
    </View>
  );
};

export default Card;
