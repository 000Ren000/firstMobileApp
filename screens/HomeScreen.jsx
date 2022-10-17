import axios from 'axios';
import {StatusBar} from 'expo-status-bar';
import {ActivityIndicator, Alert, FlatList, RefreshControl, Text, TouchableOpacity, View} from 'react-native';
import {Header} from '../component/Header';
import Post from '../component/Post';
import {useEffect, useState} from 'react';

export const HomeScreen = () => {
  const [items, setItems] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const fetchPosts = () => {
    setIsLoading(true);
    axios.get('https://634ceeb7f5d2cc648e97c5fb.mockapi.io/les1/test')
      .then(({ data }) => {
        setItems(data);
      })
      .catch(err => {
        Alert.alert('Ошибка', 'Ошибка при получении статей');
      })
      .finally(()=> {
        setIsLoading(false)
      })
  }

  useEffect(fetchPosts, [])

  if (isloading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <ActivityIndicator size="large" />
        <Text style={{
          marginTop: 15
        }}> Загрузка ... </Text>
      </View>
    )}

  return (
    <View>
      <Header/>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.7}>
            <Post
              title={item.title} imageUrl={item.imageUrl} createdAd={item.createdAt}
            />
          </TouchableOpacity>)}
        refreshControl={
          <RefreshControl
            refreshing={ isloading }
            onRefresh={fetchPosts}
          />
        }
      />
      <StatusBar theme="auto" style="auto"/>
    </View>
  );
}
