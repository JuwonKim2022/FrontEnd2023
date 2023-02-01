import logo from './logo.svg';
import './App.css';

function App() {
  const name = '주원';
  const list = ['우유', '딸기', '바나나', '요거트'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>hello~</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img style={{width:'200px', height:'200px'}} src="https://w.namu.la/s/4983b7dc1ab38aaf5df66a96ba423c2ae91dfa80b68aa39f5975e7b0d78802ca03cd9ac012974bf97a8e3560a2e35e8cfbcc792ad3eb11c8d8258080137962edeeac298a554c868ee0f54fd25f60b656e9477bd439bc4a5165f15a71a0e21177" alt="농담곰" />
    </>
    
  );
}

export default App;
