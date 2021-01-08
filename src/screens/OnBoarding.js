import React, {Component} from 'react';
import {
  Platform,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  StatusBar,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
//  colors
import COLORS from '../helpers/colors';
import AppText from '../components/AppText';
// Styles
import styles from './styles/Onboarding.styles';

const DATA = [
  {
    key: '1',
    title: 'Create Catalog For',
    subtitleText: 'Anything',
    backgroundColor: COLORS.BLACK,
    width: Platform.OS === 'ios' ? 110 : 100,
    desc:
      'Create stunning catalogs in seconds. No training needed. Easy customization. Free Sign-up! Easy &  intuitive for beginners.Robust & Powerful for experts. Professional quality',
  },
  {
    key: '2',
    title: 'Easily Share Catalog',
    subtitleText: 'With Customer',
    backgroundColor: COLORS.BLACK,
    width: Platform.OS === 'ios' ? 180 : 165,
    desc:
      'Share a  product oe service from an individual chat or group chat. Tap the Forward icon next to the product or servicce image. Search for or select the groups. ',
  },
  {
    key: '3',
    title: 'Watch And Tracking',
    subtitleText: 'Live Customer',
    backgroundColor: COLORS.BLACK,
    width: Platform.OS === 'ios' ? 170 : 163,
    desc:
      'Watch the customers as it grows in real time and monitor your catalog views and interest and Analysis',
  },
];

class OnBoarding extends Component {
  state = {
    last: false,
    progress: 0,
  };

  renderItem = ({item}) => {
    return (
      <View style={{justifyContent: 'center', paddingLeft: 20, flex: 1}}>
        <AppText textStyle={styles.title}>{item.title}</AppText>
        <AppText textStyle={{...styles.title, color: COLORS.PRIMARY}}>
          {item.subtitleText}
        </AppText>
        <View style={[styles.highlighterView, {width: item.width}]} />
        <AppText textStyle={styles.desc}>{item.desc}</AppText>
      </View>
    );
  };

  _renderPagination = (index) => {
    return (
      <View>
        <TouchableNativeFeedback
          onPress={() => this.slider.goToSlide(index > 0 && index - 1)}>
          {/* back */}
          {index > 0 ? (
            <Icon
              name="ios-chevron-back-sharp"
              color={COLORS.GRAY}
              size={20}
              style={styles.prevIcon}
            />
          ) : (
            // skip
            <TouchableOpacity
              onPress={() => {
                this.slider.goToSlide(3);
              }}
              style={[
                styles.prevIcon,
                {
                  right: 33,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <AppText
                textStyle={{
                  color: '#8B95A6',
                  fontWeight: '700',
                  fontSize: 16,
                  lineHeight: 24,
                }}>
                Skip
              </AppText>
              <Icon
                name="ios-chevron-forward-sharp"
                color={COLORS.GRAY}
                size={20}
              />
            </TouchableOpacity>
          )}
        </TouchableNativeFeedback>
        {/* bottom */}
        {index < 2 ? (
          <View>
            <AnimatedCircularProgress
              size={60}
              width={3}
              fill={index > 0 ? (index + 1) * 33.5 : 33.5}
              tintColor={COLORS.PRIMARY}
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor={COLORS.GRAY}
              rotation={360}
              style={{position: 'absolute', bottom: 40, left: 20}}>
              {() => (
                <View style={styles.progressView}>
                  <Text
                    style={[
                      styles.progressText,
                      {fontWeight: '800', fontSize: 20},
                    ]}>
                    {index < 2 ? index + 1 : index}{' '}
                  </Text>
                  <Text style={styles.progressText}>/ 3</Text>
                </View>
              )}
            </AnimatedCircularProgress>
            <TouchableNativeFeedback
              onPress={() => this.slider.goToSlide(index < 3 && index + 1)}>
              <Icon
                name="ios-chevron-forward-sharp"
                size={25}
                color={COLORS.PRIMARY}
                style={styles.nextBtn}
              />
            </TouchableNativeFeedback>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.getStarted}
            onPress={() => this.props.navigation.replace('login')}>
            <AppText style={styles.getStarted}>GET STARTED</AppText>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          data={DATA}
          renderItem={this.renderItem}
          renderPagination={this._renderPagination}
          style={[styles.pageContainer]}
          ref={(ref) => {
            this.slider = ref;
          }}
          showNextButton
        />
      </View>
    );
  }
}

export default OnBoarding;
