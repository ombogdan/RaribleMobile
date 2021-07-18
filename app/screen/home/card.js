import React, {Component} from 'react';
import {Avatar, Card, IconButton,} from 'react-native-paper';
import {StyleSheet} from "react-native";


class ContentScroll extends Component {

    render() {
        return (
            <Card>
                <Card.Title left={(props: any) => (
                    <Avatar.Image size={18} {...props} onPress={() => {
                    }} source={{"uri": "https://www.w3schools.com/html/pulpitrock.jpg"}}
                    />
                )}
                            right={(props: any) => (
                                <IconButton {...props} icon="dots-horizontal" onPress={() => {
                                }}/>
                            )}
                />
                <Card.Cover source={{'uri': 'https://picsum.photos/700'}}
                            style={{
                                height: 350, // change these values according to your requirement.////
                                width: '100%',
                                borderRadius: 18,
                            }}/>
                <Card.Title
                    title="thepost#name"
                    subtitle="price"
                    right={(props: any) => (
                        <IconButton {...props} icon="heart-outline" onPress={() => {
                        }}/>
                    )}
                />
            </Card>
        );
    }
}

export default ContentScroll

