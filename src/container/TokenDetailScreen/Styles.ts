import { StyleSheet } from 'react-native';
import { BG_COLOR } from '../../constants/colors';
import { DIMENSIONS_WIDTH } from '../../constants/dementions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  summary: {
    flex: 2,
    backgroundColor: BG_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: DIMENSIONS_WIDTH,
    paddingTop: 10,
  },
  list: {
    flex: 7,
    width: DIMENSIONS_WIDTH,
  },
  listTab: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: BG_COLOR,
    alignItems: 'center',
    width: DIMENSIONS_WIDTH,
    borderBottomWidth: 1,
    borderColor: '#858585',
    paddingLeft: 12,
  },
  listBody: {
    flex: 20,
    backgroundColor: BG_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: DIMENSIONS_WIDTH,
  },
  tabButton: {
    marginLeft: 10,
    paddingRight: 14,
    paddingLeft: 14,
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: -23,
  },
  selectedFont: {
    fontSize: 14,
    fontWeight: '900',
  },
  unselectedFont: {
    fontSize: 13.5,
    fontWeight: '100',
    color: '#4c4c4c',
  },
  summaryFont: {
    fontSize: 20,
    marginBottom: 14,
  },
  balance: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  balanceFont: {
    fontSize: 26,
    marginRight: 2,
  },
  krwFont: {
    fontSize: 14,
    alignSelf: 'flex-end',
    marginLeft: 3,
    marginBottom: 3,
  },
  addressFont: {
    fontSize: 13,
  },
});
