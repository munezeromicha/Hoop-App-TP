import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { withSpring } from 'react-native-redash';

const SwipeableContainer: React.FC = ({ children }) => {
  const translationX = new Animated.Value(0);
  const gestureState = new Animated.Value(State.UNDETERMINED);
  const handleGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translationX, state: gestureState } }],
    { useNativeDriver: true }
  );

  const isOpen = withSpring({
    value: translationX,
    velocity: 0,
    state: gestureState,
    snapPoints: [-200, 0], // Adjust the snap points as needed
    config: {
      damping: 20,
      stiffness: 150,
      mass: 1,
      overshootClamping: false,
    },
  });

  const translateX = interpolate(isOpen, {
    inputRange: [-200, 0],
    outputRange: [-200, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler
        onGestureEvent={handleGestureEvent}
        onHandlerStateChange={handleGestureEvent}
      >
        <Animated.View
          style={[styles.swipeableContainer, { transform: [{ translateX }] }]}
        >
          {children}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default SwipeableContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeableContainer: {
    backgroundColor: 'white',
    width: '80%',
    height: 100,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    elevation: 4,
  },
});


