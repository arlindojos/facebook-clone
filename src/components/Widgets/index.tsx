import React from 'react';
import { Container } from './styles';

const Widgets: React.FC = () => {
  return (
    <Container>
      <iframe 
        title="Facebook Clone"
        src="https://web.facebook.com/photo/?fbid=2559807924271884&set=a.1476922659227088" 
        width="340"
        height="100%"
        style={{
          border: "none",
          overflow: "hidden"
          }}
        scrolling="no"
        frameBorder="0"
        allowTransparency={true}
        allow="encrypted-media"
      ></iframe>
    </Container>
  )
}

export default Widgets;