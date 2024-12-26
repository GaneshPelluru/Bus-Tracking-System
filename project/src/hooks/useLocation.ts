import { useState, useEffect } from 'react';

interface Location {
  latitude: number;
  longitude: number;
  error?: string;
}

export function useLocation() {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({ latitude: 0, longitude: 0, error: 'Geolocation is not supported' });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => {
        setLocation({ latitude: 0, longitude: 0, error: error.message });
      }
    );
  }, []);

  return location;
}