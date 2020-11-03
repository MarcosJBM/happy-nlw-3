import React, { useState } from "react";
import { Text, View } from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { api } from "../../services/api";

import mapMarker from "../../images/map-marker.png";

import styles from "./styles";

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const navigate = useNavigation();

  useFocusEffect(() => {
    api.get("orphanages").then(response => {
      setOrphanages(response.data);
    });
  });

  function handleNavigateToOrphanagesDetails(id: number) {
    navigate.navigate("OrphanagesDetails", { id });
  }

  function handleNavigateToCreateOrphanage() {
    navigate.navigate("SelectMapPosition");
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -27.1189626,
          longitude: -48.9397504,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {orphanages.map(orphanage => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapMarker}
              calloutAnchor={{
                y: 2.7,
                x: 0.8,
              }}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            >
              <Callout
                onPress={() => handleNavigateToOrphanagesDetails(orphanage.id)}
              >
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>{orphanage.name}</Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {orphanages.length} Orfanatos Encontrados
        </Text>

        <RectButton
          style={styles.createOrphanageButton}
          onPress={handleNavigateToCreateOrphanage}
        >
          <Feather name='plus' size={20} color='#FFF' />
        </RectButton>
      </View>
    </View>
  );
}
