import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';
import { useSelector } from 'react-redux';

const CustomCheckbox = ({onPress}) => {
  const [isChecked, setIsChecked] = useState(false);
  const themeMode = useSelector((state)=>state.theme.mode)
  const handleToggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
  <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-between",marginHorizontal:"5%",marginTop:'2%'}}>
      <TouchableOpacity onPress={handleToggleCheckbox} style={{flexDirection:'row',alignItems:'center'}}>
      <TouchableOpacity
      style={[styles.checkboxContainer, isChecked && styles.checkedCheckbox,{borderColor:themeMode==='light'? COLOR.black : COLOR.white}]}
      onPress={handleToggleCheckbox}
    >
      {isChecked && <Text style={styles.checkmark}>✓</Text>}
      
    </TouchableOpacity>
    <Text style={[{fontSize:14,fontFamily:FONT.Urbanist_Medium,color:COLOR.black,marginLeft:'5%'},{color:themeMode==='light'?COLOR.black:COLOR.white}]}>Remember me</Text>

      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
    <Text style={[{fontSize:12,fontFamily:FONT.Urbanist_Medium,color:COLOR.black,marginLeft:'3%'},{color:themeMode==='light' ? COLOR.black : COLOR.white}]}>Forgot Password</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: COLOR.black,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  checkedCheckbox: {
    backgroundColor:'green', // Change the background color when checked
    borderWidth:0
    
  },
  checkmark: {
    color: '#fff', // Change the checkmark color
    fontSize: 16,
  },
});

export default CustomCheckbox;
