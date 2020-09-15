import React from 'react';
import { Container, Avatar } from './styles';


interface Props {
  image: string;
  profileSrc: string;
  title: string;
}

const Story: React.FC<Props> = ({image, profileSrc, title}) => {
  return (
    <Container style={{backgroundImage: `url(${image})`}}>
      <Avatar src={profileSrc} />
      <h4>{title}</h4>
    </Container>
  )
}

export default Story;