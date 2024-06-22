import styled from "styled-components";
import { Button, styled as MuiStyled} from '@mui/material';

export const Gray = styled.span`
    color: #6e6e73;
`

export const DarkButton = MuiStyled(Button)({
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
