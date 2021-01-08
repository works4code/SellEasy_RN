const DrawerNavigation = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.7],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 5],
    outputRange: [0, 7],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <Drawer.Navigator
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={styles.drawerStyles}
      contentContainerStyle={{ flex: 1 }}
      drawerContentOptions={{
        activeBackgroundColor: 'transparent',
        activeTintColor: 'white',
        inactiveTintColor: 'white',
      }}
      sceneContainerStyle={{ backgroundColor: 'transparent' }}
      drawerContent={(props) => {
        setProgress(props.progress);
        return <DrawerContent {...props} />;
      }}>
      <Drawer.Screen name="AppNavigator">
        {(props) => <AppNavigator {...props} style={animatedStyle} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    borderColor: "white",
    borderRadius: 15,
    borderTopRightRadius: 15
  },
  drawerStyles: {
    flex: 1,
    width: '50%',
    backgroundColor: 'transparent'
  },
  drawerItem: {
    alignItems: 'flex-start',
    marginVertical: 0
  },
  drawerLabel: {
    color: 'white',
    marginLeft: -16
  },

  headerContainer: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#FFF',
    elevation: 7,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10.32,
    backgroundColor: Colors.WHITE,
    borderColor: Colors.WHITE,
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 20
  }
});