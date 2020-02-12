import React, {useState} from 'react';
import Form from "antd/es/form";
import Input from "antd/es/input";
import Icon from "antd/es/icon";
import {Button} from "antd";
import {authHeader} from "../helpers/auth-header";

function SearchMovies(props) {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (search) {
                const requestOptions = {
                    method: 'GET',
                    headers: authHeader()
                };

                fetch('http://localhost:3001/api/movies/search?query=' + search, requestOptions)
                    .then(res => res.json())
                    .then((data) => {
                        const sortedData = data.sort((a, b) => b.vote_average - a.vote_average);
                        setResults(sortedData);
                    })
                    .catch();
            }
        });
    };

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const addMovie = id => {
            const requestOptions = {
                method: 'POST',
                headers: authHeader(),
                body: JSON.stringify({
                    idAPI: id
                }),
            };

            return fetch(`http://localhost:3001/api/user/movies`, requestOptions)
                .then(data => {

                });
        }
    ;

    return (
        <>
            <Form
                style={{margin: 'auto'}}
                onSubmit={handleSubmit}
                className='search-form'>
                <Form.Item>
                    <Input
                        label='Search'
                        prefix={<Icon type='search' style={{color: 'rgba(0,0,0,.25)'}}/>}
                        name='search'
                        type='text'
                        value={search}
                        onChange={handleChange}
                        placeholder='Search'/>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Search
                    </Button>
                </Form.Item>
            </Form>

            <ul>
                {results.map((value, index) => {
                    return (
                        <li key={index} className='movie'>
                            <img src={'https://image.tmdb.org/t/p/original/' + value.poster_path}
                                 className='movie-poster'
                                 alt="poster"/>
                            <div className='movie-text'>
                                <span className='movie-title'>{value.original_title}</span>
                                <br/><br/>
                                <span className='movie-desc'>{value.overview}</span>
                                <br/><br/>
                                <span className='movie-rating'>Note: <span className='rating'>{value.vote_average}/10</span></span>
                                <br/>
                                <a onClick={() => addMovie(value.id)} className='movie-add'>Ajouter à ma liste</a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Form.create()(SearchMovies);
