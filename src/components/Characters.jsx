import React, {useState, useReducer, useMemo, useRef, useCallback} from "react";
import Search from "./Search";
import useCharacters from "../hooks/useCharacters";
import Container from "./Container";
import './Characters.css'

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        default:
            return state;
    }
}

const API = 'https://rickandmortyapi.com/api/character/';

const Characters = () => {
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);
    const characters = useCharacters(API);

    const handleClick = favorite => {
        dispatch({type: 'ADD_TO_FAVORITE', payload: favorite})
    }
    /*
        const handleSearch = event => {
            setSearch(event.target.value);
        }
    */
    /*
    const handleSearch = () => {
        setSearch(searchInput.current.value);
    }
     */
    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value)
    }, [])
    /*
        const filteredUsers = characters.filter(user=> {
            return user.name.toLowerCase().includes(search.toLowerCase())
        })
    */
    const filteredUsers = useMemo(() =>
        characters.filter(user => {
            return user.name.toLowerCase().includes(search.toLowerCase())
        }), [characters, search]
    )
    return (
        <div>
            {
                favorites.favorites.map(favorite => (
                        <li key={favorite.id}>
                            {favorite.name}
                        </li>
                    )
                )
            }

            <Search handleSearch={handleSearch} search={search} searchInput={searchInput}/>
            <div className="Characters">
                {filteredUsers.map(character => (
                    <Container character={character}>
                        <button type={'button'} onClick={() => handleClick(character)}>Agregar a favoritos</button>
                    </Container>

                ))}
            </div>

        </div>
    );
}

export default Characters;