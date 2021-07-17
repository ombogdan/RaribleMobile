import * as React from 'react';
import {Avatar, Button, Card, Title, IconButton, Paragraph} from 'react-native-paper';
import {Image, StyleSheet, Text} from "react-native";


const ContentScroll = () => (
    <Card>/*style={styles.container}*/
        <Card.Title left={(props: any) => (/*style={styles.cardTitle}*/
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
                        height: 400, // change these values according to your requirement.////
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

export default ContentScroll

const styles = StyleSheet.create({
    // container: {
    // backgroundColor: 'silver'
    // },
    //cardTitle: {
    // height: 20,
//    }
});