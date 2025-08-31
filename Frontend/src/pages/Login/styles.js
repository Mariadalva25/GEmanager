import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f2f2f2;
  padding: 1rem;
`;


export const Wrapper = styled.div`
  display: flex;
  width: 900px;
  height: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background: white;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;

export const RightSide = styled.div`
  flex: 1;
  background: #eef2ff;
  display: flex;
  justify-content: center;
  align-items: center;

img {
  width: 100%;
  height: auto;
  object-fit: contain; 
}


  @media (max-width: 768px) {
    padding: 20px;
  }
`;


export const LeftSide = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  color: black;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const Remember = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    font-size: 0.9rem;
    color: blue;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SubmitButton = styled.button`
  color: blue;
  font-family: 'Poppins', sans-serif;
  background-color: white;
  border: 1px solid blue;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: blue;
    color: white;
  }
`;

export const RegisterLink = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  text-align: center;

  a {
    color: blue;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
