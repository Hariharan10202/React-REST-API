import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Container,
  Content,
  Header,
  HeadText,
  Input,
  InputField,
  Item,
  Key,
  Value,
  Wrapper,
} from './styled';

const API = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [isPostClicked, setIsPostClicked] = useState(false);
  const [title, setTitle] = useState();
  const [hasCompleted, setHasCompleted] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [getOneCliked, setGetOneCLicked] = useState(false);
  const [deleteCliked, setDeleteClicked] = useState(false);
  const [id, setId] = useState('');
  const [deleted, setDeleted] = useState(false);

  const fetchAPI = async Options => {
    setDeleted(false);
    setIsLoading(true);
    const response = await axios(Options);
    !deleteCliked ? setData(response.data) : setDeleted(true);
    setIsLoading(false);
  };

  const getHandler = () => {
    setIsClicked(true);
    setGetOneCLicked(false);
    setDeleteClicked(false);
    setIsFormSubmitted(false);

    let Options = {
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/todos',
    };
    fetchAPI(Options);
  };

  const postHandler = () => {
    setIsPostClicked(true);
    setIsClicked(false);
    setGetOneCLicked(false);
  };

  const postFormHandler = () => {
    const data = {
      title: title,
      completed: hasCompleted,
    };
    let Options = {
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/todos',
      data,
    };
    fetchAPI(Options);
    setIsFormSubmitted(true);
  };

  const getOneHandler = () => {
    setGetOneCLicked(true);
    setDeleteClicked(false);
    setIsPostClicked(false);
  };

  const getOneFormHandler = () => {
    let Options = {
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/todos/' + id,
    };
    fetchAPI(Options);
    setIsFormSubmitted(true);
  };

  const deleteHandler = () => {
    setDeleteClicked(true);
    setGetOneCLicked(false);
    setIsClicked(false);
  };

  const deleteOneHandler = () => {
    let Options = {
      method: 'delete',
      url: 'https://jsonplaceholder.typicode.com/todos/' + id,
    };
    fetchAPI(Options);
    setIsFormSubmitted(true);
  };

  return (
    <Wrapper>
      <HeadText>REST API</HeadText>
      <Header>
        <Button onClick={getHandler} type='get'>
          GET
        </Button>
        <Button onClick={postHandler} type='post'>
          POST
        </Button>
        <Button type='delete' onClick={deleteHandler}>
          DELETE
        </Button>
        <Button type='get-one' onClick={getOneHandler}>
          GET ONE
        </Button>
      </Header>
      {deleted && (
        <h2 style={{ textAlign: 'center', color: 'white', marginTop: '10px' }}>Deleted!</h2>
      )}
      {(getOneCliked || deleteCliked) && (
        <InputField>
          <Input placeholder='Enter Id' onChange={event => setId(event.target.value)} />
          <Button type='request' onClick={getOneCliked ? getOneFormHandler : deleteOneHandler}>
            SEND REQUEST
          </Button>
        </InputField>
      )}
      {isPostClicked && (
        <InputField>
          <Input placeholder='Enter Title' onChange={event => setTitle(event.target.value)} />
          <div>
            <Input
              placeholder='Has Completed'
              type='checkbox'
              onChange={event => setHasCompleted(event.target.checked && 'true')}
            />
            <span>Completed</span>
          </div>
          <Button type='request' onClick={postFormHandler}>
            SEND REQUEST
          </Button>
        </InputField>
      )}
      <Content>
        {!isLoading && isClicked ? (
          <>
            {Object.keys(data).length !== 0 &&
              data.map(item => (
                <Container key={item.id}>
                  <Item>
                    <Key>User Id :</Key>
                    <Value>{item.userId}</Value>
                  </Item>
                  <Item>
                    <Key>Id :</Key> <Value>{item.id}</Value>
                  </Item>
                  <Item>
                    <Key>Completed :</Key> <Value>{item.completed ? 'true' : 'false'}</Value>
                  </Item>
                  <Item>
                    <Key>Title:</Key> <Value>{item.title}</Value>
                  </Item>
                </Container>
              ))}
          </>
        ) : isFormSubmitted ? (
          <Container key={data.id}>
            <Item>
              <Key>User Id :</Key>
              <Value>{data.userId}</Value>
            </Item>
            <Item>
              <Key>Id :</Key> <Value>{data.id}</Value>
            </Item>
            <Item>
              <Key>Completed :</Key> <Value>{data.completed ? 'true' : 'false'}</Value>
            </Item>
            <Item>
              <Key>Title:</Key> <Value>{data.title}</Value>
            </Item>
          </Container>
        ) : (
          <h1 style={{ color: 'white' }}>
            {isClicked ? isLoading : 'Click Any Button to Perform REST API'}
          </h1>
        )}
      </Content>
    </Wrapper>
  );
};

export default API;
