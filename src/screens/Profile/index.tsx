import React from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Pattern from '../../../assets/patterns/10x5.svg';
import Circle from '../../../assets/patterns/circle.svg';
import Back from '../../../assets/icons/back.svg';
import Bulbasaur from '../../../assets/Bulbasaur.png';
import Tag from '../../components/Tag';

import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

const Profile: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <ScrollView>
      <View style={styles.header}>
        <BorderlessButton style={styles.back} onPress={() => navigate('Home')}>
          <Back />
        </BorderlessButton>
        <Pattern
          style={styles.pattern}
          width={110}
          fill="#fff"
          fillOpacity={0.2}
        />
        <Text style={styles.backgroundNameTop}>BULBASAUR</Text>
        <Text style={styles.backgroundNameBottom}>BULBASAUR</Text>
        <Text style={styles.backgroundNameLeft}>BULBASAUR</Text>
        <Text style={styles.backgroundNameRight}>BULBASAUR</Text>
        <LinearGradient
          colors={['transparent', '#8BBE8A', '#8BBE8A', '#8BBE8A']}
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Image
            source={Bulbasaur}
            style={{ width: 98, height: 90, marginRight: 15 }}
          />
          <View>
            <Text style={styles.pokeNum}>#001</Text>
            <Text style={styles.pokeName}>Bulbasaur</Text>
            <View style={styles.types}>
              <Tag />
              <Tag />
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.content}>
        <Text>
          Bulbasaur can be seen napping in bright sunlight. There is a seed on
          its back. By soaking up the sun's rays, the seed grows progressively
          larger.
        </Text>

        <View>
          <Text style={styles.title}>Pokédex Data</Text>

          <View style={styles.property}>
            <Text style={styles.propertyTitle}>Species</Text>

            <Text style={styles.propertyValue}>Seed Pokémon</Text>
          </View>
          <View style={styles.property}>
            <Text style={styles.propertyTitle}>Height</Text>

            <Text style={styles.propertyValue}>0.7m (2′04″)</Text>
          </View>
          <View style={styles.property}>
            <Text style={styles.propertyTitle}>Weight</Text>

            <Text style={styles.propertyValue}>6.9kg (15.2 lbs)</Text>
          </View>
        </View>

        <View>
          <Text style={styles.title}>Training</Text>

          <View style={styles.property}>
            <Text style={styles.propertyTitle}>EV Yield</Text>

            <Text style={styles.propertyValue}>1 Special Attack</Text>
          </View>
          <View style={styles.property}>
            <Text style={styles.propertyTitle}>Catch Rate</Text>

            <Text style={styles.propertyValue}>
              45 (5.9% with PokéBall, full HP)
            </Text>
          </View>
          <View style={styles.property}>
            <Text style={styles.propertyTitle}>Base Friendship</Text>

            <Text style={styles.propertyValue}>70 (normal)</Text>
          </View>
          <View style={styles.property}>
            <Text style={styles.propertyTitle}>Base Exp</Text>

            <Text style={styles.propertyValue}>64</Text>
          </View>
          <View style={styles.property}>
            <Text style={styles.propertyTitle}>Growth Rate</Text>

            <Text style={styles.propertyValue}>Medium Slow</Text>
          </View>
        </View>

        <View>
          <Text style={styles.title}>Breeding</Text>

          <View style={styles.property}>
            <Text style={styles.propertyTitle}>Gender</Text>

            <Text style={styles.propertyValue}>♀ 87.5%, ♂ 12.5%</Text>
          </View>
          <View style={styles.property}>
            <Text style={styles.propertyTitle}>Egg Groups</Text>

            <Text style={styles.propertyValue}>Grass, Monster</Text>
          </View>
          <View style={styles.property}>
            <Text style={styles.propertyTitle}>Egg Cycles</Text>

            <Text style={styles.propertyValue}>20 (4,884 - 5,140 steps)</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
