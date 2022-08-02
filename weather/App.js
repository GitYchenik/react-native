import { Alert} from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';
import Weather from './weather';
import axios from 'axios';
import React from 'react';

const API_KEY = 'e01567664ab7f7e555a8a40f4854cb8b';   //ы созданую переменную укладываем ключ доступа API полученные на сайте

export default class extends React.Component {

  state = {
    isLoading: true
  }

getWeather = async (latitude, longitude) => {
  const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
  this.setState({isLoading: false, temp: data.main.temp});
  console.log(data);
}


  getLocation = async () => {
    try {//если истина то выполни
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert('Не могу определить местоположение', "Очень грустно :(");
    }
  }

  componentDidMount() {
    this.getLocation();
  }


render () {
  const {isLoading, temp} = this.state;
  return (
    isLoading ? <Loading /> : <Weather  temp={Math.round(temp)}/>
  );
}
}