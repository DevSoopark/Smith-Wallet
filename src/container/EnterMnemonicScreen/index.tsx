import React from "react";
import { View } from "react-native";
import { route } from "../../constants/route";
import { Button, Text } from "react-native-paper";
import { NavigationScreenProps } from "react-navigation";
import styles from "./Styles";

export default class EnterMnemonicScreen extends React.Component<NavigationScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Mnemonic Backup Page</Text>
        <Button
          icon="add-a-photo"
          mode="contained"
          onPress={this.navigateToBackUpMnem}
        >
          니모닉 입력 완료
        </Button>
      </View>
    );
  }

  navigateToBackUpMnem = () => {
    this.props.navigation.navigate(route.BACKUP_MNEMONIC_SCREEN);
  };
}
