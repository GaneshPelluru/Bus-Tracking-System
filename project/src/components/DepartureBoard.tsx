import { BusStop } from '../types/bus';
import { Bus as BusIcon, Clock } from 'lucide-react';

interface DepartureBoardProps {
  stop: BusStop;
}

export default function DepartureBoard({ stop }: DepartureBoardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Departures from {stop.name}</h2>
        <Clock className="text-gray-500" />
      </div>
      <div className="space-y-3">
        {stop.departures.map((departure) => (
          <div
            key={departure.id}
            className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center space-x-3">
              <div className={`
                ${departure.status === 'ON_TIME' ? 'text-green-500' : 
                  departure.status === 'DELAYED' ? 'text-yellow-500' : 'text-red-500'}
              `}>
                <BusIcon size={20} />
              </div>
              <div>
                <div className="font-semibold">Route {departure.routeNumber}</div>
                <div className="text-sm text-gray-600">To: {departure.destination}</div>
                {departure.platform && (
                  <div className="text-sm text-gray-500">Platform: {departure.platform}</div>
                )}
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">{departure.scheduledTime}</div>
              <span className={`
                inline-block px-2 py-1 text-xs rounded-full
                ${departure.status === 'ON_TIME' ? 'bg-green-100 text-green-800' : 
                  departure.status === 'DELAYED' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-red-100 text-red-800'}
              `}>
                {departure.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}