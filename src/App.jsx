import data from "./data";

const App = () => {
  const [id, name, age, image] = data;
  return (
    <div>
      <h4>
        {data.map(() => {
          <ul>
            <li key={id}>{name}</li>
            <li key={id}>{age}</li>
            {/* <li key={id}><img src=""</li> */}
          </ul>;
        })}
      </h4>
    </div>
  );
};
export default App;
