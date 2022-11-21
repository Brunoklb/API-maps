import React, {  useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { coordinatesToPosition } from "./coordinatesToPosition";
import { api } from "./api";

export function DisplayMapImplementation({ setSelected }) {
  const [centers, setCenters] = useState([]);
  const brazilCenter = { lat: -14.4086569, lng: -51.31668 };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
  });

  async function getCenters() {
    const res = await api.get("/bloodCenters");
    const data = JSON.parse(res.data);
    setCenters(data);
  }

  useEffect(() => {
    getCenters();
  }, []);

  return isLoaded ? (
    <GoogleMap
      zoom={4}
      streetView={false}
      center={brazilCenter}
      options={{
        disableDefaultUI: true,
        zoomControl: true,
      }}
      mapContainerClassName="w-full h-full"
    >
      {centers.map((center) => {
        const position = coordinatesToPosition(center.point.coordinates);
        return (
          <Marker
            key={center.id}
            position={position}
            onClick={() => { setSelected(center) }}
          ></Marker>
        );
      })}
    </GoogleMap>
  ) : (
    <></>
  );
}

export const DisplayMap = React.memo(DisplayMapImplementation);
