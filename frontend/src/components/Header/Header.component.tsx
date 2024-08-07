import Input from 'components/Input/Input.component';
import { CiSearch } from 'react-icons/ci';
import { Container, StyledHeader } from './Header.styles';

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <h1>Cosmético&Co</h1>
        <span>dropdown</span>
        <Input
          type="text"
          placeholder="O que está buscando hoje?"
          leftIcon={<CiSearch size={18} />}
          containerCustomStyle={{ width: '100%', maxWidth: '50rem' }}
        />
        <span>cart</span>
        <span>login-icon</span>
      </Container>
    </StyledHeader>
  );
}
