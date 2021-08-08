import React, {PureComponent} from "react";
import {
    FlatList,
    I18nManager,
    Modal,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styled from "styled-components";
import Entypo from "react-native-vector-icons/Entypo";

Icon.loadFont().then(() => {
    Entypo.loadFont().then(() => {
    });
});

export default class SearchableSelect extends PureComponent {
    state = {
        modalVisible: false,
        dataSource: []
    }

    componentDidMount() {
        this.setState({dataSource: this.props.dataSource})
    }

    _searchFilterFunction(searchText, data) {
        let newData = [];
        if (searchText) {
            newData = data.filter(function (item) {
                const itemData = item.name.toUpperCase();
                const textData = searchText.toUpperCase();
                return itemData.includes(textData);
            });
            this.setState({
                dataSource: [...newData]
            });
        } else {
            this.setState({dataSource: this.props.dataSource});
        }
    }

    render() {
        const {placeholder, selectedLabel, dataSource, disablePicker, changeAnimation, close, small, short} = this.props
        return (
            <View>
                <SelectView>
                    <TouchableOpacity
                        style={{width: '77%', justifyContent: "center", bottom: 5}}
                        disabled={disablePicker}
                        onPress={() => this.setState({modalVisible: true})}
                        activeOpacity={0.7}
                    >
                        {selectedLabel ?
                            <SelectedLabelText numberOfLines={2}>
                                {selectedLabel}
                            </SelectedLabelText> :
                            <PlaceholderText>
                                {placeholder}
                            </PlaceholderText>
                        }
                    </TouchableOpacity>
                    {close === true ?
                        <IconView>
                            <TouchableOpacity
                                style={{top: 5, right: 10, width: 40, height: 40}}
                                onPress={() => this.setState({modalVisible: true})}
                                activeOpacity={1}
                            >
                                <Entypo
                                    name="triangle-down"
                                    type="font-awesome"
                                    underlayColor="transparent"
                                    size={18}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{right: 10, width: 40, height: 40}}
                                onPress={() => this.props.selectedValue(null)}
                                activeOpacity={1}
                            >
                                <Icon
                                    name="close"
                                    type="font-awesome"
                                    underlayColor="transparent"
                                    size={28}
                                />

                            </TouchableOpacity>
                        </IconView>
                        : <IconView>
                            <TouchableOpacity
                                style={{right: 10, width: 100, height: 40}}
                                onPress={() => this.setState({modalVisible: true})}
                                activeOpacity={1}
                            >
                                <Entypo
                                    style={{left: 65}}
                                    name="triangle-down"
                                    type="font-awesome"
                                    underlayColor="transparent"
                                    size={18}
                                />
                            </TouchableOpacity>
                        </IconView>
                    }
                </SelectView>
                <Modal
                    visible={this.state.modalVisible}
                    transparent={true}
                    onShow={() => this.setState({dataSource: this.props.dataSource})}
                    animationType={changeAnimation}
                    onRequestClose={() => this.setState({modalVisible: false})}
                >
                    <ModalView>
                        <ModalView1>
                            <View style={{flexDirection: "row"}}>
                                <View style={{flex: 1, top: 15, height: 40}}>
                                    {this.props.pickerTitle ? (
                                        <PickerTitleText>
                                            {this.props.pickerTitle}
                                        </PickerTitleText>
                                    ) : null}
                                </View>

                                <TouchableOpacity
                                    style={{right: -5, top: 7, width: 40}}
                                    activeOpacity={0.7}
                                    onPress={() => this.setState({modalVisible: false})}
                                >
                                    <Icon name='close' size={30}/>
                                </TouchableOpacity>
                            </View>
                            {/*{short !== true ?*/}
                            {/*    <View style={styles.searchView}>*/}
                            {/*        <TextInput*/}
                            {/*            onChangeText={text => this._searchFilterFunction(text, dataSource)}*/}
                            {/*            placeholder={this.props.searchBarPlaceHolder}*/}
                            {/*            style={styles.textInput}*/}
                            {/*            underlineColorAndroid="transparent"*/}
                            {/*            keyboardType="default"*/}
                            {/*            turnKeyType={"done"}*/}
                            {/*            blurOnSubmit={true}*/}
                            {/*        />*/}
                            {/*    </View>*/}
                            {/*    :*/}
                            {/*    null*/}
                            {/*}*/}
                            <FlatList
                                keyboardShouldPersistTaps={"always"}
                                nestedScrollEnabled={true}
                                style={{minHeight: "35%"}}
                                keyExtractor={item => JSON.stringify(item._id)}
                                showsVerticalScrollIndicator={true}
                                refreshing={true}
                                initialNumToRender={100}
                                onEndReachedThreshold={0.5}
                                numColumns={1}
                                data={this.state.dataSource}
                                renderItem={({item}) => {
                                    return (
                                        <TouchableOpacity
                                            style={{
                                                justifyContent: "center",
                                                flexDirection: "row",
                                                flex: 1,
                                                minHeight: 40
                                            }}
                                            onPress={() => {
                                                this.props.selectedValue(item)
                                                this.setState({modalVisible: false})
                                            }}
                                        >
                                            <View style={{
                                                width: "100%",
                                                justifyContent: "center",
                                                paddingLeft: 20,
                                                paddingRight: 10

                                            }}>
                                                <Text>{item.name}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }
                                }
                            />
                        </ModalView1>
                    </ModalView>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchView: {
        top: 5,
        marginBottom: 1,
        flexDirection: "row",
        height: 40,
        shadowOpacity: 1.0,
        shadowRadius: 5,
        shadowOffset: {
            width: 1,
            height: 1
        },
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "#d3d3d3",
        borderRadius: 10,
        elevation: 3,
        marginLeft: 10,
        marginRight: 10
    },
    textInput: {
        color: "black",
        paddingLeft: 15,
        marginTop: Platform.OS === "ios" ? 10 : 0,
        marginBottom: Platform.OS === "ios" ? 10 : 0,
        alignSelf: "center",
        flex: 1,
        textAlign: I18nManager.isRTL ? "right" : "left"
    }
});

const Line = styled.View`
  top: ${p => p.small ? -5 : 10}px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #b2b2b2
`;

const SelectView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  width: 100%;
`;

const SelectedLabelText = styled.Text`
  color: black;
  font-size: 17px;
`;

const PlaceholderText = styled.Text`
    color: #9b9b9b;
    font-size: 17px;
`;

const IconView = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  width: 90px;
`;

const ModalView = styled.View`
  flex: 1;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalView1 = styled.View`
  height: 75%;
  width: 90%;
  max-height: 80%;
  opacity: 10;
  border-radius: 15px;
  background-color: white;
  align-self: center;
  flex-direction: column;
  border-color: black;
`;

const PickerTitleText = styled.Text`
  font-size: 18px;
  flex: 1;
  color: #000;
  padding-bottom: 10px;
  margin-left: 40px;
  bottom: 5px;
  text-align: center;
`;
