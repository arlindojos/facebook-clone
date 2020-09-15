import React, { useState, FormEvent} from 'react';
import { Container, MessageSanderTop, MessageSanderBottom, Avatar, Form, Input, MessageSenderOption, Button, VideocamIcom, PhotoLibraryIcon, InsertEmoticonIcon } from './styles';

const MessageSander: React.FC = () => {
  const [ pageUrl, setPageUrl ] = useState('');
  const [ mindSet, setMindSet ] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setPageUrl('')
    setMindSet('')
  }

  return (
    <Container>
      <MessageSanderTop>
        <Avatar />
        <Form onSubmit={handleSubmit}>
          <Input 
            value={mindSet}
            onChange={ e => { setMindSet(e.target.value) }}
            placeholder="What´s on your mind?"
          />
          <Input 
            value={pageUrl}
            onChange={ e => { setPageUrl(e.target.value) }}
            placeholder="Page URL (optional)"
          />
          <Button type="submit">
            Hidden submit
          </Button>
        </Form>
      </MessageSanderTop>

      <MessageSanderBottom>
        <MessageSenderOption>
          <VideocamIcom style={{color: 'red'}} />
          <h3>Live Video</h3>
        </MessageSenderOption>

        <MessageSenderOption>
          <PhotoLibraryIcon style={{color: 'green'}} />
          <h3>Photo/Video</h3>
        </MessageSenderOption>

        <MessageSenderOption>
          <InsertEmoticonIcon style={{color: 'orange'}} />
          <h3>Photo/Video</h3>
        </MessageSenderOption>
      </MessageSanderBottom>
    </Container>
  )
}


export default MessageSander;