import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';
import { useSelector } from 'react-redux';

const MapCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const thememode = useSelector((state)=>state.theme.mode)
  const handleToggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
  <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-between",marginHorizontal:"6%",marginTop:'5%'}}>
      <TouchableOpacity onPress={handleToggleCheckbox} style={{flexDirection:'row',alignItems:'center'}}>
      <TouchableOpacity
      style={[styles.checkboxContainer, isChecked && styles.checkedCheckbox]}
      onPress={handleToggleCheckbox}
    >
      {isChecked && <Text style={styles.checkmark}>✓</Text>}
      
    </TouchableOpacity>
    <Text style={[{fontSize:14,fontFamily:FONT.Urbanist_Medium,color:COLOR.black,marginLeft:'8%'},{color:thememode==='light' ? COLOR.black: COLOR.white}]}>Save Location</Text>

      </TouchableOpacity>

  </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: COLOR.primary,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',

  },
  checkedCheckbox: {
    backgroundColor: COLOR.primary, // Change the background color when checked
    
  },
  checkmark: {
    color: '#fff', // Change the checkmark color
    fontSize: 16,
  },
});

export default MapCheckbox;
