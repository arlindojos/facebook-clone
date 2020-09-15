import { Avatar, SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import React from 'react';
import { Container } from './styles';

interface Props {
  title: string;
  src?: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const SidebarRow: React.FC<Props> = ({title, src, Icon}) =>{
  return (
    <Container>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </Container>
  )
}

export default SidebarRow;