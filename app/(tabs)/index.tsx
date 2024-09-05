import { StyleSheet, View, Text } from 'react-native';

const index = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
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
});

