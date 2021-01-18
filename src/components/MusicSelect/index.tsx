import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import {
  ImageMusic,
  SubTitleMusic,
  TitleMusic,
  DescriptionMusic,
} from './styles';

interface MusicPlayer {
  id: string;
  name: string;
  img: string;
  time: string;
  isFavority: boolean;
}
interface Props {
  music: MusicPlayer;
  onPressFavority: (music: MusicPlayer) => Promise<MusicPlayer>;
}
const MusicSelect: React.FC<Props> = ({ music, onPressFavority }) => {
  const navigation = useNavigation();
  return (
    <Animatable.View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
      duration={1200}
      useNativeDriver
      animation="slideInLeft"
    >
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: 300,
          paddingBottom: 35,

          justifyContent: 'space-between',
        }}
        onPress={() => {
          navigation.navigate('Music', { music });
        }}
      >
        <ImageMusic
          source={{
            uri: music.img,
          }}
        />
        <DescriptionMusic>
          <TitleMusic>{music.name}</TitleMusic>
          <View
            style={{
              width: 200,
              flexDirection: 'row',
              bottom: 5,
              left: 10,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <SubTitleMusic>{music.name}</SubTitleMusic>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                left: 15,

                top: 5,
                width: 120,
              }}
            >
              <TouchableOpacity onPress={() => onPressFavority(music)}>
                <AntDesign
                  name={music.isFavority ? 'heart' : 'hearto'}
                  size={20}
                  color={music.isFavority ? 'red' : '#fff'}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="dots-horizontal"
                  size={20}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
          </View>
        </DescriptionMusic>
      </TouchableOpacity>
      <View
        style={{
          width: 350,
          height: 1,
          bottom: 10,
          backgroundColor: '#D9E2EA',
          alignSelf: 'center',
        }}
      />
    </Animatable.View>
  );
};

export default MusicSelect;
