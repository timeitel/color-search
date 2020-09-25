import Table from '../Table/table';
import { useState } from 'react';

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

  const [searchString, setSearchString] = useState('');
  const [colorsState, setColorsState] = useState(colors);

  // assumption: hex search does not have to be a contiguous substring
  // Therefore, rank by character match and not by substring
  function handleSearch(e) {
    // check if enter was pressed
    if (e.keyCode !== 13) {
      return;
    }

    const rankedArray = colors.map((item) => {
      // rank item(color object) by how many of it's color property characters match the searchString
      const rank = searchString.split('').reduce((acc, ch) => {
        return item.color.includes(ch) ? acc + 1 : acc;
      }, 0);

      return { ...item, rank };
    });

    const sortedArray = rankedArray.sort(sortByRank).splice(0, 50);

    setColorsState(sortedArray);
  }

  return (
    <>
      <h2 style={h2Style}>Colors</h2>
      <input
        onKeyDown={handleSearch}
        onChange={(e) => setSearchString(e.target.value.toLowerCase())}
        style={inputStyle}
        placeholder='Enter Hex Color Code'
      />
      <Table colors={colorsState} />
    </>
  );
};

export default colorsearch;

// helper function to sort color object by rank property
function sortByRank(a, b) {
  return a.rank < b.rank ? 1 : -1;
}
