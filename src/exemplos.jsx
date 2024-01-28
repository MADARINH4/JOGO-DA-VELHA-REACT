/*//Exemplos de condicionais em JSX

//Usando '&&'
{
  !selectedTopic && <p>Please select a topic</p>;
}
{
  selectedTopic && (
    <div id="tab-content">
      <h3>{EXEMPLES[selectedTopic].title}</h3>
      <p>{EXEMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXEMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );
}

//Ternário
{
  !selectedTopic ? (
    <p>Please select a topic</p>
  ) : (
    <div id="tab-content">
      <h3>{EXEMPLES[selectedTopic].title}</h3>
      <p>{EXEMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXEMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );
}*/
