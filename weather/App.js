import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Alert} from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';


export default class extends React.Component {

  getLocation = async () => {
    try {
      //если истина то выполни
      await Location.requestBackgroundPermissionsAsync();
      //const response = await Location.requestPermissionsAsync();-старый формат
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      //Получения из свойств coords кардинаты по гориз и вертикали т.е. lattude longitude
    } catch (error) {
      Alert.alert('Не могу определить местоположение', "Очень грустно :(");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render () {
    return (
      <Loading />
    );
  }
}