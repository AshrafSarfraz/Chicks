import React, { useRef,useState } from 'react';
import { StyleSheet, View,TouchableOpacity,Image,Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import CheckoutHeader from '../../components/reuseables/CheckoutHeader';
import { useSelector } from 'react-redux';
import { COLOR, FONT } from '../../data/StyleGuides';

const TrackLocation = ({navigation}) => {

  const initialRegion = {
    latitude: 37.7749, 
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  // Define line coordinates from top to bottom
  const lineCoordinates = [
    { latitude: 90, longitude: 0 },
    { latitude: -90, longitude: 0 },
  ];
  const mapRef = useRef(null);
  const [currentRegion, setCurrentRegion] = useState({
    latitude: 37.7763,
    longitude: 122.4328,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [destinationRegion, setDestinationRegion] = useState({
    latitude: 36.7468,
    longitude: -119.7726,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  
  const polylineCoordinates = [currentRegion, destinationRegion];

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {/* Example marker */}
        <Marker
          coordinate={{ latitude: 37.7749, longitude: -122.4194 }}
          title="Marker Title"
          description="Marker Description"
        />
        {/* Draw a red line from top to bottom */}
        <Polyline
        coordinates={polylineCoordinates}
        strokeWidth={5}
        strokeColor="black"
        lineCap={"butt"}
        geodesic={true}

      />
      </MapView>
      <View style={styles.overlay}>
      <View style={styles.headerContainer}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image style={styles.backIcon} source={require('../../Assets/icons/blackback.png')} />
      </TouchableOpacity>
      <Text style={styles.titleText}>Track Order</Text>
    </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    position: 'absolute',
    top: 20,
    left: 10,
    padding: 10,
    borderRadius: 10,
  },
  // header style
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
    marginLeft: '5%',
  },
  backIcon: {
    height: 24,
    width: 24,
  },
  titleText: {
    fontSize: 16,
    fontFamily: FONT.Roboto_Bold,
    color: COLOR.black,
    marginLeft: '5%',
  },
});

export default TrackLocation;
