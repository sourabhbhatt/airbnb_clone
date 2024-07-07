import React from 'react';
import {useDispatch} from 'react-redux';
import Colors from '../../constants/Colors';
import {defaultStyles} from '../../constants/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {setUserConfig} from '../../redux/slices/userSlice';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

const renderAuthOption = (iconName, text, onPress) => (
  <TouchableOpacity style={styles.authOption} onPress={onPress}>
    <Ionicons name={iconName} size={24} style={defaultStyles.btnIcon} />
    <Text style={styles.authOptionText}>{text}</Text>
  </TouchableOpacity>
);

const AuthScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const onSelectAuth = async () => {
    dispatch(
      setUserConfig({
        firstName: 'Sourabh',
        lastName: 'Bhatt',
        emailAddresses: [
          {emailAddress: 'sourabhbhatt.77@gmail.com', primary: true},
        ],
      }),
    );
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        style={[defaultStyles.inputField, styles.inputField]}
      />

      <TouchableOpacity style={styles.continueBtn}>
        <Text style={styles.continueBtnText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.separatorView}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>or</Text>
        <View style={styles.separatorLine} />
      </View>

      <View style={styles.authOptions}>
        {renderAuthOption('mail', 'Continue with Phone', () =>
          onSelectAuth('Phone'),
        )}
        {renderAuthOption('logo-apple', 'Continue with Apple', () =>
          onSelectAuth('Apple'),
        )}
        {renderAuthOption('logo-google', 'Continue with Google', () =>
          onSelectAuth('Google'),
        )}
        {renderAuthOption('logo-facebook', 'Continue with Facebook', () =>
          onSelectAuth('Facebook'),
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
    padding: 15,
    /* ----- Shadow ----- */
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {width: 1, height: 5},
  },
  title: {
    ...defaultStyles.title,
    fontSize: 20,
    letterSpacing: 1,
  },
  inputField: {
    marginBottom: 30,
  },
  continueBtn: {
    ...defaultStyles.btn,
  },
  continueBtnText: {
    ...defaultStyles.btnText,
  },
  separatorView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  separatorLine: {
    flex: 1,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  separatorText: {
    fontFamily: 'mon-sb',
    color: Colors.grey,
    fontSize: 16,
    marginHorizontal: 10,
  },
  authOptions: {
    flexDirection: 'column',
    gap: 20,
  },
  authOption: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  authOptionText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'mon-sb',
    marginLeft: 5,
  },
});

export default AuthScreen;
