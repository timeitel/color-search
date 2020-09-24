import styles from './Table.module.css';

const table = ({ colors }) => {
  const rows = colors.map(({ color, hex }) => {
    return (
      <tr key={hex}>
        <td></td>
        <td>{color}</td>
        <td>{hex}</td>
        <td>{hexToRGB(hex)}</td>
        <td>{hexToCMYK(hex)}</td>
      </tr>
    );
  });

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Hex</th>
            <th>RGB</th>
            <th>CMYK</th>
          </tr>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

export default table;

// helper function for conversion - https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
function hexToRGB(hex) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return `${r}, ${g}, ${b}`;
}

// helper function for conversion - http://www.javascripter.net/faq/hex2cmyk.htm
function hexToCMYK(hex) {
  var computedC = 0;
  var computedM = 0;
  var computedY = 0;
  var computedK = 0;

  hex = hex.charAt(0) == '#' ? hex.substring(1, 7) : hex;

  if (hex.length != 6) {
    return;
  }
  if (/[0-9a-f]{6}/i.test(hex) != true) {
    return;
  }

  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  // BLACK
  if (r == 0 && g == 0 && b == 0) {
    computedK = 1;
    return [0, 0, 0, 1];
  }

  computedC = 1 - r / 255;
  computedM = 1 - g / 255;
  computedY = 1 - b / 255;

  var minCMY = Math.min(computedC, Math.min(computedM, computedY));

  computedC = (computedC - minCMY) / (1 - minCMY);
  computedM = (computedM - minCMY) / (1 - minCMY);
  computedY = (computedY - minCMY) / (1 - minCMY);
  computedK = minCMY;

  // format to required output
  return `
    ${(computedC * 100).toFixed(0)},
    ${(computedM * 100).toFixed(0)},
    ${(computedY * 100).toFixed(0)},
    ${(computedK * 100).toFixed(0)}
 `;
}
