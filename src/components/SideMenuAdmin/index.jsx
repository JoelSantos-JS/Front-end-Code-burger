import { Container,ItemContainer ,ListLink} from "./style";
import listsLinks from "./menu-list";
import {GrLogout} from 'react-icons/gr '
import {useUser} from '../../hooks/UserContext'
export  function SidebarAdmin() {
  const {logout} = useUser


  return (
    <Container>
    <hr>
    </hr>
    {listsLinks.map(item =>(
    <ItemContainer key={item.id} isActive={true}>
      <ListLink to={item.link}>{item.icon}</ListLink>
      <ListLink to={item.link}>{item.label}</ListLink>
      
    </ItemContainer>
))}
 <hr>
    </hr>
    <ItemContainer style={{position: 'absolute', bottom:"30px"}}>
      <GrLogout size={28} style={{color: '#fff'}}/>
      <ListLink to='/login' onClick={() => logout()}>Sair</ListLink>
    </ItemContainer>
    </Container>
  )
}