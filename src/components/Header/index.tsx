import React from 'react';
import { View } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Container,
  HeaderOptions,
  HeaderTitle,
  HeaderTitleDown,
  HeaderButton,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderOptions>
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <HeaderButton style={{ elevation: 3, alignSelf: 'center' }}>
            <FontAwesome name="long-arrow-left" size={22} color="#333" />
          </HeaderButton>
        </View>

        <HeaderTitle>Play Music</HeaderTitle>
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <HeaderButton style={{ elevation: 3, alignSelf: 'center' }}>
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={24}
              color="#333"
            />
          </HeaderButton>
        </View>
      </HeaderOptions>
      <HeaderTitleDown>Play List</HeaderTitleDown>
      <View
        style={{
          marginTop: 8,
          width: 350,
          height: 3,
          backgroundColor: '#D9E2EA',
          alignSelf: 'center',
        }}
      />
    </Container>
  );
};

export default Header;
