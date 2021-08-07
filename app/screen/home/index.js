import React, { PureComponent } from "react";
import styled from "styled-components";
import { Dimensions, Text } from "react-native";
import Orientation from "react-native-orientation-locker";

export default class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loginned: false,
    };
  }

  _unsubscribe() {
  }

  async componentDidMount() {
    console.log("Mount in agroOperation Screen");
    //Orientation
    Orientation.unlockAllOrientations();
    Orientation.getOrientation(orientation => {
      this.setState({ orientation: orientation });
    });
    Dimensions.addEventListener("change", () => {
      Orientation.getOrientation(orientation => {
        this.setState({ orientation: orientation });
      });
    });
    //------------
  }

  componentWillUnmount() {
    console.log("Unmount in agroOperation Screen");
    this._unsubscribe();
  }


  render() {
    let {} = this.props;
    return (
      <Container>
        <Text>Home screen</Text>
      </Container>
    );
  }
}

//region ====================== Styles ========================================
const Container = styled.SafeAreaView`
  flex: 1;
`;

