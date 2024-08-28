import React, { useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

type TCoordinates = {
  latitude: number;
  longitude: number;
};

// Филиалы
const mapPoints: Array<
  TCoordinates & {
    name: string;
  }
> = [
  {
    latitude: 51.12414257263663,
    longitude: 71.41811350000002,
    name: "Астана, Сыганак 54А, Офис 1406/3",
  },
  {
    latitude: 51.13852157261734,
    longitude: 71.3744459999999,
    name: "Астана, Культегин 19, НП 2",
  },
  {
    latitude: 43.25176807453546,
    longitude: 76.93528749999996,
    name: "Алмата, Мауленова 92, Офис 412",
  },
];

export const App = (): JSX.Element => {
  const [coordinates, setCoordinates] = useState<TCoordinates>(mapPoints[0]);

  return (
    <div>
      <div>
        <h2>Выберите удобный филиал в Астане</h2>

        <div style={{ display: "flex" }}>
          {mapPoints.map((point) => (
            <button key={point.name} onClick={() => setCoordinates(point)}>
              {point.name}
            </button>
          ))}
        </div>
      </div>

      <YMaps>
        <Map
          style={{ width: "800px", height: "400px" }}
          state={{
            center: [coordinates.latitude, coordinates.longitude],
            zoom: 16,
          }}
        >
          {mapPoints.map(({ latitude, longitude }) => (
            <Placemark geometry={[latitude, longitude]} />
          ))}
        </Map>
      </YMaps>
    </div>
  );
};
