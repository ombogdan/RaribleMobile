import React, {PureComponent} from 'react';
import styled from 'styled-components';
import RNPickerSelect from 'react-native-picker-select';
import {Text, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

export default class Select extends PureComponent {
    state = {close: false};

    render() {
        let {value, label, items, onValue, placeholder, close, disabled} = this.props;
        this.setState({value: value})
        let itemList = []
        items.map(item => (
            itemList.push({
                key: item._id,
                label: item.name,
                value: item._id
            })
        ))
        let resultPlaceholder = {}
        if (placeholder) {
            resultPlaceholder = {
                label: placeholder,
                value: null
            }
        }

        return (
            <Wrap onPress={this.open}>
                <Text style={{
                    top: 5,
                    color: '#b2b2b2',
                    fontSize: 12
                }}>{label}</Text>
                <RNPickerSelect
                    useNativeAndroidPickerStyle={true}
                    placeholder={resultPlaceholder}
                    style={{
                        inputIOS: {
                            color: disabled ? 'gray' : 'black',
                            paddingTop: 10,
                            paddingHorizontal: 10,
                            paddingBottom: 10,
                        },
                        inputAndroid: {
                            color: disabled ? 'gray' : 'black',
                        },
                        placeholderColor: 'grey',
                    }}
                    mode="dropdown"
                    disabled={disabled}
                    onValueChange={(itemValue) => {
                        onValue(itemValue)
                    }}
                    items={itemList}
                    value={this.state.value}
                    Icon={() => {
                        return (
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                {close ?
                                    <View style={{width: 55, height: 30}}>
                                        <Icon
                                            name="close"
                                            type="font-awesome"
                                            underlayColor="transparent"
                                            size={28}
                                            onPress={() => this.setState({value: null})}
                                            style={{top: 9, left: 10}}
                                        />
                                    </View>
                                    :
                                    <View style={{width: 40, height: 40, alignItems: "center"}}>
                                        {!disabled ?
                                            <Entypo
                                                name="triangle-down"
                                                type="font-awesome"
                                                underlayColor="transparent"
                                                size={18}
                                                style={{top: 15, right: 0}}
                                            />
                                            :
                                            null
                                        }
                                    </View>
                                }
                            </View>
                        );
                    }}

                />
            </Wrap>
        );
    }
}

//region ====================== Styles ========================================

const Wrap = styled.View`
  border-width: 1px;
  border-bottom-color: ${p => p.focus ? '#1E90FF' : '#ccc'};
`;
