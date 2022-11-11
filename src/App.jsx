import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './App.module'
const App = () => {
  const onPressIn = () => console.log('pressable 터치가 시작될 때 ')
  const onPressOut = () => console.log('터치가 해제될 때 ')
  const onPress = () => console.log('터치가 시작될 때, onPressOut 이후  ')
  const onLongPress = () => console.log('일정 시간 이상 지속시 ')
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <TouchableOpacity
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text>Gee</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App
