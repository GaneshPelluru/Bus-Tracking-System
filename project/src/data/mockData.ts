import { Bus, BusStop } from '../types/bus';

export const mockBuses: Bus[] = [
  {
    id: '1',
    routeNumber: '101',
    position: [40.7128, -74.0060],
    status: 'ON_TIME',
    nextStop: 'Central Station',
    estimatedArrival: '5 mins',
    destination: 'Brooklyn Bridge'
  },
  {
    id: '2',
    routeNumber: '102',
    position: [40.7580, -73.9855],
    status: 'DELAYED',
    nextStop: 'Times Square',
    estimatedArrival: '10 mins',
    destination: 'Central Park'
  }
];

export const mockStops: BusStop[] = [
  {
    id: '1',
    name: 'Central Station',
    position: [40.7128, -74.0060],
    departures: [
      {
        id: 'd1',
        routeNumber: '101',
        destination: 'Brooklyn Bridge',
        scheduledTime: '10:30 AM',
        status: 'ON_TIME',
        platform: 'A'
      },
      {
        id: 'd2',
        routeNumber: '102',
        destination: 'Central Park',
        scheduledTime: '10:45 AM',
        status: 'DELAYED',
        platform: 'B'
      }
    ]
  },
  {
    id: '2',
    name: 'Times Square',
    position: [40.7580, -73.9855],
    departures: [
      {
        id: 'd3',
        routeNumber: '103',
        destination: 'Grand Central',
        scheduledTime: '11:00 AM',
        status: 'ON_TIME',
        platform: 'C'
      }
    ]
  }
];