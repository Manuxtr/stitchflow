import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import { View ,Text} from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.wrapper}>
      <Text>DAY 2 IN REACT NATIVE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:"red",
    alignItems:"center",
    justifyContent:'center'
  }
});
