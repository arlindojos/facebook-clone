import styled from 'styled-components';
import Search from '@material-ui/icons/Search';
import Home from '@material-ui/icons/Home';
import Add from '@material-ui/icons/Add';
import Storefront from '@material-ui/icons/Storefront';
import SupervisedUserCircleOutlined from '@material-ui/icons/SupervisedUserCircleOutlined';
import SubscriptionsOutlined from '@material-ui/icons/SubscriptionsOutlined';
import { ExpandMore, Flag, Forum, NotificationsActive } from '@material-ui/icons';

export const Container = styled.div`
  display: flex;
  padding: 15px 20px;
  justify-content: space-between;
  position: sticky;
  background: #fff;
  z-index: 50;
  top: 0;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-space-evenly;

  > i {
    font-size: 36px;
    color: #4267B2;
  }

`;

export const HeaderInput = styled.div`
  display: flex;
  align-items: center;
  background: #eff2f5;

  padding: 10px;
  margin-left: 10px;
  border-radius: 999px;
`;

export const Input = styled.input`
  border: none;
  background: transparent;
  outline-width: 0;
`;

export const SearchIcon = styled(Search)`

`;



export const HeaderMiddle = styled.div`
  display: flex;
  align-items: center;
`;


export const HeaderOption = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
  cursor: pointer;

  > .MuiSvgIcon-root {
    color: gray;
  }

  &:hover {
    background: #eff2f5;
    border-radius: 10px;
    align-items:center;
    padding: 0 30px;
    border-bottom: none;

    > .MuiSvgIcon-root {
      color: #2eB1f4;
    }
  }

  &:nth-child(1) {
    border-bottom: 4px solid #2eB1f4;
    
    > .MuiSvgIcon-root {
        color: #2eB1f4; 
    }
  }
`;

export const SubscriptionsOutlinedIcon = styled(SubscriptionsOutlined)``;
export const StorefrontIcon = styled(Storefront)``;
export const SupervisedUserCircleOutlinedIcon = styled(SupervisedUserCircleOutlined)``;
export const HomeIcon = styled(Home)``;
export const FlagIcon = styled(Flag)``;


export const HeaderRight = styled.div`
  display: flex;
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    margin-left: 10px;
  }
`;
export const AddIcon = styled(Add)``;
export const ExpandMoreIcon = styled(ExpandMore)``;
export const NotificationsActiveIcon = styled(NotificationsActive)``;
export const ForumIcon = styled(Forum)``;