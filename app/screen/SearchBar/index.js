import React, {Component} from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SearchBar} from "react-native-elements";
import {Platform, StyleSheet} from "react-native";
Icon.loadFont().then(() => {});

export default class CustomSearchBar extends Component {
    render() {

        return (
            <SearchBar
                searchIcon={{type: 'ant-design', color: '#86939e', name: 'search1'}}
                clearIcon={{type: 'material-community', color: '#86939e', name: 'close'}}
                lightTheme={false}
                labelStyle={{backgroundColor: '#FBFBFB'}}
                containerStyle={this.props.width===100 ? styles.containerStyle1 :  styles.containerStyle}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={{fontSize: 17, top:1}}
                placeholder={this.props.placeholder}
                onChangeText={this.props.updateSearch}
                value={this.props.value}
            />
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        width: '100%',
        bottom: 1,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        backgroundColor: '#F2F2F2'
    },
    containerStyle1: {
        height: 50,
        right:  Platform.OS === 'ios' ? 0 : 0,
        width: '90%',
        paddingRight: 10,
        bottom: 1,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
    },
    inputContainerStyle: {
        height: 30,
        borderRadius: 6,
        top: 1,
        backgroundColor: '#E5E4EA'
    }
})
