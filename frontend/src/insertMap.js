import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { brazilCenter } from "./brazilCenter";

export function InsertMapImplementation({ position, setPosition }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
  });

  return isLoaded ? (
    <GoogleMap
      zoom={4}
      streetView={false}
      center={brazilCenter}
      options={{
        disableDefaultUI: true,
        zoomControl: true,
      }}
      onClick={(e) => { setPosition(e.latLng) }}
      mapContainerClassName="w-full h-full"
    >
      {position && <Marker position={position}></Marker>}
    </GoogleMap>
  ) : (
    <></>
  );
}

export const InsertMap = React.memo(InsertMapImplementation);
