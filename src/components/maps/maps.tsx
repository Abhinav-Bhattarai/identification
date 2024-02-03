import React from 'react';
// eslint-disable-next-line
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100vw',
  height: '50vh',
  borderRadius: '10px',
};

export default function Map(props: { lat: number; lng: number }) {
  const { lat, lng } = props;
  const center = {
    lat,
    lng,
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center}>
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}
