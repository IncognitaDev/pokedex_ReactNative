import React from 'react';
import { View, Text } from 'react-native';

import TypeIcon from '../../../assets/types/grass.svg';

import styles from './styles';

const Tag: React.FC = () => {
  return (
    <View style={styles.container}>
      <TypeIcon width={13} height={13} fill={'#fff'} />
      <Text style={styles.text}>Grass</Text>
    </View>
  );
};

export default Tag;
