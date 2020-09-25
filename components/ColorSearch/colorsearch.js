import Table from '../Table/table';

const colorsearch = ({ colors }) => {
  const inputStyle = {
    margin: '10px 0px',
    border: '1px solid gray',
    padding: '2px 5px',
    height: '30px'
  };

  const h2Style = {
    margin: '0'
  };

  return (
    <>
      <h2 style={h2Style}>Colors</h2>
      <input style={inputStyle} placeholder='Enter Hex Color Code' />
      <Table colors={colors} />
    </>
  );
};

export default colorsearch;

// assumption: hex search does not have to be a contiguous substring
// Therefore, rank by character match and not by substring
function handleSearch({ colors }, searchString) {
  const rankedArray = colors.map((item) => {
    // rank item(color object) by how many of it's color property characters match the searchString
    const rank = searchString.split('').reduce((acc, ch) => {
      return item.color.includes(ch) ? acc + 1 : acc;
    }, 0);

    return { ...item, rank };
  });

  const sortedArray = rankedArray.sort(sortByRank(a, b)).splice(0, 50);

  return sortedArray;
}

// helper function to sort color object by rank property
function sortByRank(a, b) {
  return a.rank > b.rank ? 1 : -1;
}
