import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Alert} from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';

const API_KEY = 'e01567664ab7f7e555a8a40f4854cb8b';
export default class extends React.Component {

  getLocation = async () => {
    try {
      //если истина то выполни
      await Location.requestBackgroundPermissionsAsync();
      //const response = await Location.requestPermissionsAsync();-старый формат
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      //Получения из свойств coords кардинаты по гориз и вертикали т.е. lattude longitude
      console.log({coords:{latitude, longitude}})
      this.setState({isLoading: false});

    } catch (error) {
      Alert.alert('Не могу определить местоположение', "Очень грустно :(");
      //сообщение в случае если не получилось загрузить информацию
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render () {
    return (
      <Loading />
      //прорисовывает экран из loading.js
    );
  }
}