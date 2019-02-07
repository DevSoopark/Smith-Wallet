// src/route
import { createMaterialTopTabNavigator, NavigationActions } from "react-navigation";
import { EthereumRoute } from "./EthereumRoute";
import { BitcoinRoute } from "./BitcoinRoute";
import { Dimensions } from 'react-native';

export const WalletSummaryRoute = createMaterialTopTabNavigator (
    {
        ETH: EthereumRoute,
        BTC: BitcoinRoute
    },
    {
        initialRouteName: "ETH",
        tabBarOptions: {
            tabStyle: {
                backgroundColor: "#1E2D5F",
                width: 60,
                height: 30,
                marginLeft: 5,
                marginRight: 7,
                marginTop: 17,
                borderRadius: 7
            },
            labelStyle: {
                //
            },
            indicatorStyle: {
                height: 0
            },
            style:{
              width: Dimensions.get("window").width,
              height: 80,
              backgroundColor: "#F8F9FF",
              elevation: 0,
              paddingTop: 20,
              paddingLeft: 20
            }
        }
    }
);

