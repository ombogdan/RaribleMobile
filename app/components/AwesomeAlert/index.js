import React, {Component} from 'react';
import AwesomeAlert from "react-native-awesome-alerts";

export default class MyAwesomeAlert extends Component {

    render() {
        let {
            title, confirmButtonColor, titleStyle, showAlert, errorMessage,
            showConfirmButton, cancelText, confirmText,
            hideAlert, mainScreen, reloadAllData, navigation, discard
        } = this.props;
        let myConfirmButtonColor = confirmButtonColor ? confirmButtonColor : "#DD6B55"
        let myTitleStyle = titleStyle ? titleStyle : {color: "red"};
        return (
            <AwesomeAlert
                show={showAlert}
                // overlayStyle={{height: '100%'}}
                title={title}
                titleStyle={myTitleStyle}
                message={errorMessage}
                messageStyle={{width: '100%', textAlign: 'center'}}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={showConfirmButton}
                cancelText={cancelText}
                cancelButtonColor={"#f5f5f5"}
                cancelButtonTextStyle={{color: "#070707"}}
                cancelButtonStyle={{borderColor: "#adadad", borderWidth: 1}}
                confirmText={confirmText}
                confirmButtonColor={myConfirmButtonColor}
                confirmButtonStyle={{bottom: 0, borderColor: "#adadad", borderWidth: 1}}
                onCancelPressed={() => {
                    hideAlert();
                }}
                onConfirmPressed={() => {
                    if (mainScreen) {
                        reloadAllData();
                    } else {
                        hideAlert();
                        navigation.dispatch(discard)
                    }
                }}
            />
        );
    }
}

