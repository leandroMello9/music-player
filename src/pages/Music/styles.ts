import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 250px;
  height: 250px;
  bottom: 35px;
  border-radius: 250px;
`;

export const PlayMusic = styled.View`
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100px;
`;
export const PlayContent = styled.View`
  width: 300px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  top: 25px;
`;

export const ProgressBar = styled.View`
  width: 250px;
  height: 10px;
  background-color: yellow;
  border-radius: 160px;
  top: 15px;
`;
