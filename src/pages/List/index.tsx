import React, { useState, useEffect, useCallback } from 'react';

import { View, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';
import { Container } from './styles';
import Header from '../../components/Header';
import MusicSelect from '../../components/MusicSelect';

interface MusicPlayer {
  id: string;
  name: string;
  img: string;
  time: string;
  isFavority: boolean;
}
const List: React.FC = () => {
  const [musics, setMusics] = useState<MusicPlayer[]>([
    {
      id: '1',
      img:
        'https://comicvine1.cbsistatic.com/uploads/original/11141/111414706/7315629-3924674922-itebj.png',
      name: 'Dragon ball z',
      time: '2:30',
      isFavority: true,
    },
    {
      id: '2',
      img:
        'https://comicvine1.cbsistatic.com/uploads/original/11141/111414706/7315629-3924674922-itebj.png',
      name: 'Dragon ball z',
      time: '2:30',
      isFavority: false,
    },
    {
      id: '3',
      img:
        'https://comicvine1.cbsistatic.com/uploads/original/11141/111414706/7315629-3924674922-itebj.png',
      name: 'Dragon ball z',
      time: '2:30',
      isFavority: false,
    },
  ]);
  useEffect(() => {
    async function loadPermissions() {
      await Audio.requestPermissionsAsync();
    }
    loadPermissions();
  }, []);

  const loadMusicFavority = useCallback(
    async (music: MusicPlayer): Promise<MusicPlayer> => {
      const newMusics = musics;

      const findIndex = newMusics.findIndex((m) => m.id === music.id);
      const favority = {
        ...music,
        isFavority: !musics[findIndex].isFavority,
      };
      newMusics[findIndex] = favority;

      setMusics(() => [...newMusics]);
      return music;
    },
    [musics],
  );

  return (
    <View
      style={{
        justifyContent: 'space-around',
        flex: 1,
      }}
    >
      <LinearGradient
        colors={['#de4356', '#cbd2cf', '#de4356']}
        style={{ flex: 1 }}
      >
        <Header />
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: 20 }}
          data={musics}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MusicSelect
              music={item}
              onPressFavority={(music: MusicPlayer) => loadMusicFavority(music)}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </LinearGradient>
    </View>
  );
};

export default List;
