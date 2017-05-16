import React, { Component } from 'react';
import { Container, Content, InputGroup, Picker, Input, Item } from 'native-base';
import {Text, View} from 'react-native';

export default class BookAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key1',
            results: {
                items: []
            }
        }
    }
    onValueChange (value: string) {
        this.setState({
            selected1 : value
        });
    }
    render() {
        return (
            <Container style={Styles.containerStyle}>
              <View style={Styles.contentStyle}>
                <Content>
                    <Picker
                        supportedOrientations={['portrait','landscape']}
                        iosHeader="Select one"
                        mode="dropdown"
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}>
                        <Picker.Item label="Wallet" value="key0" />
                        <Picker.Item label="ATM Card" value="key1" />
                        <Picker.Item label="Credit Card" value="key2" />
                        <Picker.Item label="Debit Card" value="key3" />
                   </Picker>
                </Content>

                <Content>
                    // Rounded text input box
                    <Item rounded>
                        <Input placeholder='Rounded Textbox'/>
                    </Item>
                </Content>
              </View>
            </Container>
        );
    }
}

const Styles = {
  containerStyle: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  contentStyle: {
    height: 50,
    width: 250,
    borderRadius: 76,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: '#FFFFFF',
  },
};
