import React, {Component} from 'react';
import {ListView, Text, View, Button, ScrollView, Image, TouchableHighlight} from 'react-native';
import Header from './Header';
import Meteor, { createContainer, MeteorListView } from 'react-native-meteor';
import Spinner from 'react-native-loading-spinner-overlay';

//Meteor.connect('ws://durbintest.pro/websocket');

class DoctorsList extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    let collection2 = [];
    const { DoctorList, Ready} = this.props;
    // if(Ready){
      collection2 = [];
      dummyArray = [1, 2, 3, 4, 5, 6, 7, 8];
      dummyArray.map(function (obj, index) {
        collection2[index] =
          <View>
            <View key={index} style={Styles.containerStyle}>
              <View style={Styles.imageViewStyle}>
                <Image
                  style={Styles.imageStyle}
                  source={require('../img/SigurRos.png')}
                />
              </View>
              <View style={Styles.textStyle}>
                <Text style={Styles.doctorNameStyle}>{'Dr. Sigur Ros'}</Text>
                <Text style={Styles.doctorTitleStyle}>{'ProgRock, Porcupine Tree'}</Text>
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-around',
                borderBottomWidth: 1,
                borderBottomColor: 'grey',
                width: 220,
                marginLeft: 107,
              }}
            />
          </View>
      });

    // }

    return(
      <View style={{flex: 1}}>
      {/*!Ready && <Spinner visible={true} textContent={"Loading..."} textStyle={{color: 'grey'}} />*/}
      <Header headerText={'Doctor List'} />
      <ScrollView style={{marginTop: 10, marginBottom: 10,}}>
        {collection2}
      </ScrollView>
      </View>
    );
  }
};

const Styles = {
  containerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  doctorNameStyle: {
    fontFamily: 'Roboto_medium',
    fontSize: 18,
		color: "grey",
  },
  doctorTitleStyle: {
    fontFamily: 'Roboto',
    fontSize: 13,
		color: "grey",
    paddingTop: 3,
  },
  imageStyle: {
    height: 70,
    width: 70,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  imageViewStyle: {
    height: 72,
    width: 72,
    borderRadius: 36,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  textStyle: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 15,
  }
};

// export default createContainer(params=>{
//   const handle = Meteor.subscribe('fetch.news');
//   return {
//     NewsReady: handle.ready(),
//     NewsList: Meteor.collection('News').find(),
//   };
// }, DoctorsList);

export default DoctorsList;
