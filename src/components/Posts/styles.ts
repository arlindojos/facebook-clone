import styled from 'styled-components';
import AvatarIMG from '@material-ui/core/Avatar';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ThumbUp from '@material-ui/icons/ThumbUp';
import NearMe from '@material-ui/icons/NearMe';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';


export const Container = styled.div`
  width: 100%;
  margin-top: 15px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
`;

export const PostTop = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 15px;
`;

export const Avatar= styled(AvatarIMG)`
  margin-right: 10px;
`;

export const PostTopInfo = styled.div`
  > h3 {
    font-size: medium;
  }
   
  > p {
    font-size: small;
    color: gray;
  }
`;

export const PostBottom = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;

  padding: 15px 25px;
`;

export const PostMessage = styled.p``;
export const PostImage = styled.div`

  > img {
    width: 100%;
  }
`;

export const PostOptions = styled.div`
  padding-top: 10px;
  border-top: 1px solid lightgray;
  display: flex;
  justify-content: space-evenly;
  font-size: medium;
  color: gray;
  cursor: pointer;
  padding: 15px;
`;

export const PostOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  flex: 1;

  &:hover {
    background: #eff2f5;
    border-radius: 10px;
  }

  > p {
    margin-left: 10px;
  }
`;

export const NearMeIcon = styled(NearMe)``;
export const ExpandMoreOutlinedIcon = styled(ExpandMoreOutlined)``;
export const ChatBubbleOutlineIcon = styled(ChatBubbleOutline)``;
export const AccountCircleIcon = styled(AccountCircle)``;
export const ThumbUpIcon = styled(ThumbUp)``;