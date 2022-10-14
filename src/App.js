import {useState} from 'react';

const URL = 'https://api.agify.io/?name=';
const country = '&country_id=FI';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
 
  function handleSubmit(e) {
    e.preventDefault();
  
    
    fetch(URL + name + country)
      .then(response => response.json())
      .then (
        (response) => {
          setAge(response.age);
        }, (error) => {
          alert(error);
        }
      )
    }


  return (
    <div style={{margin: '10px'}}>
      <form onSubmit={handleSubmit}>
        <h1>What is your age?</h1>
        <p>Please write your name and let the algorithm predict your age. This is exciting!</p>
        <div style={{margin: '10px'}}>
          <label>Name</label>&nbsp;
          <input type="text" placeholder="Write your name here"
          value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div style={{margin: '10px'}}>
          <button>Press</button>
        </div>
        <div style={{margin: '10px'}}>
          <output>Your age is&nbsp;{age}&nbsp;years.</output>
        </div>
      </form>
    </div>
  );
}

export default App;
