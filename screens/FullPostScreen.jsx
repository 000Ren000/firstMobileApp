import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPostScreen = () => {
  return (
    <View style={{
      padding: 20,
      marginTop: 40
    }}>
      <PostImage source={ {uri: 'https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk='}} />
      <PostText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid autem eius! Blanditiis consequuntur doloribus ipsam ipsum molestiae nobis praesentium quis, similique sit tenetur? Accusantium consequatur error facilis perspiciatis ut!</PostText>
    </View>
  )
}
