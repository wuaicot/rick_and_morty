import Card from '../Card/Card.jsx';

export default function Cards(props) {
   // props = { characters: [ {--}, {--}, {---} ] }
   const { characters } = props;
   // characters = [ {--}, {--}, {---} ]
   return (
      <div style={{display:"flex", justifyContent: "space-between"}}>
         {characters.map(character => (
            <Card 
               id={character.id}
               key={character.id}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose={() => props.onClose(character.id)}
            />
         ))}
      </div>
   );
}