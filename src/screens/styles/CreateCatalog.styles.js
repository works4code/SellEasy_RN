import {StyleSheet} from 'react-native';
// helpers
import COLORS from '../../helpers/colors';
import {WIDTH} from '../../helpers/constants';

export default StyleSheet.create({
  backBtnStyle: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  backBtnText: {
    color: COLORS.GRAY,
    fontSize: 16,
    fontWeight: '700',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: 7,
  },
  textInputContainer: {
    paddingVertical: 15,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER_COLOR,
    justifyContent: 'center',
  },
  catalogTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    alignItems: 'center',
  },
  termsConditionContainer: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  termsConditionText: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Nunito Sans',
    color: COLORS.GRAY,
  },
  AddProductsBtn: {
    width: WIDTH - 26,
    backgroundColor: COLORS.PRIMARY,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 8,
  },
});
