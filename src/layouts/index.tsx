import Header from './Header/Header';
import Footer from './Footer';

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
