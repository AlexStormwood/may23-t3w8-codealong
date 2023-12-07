// Pokemon Data Provider
// [PokemonObj1, PokemonObj2, PokemonObj3];

import { createContext, useState } from "react";

export const PokemonTeamContext = createContext([]);

export function PokemonDataProvider(props){

	let [team, setTeam] = useState([]);

	return(
		<PokemonTeamContext.Provider value={{team, setTeam}} >
			{props.children}
		</PokemonTeamContext.Provider>
	)
}