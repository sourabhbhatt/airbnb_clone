import Main from './Main';
import * as React from 'react';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={store}>
        <Main />
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
const styles = StyleSheet.create({container: {flex: 1}});
