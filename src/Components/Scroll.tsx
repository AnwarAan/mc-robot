import { IProps } from "../Containers/App";

const Scroll = (props: IProps) => {
  return <div style={{ overflow: "scroll", height: "800px" }}>{props.children}</div>;
};

export default Scroll;
