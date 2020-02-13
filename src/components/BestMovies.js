import React, { useState, useEffect } from 'react';
import {List, Icon } from "antd";
import axios from "axios";

export default function BestMovies() {
	const [movies, setMovies] = useState([]);

	const IconText = ({ type, text }) => (
		<span>
			<Icon type={type} style={{ marginRight: 8 }} />
			{text}
		</span>
	);

	useEffect(() => {
		axios
			.get('http://localhost:3001/movies/top_rated')
			.then(res => {
				setMovies(res.data);
			});
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
						<List.Item.Meta title={item.title} />
						{item.overview}
					</List.Item>
				)}
			/>
		</>);

}
