import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import * as Animatable from 'react-native-animatable';
import {
  Container,
  Image,
  PlayMusic,
  PlayContent,
  ProgressBar,
} from './styles';

const MusicSelect: React.FC = ({ children, route }) => {
  const { music } = route.params;
  return (
    <LinearGradient
      colors={['#de4356', '#cbd2cf', '#de4356']}
      style={{ flex: 1 }}
    >
      <Animatable.View
        style={{ flex: 1 }}
        animation="slideInLeft"
        useNativeDriver
        duration={1300}
      >
        <Container>
          <Image
            source={{
              uri: music.img,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 230,
              justifyContent: 'space-around',
            }}
          >
            <Text
              style={{ color: '#fff', fontFamily: 'sans-serif', fontSize: 18 }}
            >
              {music.name}
            </Text>
            <Text
              style={{ color: '#fff', fontFamily: 'sans-serif', fontSize: 18 }}
            >
              {music.time}
            </Text>
          </View>
          <ProgressBar />
          <PlayMusic>
            <PlayContent>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#eee',
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AntDesign name="stepbackward" size={24} color="#de4356" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#eee',
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AntDesign name="caretright" size={24} color="#de4356" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#eee',
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AntDesign name="stepforward" size={24} color="#de4356" />
              </TouchableOpacity>
            </PlayContent>
          </PlayMusic>
        </Container>
      </Animatable.View>
    </LinearGradient>
  );
};

export default MusicSelect;
