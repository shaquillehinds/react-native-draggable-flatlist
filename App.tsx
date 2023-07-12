import React from 'react';
import { StyleProp, View, ViewStyle, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DraggableFlatlist from 'src/DraggableFlatlist';

const array = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }, { a: 6 }];

const renderArray = () => {
  const arr: any[] = [];
  for (let i = 0; i < 10; i++) {
    arr.push({ a: i });
  }
  return arr;
};

const style: StyleProp<ViewStyle> = {
  width: 300,
  height: 50,
  alignSelf: 'center',
  marginVertical: 10,
  backgroundColor: 'red',
  borderRadius: 10,
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <DraggableFlatlist
        data={renderArray()}
        renderItem={({ item, index }) => (
          <View style={style}>
            <Text style={{ fontSize: 30, color: 'white' }}>{item.a}</Text>
          </View>
        )}
      />
    </GestureHandlerRootView>
  );
}
