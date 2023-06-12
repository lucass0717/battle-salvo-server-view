

const WinnerList = ({winners}) => {
  return (
    <>
      <p className="text-xl">Winners: </p>
      <div className="pb-8">
        {winners.map((winner, i) => (
          <div className="flex" key={i}>
            <div>{winner}, </div>
          </div>))}
      </div>
    </>
  );
};

export default WinnerList;