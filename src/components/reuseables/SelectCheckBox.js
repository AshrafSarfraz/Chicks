import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';

const SelectCheckBox = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
  <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-between",marginHorizontal:"5%"}}>
      <TouchableOpacity onPress={handleToggleCheckbox} style={{flexDirection:'row',alignItems:'center'}}>
      <TouchableOpacity
      style={[styles.checkboxContainer, isChecked && styles.checkedCheckbox]}
      onPress={handleToggleCheckbox}
    >
      {isChecked && <Text style={styles.checkmark}>✓</Text>}
      
    </TouchableOpacity>

      </TouchableOpacity>

  </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: COLOR.grey_1,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',

  },
  checkedCheckbox: {
    backgroundColor:COLOR.primary, // Change the background color when checked
    borderWidth:0
    
  },
  checkmark: {
    color: '#fff', // Change the checkmark color
    fontSize: 12,
  },
});

export default SelectCheckBox;
