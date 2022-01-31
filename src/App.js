import './App.css';
import MessageList from './containers/MessageList';

function App() {
  title="Welcome to devChat"
  subtitle = "A place for devs to get help, offer advice and chill"
  
  return (
    <>
    <h1>{title}</h1>
    <h3>{subtitle}</h3>
      <MessageList />
    </>
  );
}

export default App;
