"use client";

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Image from "next/image";
import { useState } from "react";
import { Star } from "lucide-react";

interface Branch {
  name: string;
  lat: number;
  lng: number;
  image: string;
  viewMap: string;
  rating: string;
}

const branches: Branch[] = [
  {
    name: "24/7 Bali Belly Home Doctor & Infusion Therapy. (Seminyak)",
    lat: -8.7085285,
    lng: 115.1720993,
    image: "/images/branch_seminyak.png",
    viewMap: "https://maps.app.goo.gl/pd6oaCqVY7T6Px5t6",
    rating: "4.9",
  },
  {
    name: "IV Drip Clinic - Mobile Home Service Bali (24/7) - Bali Belly - Immunity - Hangover. (Jimbaran)",
    lat: -8.8030159,
    lng: 115.1517049,
    image: "/images/branch_jimbaran.png",
    viewMap: "https://maps.app.goo.gl/5yUDkQhDydMX8mVg6",
    rating: "5.0",
  },
  {
    name: "24/7 Apotek Online Pharmacy - Med Delivery - Doctor & IV Drip Home Service. (Canggu)",
    lat: -8.6457827,
    lng: 115.1614056,
    image: "/images/branch_canggu.png",
    viewMap: "https://maps.app.goo.gl/c44xTQpzkbR3UJuN6",
    rating: "5.0",
  },
  {
    name: "24/7 Pharmacy Bali - Online Med Delivery Service & IV Drips. (Sanur)",
    lat: -8.6873148,
    lng: 115.2527399,
    image: "/images/branch_sanur.png",
    viewMap: "https://maps.app.goo.gl/EJQcrfoPKSX4gix5A",
    rating: "5.0",
  },
  {
    name: "IV Drip Bali Home Service - Bali Belly - Hangover - Immune Booster. (Umalas)",
    lat: -8.6682427,
    lng: 115.1624502,
    image: "/images/branch_umalas.png",
    viewMap: "https://maps.app.goo.gl/BdFx75hdBXa6n6kRA",
    rating: "5.0",
  },
  {
    name: "Pharmacy 24/7 Med Delivery & IV Drip. Home Service Only. (Pererenan)",
    lat: -8.6324218,
    lng: 115.1322885,
    image: "/images/branch_pererenan.png",
    viewMap: "https://maps.app.goo.gl/DxHgbWi36Pyk7Rtd9",
    rating: "5.0",
  },
  {
    name: "Bali belly, Immunity, Hangover IV Drip Homecare & Pharmacy 24/7. (Berawa)",
    lat: -8.64609,
    lng: 115.15189,
    image: "/images/branch_berawa.png",
    viewMap: "https://maps.app.goo.gl/btwnjpKVLJbwbPv59",
    rating: "5.0",
  },
];

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = { lat: -8.6905, lng: 115.2122 };

export default function GoogleMaps() {
  const [selected, setSelected] = useState<Branch | null>(null);

  return (
    <div className="bg-th_basecolor_1">
      {/* <h3 className="text-center text-xl text-white font-extrabold py-4">
        Our Clinic Branch Location
      </h3> */}
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
          {branches.map((branch, i) => (
            <Marker
              key={i}
              position={{ lat: branch.lat, lng: branch.lng }}
              title={branch.name}
              onClick={() => setSelected(branch)}
            />
          ))}

          {selected && (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => setSelected(null)}
            >
              <div style={{ maxWidth: "200px" }}>
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-[90px] object-cover"
                />
                <div className="flex items-center gap-2 justify-between my-2">
                  <p className="text-left text-xs font-medium">
                    {selected.name}
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${selected.lat},${selected.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 bg-[#D3F7FF] rounded-full"
                  >
                    <Image
                      src="/images/direction_icon.png"
                      width={20}
                      height={20}
                      alt="direction icon"
                      className="w-5 h-5"
                      loading="lazy"
                    />
                  </a>
                </div>
                <p className="text-xs font-medium text-gray-500 flex items-center gap-1">
                  <Star className="text-yellow-500" />
                  <span>{selected.rating} Rating</span>
                </p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}