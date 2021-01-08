import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modalbox';
// helpers
import COLORS from '../helpers/colors';
import {HEIGHT} from '../helpers/constants';
// components
import AppText from '../components/AppText';

const Network = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  let searchInput = null;

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <MIcons name="arrow-back-ios" size={20} color={COLORS.WHITE} />
          </Pressable>
          <View>
            <AppText textStyle={{fontSize: 20}}>My Network</AppText>
          </View>
          <Pressable onPress={() => setIsOpenModal(true)}>
            <MIcons name="add-circle" size={25} color={COLORS.GRAY} />
          </Pressable>
        </View>
        <View style={styles.content_container}>
          <Pressable
            onPress={() => searchInput.focus()}
            style={styles.searchInputContainer}>
            <MIcons name="search" size={25} color={COLORS.GRAY} />
            <TextInput
              placeholder="SEARCH"
              style={styles.searchInput}
              ref={(ref) => (searchInput = ref)}
            />
          </Pressable>
        </View>
        <Modal
          isOpen={isOpenModal}
          coverScreen
          backdropOpacity={0.8}
          style={{
            height: HEIGHT / 1.18,
            backgroundColor: COLORS.BACKGOUND,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}
          position="bottom"
          onClosed={() => setIsOpenModal(false)}></Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.SECONDARY,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  content_container: {
    flex: 1,
    backgroundColor: COLORS.BACKGOUND,
    padding: 15,
  },
  searchInput: {
    padding: 10,
    flex: 1,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.GRAY,
    marginTop: 10,
  },
});

export default Network;
