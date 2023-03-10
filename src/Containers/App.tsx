import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getRobotPendingReducer,
  getRobotFailReducer,
  getRobotSuccessReducer,
  searchRobotdReducer,
} from "../redux/reducer";
import "./App.css";
import CardList from "../Components/CardList";
import Header from "../Components/Header";
import SearchBox from "../Components/SeacrhBox";
import ErrorBoundary from "../Components/ErrorBoundary";
import Scroll from "../Components/Scroll";
import Loading from "../Components/Loading";

export interface IRobots {
  name: string;
  email: string;
  id?: number;
}

export interface IProps {
  children: JSX.Element;
}

function App() {
  const dispatch = useDispatch();
  const reducer = useSelector((state: any) => state);
  const { robots, isPending, searchField } = reducer;

  useEffect(() => {
    dispatch(getRobotPendingReducer(true));
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => dispatch(getRobotSuccessReducer(data)))
      .catch((error) => dispatch(getRobotFailReducer(error)));
  }, []);

  const onSearchChange = (event: any) => {
    dispatch(searchRobotdReducer(event.target.value));
  };

  const filterRobots = robots.filter((robot: any) => {
    return robot.name.toLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        {isPending ? (
          <Loading />
        ) : (
          <ErrorBoundary>
            <CardList robots={filterRobots} />
          </ErrorBoundary>
        )}
      </Scroll>
    </div>
  );
}

export default App;
