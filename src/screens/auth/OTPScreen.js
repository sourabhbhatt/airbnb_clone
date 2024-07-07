import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const OTPScreen = ({route}) => {
  const {phoneNumber} = route.params;
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = () => {
    // Verify OTP logic
  };

  return (
    <View>
      <Text>Enter OTP sent to {phoneNumber}:</Text>
      <TextInput value={otp} onChangeText={setOtp} keyboardType="numeric" />
      <Button title="Verify OTP" onPress={handleVerifyOTP} />
    </View>
  );
};

export default OTPScreen;
