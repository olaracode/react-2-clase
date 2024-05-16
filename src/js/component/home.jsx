import React from "react";
// Importacion por defecto
import Navbar from "./Navbar";
import { Collapse } from "./Collapse";
import { CardBody, CardFooter, CardHeader, CardRoot } from "./Card"
// className -> class

// Un componente es una pieza de lego dentro de nuestra pagina web
// ctrl + shift + l -> Selecciona todas las instancias de un elemento sombreado
// ctrl  + d -> selecciona la siguiente instancia de lo sombreadoi

// Fragmentos -> Es una forma de envolver los hijos de un componente
// Sin utilizar un div

// Fragment === <></>
// <>

// Listas
const Home = () => {
	console.log("Renderizado de home");
	const listaDeEstudiantes = [
		"Angie", "Sebastian", "Omar", "Gustavo", "Jorge", "Valentina",
		"Luis", "Cesar", "Alexis", "Jose", "Omar"
	];

	// Dentro del return de react
	// Esta prohibido usar bucles y condicionales
	// Estan permitidos:
	// metodos de arreglo(map, find, filter)
	// operadores ternarios(condicion ? resultadoPositivo : resultadoNegativo)
	return (
		<>
			<Navbar />
			<p className="text-center">
				Clase 2 de react
			</p>
			<main className="container row mx-auto gap-2">
				<ul className="list-group">
					{listaDeEstudiantes.map((estudiante, index) => {
						return (
							<li
								className="list-group-item"
								key={`estudiante-${estudiante}-${index}`}
							>
								{estudiante}
							</li>
						)
					})}
				</ul>
			</main>
		</>

	);
};

export default Home;
