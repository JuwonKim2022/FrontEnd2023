import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';

function AppProfile() {

  const handleClick = (event) => {
    console.log(event);
    alert('버튼이 클릭됨!');
  }

  return (
    <>
      <button onClick={handleClick}>button</button>
      <Profile 
        image="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        name="John Kim"
        title="Front-End Developer"
        isNew={true}
      />
      <Profile 
        image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
        name="Anna Yoki"
        title="Back-End Developer"
      />
      <Profile 
        image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        name="Bob rose"
        title="doctor"
      />
    </>
  );
}

export default AppProfile;
