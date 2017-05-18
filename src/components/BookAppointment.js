import React, { Component } from 'react';
import { Container, Content, InputGroup, Picker, Input, Item, Form, Label, Button } from 'native-base';
import {Text, View} from 'react-native';
import Header from './Header';
import DatePicker from 'react-native-datepicker';

export default class BookAppointment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItem: undefined,
            selected1: 'key1',
            selected2: 'key1',
            selected3: 'key1',

            results: {
                items: []
            }
        },
        {
          date: '',
          time: '24:00'
        }
    }
    onValueChange1 (value: string) {
        this.setState({
            selected1 : value
        });
    }
    onValueChange2 (value: string) {
        this.setState({
            selected2 : value
        });
    }
    onValueChange3 (value: string) {
        this.setState({
            selected3 : value
        });
    }
    render() {
        return (
          <View style={{flex: 1}}>
            <Header headerText="Book Appointment"/>
            <Container>
                  <Content>
                      <Form style={{alignItems: 'center', marginTop: 20}}>
                          <View style={Styles.headSectionStyle}>

                            <View style={Styles.contentStyle}>
                              <Picker
                                supportedOrientations={['portrait','landscape']}
                                mode="dropdown"
                                selectedValue={this.state.selected1}
                                onValueChange={this.onValueChange1.bind(this)}>
                                <Item label="Appointment for" value="key1" />
                                <Item label="<Self>" value="key2" />
                                <Item label="<----->" value="key3" />
                              </Picker>
                            </View>
                          </View>

                          <View>
                            <Item rounded style={{marginTop: 15, height: 50, width: 250}}>
                                <Input placeholder='Name' style={{opacity: 0.7,fontSize:16, color: 'grey'}}/>
                            </Item>
                            <Item rounded style={{marginTop: 15, height: 50, width: 250}}>
                                <Input placeholder='Mobile Number' style={{opacity: 0.7,fontSize:16, color: 'grey'}}/>
                            </Item>
                          </View>

                          <View style={Styles.pickerStyle}>
                            <Picker
                              supportedOrientations={['portrait','landscape']}
                              mode="dropdown"
                              selectedValue={this.state.selected2}
                              onValueChange={this.onValueChange2.bind(this)}>
                              <Item label="Area of Speciality" value="key1" />
                              <Item label="<----->" value="key2" />
                              <Item label="<----->" value="key3" />
                            </Picker>
                          </View>

                          <View style={Styles.pickerStyle}>
                            <Picker
                              supportedOrientations={['portrait','landscape']}
                              iosHeader="Select one"
                              mode="dropdown"
                              selectedValue={this.state.selected3}
                              onValueChange={this.onValueChange3.bind(this)}>
                              <Item label="Doctor Name" value="key1" />
                              <Item label="<----->" value="key2" />
                              <Item label="<----->" value="key3" />
                            </Picker>
                          </View>

                          <DatePicker
                            style={Styles.datePickerStyle}
                            date={this.state.date}
                            placeholder="APOINTMENT DATE"
                            mode="date"
                            format="DD-MM-YYYY"
                            minDate="01-01-2017"
                            maxDate="31-12-2021"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                              dateIcon: {
                                left: 4,
                                top: 2,
                                marginLeft: 0,
                              },
                              dateInput: {
                                height: 40,
                                width: 150,
                                borderWidth: .4,
                                borderColor: 'grey',
                                borderRadius: 25
                              }
                            }}

                            onDateChange={(date) => {this.setState({date: date})}}
                          />

                          <DatePicker
                            style={Styles.datePickerStyle}
                            date={this.state.time}
                            placeholder="APOINTMENT TIME"
                            mode="time"
                            format="HH:mm"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            minuteInterval={10}
                            onDateChange={(time) => {this.setState({time: time});}}
                            customStyles={{
                              dateIcon: {
                                left: 4,
                                top: 2,
                                marginLeft: 0,
                              },
                              dateInput: {
                                height: 40,
                                width: 150,
                                borderWidth: .4,
                                borderColor: 'grey',
                                borderRadius: 25
                              }
                            }}
                            iconSource={require('../img/clock.png')}
                          />
                          <View style={{}}>
                            <Button rounded style={Styles.buttonStyle}>
                                <Text style={{fontSize: 18, fontFamily: 'Roboto_medium', marginLeft: 70}}>CONFIRM</Text>
                            </Button>
                          </View>
                      </Form>
                  </Content>
              </Container>
          </View>
        );
    }
}

const Styles = {
  buttonStyle: {
    marginBottom: 15,
    marginTop: 15,
    height: 50,
    width: 250,
    backgroundColor: 'grey',
    shadowColor: 'grey',
    shadowOpacity: 0.2,
    shadowOffset: {height: .5, width: 1},
    elevation: 1.5
  },
  datePickerStyle: {
    marginTop: 15,
    height: 40,
    width: 250,
  },
  headSectionStyle: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  containerStyle: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  contentStyle: {
    opacity: .6,
    height: 50,
    width: 250,
    borderRadius: 70,
    borderWidth: .4,
    borderColor: 'grey',
  },
  pickerStyle: {
    marginTop: 15,
    opacity: .6,
    height: 50,
    width: 250,
    borderWidth: .4,
    borderColor: 'grey',
    borderRadius: 25
  },
};
