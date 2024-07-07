// import Colors from '../constants/Colors';
// import {Marker} from 'react-native-maps';
// import MapView from 'react-native-map-clustering';
// import {defaultStyles} from '../constants/Styles';
// import {useNavigation} from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Geolocation from 'react-native-geolocation-service';
// import {PERMISSIONS, request} from 'react-native-permissions';
// import React, {memo, useCallback, useEffect, useRef} from 'react';
// import {View, StyleSheet, Text, TouchableOpacity, Platform} from 'react-native';

// const INITIAL_REGION = {
//   latitude: 28.5649,
//   longitude: 77.2403,
//   latitudeDelta: 9,
//   longitudeDelta: 9,
// };
// const locationConfiguration = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 10000,
//   distanceFilter: 10,
// };

// const ListingsMap = memo(({listings = []}) => {
//   const navigation = useNavigation();
//   const mapRef = useRef(null);

//   // When the component mounts, locate the user
//   useEffect(() => {
//     requestLocationPermission();
//   }, []);

//   const requestLocationPermission = useCallback(async () => {
//     try {
//       const result = await request(
//         Platform.OS === 'ios'
//           ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
//           : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
//       );
//       if (result === 'granted') getLocation();
//       else console.error('Location permission denied');
//     } catch (error) {
//       console.warn(`Error requesting location permission: ${error.message}`);
//     }
//   }, [getLocation]);

//   // Focus the map on the user's location
//   const getLocation = () => {
//     Geolocation.getCurrentPosition(
//       position => {
//         if (position) {
//           let coordinates = {
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//             heading: position?.coords?.heading,
//             latitudeDelta: 7,
//             longitudeDelta: 7,
//           };
//           mapRef.current?.animateToRegion(coordinates);
//         }
//       },
//       error => {
//         console.log(error);
//       },
//       {forceLocationManager: true},
//       locationConfiguration,
//     );
//   };

//   // When a marker is selected, navigate to the listing page
//   const onMarkerSelected = event => {
//     navigation.navigate(`listing`, {id: event.properties.id});
//   };

//   // Overwrite the renderCluster function to customize the cluster markers
//   const renderCluster = cluster => {
//     const {id, geometry, onPress, properties} = cluster;

//     const points = properties.point_count;
//     return (
//       <Marker
//         key={`cluster-${id}`}
//         coordinate={{
//           longitude: geometry.coordinates[0],
//           latitude: geometry.coordinates[1],
//         }}
//         onPress={onPress}>
//         <View style={styles.marker}>
//           <Text
//             style={{
//               color: '#000',
//               textAlign: 'center',
//               fontFamily: 'mon-sb',
//             }}>
//             {points}
//           </Text>
//         </View>
//       </Marker>
//     );
//   };

//   return (
//     <View style={defaultStyles.container}>
//       <MapView
//         ref={mapRef}
//         animationEnabled={false}
//         style={StyleSheet.absoluteFillObject}
//         initialRegion={INITIAL_REGION}
//         clusterColor="#fff"
//         clusterTextColor="#000"
//         clusterFontFamily="mon-sb"
//         renderCluster={renderCluster}>
//         {/* Render all our marker as usual */}
//         {listings.features.map(item => (
//           <Marker
//             coordinate={{
//               latitude: item.properties.latitude,
//               longitude: item.properties.longitude,
//             }}
//             key={item.properties.id}
//             onPress={() => onMarkerSelected(item)}>
//             <View style={styles.marker}>
//               <Text style={styles.markerText}>€ {item.properties.price}</Text>
//             </View>
//           </Marker>
//         ))}
//       </MapView>
//       <TouchableOpacity
//         style={styles.locateBtn}
//         onPress={requestLocationPermission}>
//         <Ionicons name="navigate" size={24} color={Colors.dark} />
//       </TouchableOpacity>
//     </View>
//   );
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   marker: {
//     padding: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//     elevation: 5,
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     shadowOffset: {
//       width: 1,
//       height: 10,
//     },
//   },
//   markerText: {
//     fontSize: 14,
//     fontFamily: 'mon-sb',
//   },
//   locateBtn: {
//     position: 'absolute',
//     top: 70,
//     right: 20,
//     backgroundColor: '#fff',
//     padding: 10,
//     borderRadius: 10,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     shadowOffset: {
//       width: 1,
//       height: 10,
//     },
//   },
// });

// export default ListingsMap;

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../constants/Colors';

const ListingsMap = () => {
  return (
    <View style={styles.container}>
      <Text>{`🌎 🗺️`}</Text>
    </View>
  );
};

export default ListingsMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bgColor,
  },
});
