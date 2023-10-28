import { useQuery } from "@tanstack/react-query";
import APICLient from "../services/api-client";
import Trailer from "../entities/Trailer";

const useTrailers = (gameId: number) => {
    // This call is responsible for getting the data from the backend using the correct endpoints
    const apiClient = new APICLient<Trailer>(`/games/${gameId}/movies`)

    // This is responsible for caching the data for later use
    return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: apiClient.getAll
})}

export default useTrailers;