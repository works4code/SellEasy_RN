import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Platform,
  Pressable,
} from 'react-native';
import axios from 'axios';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
// helpers
import COLORS from '../helpers/colors';
import {WIDTH, BASE_URl, GET_CATALOG, TOKEN} from '../helpers/constants';
// components
import AppText from '../components/AppText';
// images
import SHARE from '../images/homeicons/Group27.png';

const HomeScreen = (props) => {
  const navigation = useNavigation();

  console.log('home screen props', props);

  const [data, setData] = useState([]);

  useEffect(() => {
    getCatalogues();
  }, []);

  const getCatalogues = async () => {
    try {
      const {data} = await axios.get(BASE_URl + GET_CATALOG, {
        headers: {
          Authorization: TOKEN,
        },
      });
      console.log('catalogs', data);
      setData(data.Data);
    } catch (error) {
      console.log('error while fetching catalohues');
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={{flex: 1, alignItems: 'center', marginVertical: 7}}>
        <View
          style={{
            height: 128,
            width: 374,
            backgroundColor: COLORS.HOMESCREEN_CARD,
            marginTop: 10,
            borderRadius: 10,
            justifyContent: 'flex-end',
          }}>
          {/* row */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: -WIDTH / 5,
            }}>
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: '#fff',
                zIndex: -1,
                marginHorizontal: 7,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{height: 90, width: 90, backgroundColor: 'blue'}} />
            </View>
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: '#fff',
                zIndex: -1,
                marginHorizontal: 7,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{height: 90, width: 90, backgroundColor: 'grey'}} />
            </View>
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: '#fff',
                zIndex: -1,
                marginHorizontal: 7,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{height: 90, width: 90, backgroundColor: '#529fdf'}}
              />
            </View>
          </View>
          {/* opacity view */}
          <View
            style={{
              backgroundColor: '#282D36',
              height: 100,
              width: 374,
              borderRadius: 10,
              opacity: 0.973,
              padding: 10,
            }}>
            <AppText>{item.name}</AppText>
            <AppText textStyle={{color: COLORS.GRAY, fontSize: 12}}>
              {item.unitId} Products
            </AppText>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 7,
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MIcons name="visibility" color={COLORS.WHITE} size={18} />
                <AppText> 25k</AppText>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MIcons
                  name="insert-invitation"
                  size={15}
                  color={COLORS.GRAY}
                />
                <AppText textStyle={{fontSize: 12, color: COLORS.GRAY}}>
                  {' '}
                  {new Date(item.lastAccessedOn).getMinutes()} Minutes ago
                </AppText>
              </View>
              <View>
                <Image
                  source={SHARE}
                  resizeMode="contain"
                  style={{height: 30, width: 30}}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.BACKGOUND,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      <StatusBar translucent backgroundColor={COLORS.BACKGOUND} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          marginTop: Platform.OS === 'android' ? 7 : 0,
        }}>
        <Pressable onPress={() => navigation.toggleDrawer()}>
          <MIcons name="short-text" color={COLORS.GRAY} size={30} />
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: WIDTH / 4,
          }}>
          <View style={{flexDirection: 'row'}}>
            <MIcons name="chat-bubble-outline" color={COLORS.GRAY} size={25} />
            <View
              style={{
                height: 9,
                width: 9,
                borderRadius: 4.5,
                backgroundColor: COLORS.PRIMARY,
                marginLeft: -9,
              }}
            />
          </View>
          <Pressable onPress={() => navigation.navigate('Profile')}>
            <MIcons name="person-outline" color={COLORS.GRAY} size={25} />
          </Pressable>
          <Icon name="md-settings-sharp" color={COLORS.GRAY} size={22} />
        </View>
      </View>
      <View style={{flex: 1, padding: 10}}>
        <AppText
          textStyle={{
            fontSize: 24,
            lineHeight: 30,
            fontWeight: '800',
            marginLeft: 10,
          }}>
          Welcome {props.user.user ? props.user.user.name : 'carolin logan'}
        </AppText>
        <AppText textStyle={{color: COLORS.GRAY, marginTop: 5, marginLeft: 10}}>
          Plan Guru Private Ltd.
        </AppText>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
        />
        <View
          style={{
            position: 'absolute',
            bottom: 14,
            height: 80,
            width: 80,
            borderRadius: 40,
            right: WIDTH / 2,
            left: WIDTH / 2.5,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.1,
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateCatalog')}
          style={{
            position: 'absolute',
            bottom: 20,
            height: 66,
            width: 66,
            borderRadius: 33,
            right: WIDTH / 2,
            left: WIDTH / 2.4,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            shadowOffset: {
              height: -4,
              width: -2,
            },
            shadowColor: '#fff',
            shadowOpacity: 0.5,
          }}>
          <MIcons name="add" color={COLORS.PRIMARY} size={30} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(HomeScreen);
