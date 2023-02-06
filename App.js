import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import data from './destinations.json';
import * as SplashScreen from 'expo-splash-screen';

const chiIcon = require('./images/chicago.png');

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

export default class App extends React.Component {
  renderRow({item}) {
    return(
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Image source={chiIcon} style={styles.icon} />
        </View>
        <View style={styles.info}>
        <Text style={styles.items}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
          <Text style={styles.url}>{item.modUrl}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>CityGuide</Text>
        <FlatList data={data} renderItem={this.renderRow}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ede2e0',
  },
  title: {
    backgroundColor: '#1c7da5',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 40,
    textAlign: 'center',
  },
  row: {
    borderColor: '#7b7983',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#1f3243',
    borderColor: '#1f3243',
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: 'center',
    height: 70,
    width: 70,
  },
  icon: {
    height: 45,
    width: 45,
  },
  info: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  items: {
    color: '#122737',
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  address: {
    color: '#3c4f62',
    fontSize: 16,
  },
  url: {
    color: '#3c4f62',
    fontSize: 16,
    fontStyle: "italic",
  },
});