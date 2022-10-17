import axios from 'axios';
import {StatusBar} from 'expo-status-bar';
import {Alert, View} from 'react-native';
import {Header} from './component/Header';
import Post from './component/Post';
import {useEffect, useState} from 'react';

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://634ceeb7f5d2cc648e97c5fb.mockapi.io/les1/test')
      .then(({ data }) => {
        setItems(data);
      })
      .catch(err => {
         Alert.alert('Ошибка', 'Ошибка при получении статей');
      });

  }, [])

  return (
    <View>
      <Header/>
      {
        items.map((item) => {
          return (
          <Post
            title={item.title}
            imageUrl={item.imageUrl}
            createdAd={item.createdAt}
          />
          )}
        )}
      <StatusBar theme="auto" style="auto"/>
    </View>
  );
}
