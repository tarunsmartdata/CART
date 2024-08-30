import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Settings = () => {
  const Navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Text>settings</Text>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Button
          title="Move to Home"
          onPress={() =>
            Navigation.reset({
              index: 0,
              routes: [{name: 'Home'}],
            })
          }
        />
      </View>
    </View>
  );
};

export default Settings;
