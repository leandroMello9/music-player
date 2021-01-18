import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 5%;
`;

export const HeaderOptions = styled.View`
  width: 100%;
  height: 100px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderTitle = styled.Text`
  font-size: 14px;
  font-family: sans-serif;
  color: #fff;
`;

export const HeaderTitleDown = styled.Text`
  font-size: 24px;
  font-family: sans-serif;
  align-self: center;
  color: #fff;
`;

export const HeaderButton = styled.TouchableOpacity`
  width: 35px;
  height: 35px;

  background-color: #f2f7fd;
  border-radius: 35px;
  align-items: center;
  justify-content: center;

  border-color: #f2f7fd;
`;
