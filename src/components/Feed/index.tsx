import React from 'react';
import { Container } from './styles';
import StoryReal from '../StoryReal';
import MessageSander from '../MessageSander';
import Posts from '../Posts';

const Feed: React.FC = () => {
  return (
    <Container>
      <StoryReal />
      <MessageSander />
      <Posts 
        profilePic="https://media-exp1.licdn.com/dms/image/C5603AQH6tgWWXm9mfg/profile-displayphoto-shrink_200_200/0?e=1605744000&v=beta&t=GzEdx0ErJiAH2RYOlrhu6w4u679OTqZDF930tds8iKQ"
        message='Programing is Good!!'
        timestamp='This is a timestamp'
        username="Arlindo José"
        image="https://cdn.pixabay.com/photo/2016/03/09/09/17/computer-1245714__340.jpg"
      />
      <Posts 
        profilePic="https://media-exp1.licdn.com/dms/image/C5603AQH6tgWWXm9mfg/profile-displayphoto-shrink_200_200/0?e=1605744000&v=beta&t=GzEdx0ErJiAH2RYOlrhu6w4u679OTqZDF930tds8iKQ"
        message='Wow that´s good'
        timestamp='This is a timestamp'
        username="Arlindo José"
        image=""
      />
    </Container>
  )
}

export default Feed;