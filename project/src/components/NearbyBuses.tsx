import { Bus } from '../types/bus';
import { MapPin } from 'lucide-react';

interface NearbyBusesProps {
  buses: Bus[];
}

export default function NearbyBuses({ buses }: NearbyBusesProps) {
  const sortedBuses = [...buses]
    .filter(bus => bus.distance !== undefined)
    .sort((a, b) => (a.distance || 0) - (b.distance || 0))
    .slice(0, 5);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Nearby Buses</h2>
        <MapPin className="text-gray-500" />
      </div>
      <div className="space-y-3">
        {sortedBuses.map((bus) => (
          <div
            key={bus.id}
            className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
          >
            <div>
              <div className="font-semibold">Route {bus.routeNumber}</div>
              <div className="text-sm text-gray-600">To: {bus.destination}</div>
              <div className="text-sm text-gray-500">
                {bus.distance !== undefined && `${bus.distance.toFixed(1)} km away`}
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">ETA: {bus.estimatedArrival}</div>
              <span className={`
                inline-block px-2 py-1 text-xs rounded-full
                ${bus.status === 'ON_TIME' ? 'bg-green-100 text-green-800' : 
                  bus.status === 'DELAYED' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-red-100 text-red-800'}
              `}>
                {bus.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}