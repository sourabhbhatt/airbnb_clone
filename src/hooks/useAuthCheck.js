import {useSelector} from 'react-redux';
import {useEffect, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

const useAuthCheck = ({shouldNavigateWithoutAsking = true} = {}) => {
  const navigation = useNavigation();
  const userConfig = useSelector(state => state?.user?.userConfig);

  const onPressLogin = useCallback(
    () => navigation.navigate('auth'),
    [navigation],
  );

  useEffect(() => {
    if (!userConfig && shouldNavigateWithoutAsking) {
      onPressLogin();
    }
  }, [userConfig, shouldNavigateWithoutAsking, onPressLogin]);

  return {
    isLoggedIn: !!userConfig,
    onPressLogin,
  };
};

export default useAuthCheck;
