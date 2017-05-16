import React, {Component} from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import Header from './Header';

class MessageFromCEO extends Component{
  render() {
    return (
        <View style={{flex: 1}}>
          <Header headerText="Message From CEO"/>
          <View style={Styles.topCardItemStyle}>
            <View style={Styles.imageViewStyle}>
              <Image
                style={Styles.imageStyle}
                source={require('../img/S1.png')}
              />
            </View>
            <Text style={Styles.doctorNameStyle}>{'Dr. Steven Wilson'}</Text>
            <Text style={Styles.doctorTitleStyle}>{'Progressive Rock, Porcupine Tree'}</Text>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-around',
                borderBottomWidth: 1,
                borderBottomColor: 'grey',
                width: 280,
                marginTop: 20,
              }}
            />
          </View>
          <ScrollView style={{marginTop: 15}}>
            <Text style={Styles.messageStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </Text>
          </ScrollView>
        </View>
    );
  }
}

const Styles = {
  doctorNameStyle: {
    fontFamily: 'Roboto',
    fontSize: 20,
		color: "grey",
    paddingTop: 15,
  },
  messageStyle: {
    textAlign: "justify",
    fontFamily: 'Roboto',
    fontSize: 12,
		color: "grey",
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  doctorTitleStyle: {
    fontFamily: 'Roboto',
    fontSize: 15,
		color: "grey",
    paddingTop: 5,
  },
  imageStyle: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: '#FFFFFF',
  },
  imageViewStyle: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: 152,
    width: 152,
    borderRadius: 76,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#FFFFFF',
  },
  topCardItemStyle: {
    paddingTop: 30,
		alignItems: 'center',
    justifyContent: 'space-between',
		flexDirection: 'column',
  },
};

export default MessageFromCEO;
