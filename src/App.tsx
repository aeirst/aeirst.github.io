import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './App.css'
import { Gray } from './styled/styled';
import { Button, Link, styled } from '@mui/material';

const DarkButton = styled(Button)({
  color: 'white',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#2b2b2b',
  borderColor: '#000000',
  fontFamily: 'AppleSDGothicNeoRegular',

  '&:hover': {
    backgroundColor: '#383838',
    borderColor: '#1e1e1e',
    boxShadow: '0 0 0 0.22rem rgba(174, 174, 174, 0.671)',
  },
});


function App() {
  return (
    <>
      <Box sx={{ width: '100%'}} >
        <Typography variant="h1" gutterBottom fontFamily={"AppleSDGothicNeoBlack"} fontSize={"70px"}>
          <span className='typing'>aeirst.</span>
        </Typography>
        <Typography variant="h3" gutterBottom fontFamily={"AppleSDGothicNeoExtraRegular"}>
          A normal developer.
        </Typography>
        <Typography variant="h6" gutterBottom fontFamily={"AppleSDGothicNeoRegular"} marginBottom={"20px"}>
          Aeirst <Gray>is a normal developer from south korea.</Gray>
          <br/>
          I made <Link href="https://github.com/aeirst/lim" underline='none'>Lim</Link>, <Link href="https://github.com/aeirst/crispy" underline='none'>Crispy</Link>, <Link href="https://github.com/aeirst/simple-ui" underline='none'>Simple/ui</Link>, <Link href="https://github.com/poml-project/poml" underline='none'>Poml</Link>, <Link href="https://github.com/aeirst/depresser" underline='none'>Depresser</Link>.
        </Typography>
        <DarkButton href="https://github.com/aeirst">Github</DarkButton>&nbsp;&nbsp;&nbsp;
        <DarkButton href="https://docs.poml.kro.kr">Docs</DarkButton>&nbsp;&nbsp;&nbsp;
        <DarkButton href="https://discord.poml.kro.kr">Discord</DarkButton>&nbsp;&nbsp;&nbsp;
        <DarkButton href="https://blog.poml.kro.kr">Blog</DarkButton><br/><br/>
      </Box>
    </>
  )
}

export default App
