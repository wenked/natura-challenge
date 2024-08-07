import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from 'components/Layout/Layout.component';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/global';
import AppRoutes from './routes';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
        <GlobalStyle />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
