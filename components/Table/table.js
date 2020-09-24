import styles from './Table.module.css';

const table = ({ colors }) => {
  const rows = colors.map(({ color, hex }) => {
    return (
      <tr key={hex}>
        <td>{color}</td>
        <td>{hex}</td>
      </tr>
    );
  });

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Hex</th>
          <th>RGB</th>
          <th>CMYK</th>
        </tr>
        {rows}
      </tbody>
    </table>
  );
};

export default table;
