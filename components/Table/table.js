import styles from './Table.module.css';

const table = ({ colors }) => {
  const rows = colors.map(({ color, hex }) => {
    return (
      <tr key={hex}>
        <td></td>
        <td>{color}</td>
        <td>{hex}</td>
        <td></td>
        <td></td>
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
