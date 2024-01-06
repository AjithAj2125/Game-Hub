import React, { useEffect, useState } from 'react'
import apiClient from '../Services/api-client';
import { Text } from '@chakra-ui/react';

interface Games{
    id : number;
    name : string;
}
interface FetchGamesResponse{
    count : number;
    results : Games[];
}
const GameGrid = () => {
    const [games,setGames] = useState<Games[]>([]);
    const[error,seterror] = useState("");

    useEffect(() => {
        apiClient.get<FetchGamesResponse>('/games')
        .then(res => setGames(res.data.results))
        .catch(err => seterror(err.message));

    })
  return (
    <>
    {error.length === 0 ? <Text>{error}</Text> : <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>}
    
    </>
    
  )
}

export default GameGrid