// Displays an array of PokemonInfoCards 

import { useContext, useEffect } from "react"
import {PokemonTeamContext } from "../contexts/PokemonDataProvider"
import PokemonInfoCard from "./PokemonInfoCard";

export default function PokemonTeamDisplay(){

	let {team} = useContext(PokemonTeamContext);

	useEffect(() => {
		console.log("Team display re-rendering now.");
	}, [team]);

	return(
		<div id="pokemonTeam">
			{team.map((element, index) => {
				return <PokemonInfoCard 
					key={element.id} 
					pokemonId={element.id}
					name={element.pokemon.name} 
					imageUrl={element.pokemon.sprites.other.home.front_default}
				/>
			})}
			{/* 
			[
				<PokemonInfoCard name=pikachu />
				<PokemonInfoCard name=pikachu />
				<PokemonInfoCard name=pikachu />
				<PokemonInfoCard name=pikachu />
				<PokemonInfoCard name=pikachu />
			]
			*/}
		</div>
	)
}