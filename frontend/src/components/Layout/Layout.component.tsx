import { Header } from 'components/Header/Header.component';
import { Container } from './Layout.styles';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}
