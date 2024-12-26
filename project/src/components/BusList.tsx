import { Bus } from '../types/bus';
import { Bus as BusIcon } from 'lucide-react';

interface BusListProps {
  buses: Bus[];
}

export default function BusList({ buses }: BusListProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4">Active Buses</h2>
      <div className="space-y-4">
        {buses.map((bus) => (
          <div
            key={bus.id}
            className="flex items-center p-4 border rounded-lg hover:bg-gray-50"
          >
            <div className={`
              ${bus.status === 'ON_TIME' ? 'text-green-500' : 
                bus.status === 'DELAYED' ? 'text-yellow-500' : 'text-red-500'}
              mr-4
            `}>
              <BusIcon size={24} />
            </div>
            <div>
              <h3 className="font-semibold">Bus {bus.routeNumber}</h3>
              <p className="text-sm text-gray-600">Next Stop: {bus.nextStop}</p>
              <p className="text-sm text-gray-600">ETA: {bus.estimatedArrival}</p>
              <span className={`
                inline-block px-2 py-1 text-xs rounded-full mt-1
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