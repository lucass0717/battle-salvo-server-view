

const WinnerList = ({winners}) => {
  return (
    <div className="flex max-h-screen justify-center pt-12 pb-4 items-center flex-col">
      <p className="font-extralight text-xl ">Winners: </p>
      <div className="pb-8 max-h-full flex flex-col flex-wrap gap-x-4">
        {winners.map((winner, i) => (
          <div key={i}>
            <div className="font-mono">{winner}, </div>
          </div>))}
      </div>
    </div>
  );
};

export default WinnerList;