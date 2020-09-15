import React from 'react';
import { Container } from './styles';
import SidebarRow  from '../SidebarRow';
import LocalHospitalIcon  from '@material-ui/icons/LocalHospital';
import PeopleICon  from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


const SideBar: React.FC = () => {
  return (
    <Container>
      <SidebarRow 
        src="https://scontent.fmpm2-1.fna.fbcdn.net/v/t1.0-9/60809691_2257630897822923_3146555524233822208_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeHybOM2ZEkPB62CMTpBy4TrAJMOR4PqfLQAkw5Hg-p8tBGKAMvxsaiO3IjjPHgdGg1Jiol4urCu-o0uGN0bYvJW&_nc_ohc=gEclzTvD8eUAX_gUBbR&_nc_ht=scontent.fmpm2-1.fna&oh=e9b2dc1d671e50bb07a5107f2a6b3711&oe=5F867917" 
        title="Arlindo  José" 
      />
      <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information center" />
      <SidebarRow Icon={PeopleICon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="MarkerPlace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="MarcaPlace" />
    </Container>
  )
}

export default SideBar;