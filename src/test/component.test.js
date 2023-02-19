import { configure, shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Card from "../Components/Card";
import CardList from "../Components/CardList";
import ErrorBoundary from "../Components/ErrorBoundary";
import Header from "../Components/Header";
import Loading from "../Components/Loading";
import Scroll from "../Components/Scroll";
import SearchBox from "../Components/SeacrhBox";
import App from "../Containers/App";

configure({ adapter: new Adapter() });

describe("test component", () => {
  it("Card", () => {
    expect(shallow(<Card />)).toMatchSnapshot();
  });

  it("Card List", () => {
    const mockRobots = [];
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
  });

  it("Error Boundary", () => {
    expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
  });

  it("Header", () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });

  it("Loading", () => {
    expect(shallow(<Loading />)).toMatchSnapshot();
  });

  it("Scroll", () => {
    expect(shallow(<Scroll />)).toMatchSnapshot();
  });

  it("Search Box", () => {
    expect(shallow(<SearchBox />)).toMatchSnapshot();
  });
});

describe("test app", () => {
  it("app", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
