import Card from '../Card/Card.jsx';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div style={{display:"flex", justifyContent: "space-between"}}>
         {characters.map(character => (
            <Card 
               key={character.id}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
            />
         ))}
      </div>
   );
}
