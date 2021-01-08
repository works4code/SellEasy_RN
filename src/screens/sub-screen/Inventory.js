import React, {Component, createRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
  Switch,
  ScrollView,
  Pressable,
} from 'react-native';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import Accordion from 'react-native-collapsible/Accordion';
import {CheckBox} from 'react-native-elements';
import Modal from 'react-native-modalbox';
// helpers
import COLORS from '../../helpers/colors';
import {HEIGHT, WIDTH} from '../../helpers/constants';
// components
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';

const VARIANTS = [
  {
    id: 1,
    color: 'Purple',
    size: '22MM',
    storage: '1GB',
    isPublish: false,
    isAvailable: true,
    isActive: false,
    isOutOfStock: false,
    quantity: 0,
    isAutoReduce: true,
    isTracking: true,
  },
  {
    id: 2,
    color: 'Purple',
    size: '22MM',
    storage: '512 MB',
    isPublish: false,
    isAvailable: true,
    isActive: false,
    isOutOfStock: false,
    quantity: 50,
    isAutoReduce: true,
    isTracking: true,
  },
  {
    id: 3,
    color: 'Yellow',
    size: '22MM',
    storage: '512 MB',
    isPublish: false,
    isAvailable: true,
    isOutOfStock: false,
    quantity: 0,
    isAutoReduce: true,
    isTracking: true,
  },
  {
    id: 4,
    color: 'Yellow',
    size: '22MM',
    storage: '512 MB',
    isPublish: false,
    isAvailable: true,
    isActive: false,
    isOutOfStock: false,
    quantity: 0,
    isAutoReduce: true,
    isTracking: true,
  },
  {
    id: 5,
    color: 'Yellow',
    size: '22MM',
    storage: '512 MB',
    isPublish: false,
    isAvailable: true,
    isActive: false,
    isOutOfStock: false,
    quantity: 0,
    isAutoReduce: true,
    isTracking: true,
  },
  {
    id: 6,
    color: 'Purple',
    size: '22MM',
    storage: '1GB',
    isPublish: false,
    isAvailable: true,
    isActive: false,
    isOutOfStock: false,
    quantity: 0,
    isAutoReduce: true,
    isTracking: true,
  },
  {
    id: 7,
    color: 'Purple',
    size: '22MM',
    storage: '1GB',
    isPublish: false,
    isAvailable: true,
    isActive: false,
    isOutOfStock: false,
    quantity: 0,
    isAutoReduce: true,
    isTracking: true,
  },
  {
    id: 8,
    color: 'Purple',
    size: '22MM',
    storage: '1GB',
    isPublish: false,
    isAvailable: true,
    isActive: false,
    isOutOfStock: false,
    quantity: 0,
    isAutoReduce: true,
    isTracking: true,
  },
];

export class Inventory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSection: [],
      totalVariants: VARIANTS,
      isModalOpen: false,
      currentEditItem: {},
    };

    this.searchInput = createRef();
    this.outOfStockBtn = createRef();
    this.availableBtn = createRef();
  }

  renderHeader = (section) => {
    const {activeSection} = this.state;

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}>
        <View style={{flexDirection: 'row'}}>
          <AppText textStyle={{color: '#fff'}}>{section.color} </AppText>
          <AppText textStyle={{color: '#fff'}}> {section.size} </AppText>
          <AppText textStyle={{color: '#fff'}}> {section.storage}</AppText>
        </View>
        <View>
          <MIcons name="keyboard-arrow-down" size={15} color={COLORS.GRAY} />
        </View>
      </View>
    );
  };

  renderContent = (section) => {
    const {activeSection, totalVariants} = this.state;

    const toggleAvailability = (currentId) => {
      const tempArr = this.state.totalVariants;

      this.state.totalVariants.map((item, index) => {
        if (item.id === currentId) {
          tempArr[index].isAvailable = true;
          tempArr[index].isOutOfStock = false;
        }
      });

      this.setState({totalVariants: tempArr});
    };

    const toggleOutofStock = (currentId) => {
      const tempArr = this.state.totalVariants;

      this.state.totalVariants.map((item, index) => {
        if (item.id === currentId) {
          tempArr[index].isAvailable = false;
          tempArr[index].isOutOfStock = true;
        }
      });

      this.setState({totalVariants: tempArr});
    };

    return (
      <View
        style={{
          justifyContent: 'space-evenly',
          height: 100,
          paddingHorizontal: 10,
          borderRadius: 8,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Pressable
            ref={this.outOfStockBtn}
            onPress={() => {
              toggleOutofStock(section.id);
            }}
            style={({pressed}) => [
              {
                backgroundColor:
                  pressed || !section.isAvailable
                    ? COLORS.RED
                    : COLORS.BACKGOUND,
              },
              {
                borderWidth: 0.8,
                borderColor: COLORS.RED,
                padding: 5,
                borderRadius: 8,
                width: WIDTH / 2.7,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            {({pressed}) => (
              <AppText
                textStyle={{
                  color:
                    pressed || !section.isAvailable ? COLORS.WHITE : COLORS.RED,
                  fontSize: 14,
                }}>
                Out of stock
              </AppText>
            )}
          </Pressable>
          <Pressable
            ref={this.availableBtn}
            onPress={() => {
              toggleAvailability(section.id);
            }}
            style={({pressed}) => [
              {
                backgroundColor:
                  pressed || section.isAvailable
                    ? COLORS.GREEN
                    : COLORS.BACKGOUND,
              },
              {
                borderWidth: 0.8,
                paddingHorizontal: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
                width: WIDTH / 2.7,
                borderColor: COLORS.GREEN,
              },
            ]}>
            {({pressed}) => (
              <AppText
                textStyle={{
                  color:
                    pressed || section.isAvailable
                      ? COLORS.WHITE
                      : COLORS.GREEN,
                  fontSize: 14,
                }}>
                Available
              </AppText>
            )}
          </Pressable>
          <Pressable
            onPress={() => {
              this.setState({isModalOpen: true});
              this.setState({currentEditItem: section});
            }}
            style={{
              padding: 7,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.SECONDARY,
              borderRadius: 8,
            }}>
            <MIcons name="mode-edit" color={COLORS.WHITE} size={18} />
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: COLORS.SECONDARY,
            padding: 10,
            borderRadius: 8,
            alignItems: 'center',
          }}>
          <AppText>Publish this variant</AppText>
          <Switch
            trackColor={{false: COLORS.BACKGOUND, true: COLORS.PRIMARY}}
            onValueChange={() => {
              section.isPublish = !section.isPublish;
              this.setState({});
            }}
            value={section.isPublish}
          />
        </View>
      </View>
    );
  };

  updateSections = (activeSections) => {
    this.setState({activeSection: activeSections});
  };

  render() {
    const {activeSection} = this.state;
    return (
      <View style={{flex: 1}}>
        <View style={styles.searchInputContainer}>
          <TouchableWithoutFeedback onPress={() => searchInput.focus()}>
            <MIcons name="search" color={COLORS.GRAY} size={24} />
          </TouchableWithoutFeedback>
          <TextInput
            placeholder="Search In Variants"
            placeholderTextColor={COLORS.GRAY}
            style={{marginLeft: 10, color: COLORS.WHITE, flex: 1}}
            ref={this.searchInput}
            onChangeText={(text) => {
              console.log('text changed');
            }}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Accordion
            sectionContainerStyle={{
              borderBottomWidth: 0.5,
              borderBottomColor: COLORS.GRAY,
              paddingVertical: 10,
            }}
            activeSections={activeSection}
            sections={VARIANTS}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            onChange={this.updateSections}
            expandMultiple
            underlayColor={COLORS.BACKGOUND}
            touchableComponent={TouchableWithoutFeedback}
          />
        </ScrollView>
        <Modal
          isOpen={this.state.isModalOpen}
          style={{
            height: HEIGHT / 1.7,
            width: WIDTH - 50,
            backgroundColor: COLORS.BACKGOUND,
            paddingHorizontal: 10,
            borderRadius: 8,
          }}
          coverScreen
          entry="left"
          backdropOpacity={0.8}
          onClosed={() => {
            this.setState({isModalOpen: false});
          }}>
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10,
                paddingHorizontal: 5,
                alignItems: 'center',
                borderBottomWidth: 0.7,
                borderBottomColor: COLORS.GRAY,
              }}>
              <AppText textStyle={{fontSize: 20, fontWeight: '700'}}>
                Edit Inventory
              </AppText>
              <Pressable onPress={() => this.setState({isModalOpen: false})}>
                <MIcons name="close" size={25} color={COLORS.GRAY} />
              </Pressable>
            </View>
            <View style={{padding: 10, flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '60%',
                }}>
                <AppText>{this.state.currentEditItem.color}</AppText>
                <AppText>{this.state.currentEditItem.size}</AppText>
                <AppText>{this.state.currentEditItem.storage}</AppText>
              </View>
              <View style={{marginTop: 10, flex: 1}}>
                <AppText textStyle={{fontSize: 12, color: COLORS.GRAY}}>
                  STOCK AVAILIBILITY
                </AppText>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 10,
                  }}>
                  <Pressable
                    onPress={() => {
                      this.setState({
                        currentEditItem: {
                          ...this.state.currentEditItem,
                          isAvailable: false,
                          isOutOfStock: true,
                        },
                      });
                    }}
                    style={{
                      borderWidth: 0.8,
                      borderColor: COLORS.RED,
                      padding: 5,
                      borderRadius: 8,
                      width: WIDTH / 2.7,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: this.state.currentEditItem.isOutOfStock
                        ? COLORS.RED
                        : COLORS.BACKGOUND,
                    }}>
                    <AppText
                      textStyle={{
                        color: this.state.currentEditItem.isOutOfStock
                          ? COLORS.WHITE
                          : COLORS.RED,
                        fontSize: 14,
                      }}>
                      Out of stock
                    </AppText>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      this.setState({
                        currentEditItem: {
                          ...this.state.currentEditItem,
                          isAvailable: true,
                          isOutOfStock: false,
                        },
                      });
                    }}
                    style={{
                      borderWidth: 0.8,
                      paddingHorizontal: 5,
                      backgroundColor: this.state.currentEditItem.isAvailable
                        ? COLORS.GREEN
                        : COLORS.BACKGOUND,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 8,
                      width: WIDTH / 2.7,
                      borderColor: COLORS.GREEN,
                    }}>
                    <AppText
                      textStyle={{
                        color: this.state.currentEditItem.isAvailable
                          ? COLORS.WHITE
                          : COLORS.GREEN,
                        fontSize: 14,
                      }}>
                      Available
                    </AppText>
                  </Pressable>
                </View>
                <CheckBox
                  checkedColor={COLORS.PRIMARY}
                  title="I don't want to track Quantity"
                  containerStyle={{
                    backgroundColor: COLORS.BACKGOUND,
                    borderWidth: 0,
                  }}
                  style={{marginVertical: 7}}
                  textStyle={{
                    color: COLORS.WHITE,
                    fontWeight: 'normal',
                    fontSize: 14,
                  }}
                  Component={TouchableWithoutFeedback}
                  checkedIcon="check-square-o"
                  uncheckedIcon="square-o"
                  checked={this.state.currentEditItem.isTracking}
                  onPress={() =>
                    this.setState({
                      currentEditItem: {
                        ...this.state.currentEditItem,
                        isTracking: !this.state.currentEditItem.isTracking,
                      },
                    })
                  }
                />
                <View style={{marginTop: 15}}>
                  <AppText
                    textStyle={{
                      color: COLORS.GRAY,
                      fontSize: 12,
                      fontWeight: '600',
                      // marginTop: 10,
                    }}>
                    Available Quantity
                  </AppText>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '45%',
                      borderBottomColor: COLORS.GRAY,
                      borderBottomWidth: 0.5,
                      justifyContent: 'space-between',
                      padding: 7,
                      alignItems: 'center',
                    }}>
                    <Pressable
                      disabled={
                        this.state.currentEditItem.quantity < 1 ? true : false
                      }
                      onPress={() => {
                        if (this.state.currentEditItem.quantity !== 0) {
                          this.setState({
                            currentEditItem: {
                              ...this.state.currentEditItem,
                              quantity:
                                Number(this.state.currentEditItem.quantity) - 1,
                            },
                          });
                        }
                      }}
                      style={{
                        height: 25,
                        width: 25,
                        borderRadius: 12.5,
                        backgroundColor:
                          this.state.currentEditItem.quantity < 1
                            ? COLORS.GRAY
                            : COLORS.WHITE,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <MIcons name="remove" size={20} />
                    </Pressable>
                    <View style={{overflow: 'scroll'}}>
                      <TextInput
                        placeholder={`${this.state.currentEditItem.quantity}`}
                        style={{
                          color: COLORS.WHITE,
                          width: 50,
                          textAlign: 'center',
                        }}
                        placeholderTextColor={COLORS.WHITE}
                        keyboardType="numeric"
                        maxLength={6}
                        value={this.state.currentEditItem.quantity}
                        onChangeText={(text) =>
                          this.setState({
                            currentEditItem: {
                              ...this.state.currentEditItem,
                              quantity: text,
                            },
                          })
                        }
                      />
                    </View>
                    <Pressable
                      onPress={() =>
                        this.setState({
                          currentEditItem: {
                            ...this.state.currentEditItem,
                            quantity:
                              Number(this.state.currentEditItem.quantity) + 1,
                          },
                        })
                      }
                      style={{
                        height: 25,
                        width: 25,
                        borderRadius: 12.5,
                        backgroundColor: COLORS.WHITE,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <MIcons name="add" size={20} />
                    </Pressable>
                  </View>
                </View>
                <View style={{justifyContent: 'space-evenly', flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <AppText>Auto reduce quantity</AppText>
                    <Switch
                      trackColor={{
                        false: COLORS.BACKGOUND,
                        true: COLORS.PRIMARY,
                      }}
                      value={this.state.currentEditItem.isAutoReduce}
                      onValueChange={() =>
                        this.setState({
                          currentEditItem: {
                            ...this.state.currentEditItem,
                            isAutoReduce: !this.state.currentEditItem
                              .isAutoReduce,
                          },
                        })
                      }
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <AppText textStyle={{color: COLORS.WHITE}}>
                      Publish this variant
                    </AppText>
                    <Switch
                      trackColor={{
                        false: COLORS.BACKGOUND,
                        true: COLORS.PRIMARY,
                      }}
                      value={this.state.currentEditItem.isPublish}
                      onValueChange={() =>
                        this.setState({
                          currentEditItem: {
                            ...this.state.currentEditItem,
                            isPublish: !this.state.currentEditItem.isPublish,
                          },
                        })
                      }
                    />
                  </View>
                  <AppButton
                    title="Save"
                    style={{width: '100%'}}
                    onPress={() => {
                      const tempArr = this.state.totalVariants;
                      this.state.totalVariants.map((item, index) => {
                        if (item.id === this.state.currentEditItem.id) {
                          tempArr[index] = this.state.currentEditItem;
                        }
                      });
                      this.setState({totalVariants: tempArr});
                      this.setState({isModalOpen: false});
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

export default Inventory;
