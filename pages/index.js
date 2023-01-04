import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";
import { useState, useMemo } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [latlng, setLatLang] = useState({
    lat: 23.685,
    lng: 90.3563,
  });

  useMemo(() => {
    setLatLang(latlng);
  }, [latlng]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCU2ZULsxi3t9p-scqtMAnt6tKzrYy_ldw",
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Mapper</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <GoogleMap
          onClick={(e) => {
            setLatLang(e.latLng.toJSON());
            console.log(latlng);
          }}
          zoom={10}
          center={latlng}
          mapContainerClassName="map-container"
        >
          <Marker position={latlng} />
        </GoogleMap>
        <pre
          style={{
            margin: "20px",
          }}
        >
          <h1>Latitude: {latlng.lat}</h1>
          <h1>Longitude: {latlng.lng}</h1>
        </pre>
      </main>
    </>
  );
}
