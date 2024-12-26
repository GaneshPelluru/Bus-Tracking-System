export interface Bus {
  id: string;
  routeNumber: string;
  position: [number, number];
  status: 'ON_TIME' | 'DELAYED' | 'STOPPED';
  nextStop: string;
  estimatedArrival: string;
  destination: string;
  distance?: number; // Distance from user in km
}

export interface BusStop {
  id: string;
  name: string;
  position: [number, number];
  departures: Departure[];
}

export interface Departure {
  id: string;
  routeNumber: string;
  destination: string;
  scheduledTime: string;
  status: 'ON_TIME' | 'DELAYED' | 'CANCELLED';
  platform?: string;
}