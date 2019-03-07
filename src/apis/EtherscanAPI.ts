import { ethers, utils } from 'ethers';
import { erc20Abi } from '../utils/erc20Abi';

const TX_HISTORY_API_URL =
  'https://api.etherscan.io/api?module=account&action=tokentx&page=1&offset=100&sort=desc&';
const API_KEY = 'QYZRBUMFTPA75YXE3P8IWUQS8Q23R6875Y';

const getERC20Info = async (tokenAddress: string, userAddress: string) => {
  try {
    const { Contract } = require('ethers');
    const provider = ethers.getDefaultProvider();
    const contract = new Contract(tokenAddress, erc20Abi, provider);

    const erc20Name = await contract.name();
    const erc20Symbol = await contract.symbol();
    const balance = await contract.balanceOf(userAddress);

    console.log('erc20Name:::' + erc20Name);
    console.log('erc20Symbol:::' + erc20Symbol);
    console.log('erc20Balance:::' + balance);

    var tmpToken = {
      engName: erc20Name,
      symbol: erc20Symbol,
      address: tokenAddress,
      balance: ethers.utils.formatEther(balance),
    };

    return JSON.stringify(tmpToken);
  } catch (error) {
    console.error(
      'Error occurs during getting ERC20 token information :::' + error,
    );
  }
};

const getERC20TokenHistory = async (
  contractAddress: string,
  userAddress: string,
) => {
  try {
    console.log('userADdress@etherscanAPI: ' + userAddress);
    const finalApiUrl =
      TX_HISTORY_API_URL +
      'contractaddress=' +
      contractAddress +
      '&address=' +
      userAddress +
      '&apiKey=' +
      API_KEY;
    const response = await fetch(finalApiUrl);
    const responseJson = await response.json();
    // console.log(responseJson.message);
  } catch (error) {
    console.error('Error during loading ERC20 TX history:::' + error);
  }
};

const getTxReceipt = async (txHash: string) => {
  // try {
  //   const defaultProvider = new ethers.getDefaultProvider('mainnet');
  //   defaultProvider.getTransactionReceipt(txHash).then((txReceipt: any) => {
  //     console.log('TXRECEIPT' + JSON.stringify(txReceipt));
  //   });
  // } catch (error) {
  //   console.error('Error during loading TX receipt:::' + error);
  // }
};

export { getERC20Info, getERC20TokenHistory, getTxReceipt };
