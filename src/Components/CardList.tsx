import Card from "./Card";
import { IRobots } from "../Containers/App";

const CardList = ({ robots }: { robots: Array<IRobots> }) => {
  return (
    <div>
      {robots.map((robot) => (
        <Card key={robot.id} name={robot.name} email={robot.email} />
      ))}
    </div>
  );
};

export default CardList;
