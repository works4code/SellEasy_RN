import {StyleSheet} from 'react-native';
// helpers
import COLORS from '../../helpers/colors';
import {WIDTH} from '../../helpers/constants';

export default StyleSheet.create({
  labelStyle: {
    color: COLORS.WHITE,
    fontFamily: 'NunitoSans-Bold',
    fontSize: 12,
    textAlign: 'center',
  },
  secondaryView: {
    flex: 1,
    marginTop: 30,
  },
  title: {
    marginTop: 10,
    fontSize: 26,
    lineHeight: 33,
    fontWeight: '800',
  },
  highlighterView: {
    borderBottomWidth: 0.5,
    height: 20,
    marginTop: -20,
    opacity: 0.1,
    borderRadius: 25,
    backgroundColor: COLORS.HIGHLIGHTER,
    width: 100,
    alignSelf: 'center',
    marginLeft: 150,
  },
  otpView: {
    padding: 20,
  },
  numberInputContainer: {
    // borderBottomWidth: 1,
    // borderBottomColor: COLORS.GRAY,
    marginTop: 50,
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  numberInput: {
    flex: 1,
    marginLeft: 7,
    color: COLORS.WHITE,
  },
  nextBtn: {
    marginRight: 15,
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  otpInput: {
    height: 50,
    width: 50,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Phone number
  pvSubtitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.GRAY,
    marginTop: 10,
  },
  pvNuberInputContainer: {
    width: WIDTH / 4.2,
    borderRightWidth: 1,
    borderRightColor: COLORS.APPLE_LOGO_BG,
    flexDirection: 'row',
    alignItems: 'center',
  },
  // verifyOtp
  voSubtitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.GRAY,
    marginTop: 10,
  },
  // personal info
  piPhoneInput: {
    width: WIDTH / 4.2,
    borderRightWidth: 1,
    borderRightColor: COLORS.APPLE_LOGO_BG,
    flexDirection: 'row',
    alignItems: 'center',
  },
  // select productas
  spProductDesc: {
    color: COLORS.GRAY,
    fontSize: 12,
    textAlign: 'left',
    fontWeight: '400',
    letterSpacing: 0.3,
  },
  searchInputContainer: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER_COLOR,
    marginHorizontal: 10,
    alignItems: 'center',
    padding: 10,
  },
});
