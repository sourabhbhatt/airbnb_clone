import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

const useNavigationHandler = () => {
  const navigation = useNavigation();

  const handleNavigation = useCallback(
    (routeName, params = {}) => {
      navigation.navigate(routeName, params);
    },
    [navigation],
  );

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {handleNavigation, handleBack};
};

export default useNavigationHandler;
