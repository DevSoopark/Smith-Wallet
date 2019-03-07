import React from 'react';
import { View } from 'react-native';
import { Text, Provider as PaperProvider, Button } from 'react-native-paper';
import { NavigationScreenProp, createAppContainer } from 'react-navigation';
import { styles } from './Styles';
import { route } from '../../constants/route';
import { Layout } from '../../layout/Layout';
import { TxSummaryListHeader } from '../../route/TxSummaryListHeader';
import { WalletStore } from '../../stores/walletStore';
import { TokenStore } from '../../stores/tokenStore';
import { inject, observer } from 'mobx-react';
import { getERC20Info } from '../../apis/EtherscanAPI';
import { store } from '../../constants/store';
import { getAccountInfo } from '../../apis/ethers';
const TxSummaryListContainer = createAppContainer(TxSummaryListHeader);

interface TokenDetailScreenProps {
  navigation: NavigationScreenProp<any, any>;
  walletStore?: WalletStore;
  tokenStore?: TokenStore;
}

interface Token {
  symbol: string;
  koreanName: string;
  engName: string;
  marketCode: string;
  address: string;
  abi?: string;
  balance?: string;
}
var usrAddress = '';
@inject(store.WALLET_STORE)
@inject(store.TOKEN_STORE)
@observer
export class TokenDetailScreen extends React.Component<TokenDetailScreenProps> {
  componentDidMount() {
    console.log(
      'tokenaddress::;' + this.props.tokenStore!.clickedToken.address,
    );
    usrAddress = getAccountInfo(this.props.walletStore!.getMnemonic, 0).address;

    console.log('userAddress::' + usrAddress);
    this.getDetailInfoOfERC20(
      this.props.tokenStore!.clickedToken.address,
      usrAddress,
    );
  }
  render() {
    const { tokenStore } = this.props;
    return (
      <Layout header={false}>
        {/* Start of Top Summary Container */}
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryFont}>
            {tokenStore!.clickedToken.koreanName !== '' || null
              ? tokenStore!.clickedToken.koreanName
              : tokenStore!.clickedToken.engName}
          </Text>
          <Text style={styles.summaryFont}>
            {tokenStore!.clickedToken.balance}
            {'  '}
            {tokenStore!.clickedToken.symbol}
          </Text>
          <Text style={styles.addressFont} onPress={this.navigateToDetailTx}>
            {usrAddress}
          </Text>
          {/* End of Top Summary Container */}

          {/* Start of Button Container */}
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.bottomButton}
                mode="contained"
                onPress={this.navigateToDetailTx} // 테스트용
              >
                Receive
              </Button>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.bottomButton}
                mode="contained"
                onPress={this.navigateToSend} // 테스트용
              >
                Send
              </Button>
            </View>
          </View>
          {/* End of Button Container */}
        </View>

        {/* Start of TxList Container */}
        <PaperProvider>
          <TxSummaryListContainer />
        </PaperProvider>
        {/* End of TxList Container */}
      </Layout>
    );
  }
  private getDetailInfoOfERC20 = async (
    tokenAddress: string,
    userAddress: string,
  ) => {
    await getERC20Info(tokenAddress, userAddress).then((token: Token | any) => {
      const tmpToken = JSON.parse(token);
      this.props.tokenStore!.clickedToken.balance = tmpToken.balance;
      this.props.tokenStore!.clickedToken.engName = tmpToken.engName; //한글이름 없는경우
    });
  };
  private navigateToDetailTx = () => {
    this.props.navigation.navigate(route.TOKEN_RECEIVE_SCREEN);
  };

  private navigateToSend = () => {
    this.props.navigation.navigate(route.AUTHORIZE_PINCODE_SCREEN, {
      destination: route.SELECT_ADDRESS_SCREEN,
    });
  };
}
