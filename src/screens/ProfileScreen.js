import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const ProfileScreen = () => {
  return (
    <View>
      <Text>My Profile</Text>
      <TextInput placeholder="Name" />
      <TextInput placeholder="Phone" />
      {/* Other profile fields */}
      <Button title="Save" onPress={() => {}} />
    </View>
  );
};

export default ProfileScreen;
