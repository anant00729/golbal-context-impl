import {useState, useCallback} from 'react'

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}
export default function Search() {
  const [repos, setRepos] = useState([]);
  const debounceOnChange = useCallback(debounce(onChange, 1000), []);

  function onChange(value) {
    if(value.length >= 3){
      fetch(`https://api.github.com/search/users?q=${value}`)
      .then(res => res.json())
      .then(res => setRepos(res));
    }
  }

  return (
    <div className="App">
      <h1>Search Usernames on Github</h1>
      <input
        className="filter-input"
        placeholder="Language: Java, JavaScript, Ruby, Python"
        onChange={e => debounceOnChange(e.target.value)}
      />

      <div
      style={{margin: '0 8px'}}
      >{repos?.items?.map((data, key) => 
          <div key={key}
          style={{display : 'flex', gap: '8px', marginTop: '8px', alignItems: 'center'}}
          >
            <img 
            style={{width: '50px', height: '50px'}}
            src={data.avatar_url} alt="profile-img" />      
            <label 
            style={{marginLeft: '8px'}}
            >{data.login}</label>
          </div>)}
      </div>
    </div>
  );
}


