import Ingresantes from "./components/Ingresantes";
import Container from "./components/Container";
import SliderHorizontal from "./components/SilderHorizontal";
import Logo from "./components/Logo";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <Container>

      <Ingresantes />
      <SliderHorizontal />
      <Logo />
    </Container>
  );
}

export default Home;