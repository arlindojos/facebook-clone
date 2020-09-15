import React from 'react';
import { Container, PostTopInfo, PostTop, Avatar, PostBottom, PostMessage, PostOptions, PostOption, PostImage, ChatBubbleOutlineIcon, AccountCircleIcon, ThumbUpIcon, NearMeIcon, ExpandMoreOutlinedIcon } from './styles';


interface Props {
  profilePic: string;
  image: string;
  username: string;
  timestamp: string;
  message: string;
}

const Posts: React.FC<Props> = ({profilePic, image, username, timestamp, message}) => {
  return (
    <Container>
      
      <PostTop>
        <Avatar src={profilePic} />
          <PostTopInfo>
          <h3>{username}</h3>
          <p>Timestamp...</p>
        </PostTopInfo>
      </PostTop>

      <PostBottom>
        <PostMessage>
          {message}
        </PostMessage>
      </PostBottom>

      <PostImage>
        <img src={image} alt=""/>
      </PostImage>

      <PostOptions>

        <PostOption>
          <ThumbUpIcon />
          <p>Like</p>
        </PostOption>

        <PostOption>
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </PostOption>

        <PostOption>
          <NearMeIcon />
          <p>Share</p>
        </PostOption>

        <PostOption>
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
        </PostOption>
        
      </PostOptions>
    </Container>
  )
}

export default Posts;