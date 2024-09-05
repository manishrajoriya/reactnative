import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const index = () => {
  return (
    <View style={styles.container}>
      <Text className='text-2xl font-pblack'>Aora</Text>
      <StatusBar style='auto' />
      <Link href='/home' style={styles.link}>Go to home</Link>
    </View>
  );
};

export default index;


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

