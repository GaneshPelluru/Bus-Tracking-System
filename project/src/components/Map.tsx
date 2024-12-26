import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Bus as BusIcon, MapPin } from 'lucide-react';
import { Bus, BusStop } from '../types/bus';
import { divIcon } from 'leaflet';
import { renderToString } from 'react-dom/server';

interface MapProps {
  buses: Bus[];
  stops: BusStop[];
}

const createBusIcon = (status: Bus['status']) => {
  const color = status === 'ON_TIME' ? 'text-green-500' : 
                status === 'DELAYED' ? 'text-yellow-500' : 'text-red-500';
  
  const iconHtml = renderToString(
    <div className={`${color}`}>
      <BusIcon size={24} />
    </div>
  );

  return divIcon({
    html: iconHtml,
    className: 'bus-icon',
    iconSize: [24, 24]
  });
};

const createStopIcon = () => {
  const iconHtml = renderToString(
    <div className="text-blue-500">
      <MapPin size={24} />
    </div>
  );

  return divIcon({
    html: iconHtml,
    className: 'stop-icon',
    iconSize: [24, 24]
  });
};

export default function Map({ buses, stops }: MapProps) {
  return (
    <MapContainer
      center={[40.7128, -74.0060]}
      zoom={13}
      className="w-full h-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {buses.map((bus) => (
        <Marker 
          key={bus.id}
          position={bus.position}
          icon={createBusIcon(bus.status)}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold">Bus {bus.routeNumber}</h3>
              <p>Status: {bus.status}</p>
              <p>Next Stop: {bus.nextStop}</p>
              <p>ETA: {bus.estimatedArrival}</p>
            </div>
          </Popup>
        </Marker>
      ))}

      {stops.map((stop) => (
        <Marker
          key={stop.id}
          position={stop.position}
          icon={createStopIcon()}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold">{stop.name}</h3>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}