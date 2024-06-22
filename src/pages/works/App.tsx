import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './App.css'
import { DarkButton, Gray } from 'C:\\Users\\hooni\\Desktop\\poml\\pageofmylife.github.io\\src\\styled\\styled.ts';
import { Link } from '@mui/material';


function WorkPage() {
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

export default WorkPage
