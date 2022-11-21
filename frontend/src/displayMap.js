import React, { useCallback, useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

export function DisplayMapImplementation() {
  const [centers, setCenters] = useState([]);
  const brazilCenter = { lat: -14.4086569, lng: -51.31668 };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  async function getCenters() {
    const res = await fetch(
      "https://3000-googlemaps-jssamples-wy5atajly1u.ws-us77.gitpod.io/bloodCenters"
    );
    setCenters(res.json());
  }

  useEffect(() => {
    getCenters();
  }, []);

  return isLoaded ? (
    <GoogleMap
      zoom={4}
      onLoad={onLoad}
      center={brazilCenter}
      onUnmount={onUnmount}
      mapContainerClassName="w-full h-full"
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export const DisplayMap = React.memo(DisplayMapImplementation);
