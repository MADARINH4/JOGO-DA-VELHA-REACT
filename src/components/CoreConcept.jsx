export default function CoreConcept(/*props*/ { title, description, image }) {
  return (
    //Utilizando o própio objeto
    /*<li>
        <img src={props.image} alt={props.title}></img>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>*/

    //Desestruturando o objeto na passagem
    <li>
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
