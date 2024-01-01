import king from './Style/king.module.scss';
import Nav from './Nav'
import MainContents from './MainContents'
import Footer from './Component/Footer';

export default function King() {

  return (
    <section className={king.mainwrap}>
      <Nav/>
      <MainContents/>
      <Footer/>
    </section>
  );
}
