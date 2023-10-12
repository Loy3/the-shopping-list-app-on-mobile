import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewItemsScreen from './components/ViewItemsScreen';

import { Provider } from 'react-redux';
import { store } from "./services/Service(Redux)/store";

export default function App() {
  return (
    <Provider store={store}>
      <ViewItemsScreen />
    </Provider>
    //  {/* <View style={styles.container}> */}
    //  {/* <StatusBar style="auto" /> */}
    //   {/* </View> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
