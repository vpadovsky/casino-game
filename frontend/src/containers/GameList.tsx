import React, { useState, useEffect, useCallback } from "react";
import { getGames } from "../api/main";
import { Game } from "../types/main";

const GameList: React.FC = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Debounce effect for search
    useEffect(() => {
        const delaySearch = setTimeout(() => {
            fetchGames();
        }, 300);

        return () => clearTimeout(delaySearch);
    }, [search]);

    const fetchGames = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const endpoint = search ? `/games/search?q=${encodeURIComponent(search)}` : "/games";
            const response = await getGames(endpoint);
            setGames(response.data);
        } catch (err) {
            console.error("Error fetching games:", err);
            setError("Failed to load games. Please try again later.");
        } finally {
            setLoading(false);
        }
    }, [search]);

    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Game List</h2>
            <input
                type="text"
                className="p-2 border border-gray-300 rounded mb-4 w-full"
                placeholder="Search games..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search games"
            />
            {loading && <p className="text-blue-500">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-4">
                {games.map((game) => (
                    <div key={game.id} className="p-4 bg-white rounded shadow">
                        {game.thumb?.url ? (
                            <img
                                src={game.thumb.url}
                                alt={game.title}
                                className="w-full h-32 object-cover rounded"
                                loading="lazy"
                            />
                        ) : (
                            <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
                                <span className="text-gray-500 text-sm">No Image</span>
                            </div>
                        )}
                        <h3 className="mt-2 text-lg font-bold">{game.title}</h3>
                        <p className="text-sm text-gray-500">{game.providerName}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GameList;
