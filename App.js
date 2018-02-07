import React, { Component } from 'react';
import { Easing, StyleSheet, Text, View, Alert } from 'react-native';
import ButtonAction from "./src/component/ButtonAction";

// import Drawer from './src/component/Drawer/index.js';


  // prepare your drawer content
  // var drawerContent = (<View style={styles.drawerContent}>
  //   <View style={styles.leftTop}/>
  //   <View style={styles.leftBottom}>
  //     <View><Text>Drawer Content</Text></View>
  //   </View>
  // </View>);
  // // customize drawer's style (Optional)
  // var customStyles = {
  //   drawer: {
  //     shadowColor: '#000',
  //     shadowOpacity: 0.4,
  //     shadowRadius: 10
  //   },
  //   mask: {}, // style of mask if it is enabled
  //   main: {} // style of main board
  // };
  // const slider =  (
  //   <Drawer
  //     style={styles.container}
  //     drawerWidth={300}
  //     drawerContent={drawerContent}
  //     type={Drawer.types.Overlay}
  //     customStyles={{drawer: styles.drawer}}
  //     drawerPosition={Drawer.positions.Right}
  //     onDrawerOpen={() => {console.log('Drawer is opened');}}
  //     onDrawerClose={() => {console.log('Drawer is closed')}}
  //     easingFunc={Easing.ease}
  //   >
  //     <View style={styles.content}>
  //       <Text>{Object.values(Drawer.positions).join(' ')}</Text>
  //       <Text>{Object.values(Drawer.types).join(' ')}</Text>
  //     </View>
  //   </Drawer>
  // );

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
        </View>
          <ButtonAction onPress={() => Alert.alert("OK")} title="Clique aqui" />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
