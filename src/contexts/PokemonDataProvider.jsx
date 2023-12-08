// Pokemon Data Provider
// [PokemonObj1, PokemonObj2, PokemonObj3];

import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

export const PokemonTeamContext = createContext([]);

export function PokemonDataProvider(props){

	let [team, setTeam] = useState([]);

	let [storedTeam, setStoredTeam] = useLocalStorage("pokemonTeamData", team);

	// On app start, load localstorage and save it to state 
	useEffect(() => {
		setTeam(storedTeam);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// Whenever team updates, save that change to localstorage
	useEffect(() => {
		setStoredTeam(team);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [team])

	return(
		<PokemonTeamContext.Provider value={{team, setTeam}} >
			{props.children}
		</PokemonTeamContext.Provider>
	)
}