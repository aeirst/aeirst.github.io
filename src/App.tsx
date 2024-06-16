import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './App.css'

function App() {
  return (
    <>
      <Box sx={{ width: '100%'}}>
        <Typography variant="h1" gutterBottom fontFamily={"AppleSDGothicNeoBlack"}>
          iPhone 26.
        </Typography>
        <Typography variant="h3" gutterBottom fontFamily={"AppleSDGothicNeoBlack"}>
          새롭다. 완전하다. 놀랍다.
        </Typography>
        <Typography variant="h6" gutterBottom fontFamily={"AppleSDGothicNeoBlack"}>
          iPhone 26은 지금까지 보지 못했던 신선한 iPhone에 대한 기억을 선물합니다.
          <br/>
          또한 지구를 위한 Apple의 2030 계획을 적용하여 환경 보호를 완벽히 실천하죠.
          <br/>
          iPhone 26은 지금껏 있었던 iPhone 시리즈 중 가장 새로운 iPhone입니다.
        </Typography>
      </Box>
      <Box sx={{ width: '100%' }}>
      </Box>
    </>
  )
}

export default App
