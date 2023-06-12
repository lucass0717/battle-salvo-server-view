

const WinnerList = ({winners}) => {
  return (
    <>
      <p className="text-xl">Winners: </p>
      <div className="flex pb-8">
        {winners.map((winner, i) => (
          <div className="flex" key={i}>
            <div>{winner}, </div>
          </div>))}
      </div>
    </>
  );
};

export default WinnerList;