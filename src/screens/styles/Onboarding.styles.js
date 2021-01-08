import {StyleSheet, Dimensions} from 'react-native';
// helpers
import COLORS from '../../helpers/colors';

export default StyleSheet.create({
  /*
    ..######.
    .##....##
    .##......
    .##......
    .##......
    .##....##
    ..######.
    */
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
    paddingRight: 20,
    flexDirection: 'row',
  },
  /*
     .########.
     .##.....##
     .##.....##
     .##.....##
     .##.....##
     .##.....##
     .########.
     */
  desc: {
    color: COLORS.GRAY,
    textAlign: 'left',
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24,
  },
  /*
      ..######..
      .##....##.
      .##.......
      .##...####
      .##....##.
      .##....##.
      ..######..
      */
  getStartedBtn: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  getStarted: {
    position: 'absolute',
    bottom: 50,
    left: 50,
    width: '80%',
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
  },
  /*
      .##.....##
      .##.....##
      .##.....##
      .#########
      .##.....##
      .##.....##
      .##.....##
      */
  highlighterView: {
    borderBottomWidth: 0.5,
    height: 20,
    marginTop: -20,
    opacity: 0.1,
    borderRadius: 25,
    backgroundColor: '#A4C2BF',
  },
  /*
      .##....##
      .###...##
      .####..##
      .##.##.##
      .##..####
      .##...###
      .##....##
      */
  nextBtn: {
    position: 'absolute',
    bottom: 50,
    right: 33,
  },
  /*
      .########.
      .##.....##
      .##.....##
      .########.
      .##.......
      .##.......
      .##.......
      */
  pageContainer: {
    flex: 1,
    backgroundColor: '#2A3039',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  prevIcon: {
    position: 'absolute',
    bottom: Dimensions.get('window').height - 80,
    marginLeft: 20,
    color: COLORS.GRAY,
  },
  progressText: {
    color: COLORS.WHITE,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '700',
    letterSpacing: 0.16,
  },
  progressView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  /*
      .########
      ....##...
      ....##...
      ....##...
      ....##...
      ....##...
      ....##...
      */
  title: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 33.88,
  },
  /*
      ..######.
      .##....##
      .##......
      ..######.
      .......##
      .##....##
      ..######.
      */
  skipTxt: {
    color: COLORS.GRAY,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
  },
});
