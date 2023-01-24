const Card = ({ name, email }) => {
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 bw2 dib shadow-5 ">
      <img src={`https://robohash.org/${name}?size=200x200`} alt="rbt-img"></img>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default Card;
