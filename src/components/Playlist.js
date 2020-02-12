import React, { useEffect, useState } from 'react';
import { List, Icon } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';
import { handleResponse } from '../helpers/handle-response';
import { authHeader } from '../helpers/auth-header';

export default function Playlist() {
	const IconText = ({ type, text }) => (
		<span>
			<Icon type={type} style={{ marginRight: 8 }} />
			{text}
		</span>
	);
	const [movies, setMovies] = useState([]);

	const requestOptions = {
		method: 'GET',
		headers: authHeader(),
	};

	useEffect(() => {
		// TODO API
		console.log('ici');
		axios
			.get('http://localhost:3001/api/user/playlist', requestOptions)
			.then(res => {
				console.log('hello', res);
			});
		const listMovies = [
			{
				popularity: 23.032,
				vote_count: 10898,
				video: false,
				poster_path: '/3IGZhnjEzZwStzcNOfwICfWikrX.jpg',
				id: 98,
				adult: false,
				backdrop_path: '/5vZw7ltCKI0JiOYTtRxaIC3DX0e.jpg',
				original_language: 'en',
				original_title: 'Gladiator',
				genre_ids: [28, 12, 18],
				title: 'Gladiator',
				vote_average: 8.1,
				overview:
					"Le général romain Maximus est le plus fidèle soutien de l'empereur Marc Aurèle, qu'il a conduit de victoire en victoire avec une bravoure et un dévouement exemplaires. Jaloux du prestige de Maximus, et plus encore de l'amour que lui voue l'empereur, le fils de Marc Aurèle, Commode, s'arroge brutalement le pouvoir, puis ordonne l'arrestation du général et son exécution. Maximus échappe à ses assassins mais ne peut empêcher le massacre de sa famille. Capturé par un marchand d'esclaves, il devient gladiateur et prépare sa vengeance.",
				release_date: '2000-05-01',
			},
			{
				popularity: 4.791,
				vote_count: 76,
				video: false,
				poster_path: '/5TL2QZWldGchdEdFsS51vd6bcBz.jpg',
				id: 137548,
				adult: false,
				backdrop_path: '/dkRTdtaCsuPhRpquSHnlKNQrvzO.jpg',
				original_language: 'it',
				original_title: 'Gladiatori di Roma',
				genre_ids: [16, 10751],
				title: 'Gladiateurs de Rome',
				vote_average: 5.1,
				overview:
					'Dans la Rome impériale, devenu orphelin suite à la terrible éruption qui a détruit Pompéi, le petit Timo est adopté par le général Chirone et élevé à l’académie des gladiateurs la plus célèbre de Rome. La vie de gladiateur n’est pas du tout faite pour Timo, dont la seule aspiration consiste à se payer du bon temps avec ses amis Ciccius et Mauritius pour échapper aux sessions d’entraînements de son père adoptif. Tout change lorsque Lucilla, la fille de Chirone, revient de Grèce. Désormais, Timo ne souhaite qu’une chose : devenir un valeureux gladiateur dans le but de conquérir le coeur de sa belle amie d’enfance et de convaincre Chirone de l’accepter comme futur gendre…',
				release_date: '2012-10-18',
			},
			{
				popularity: 5.899,
				vote_count: 55,
				video: false,
				poster_path: '/rBwi1llqRWXI7kpQid5520repqE.jpg',
				id: 16219,
				adult: false,
				backdrop_path: '/bmyphm54uqEERnViUq7kCiimVni.jpg',
				original_language: 'en',
				original_title: 'Gladiator',
				genre_ids: [28, 18],
				title: 'Gladiator',
				vote_average: 6.2,
				overview:
					"Chicago. Pour payer les dettes de son père, Tommy Riley, adolescent secret et doué pour les sports de combat, accepte de participer a des matches de boxe clandestins organises par Horn, ancien boxeur sans scrupule. Ce dernier rêve de faire monter sur le ring un jeune Blanc qui déchainera les passions raciales et l'enrichira un peu plus.",
				release_date: '1992-03-06',
			},
			{
				popularity: 1.038,
				vote_count: 8,
				video: false,
				poster_path: '/eYZMKwFGVHoOdDY0EPzquntAYtE.jpg',
				id: 54919,
				adult: false,
				backdrop_path: '/11hjtBYfTdoNCNPJl7IghuhCvkI.jpg',
				original_language: 'en',
				original_title: 'Gladiatorerna',
				genre_ids: [18, 878, 10752],
				title: 'Les Gladiateurs',
				vote_average: 5.8,
				overview:
					"Les plus grandes puissances internationales, alignées et non-alignées, craignant la possibilité d'une nouvelle guerre mondiale, décident de l'empêcher en canalisant les pulsions agressives de l'homme. Elles forment une Commission Internationale qui s'emploie à organiser des combats entre des soldats de différents pays. Ces compétitions, qui peuvent aller jusqu'à la mort, sont appelées Jeux de la Paix - elles sont sponsorisées et retransmises par satellite dans le monde entier. Le film se concentre sur le Jeu 256, qui se déroule dans le Centre International des Jeux de la Paix près de Stockholm, sous le contrôle d'un puissant ordinateur. Les arbitres décident d'éliminer un homme et une femme appartenant à des équipes opposées mais qui tentent de s'approcher, considérant qu'ils mettent ainsi en danger la stabilité du système.",
				release_date: '1969-06-25',
			},
			{
				popularity: 1.162,
				vote_count: 2,
				video: false,
				poster_path: '/yMf9yIZqo5FptuJN41EoeTDYuCp.jpg',
				id: 93492,
				adult: false,
				backdrop_path: '/3WmHTwAK5XuJX0Sa4z357cK0Eqw.jpg',
				original_language: 'it',
				original_title: 'I sette gladiatori',
				genre_ids: [28, 12, 18],
				title: 'I sette gladiatori',
				vote_average: 4,
				overview: '',
				release_date: '1962-10-11',
			},
			{
				popularity: 0.84,
				vote_count: 3,
				video: false,
				poster_path: '/fGpjSh8j344NWhhozgEIRzHc3Rz.jpg',
				id: 259049,
				adult: false,
				backdrop_path: '/hXisEHSLoHstasi9mB3WRMUHA76.jpg',
				original_language: 'en',
				original_title: 'I due gladiatori',
				genre_ids: [],
				title: 'I due gladiatori',
				vote_average: 5,
				overview: '',
				release_date: '1964-07-10',
			},
			{
				popularity: 3.143,
				id: 56753,
				video: false,
				vote_count: 6,
				vote_average: 3.2,
				title: "Games of Rome : Les jeux de l'Empire",
				release_date: '2001-09-01',
				original_language: 'en',
				original_title: 'Amazons and Gladiators',
				genre_ids: [28, 12, 18],
				backdrop_path: '/wJWdQ0x6zaTg6d51Q4KUkjCnm90.jpg',
				adult: false,
				overview:
					'Sous le règne du Général romain Crassius, une jeune fille, Serena, voit ses parents se faire massacrer par cet horrible tyran. Le destin les fera se croiser à nouveau dans le cercle des gladiateurs.',
				poster_path: '/yhAYjXXY7t0O6bMmkE8n0t4sWQe.jpg',
			},
			{
				popularity: 1.48,
				id: 58419,
				video: false,
				vote_count: 9,
				vote_average: 4.2,
				title: '2020 Texas Gladiators',
				release_date: '1983-01-01',
				original_language: 'it',
				original_title: 'Anno 2020 - I gladiatori del futuro',
				genre_ids: [28, 878],
				backdrop_path: '/pnHFvsB2yj67pyHOqVSQzYGb4qh.jpg',
				adult: false,
				overview:
					"Sabrina, fille d'un savant qui a découvert une arme redoutable, est poursuivie par de sinistres personnages conduits par \"One Eye\". Ian, Harrison, Bons et Penny tentent de sauver la jeune fille. Après une violente bagarre, le groupe de gangsters s'enfuit en capturant Sabrina. La chasse à l'homme (enfin, à la femme) qui s'ensuit se termine au poste de police où Harrison relate toute l'affaire, mais le shérif est de mèche avec \"One Eye\".",
				poster_path: '/HSmbkvvLnJQ6TrATZD37toNrk7.jpg',
			},
			{
				popularity: 1.981,
				id: 114657,
				video: false,
				vote_count: 3,
				vote_average: 6.7,
				title: 'The Gladiator',
				release_date: '1986-02-03',
				original_language: 'en',
				original_title: 'The Gladiator',
				genre_ids: [53, 28, 18, 10770],
				backdrop_path: '/zpPhUVOuelvwgyYy5AqS9qAP0Ei.jpg',
				adult: false,
				overview:
					"Un justicier de guerrier de la route venge la mort de son frère aux mains d'un automobiliste fou en utilisant son pick-up gonflée d'appréhender les conducteurs ivres et d'autres qui abusent de leurs privilèges de conduite.",
				poster_path: '/asLJl7huJVgoXeca8aAlmywU9YQ.jpg',
			},
			{
				popularity: 4.602,
				vote_count: 25,
				video: false,
				poster_path: '/pwobLwyIY7gFrqxPK29fxCbueGw.jpg',
				id: 43332,
				adult: false,
				backdrop_path: '/wzPKegOrSyhWMzONGc02hB3ZEeM.jpg',
				original_language: 'en',
				original_title: 'Demetrius and the Gladiators',
				genre_ids: [12, 36],
				title: 'Les Gladiateurs',
				vote_average: 6.4,
				overview:
					"Après le martyre des chrétiens Diana et Marcellus, la tunique du Christ est confiée à son apôtre Pierre pour qu’il la garde en lieu sûr mais l'empereur Caligula cherche à s’en emparer pour bénéficier de ses pouvoirs. Demetrius, chrétien converti, qui fut autrefois l’esclave de Marcellus, va essayer de l’en empêcher. Ses tentatives lui valent le courroux de Caligula et l’attention de Messaline, l’épouse de Claude, l’oncle de ce dernier. Capturé et enrôlé comme gladiateur, Demetrius va doublement être éprouvé dans sa foi : par les approches séductrices de Messaline et par ses combats cruels dans l’arène...",
				release_date: '1954-06-16',
			},
			{
				popularity: 2.209,
				id: 30470,
				video: false,
				vote_count: 7,
				vote_average: 5.9,
				title: 'Gladiator Eroticvs: The Lesbian Warriors',
				release_date: '2001-01-03',
				original_language: 'en',
				original_title: 'Gladiator Eroticvs: The Lesbian Warriors',
				genre_ids: [28, 12, 35, 14],
				backdrop_path: null,
				adult: false,
				overview: '',
				poster_path: '/w22I2vJIyGil2mHzzEhVGXWJQlL.jpg',
			},
		];
		setMovies(listMovies);
	}, []);
	return (
		<>
			<List
				itemLayout='vertical'
				size='large'
				pagination={{
					onChange: page => {
						console.log(page);
					},
					pageSize: 3,
				}}
				dataSource={movies}
				footer={
					<div>
						<b>Movie House</b>
					</div>
				}
				renderItem={item => (
					<List.Item
						key={item.title}
						actions={[
							<IconText
								type='star-o'
								text={item.vote_average}
								key='list-vertical-star-o'
							/>,
							<IconText
								type='like-o'
								text={item.vote_count}
								key='list-vertical-like-o'
							/>,
							<IconText type='message' text='2' key='list-vertical-message' />,
						]}
						extra={
							<img
								width={272}
								alt='logo'
								src={'https://image.tmdb.org/t/p/original/' + item.poster_path}
							/>
						}
					>
						<List.Item.Meta />
						{item.overview}
					</List.Item>
				)}
			/>
		</>
	);
}
