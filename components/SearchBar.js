import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Feather style={styles.iconStyle} name='search' size={30} color='black' />
      <TextInput style={styles.inputStyle} placeholder='Search' />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    height: 50,
    marginHorizontal: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  iconStyle: {
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    outlineStyle: 'none',
  },
});
export default SearchBar;
