import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";
import { mobile } from "../../responsive";


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
${mobile({ flex: "2" })};

`
const Right = styled.div`
/* background-color: palegoldenrod; */

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
${mobile({ fontSize: "1.5rem" })};

`
const Text = styled.h4`
  font-size: 1rem;
  margin-right: 2%;
  font-weight: 300;
  color: white;
  ${mobile({ display: "none" })};

`

const DivContainer = styled.div`
width: 30%;
margin-right: 5%;
${mobile({ width: "80%" })};

`
const SearchContainer = styled.div`
width : 100%;
/* background: red; */
display: flex;
align-items: center;

`
const InputSearch = styled.input`
width: 100%;
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

export default function Header({ onPlaceChanged, onLoad }) {



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
        <DivContainer>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}   >
            <SearchContainer>
              <SearchIcon style={{ color: "white", marginRight: "4%" }} />
              <InputSearch placeholder="Searching..." />
            </SearchContainer>
          </Autocomplete>
        </DivContainer>

      </Right>
    </Container>
  )
}
