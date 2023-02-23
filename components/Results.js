import Card from "./Card";
const Results = ({ results }) => {
  return (
    <div
      className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5
    max-w-6xl gap-4 mx-auto py-4 px-6"
    >
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
