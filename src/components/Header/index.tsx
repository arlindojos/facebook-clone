import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { Container, HeaderLeft, HeaderMiddle, HeaderRight, HeaderInput, SearchIcon, Input, HeaderInfo, ForumIcon, AddIcon, ExpandMoreIcon, NotificationsActiveIcon, SubscriptionsOutlinedIcon, StorefrontIcon, SupervisedUserCircleOutlinedIcon, HeaderOption, HomeIcon, FlagIcon } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderLeft>
        <i className="fab fa-facebook"></i>
        <HeaderInput>
          <SearchIcon />
          <Input placeholder="Search facebook" type="text" />
        </HeaderInput>
      </HeaderLeft>

      <HeaderMiddle>
        <HeaderOption>
          <HomeIcon />
        </HeaderOption>

        <HeaderOption>
          <FlagIcon />
        </HeaderOption>

        <HeaderOption>
          <SubscriptionsOutlinedIcon />
        </HeaderOption>

        <HeaderOption>
          <StorefrontIcon />
        </HeaderOption>

        <HeaderOption>
          <SupervisedUserCircleOutlinedIcon />
        </HeaderOption>
      </HeaderMiddle>

      <HeaderRight>
        <HeaderInfo>
          <Avatar />
          <h4>Arlindo</h4>
        </HeaderInfo>

        <IconButton>
          <AddIcon />
        </IconButton>

        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>

        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </HeaderRight>
    </Container>
  )
}

export default Header;