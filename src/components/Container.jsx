import './Container.css';

const Container = ({character, children}) => {
    console.log(character)
    return (
        <div className={'containerChart'}>
            <img src={character.image}/>
            <h2>{character.name}</h2>
            <h5>{character.species}</h5>
            {children}

        </div>
    );
}

export default Container;