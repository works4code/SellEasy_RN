import React from 'react';
import {
  StatusBar,
  Pressable,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Linking,
  Image,
  Platform
} from 'react-native';
import {View, Text} from 'react-native';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux'
// helpers
import COLORS from '../helpers/colors';
// components
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

const Profile = (props) => {
  const navigation = useNavigation();

  console.log("profile screen props", props)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.SECONDARY} translucent />
      <View style={[styles.header, {justifyContent: 'space-between'}]}>
        <View style={[styles.header, {padding: 0}]}>
          <Pressable onPress={() => navigation.goBack()}>
            <MIcons name="chevron-left" color={COLORS.WHITE} size={30} />
          </Pressable>
          <View style={styles.profileImage} >
            <Image source={{uri: props.user.user.photo}} style={{height: "100%", width: "100%", resizeMode: 'contain'}} />
          </View>
          <View style={{marginLeft: 12}}>
            <AppText>Torest Eco Garden</AppText>
            <View style={{flexDirection: 'row'}}>
              <AppText textStyle={styles.profile_memberType}>Premium</AppText>
              <AppText
                textStyle={[
                  styles.profile_memberType,
                  {marginLeft: 7, color: COLORS.PRIMARY},
                ]}>
                Upgrade
              </AppText>
            </View>
          </View>
        </View>
        <Pressable
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => navigation.navigate('EditProfile')}>
          <MIcons name="mode-edit" size={20} color={COLORS.WHITE} />
          <AppText> Edit</AppText>
        </Pressable>
      </View>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={{padding: 15}}>
          <AppText textStyle={{color: COLORS.GRAY}}>PERSONAL INFO</AppText>
        </View>
        <Pressable
          style={({pressed}) => [
            styles.profile_itemContainer,
            {
              backgroundColor: pressed
                ? COLORS.HOMESCREEN_CARD
                : COLORS.DRAWER_BACKGROUND,
            },
          ]}>
          <View style={styles.profile_item_iconContainer}>
            <MIcons name="person-outline" size={25} color={COLORS.GRAY} />
          </View>
          <View style={{marginLeft: 7}}>
            <AppText textStyle={{fontSize: 10, color: COLORS.GRAY}}>
              NAME
            </AppText>
            <AppText textStyle={{fontSize: 14}}>{props.user.user ? props.user.user.name :'Caroline Logan'}</AppText>
          </View>
        </Pressable>

        <Pressable
          style={({pressed}) => [
            styles.profile_itemContainer,
            {
              backgroundColor: pressed
                ? COLORS.HOMESCREEN_CARD
                : COLORS.DRAWER_BACKGROUND,
            },
          ]}>
          <View style={styles.profile_item_iconContainer}>
            <MIcons name="domain" size={25} color={COLORS.GRAY} />
          </View>
          <View style={{marginLeft: 7}}>
            <AppText textStyle={{fontSize: 10, color: COLORS.GRAY}}>
              COMPANY NAME
            </AppText>
            <AppText textStyle={{fontSize: 14}}>Torest Eco Garden</AppText>
          </View>
        </Pressable>

        <Pressable
          style={({pressed}) => [
            styles.profile_itemContainer,
            {
              backgroundColor: pressed
                ? COLORS.HOMESCREEN_CARD
                : COLORS.DRAWER_BACKGROUND,
            },
          ]}>
          <View style={styles.profile_item_iconContainer}>
            <MIcons name="attach-money" size={25} color={COLORS.GRAY} />
          </View>
          <View style={{marginLeft: 7}}>
            <AppText textStyle={{fontSize: 10, color: COLORS.GRAY}}>
              CURRENCY
            </AppText>
            <AppText textStyle={{fontSize: 14}}>$ (USD)</AppText>
          </View>
        </Pressable>

        <Pressable
          style={({pressed}) => [
            styles.profile_itemContainer,
            {
              backgroundColor: pressed
                ? COLORS.HOMESCREEN_CARD
                : COLORS.DRAWER_BACKGROUND,
            },
          ]}>
          <View style={styles.profile_item_iconContainer}>
            <MIcons name="drafts" size={25} color={COLORS.GRAY} />
          </View>
          <View style={{marginLeft: 7}}>
            <AppText textStyle={{fontSize: 10, color: COLORS.GRAY}}>
              E-MAIL
            </AppText>
            <AppText textStyle={{fontSize: 14}}>
              {props.user.user ? props.user.user.email :'carolinelogan12@gmail.com'}
            </AppText>
          </View>
        </Pressable>

        <Pressable
          style={({pressed}) => [
            styles.profile_itemContainer,
            {
              alignItems: 'center',
              backgroundColor: pressed
                ? COLORS.HOMESCREEN_CARD
                : COLORS.DRAWER_BACKGROUND,
            },
          ]}>
          <View style={styles.profile_item_iconContainer}>
            <MIcons name="language" size={25} color={COLORS.GRAY} />
          </View>
          <View
            style={{
              marginLeft: 7,
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <View>
              <AppText textStyle={{fontSize: 10, color: COLORS.GRAY}}>
                DOMAIN
              </AppText>
              <AppText
                textStyle={{
                  fontSize: 14,
                  color: COLORS.PRIMARY,
                  textDecorationLine: 'underline',
                }}>
                Set your Domain
              </AppText>
            </View>
            <View>
              <MIcons name="chevron-right" size={25} color="#545A65" />
            </View>
          </View>
        </Pressable>
        <View style={{padding: 15}}>
          <AppText textStyle={{color: COLORS.GRAY}}>OTHER</AppText>
        </View>
        <View style={[styles.profile_itemContainer]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.profile_item_iconContainer}>
              <MIcons name="person-outline" size={25} color={COLORS.GRAY} />
            </View>

            <View style={{marginLeft: 7, flex: 1}}>
              <AppText textStyle={{fontSize: 14}}>Product Demo</AppText>
              <View style={{width: '70%'}}>
                <AppText
                  textStyle={{
                    fontSize: 12,
                    color: COLORS.GRAY,
                    textAlign: 'left',
                    lineHeight: 15,
                  }}>
                  Get a complete walkthrough of how you can use the SallEasy app
                </AppText>
              </View>
            </View>
            <AppButton
              title="Live Demo"
              style={{width: 100, height: 35, paddingVertical: 0}}
              titleStyle={{fontSize: 12}}
            />
          </View>
        </View>

        <View style={styles.profile_itemContainer}>
          <View style={styles.profile_item_iconContainer}>
            <MIcons name="favorite-border" size={25} color={COLORS.GRAY} />
          </View>
          <View style={{marginLeft: 7}}>
            <AppText textStyle={{fontSize: 14}}>Follow Us</AppText>
            <AppText textStyle={{fontSize: 12, color: COLORS.GRAY}}>
              You can find us on given social media
            </AppText>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Pressable
              onPress={() => Linking.openURL('https://www.facebook.com/')}>
              <FAIcons
                name="facebook"
                size={20}
                color={COLORS.GRAY}
                style={{marginHorizontal: 7}}
              />
            </Pressable>
            <Pressable
              onPress={() => Linking.openURL('https://www.instagram.com/')}>
              <FAIcons
                name="instagram"
                size={20}
                color={COLORS.GRAY}
                style={{marginHorizontal: 7}}
              />
            </Pressable>
            <Pressable
              onPress={() => Linking.openURL('https://www.youtube.com/')}>
              <FAIcons
                name="youtube"
                size={20}
                color={COLORS.GRAY}
                style={{marginHorizontal: 7}}
              />
            </Pressable>
          </View>
        </View>
        <Pressable
          style={({pressed}) => [
            styles.profile_itemContainer,
            {
              backgroundColor: pressed
                ? COLORS.HOMESCREEN_CARD
                : COLORS.DRAWER_BACKGROUND,
            },
          ]}>
          <View style={styles.profile_item_iconContainer}>
            <MIcons name="share" size={25} color={COLORS.GRAY} />
          </View>
          <View style={{marginLeft: 7}}>
            <AppText textStyle={{fontSize: 14}}>Share Profile</AppText>
            <AppText textStyle={{fontSize: 12, color: COLORS.GRAY}}>
              Access your QR code
            </AppText>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <MIcons name="qr-code" size={30} color={COLORS.GRAY} />
          </View>
        </Pressable>

        <Pressable style={({pressed}) => [styles.profile_itemContainer, {
          backgroundColor: pressed ? COLORS.HOMESCREEN_CARD : COLORS.DRAWER_BACKGROUND
        }]}>
          <View style={styles.profile_item_iconContainer}>
            <MIcons name="person-outline" size={25} color={COLORS.GRAY} />
          </View>
          <View style={{marginLeft: 7}}>
            <AppText textStyle={{fontSize: 14}}>Plans & Billing</AppText>
            <AppText textStyle={{fontSize: 12, color: COLORS.GRAY}}>
              Manage your current plan and Billing info
            </AppText>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <MIcons name="chevron-right" size={30} color={COLORS.GRAY} />
          </View>
        </Pressable>

        <Pressable style={({pressed}) => [styles.profile_itemContainer, {
          backgroundColor: pressed ? COLORS.HOMESCREEN_CARD : COLORS.DRAWER_BACKGROUND
        }]}>
          <View style={styles.profile_item_iconContainer}>
            <MIcons name="local-offer" size={25} color={COLORS.GRAY} />
          </View>
          <View style={{marginLeft: 7}}>
            <AppText textStyle={{fontSize: 14}}>Coupons(Beta)</AppText>
            <AppText textStyle={{fontSize: 12, color: COLORS.GRAY}}>
              Manage your current plan and Billing info
            </AppText>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <MIcons name="chevron-right" size={30} color={COLORS.GRAY} />
          </View>
        </Pressable>

        <Pressable style={({pressed}) => [styles.profile_itemContainer, {
          backgroundColor: pressed ? COLORS.HOMESCREEN_CARD : COLORS.DRAWER_BACKGROUND
        }]}>
          <View style={styles.profile_item_iconContainer}>
            <Icons name="alert-circle-outline" size={25} color={COLORS.GRAY} />
          </View>
          <View style={{marginLeft: 7}}>
            <AppText textStyle={{fontSize: 14}}>About Us</AppText>
            <AppText textStyle={{fontSize: 12, color: COLORS.GRAY}}>
              Manage your current plan and Billing info
            </AppText>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <MIcons name="chevron-right" size={30} color={COLORS.GRAY} />
          </View>
        </Pressable>

        <Pressable style={({pressed}) => [styles.profile_itemContainer, {
          backgroundColor: pressed ? COLORS.HOMESCREEN_CARD : COLORS.DRAWER_BACKGROUND
        }]}>
          <View style={styles.profile_item_iconContainer}>
            <MIcons name="star-rate" size={25} color={COLORS.GRAY} />
          </View>
          <View style={{marginLeft: 7}}>
            <AppText textStyle={{fontSize: 14}}>Rate Us</AppText>
            <AppText textStyle={{fontSize: 12, color: COLORS.GRAY}}>
              Let us know how was your experience
            </AppText>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <MIcons name="chevron-right" size={30} color={COLORS.GRAY} />
          </View>
        </Pressable>
        <Pressable
          style={({pressed}) => [styles.profile_itemContainer, {backgroundColor: pressed ? 'red' : COLORS.RED}]}>
          <View
            style={[
              styles.profile_item_iconContainer,
              {backgroundColor: COLORS.WHITE},
            ]}>
            <MIcons name="power-settings-new" color={COLORS.RED} size={25} />
          </View>
          <View style={{marginLeft: 7}}>
            <AppText textStyle={{fontSize: 16}}>Logout</AppText>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <MIcons name="chevron-right" size={30} color={COLORS.WHITE} />
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGOUND,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: 'hidden'
  },
  profile_memberType: {
    color: COLORS.GRAY,
    fontSize: 14,
    fontWeight: 'normal',
  },
  profile_itemContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    backgroundColor: COLORS.DRAWER_BACKGROUND,
    borderBottomColor: COLORS.GRAY,
    borderBottomWidth: 0,
  },
  profile_item_iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: COLORS.BORDER_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Profile);
