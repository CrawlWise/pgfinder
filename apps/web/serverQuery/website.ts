import { useQuery } from "@tanstack/react-query";

export function useUserLocationQuery() {
    return useQuery({
        queryKey: ["userLocation"],
        queryFn: () =>
            new Promise<[number, number]>((resolve, reject) => {
                if (!navigator.geolocation) {
                    reject(new Error("Geolocation not supported"));
                }
                navigator.geolocation.getCurrentPosition(
                    (pos) => resolve([pos.coords.latitude, pos.coords.longitude]),
                    (err) => reject(err),
                    { timeout: 10000, enableHighAccuracy: true }
                );
            }),
        retry: false,
        staleTime: Infinity,
    });
}