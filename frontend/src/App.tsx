import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from 'components/Layout/Layout.component';
import { CartContextProvider } from 'contexts/Cart.context';
import { ProductsContextProvider } from 'contexts/Products.context';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles/global';
import AppRoutes from './routes';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ProductsContextProvider>
          <CartContextProvider>
            <Layout>
              <AppRoutes />
            </Layout>
          </CartContextProvider>
        </ProductsContextProvider>

        <GlobalStyle />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
