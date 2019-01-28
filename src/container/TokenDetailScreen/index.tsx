import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";
import { route } from "../../constants/route";
import { UserHeader } from "../UserInterfaceStyle";
import userStyle from "../UserInterfaceStyle/Styles";

export class TokenDetailScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <UserHeader title="토큰" leftMode="back" navigationProps={this.props.navigation}/>
        <View style={userStyle.userBody}>
            <Text>
            토큰 디테일 스크린
            </Text>
            <Button
            style={styles.Button}
            mode="contained"
            onPress={this.navigateToDetailTx} // 테스트용
            >
            Receive 스크린
            </Button>
            <Button
            style={styles.Button}
            mode="contained"
            onPress={this.navigateToSend} // 테스트용
            >
            Send 스크린
            </Button>
        </View>
      </View>
    );
  }

  navigateToDetailTx = () => {
    this.props.navigation.navigate(route.DETAIL_TX_ROUTE)
  }

  navigateToSend = () => {
    this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
        destination: route.SELECT_ADDRESS_SCREEN
    })
  }
}
