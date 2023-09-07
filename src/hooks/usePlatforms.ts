import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import APICLient from "../services/api-client";
import platforms from "../data/platforms";

const apiClient = new APICLient<Platform>('/platforms/lists/parents')

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms =() => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hr
    initialData: { count: platforms.length, results: platforms},
});

export default usePlatforms;