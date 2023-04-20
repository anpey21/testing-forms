
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <Form>
      <Test>
        <input 
        type="text" 
        placeholder="First Name"
        value= "Steve" 
        />
        <input 
        type="text" 
        placeholder="Last Name" 
        value= "Jobs"
        />
        <input type="text" 
        placeholder="Email" 
        value= "iamgod@apple.com"
        />
        <Buttons>
          <button>Login</button>
          <button>Register</button>
        </Buttons>
      </Test>
    </Form>
  );
}

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(to bottom right, rgb(109, 197, 197), #4c8888);
  height: 50vh;
  max-width: 30%;
  margin: 10rem auto;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  /* make responsive */
  @media (max-width: 1200px) {
    max-width: 50%;
  }
  @media (max-width: 768px) {
    max-width: 70%;
  }
  @media (max-width: 660px) {
    max-width: 90%;
    
  }
}`;

const Test = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: auto;
  input {
    width: 100%;
    height: 2rem;
    margin: 0.5rem 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0.5rem;
  }
  
 `;

 const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: auto;
  button {
    padding-top: 2rem;
    margin-left: 1rem;
    color: beige;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    @media (max-width: 660px) {
      font-size: .8rem;
    }
  }
  button:hover {
    color: #4c8888;
  }
 
  `;

export default App;
