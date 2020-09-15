import styled from 'styled-components';
import AvatarIMg from '@material-ui/core/Avatar';
import ButtonForm from '@material-ui/core/Button';
import Videocam from '@material-ui/icons/Videocam';
import PhotoLibrary from '@material-ui/icons/PhotoLibrary';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';


export const Container = styled.div`
  display: flex; 
  margin-top: 30px;
  flex-direction: column;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  width: 100%;
`;

export const MessageSanderTop = styled.div`
  display: flex;
  border-bottom: 1px solid #eff2f5;
  padding: 15px;
`;
 
export const Form = styled.form`
  flex: 1;
  display: flex;

  > button {
    display: none;
  }
`;

export const Input = styled.input`
  outline-width: 0;
  border: none;
  padding: 5px 28px;
  margin: 0 10px;
  border-radius: 999px;
  background: #eff2f5;
  color: gray;

  flex: 1;
`;

export const MessageSanderBottom = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const MessageSenderOption = styled.div`
  padding: 20px; 
  display: flex;
  align-items: center;
  color: gray;
  margin: 5px;

  > h3 {
    font-size: medium;
    margin-left: 10px;
    cursor: pointer;
  }

  &:hover {
    background: #eff2f5;
    border-radius: 20px;
  }
`;

export const Avatar = styled(AvatarIMg)``;
export const Button = styled(ButtonForm)``;

export const VideocamIcom = styled(Videocam)``;
export const PhotoLibraryIcon = styled(PhotoLibrary)``;
export const InsertEmoticonIcon = styled(InsertEmoticon)``;
