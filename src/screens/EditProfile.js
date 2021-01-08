import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Pressable,
  Image,
  Platform,
  StatusBar,
} from 'react-native';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import {TextField} from 'react-native-material-textfield';
import Menu, {MenuItem} from 'react-native-material-menu';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
// helpers
import COLORS from '../helpers/colors';
import {WIDTH} from '../helpers/constants';
// components
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

const EditProfile = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <MIcons name="chevron-left" size={30} color={COLORS.WHITE} />
        </Pressable>
        <AppText textStyle={{fontSize: 16, marginLeft: 20}}>
          Edit profile
        </AppText>
      </View>
      <View style={styles.profile_edit_container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.profile_imageContainer}>
            <Image
              source={{uri: props.user.user.photo}}
              style={{height: '100%', width: '100%', resizeMode: 'contain'}}
            />
          </View>
          <Pressable>
            <AppText textStyle={styles.profile_changePhoto_text}>
              Change Photo
            </AppText>
          </Pressable>
        </View>
        <View style={{flex: 1, padding: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextField
              label="First Name"
              style={{width: WIDTH / 2}}
              baseColor={COLORS.GRAY}
              tintColor={COLORS.PRIMARY}
              containerStyle={{width: WIDTH / 2.5}}
            />
            <TextField
              label="Last Name"
              style={{width: WIDTH / 2}}
              baseColor={COLORS.GRAY}
              tintColor={COLORS.PRIMARY}
              containerStyle={{width: WIDTH / 2.5}}
            />
          </View>
          <TextField
            label="Company Name"
            baseColor={COLORS.GRAY}
            tintColor={COLORS.PRIMARY}
          />
          <View style={{marginTop: 10}}>
            <Menu
              style={{backgroundColor: COLORS.GRAY, width: '90%', marginTop: 0}}
              // ref={this.menuRef}
              button={
                <Pressable
                  onPress={() => {
                    // setIsDropdownActive(true);
                    // this.setState({isDropdownActive: true});
                    // this.menuRef.current.show();
                  }}
                  style={styles.dropDown}>
                  <Text
                    onPress={() => {
                      // this.menuRef.current.show();
                    }}
                    style={{
                      color: COLORS.GRAY,
                      fontSize: 16,
                      fontWeight: '600',
                    }}>
                    Selected currency
                  </Text>
                  <Icons
                    name="ios-chevron-down"
                    size={25}
                    color={COLORS.GRAY}
                  />
                </Pressable>
              }>
              <MenuItem>First item</MenuItem>
              <MenuItem>Second item</MenuItem>
              <MenuItem>Third item</MenuItem>
            </Menu>
          </View>
          <TextField
            label="Email"
            baseColor={COLORS.GRAY}
            tintColor={COLORS.PRIMARY}
            keyboardType="email-address"
          />
          <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 30}}>
            <AppButton
              title="Save & Update"
              onPress={() => console.log('profile updated')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DRAWER_BACKGROUND,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  profile_edit_container: {
    flex: 1,
    backgroundColor: COLORS.BACKGOUND,
  },
  profile_imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 30,
    overflow: 'hidden'
  },
  profile_changePhoto_text: {
    color: COLORS.PRIMARY,
    textDecorationLine: 'underline',
    marginTop: 10,
    textAlign: 'center',
  },
  dropDown: {
    borderBottomWidth: 0.5,
    borderColor: COLORS.GRAY,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(EditProfile);
