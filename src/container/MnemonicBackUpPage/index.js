import React from "react";
import { View } from "react-native";
import { route } from "../../constants/route";
import { Button, Text } from "react-native-paper";
import styles from "../../styles/style";

export default class MnemonicBackUpPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Mnemonic Backup Page</Text>
        <Button
          icon="add-a-photo"
          mode="contained"
          onPress={this.navigateToSplashPage}
        >
          Next
        </Button>
      </View>
    );
  }

  navigateToSplashPage = () => {
    this.props.navigation.navigate(route.SPLASH_PAGE);
  };
}
