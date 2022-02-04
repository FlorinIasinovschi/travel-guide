import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";


const Container = styled.div`
background-color: #2070ca;
display: flex;
align-items: center;
justify-content: space-between;
min-height: 70px;
`

const Left = styled.div`
/* background-color: palegoldenrod; */
flex: 1;
display: flex;
align-items: center;
justify-content: flex-start;
`
const Right = styled.div`
flex: 3;
display: flex;
align-items: center;
justify-content: flex-end;

`

const Logo = styled.h3`
  font-size: 2rem;
  font-weight: 200;
  color: white;
  margin-left : 5%;
`
const Text = styled.h4`
  font-size: 1rem;
  margin-right: 2%;
  font-weight: 300;
  color: white;
`

const DivContainer = styled.div`
margin-right: 5%;
`
const SearchContainer = styled.div`
display: flex;
align-items: center;

`
const InputSearch = styled.input`
display: flex;
align-items: center;
font-weight: 300;
color: #252525;
box-sizing: border-box;
padding: 5px;
border: none;
background: white;
border : 1px solid white;
border-radius: 5px;
`

export default function Header() {
  return (
    <Container position="static">
      <Left>
        <Logo>
          Travel Guide
        </Logo>
      </Left>
      <Right>
        <Text>
          Explore New Places
        </Text>
        {/* <Autocomplete> */}
        <DivContainer>
          <SearchContainer>
            <SearchIcon style={{ color: "white", marginRight: "5%" }} />
            <InputSearch placeholder="Searching..." />
          </SearchContainer>
        </DivContainer>
        {/* </Autocomplete> */}

      </Right>
    </Container>
  )
}
