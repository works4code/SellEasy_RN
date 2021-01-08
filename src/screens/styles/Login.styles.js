import {StyleSheet, Dimensions} from 'react-native';
import {HEIGHT, WIDTH} from '../../helpers/constants';
import COLORS from '../../helpers/colors';

export default StyleSheet.create({
  container: {
    height: HEIGHT / 2,
    width: WIDTH,
    backgroundColor: COLORS.SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    // borderBottomRightRadius: 100,
    // borderBottomLeftRadius: 100
  },
  iconContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  txt: {
    fontSize: 26,
    lineHeight: 33,
    fontWeight: '800',
  },
  descContainer: {
    marginTop: 7,
    padding: 10,
  },
  desc: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 2,
    fontWeight: '500',
    color: COLORS.GRAY,
  },
});
