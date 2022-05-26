import styled from 'styled-components';

export const HeadText = styled.h1`
  font-weight: 600;
  color: white;
  letter-spacing: 15px;
  text-align: center;
`;

export const Wrapper = styled.div`
  background-color: black;
  padding: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Content = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  padding: 10px;
  width: 400px;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
`;

export const Item = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Key = styled.h2`
  color: black;
  font-size: 24px;
  font-weight: 600;
`;

export const Value = styled.p`
  color: black;
  font-size: 20px;
  font-weight: 400;
`;

export const Header = styled.div`
  background-color: transparent;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: ${({ type }) =>
    type === 'get'
      ? 'blue'
      : type === 'post'
      ? 'gray'
      : type === 'delete'
      ? 'red'
      : type === 'get-one'
      ? 'yellow'
      : 'green'};
  font-weight: 600;
  padding: 10px 30px;
  color: ${({ type }) => (type === 'get-one' ? 'black' : 'white')};
  border: none;
  outline: none;
  border-radius: 7px;
  cursor: pointer;
`;

export const InputField = styled.div`
  margin-top: 30px;
  padding: 40px;
  background-color: white;
  display: flex;
  width: 400px;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  font-weight: 500;
  font-size: 20px;
  border-radius: 8px;
`;
