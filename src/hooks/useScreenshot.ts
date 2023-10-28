import { useQuery } from "@tanstack/react-query";
import APICLient from "../services/api-client";
import Screenshot from "../entities/Screenshot";

const useScreenshot = (gameId: number) => {
    const apiClient = new APICLient<Screenshot>(`/games/${gameId}/screenshots`)

    return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: apiClient.getAll
})}

export default useScreenshot;