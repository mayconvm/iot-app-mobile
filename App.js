import React, { Component } from 'react';
import { Easing, StyleSheet, Text, View, Alert } from 'react-native';
import ButtonAction from "./src/component/ButtonAction";
import Drawer from './src/component/Drawer/index.js';
import { Client, Message } from 'react-native-paho-mqtt';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default class App extends React.Component {

  render() {

    var drawerContent = (<View style={styles.drawerContent}>
      <View style={styles.leftTop}/>
      <View style={styles.leftBottom}>
        <View><Text>Drawer Content</Text></View>
      </View>
    </View>);
    
    // customize drawer's style (Optional)
    var customStyles = {
      drawer: {
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 10
      },
      mask: {}, // style of mask if it is enabled
      main: {} // style of main board
    };

    //Set up an in-memory alternative to global localStorage
    const myStorage = {
      setItem: (key, item) => {
        myStorage[key] = item;
      },
      getItem: (key) => myStorage[key],
      removeItem: (key) => {
        delete myStorage[key];
      },
    };

    const client = new Client({ uri: 'ws://iot.eclipse.org:80/ws', clientId: 't-maycon', storage: myStorage });

    // set event handlers
    client.on('connectionLost', (responseObject) => {
      if (responseObject.errorCode !== 0) {
        console.log(responseObject.errorMessage);
      }
    });

    client.on('messageReceived', (message) => {
      console.log(message.payloadString);
    });

    // connect the client
    client.connect()
      .then(() => {
        // Once a connection has been made, make a subscription and send a message.
        console.log('onConnect');
        return client.subscribe('t-maycon');
      })
      .then(() => {
        const message = new Message('Hello');
        message.destinationName = 't-maycon';
        client.send(message);
      })
      .catch((responseObject) => {
        if (responseObject.errorCode !== 0) {
          console.log('onConnectionLost:' + responseObject.errorMessage);
        }
      })

    const onPress = (clientMqqt) => {
      return () => {
        let message = new Message('Hello-click-button');
        message.destinationName = 't-maycon';
        clientMqqt.send(message);
      }
    }

    return (
      <Drawer
      style={styles.container}
      drawerWidth={300}
      drawerContent={drawerContent}
      type={Drawer.types.Default}
      customStyles={{drawer: styles.drawer}}
      drawerPosition={Drawer.positions.Left}
      onDrawerOpen={() => {console.log('Drawer is opened');}}
      onDrawerClose={() => {console.log('Drawer is closed')}}
      easingFunc={Easing.ease}
    >
      <View style={styles.container}>
        <ButtonAction onPress={onPress(client)} title="Clique aqui" />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    </Drawer>
    );
  }
}

