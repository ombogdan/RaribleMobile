import React, { Component, PureComponent } from "react";
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styled from 'styled-components';
import {RNCamera} from 'react-native-camera';
import {keyValueActions} from "../../storage/realm";
import Touch from '../../mixin/Touch';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const flashIcons = {
    'on': <Image source={require('../../assets/cameraIcon/flashOn.png')} style={{width: 50, height: 50}}/>,
    'auto': <Image source={require('../../assets/cameraIcon/flashAuto.png')} style={{width: 50, height: 50}}/>,
    'off': <Image source={require('../../assets/cameraIcon/flashOff.png')} style={{width: 50, height: 50}}/>,
}
const rotateCamera = {
    'back': <Image source={require('../../assets/cameraIcon/rotate.png')} style={{width: 45, height: 45}}/>,
    'front': <Image source={require('../../assets/cameraIcon/rotate.png')} style={{width: 45, height: 45}}/>,
}

export default class InspectionReport extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            locationX: 0,
            locationY: 0,
            x: 0,
            y: 0,
            flashMode: 'off',
            cameraType: 'back',
            zoom: 0,
            nativeZoom: true,
            maxZoom: 0.9,
            photoLength: 0,
            photoQuality: keyValueActions.getValue('photoQuality') ? parseFloat(keyValueActions.getValue('photoQuality'), 10) : 0.4,
            video: false
        }
    }


    render() {
        let {
            photoLength,
            locationX,
            locationY,
            flashMode,
            cameraType,
            zoom,
            maxZoom,
            nativeZoom,
            coord_y,
            coord_x,
        } = this.state;
        let {onMakePhoto} = this.props.route.params;
        let { navigation } = this.props
        return (
            <Root onPress={this.focus}>
                <RNCamera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    autoFocus={RNCamera.Constants.AutoFocus.on}
                    autoFocusPointOfInterest={{x: locationX, y: locationY}}
                    flashMode={flashMode}
                    type={cameraType}
                    zoom={zoom}
                    maxZoom={maxZoom}
                    useNativeZoom={nativeZoom}
                    onTap={this.focus}
                    captureAudio={false}
                    // onPictureTaken={this.takeManyPicture.bind(this)}
                >
                    {photoLength > 0 ?
                        <View style={{
                            width: '100%',
                            height: '100%',
                            position: "absolute",
                            justifyContent: "center",
                            alignItems: "center",
                            bottom: 30
                        }}>
                            <Text style={{fontSize: 35, fontWeight: "bold"}}>{photoLength}</Text>
                        </View>
                        : null
                    }
                    {coord_x ?
                        <View style={{
                            borderWidth: 3,
                            borderColor: 'white',
                            position: 'absolute',
                            top: coord_y - 30,
                            left: coord_x - 30,
                            borderRadius: 60,
                            width: 60,
                            height: 60
                        }}>
                        </View>
                        : null}
                    <View style={styles.buttonView}>
                        <TouchableOpacity onPress={()=>{
                            navigation.goBack();
                        }}><Text style={{ left: 10, bottom: 10, fontSize: 45, width: 50, height: 50, color: "white"}}>×</Text></TouchableOpacity>
                    </View>

                    <View style={styles.photoView}>
                        <FlashButton onPress={this.toggleFlash}>
                            {flashIcons[flashMode]}
                        </FlashButton>
                        {/*{video === false ?*/}
                        {/*    <Pressable onLongPress={this.takeManyPicture.bind(this, onMakePhoto, false, false)}*/}
                        {/*               onPress={this.takeManyPicture.bind(this, onMakePhoto, false, false)}*/}
                        {/*    >*/}
                        {/*        <Photo source={require('../../assets/cameraIcon/circle.png')}/>*/}
                        {/*    </Pressable>*/}
                        {/*    :*/}
                        {/*    <Pressable onPress={this.onPressOut.bind(this, onMakePhoto)}>*/}
                        {/*        <Photo source={require('../../assets/cameraIcon/videoCircle.png')}/>*/}
                        {/*    </Pressable>*/}
                        {/*}*/}
                        <Photo onPress={this.takePicture.bind(this, onMakePhoto, true, navigation)}
                              source={require('../../assets/cameraIcon/circle.png')}/>

                        <RotateButton onPress={this.rotateCamera}>
                            {rotateCamera[cameraType]}
                        </RotateButton>
                    </View>
                </RNCamera>
            </Root>
        );
    }

    rotateCamera = () => {
        let {cameraType} = this.state;
        if (cameraType === 'back') {
            this.setState({cameraType: 'front'});
        } else if (cameraType === 'front') {
            this.setState({cameraType: 'back'});
        }
    }

    toggleFlash = () => {
        let {flashMode} = this.state;
        if (flashMode === 'off') {
            this.setState({flashMode: 'auto'});
        } else if (flashMode === 'auto') {
            this.setState({flashMode: 'on'});
        } else if (flashMode === 'on') {
            this.setState({flashMode: 'off'});
        }
    }

    focus = (e) => {
        const absoluteX = e.absoluteX;
        const absoluteY = e.absoluteY;
        const coord_x = e.x;
        const coord_y = e.y;

        const isPortrait = screenHeight > screenWidth;
        let x = absoluteX / screenWidth;
        let y = absoluteY / screenHeight;
        if (isPortrait) {
            x = absoluteX / screenHeight;
            y = -(absoluteX / screenWidth) + 1;
        }
        this.setState({
            locationX: x,
            locationY: y,
            coord_x: coord_x,
            coord_y: coord_y,
        });

        setTimeout(() => {
            this.setState({
                coord_x: null
            });
        }, 2000);
    }


    takePicture = async function (onMakePhoto, closeCamera, navigation) {
        console.log("take picture")
        if (this.camera) {

            const {photoQuality} = this.state;
            const options = {
                fixOrientation: true,
                //orientation:'portrait',
                forceUpOrientation: true,
                //pauseAfterCapture: true,
                quality: photoQuality,
                //base64: true,
                //exif: true,
                //location: position
                //doNotSave: true //не писать файли, отдавать тіки base64
            };

            const data = await this.camera.takePictureAsync(options);
            //this.camera.capture({metadata: options})
            //const data = await this.camera.capture(options);
            // position comes from: navigator.geolocation.watchPosition((position) => this.setState({position}))
            //options.location = this.state.position;
            // console.log('takePicture ', data);
            if (closeCamera) {
                navigation.goBack()
                onMakePhoto(data, true);
            } else {
                onMakePhoto(data, false);
            }
        }
    };

    // onPressOut(onMakePhoto) {
    //     this.setState({video: false})
    //     console.log('onPressOut')
    //     this.takeManyPicture(onMakePhoto, true, true);
    // }
    //
    // takeManyPicture(onMakePhoto, closeCamera, stop) {
    //     console.log('takeManyPicture')
    //     this.setState({video: true})
    //     if (!this.timer) {
    //         let self = this;
    //         this.timer = TimerMixin.setInterval(async function () {
    //             let {photoLength} = self.state;
    //             await self.takePicture(onMakePhoto, closeCamera)
    //             self.setState({photoLength: photoLength + 1})
    //         }, 1500);
    //     }
    //     if (stop === true) {
    //         this.takePicture(onMakePhoto, closeCamera)
    //         TimerMixin.clearInterval(this.timer);
    //     }
    // }
}

const styles = StyleSheet.create({
    preview: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    buttonView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    photoView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    }
});

const CancelButton = Touch(styled.Text`
 
`);

const Photo = Touch(styled.Image`
  bottom: 15px;
  width: 110px;
  height: 110px;
`);

const FlashButton = Touch(styled.View`
  padding: 15px;
  margin: 20px;
  bottom: 10px;
`);

const Root = Touch(styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`);

const RotateButton = Touch(styled.View`
  padding: 15px;
  margin: 20px;
  bottom: 14px
`);
