import {Image, ScrollView, View} from "react-native";
import React from "react";
import {Avatar, Button, Card, Paragraph, Title} from "react-native-paper";

<ScrollView
    contentContainerStyle={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 2,
    }}>
    <View style={styles.item}>
        <View style={styles.cardHeader}>
            <Image source={{"uri": "https://www.w3schools.com/html/pulpitrock.jpg"}} style={{
                height: 36, // change these values according to your requirement.
                width: 36,
                borderRadius: 18,
            }}
            />

        </View>
    </View>
    <View style={styles.item}></View>
    <View style={styles.item}></View>
    <View style={styles.item}></View>
    <View style={styles.item}></View>
</ScrollView>
< /Container>
)
;
}
}


//region ====================== Styles ========================================
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
`;
const styles = StyleSheet.create({
    item: {


        height: 200,
        width: "100%",
        backgroundColor: "gray",
        borderRadius: 10,
        borderWidth: 1,
    },
    cardHeader: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        backgroundColor: "silver",
    },
});

const ContentScroll = () => (
    <Card style={styles.cardbox}>
        <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={(props) => <Avatar.Icon {...props} icon={"folder"} left={LeftContent}/>}
            right=/*(props) => <IconButton {...props}*/ icon={"more-vert"} onPress={() => {
        }}/>
        />
        <Card.Cover source={{uri: "https://www.w3schools.com/html/pulpitrock.jpg"}}/>
        <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
        </Card.Actions>
        <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
        </Card.Content>
    </Card>
);

export default ContentScroll;