import React from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/Entypo';
import IconFA from 'react-native-vector-icons/FontAwesome';


const Header = (props) => {
	const {textStyle, viewStyle, leftIconStyle, rightIconStyle} = Styles;

	return(
		<View style={viewStyle}>
      <View style={leftIconStyle}>
         <IconE name="menu" size={30} color="#000" />
      </View>
      <Text style={textStyle}>{props.headerText}</Text>
      <View style={rightIconStyle}>
        <IconFA name="ellipsis-v" size={20} color="#000" />
      </View>
		</View>
	);
};

const Styles = {
	viewStyle: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
    backgroundColor: '#FFFFFF',
		height: 50,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative',
	},
	textStyle: {
		fontSize: 20,
		color: "#000",
	},
	leftIconStyle: {
    justifyContent: 'center',
		marginLeft: 15,
	},
	rightIconStyle: {
    justifyContent: 'center',
		marginRight: 20,
	}
};

export default Header;
