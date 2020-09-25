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

  const repoStyle = {
    position: 'absolute',
    top: '5%',
    right: '5%'
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

    // add a ranking property to color objects
    const rankedArray = colors.map((item) => {
      // rank item's (color object's) similarity to the search string
      const rank = similarity(searchString, item.hex);

      // personal function to rank substring matching - simple and character based
      // const rank = searchString.split('').reduce((acc, ch) => {
      //   return item.color.includes(ch) ? acc + 1 : acc;
      // }, 0);

      return { ...item, rank };
    });

    // sort color objects by the added rank property and return the first 50
    const sortedArray = rankedArray.sort(sortByRank).splice(0, 50);

    setColorsState(sortedArray);
  }

  return (
    <>
      <h2 style={h2Style}>Colors</h2>
      <a
        href='https://github.com/timeitel/color-search'
        target='_blank'
        style={repoStyle}
      >
        Github Repo
        <svg
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          height='16'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
          ></path>
        </svg>
      </a>
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

// helper functions for fuzzy substring matching using the Levenshtein Algorithm - https://stackoverflow.com/questions/10473745/compare-strings-javascript-return-of-likely
function similarity(s1, s2) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (
    (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength)
  );
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0) costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}
