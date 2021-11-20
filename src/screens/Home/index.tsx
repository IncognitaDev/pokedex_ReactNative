import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Modalize } from 'react-native-modalize';

import Pokeball from '../../../assets/patterns/pokeball.svg';
import Search from '../../../assets/icons/search.svg';
import Filter from '../../../assets/icons/filter.svg';
import Generation from '../../../assets/icons/generation.svg';
import Sort from '../../../assets/icons/sort.svg';

import styles from './styles';
import Card from '../../components/Card';

const Home: React.FC = () => {
  const modalizeRef = useRef<Modalize>(null);

  function openModal() {
    modalizeRef.current?.open();
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <Pokeball
          fillOpacity={0.05}
          width={360}
          height={350}
          style={styles.background}
        />

        <LinearGradient
          colors={['transparent', '#fff', '#fff']}
          style={styles.header}
        >
          <View style={styles.actions}>
            <TouchableOpacity
              style={{ marginLeft: 25 }}
              onPress={() => openModal()}
            >
              <Filter />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 25 }}
              onPress={() => openModal()}
            >
              <Sort />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 25 }}
              onPress={() => openModal()}
            >
              <Generation />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Pokédex</Text>
          <Text style={styles.description}>
            Search for Pokémon by name or using the National Pokédex number.
          </Text>

          <View>
            <Search fill="#747476" style={styles.searchIcon} width={16} />
            <TextInput
              style={styles.search}
              placeholder="What Pokémon are you looking for?"
            />
          </View>
        </LinearGradient>
        <View style={{ marginHorizontal: 30 }}>
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
      <Modalize ref={modalizeRef} snapPoint={300} />
    </>
  );
};

export default Home;
