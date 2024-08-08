import { Button } from 'components/Button/Button.component';
import Input from 'components/Input/Input.component';
import { PiTagThin } from 'react-icons/pi';
import { Container } from './CupomInput.styles';

export function CupomInput() {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Cupom de desconto"
        leftIcon={<PiTagThin size={24} />}
      />
      <Button
        variant="tertiary"
        onClick={() => {}}
        customContainerStyle={{
          width: '13rem',
        }}
        style={{
          fontSize: '1.2rem',
        }}
      >
        Aplicar
      </Button>
    </Container>
  );
}
