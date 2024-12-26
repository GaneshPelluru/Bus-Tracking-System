import { useEffect, useMemo } from 'react';
import Map from './components/Map';
import BusList from './components/BusList';
import DepartureBoard from './components/DepartureBoard';
import NearbyBuses from './components/NearbyBuses';
import { mockBuses, mockStops } from './data/mockData';
import { useLocation } from './hooks/useLocation';
import { calculateDistance } from './utils/distance';
import 'leaflet/dist/leaflet.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);
  }, []);

  const busesWithDistance = useMemo(() => {
    if (!location || location.error) return mockBuses;

    return mockBuses.map(bus => ({
      ...bus,
      distance: calculateDistance(
        location.latitude,
        location.longitude,
        bus.position[0],
        bus.position[1]
      )
    }));
  }, [location]);

  const centralStation = mockStops.find(stop => stop.name === 'Central Station');

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Bus Tracking System</h1>
        </div>
      </nav>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-4" style={{ height: '600px' }}>
              <Map buses={busesWithDistance} stops={mockStops} />
            </div>
          </div>
          <div className="space-y-8">
            {centralStation && <DepartureBoard stop={centralStation} />}
            <NearbyBuses buses={busesWithDistance} />
            <BusList buses={busesWithDistance} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;