import Table from '../Table/table';

const colorsearch = ({ colors }) => {
  const inputStyle = {
    margin: '10px 0px',
    border: '1px solid gray',
    padding: '2px 5px',
    height: '30px'
  };

  return (
    <>
      <h2 style={{ margin: '0' }}>Colors</h2>
      <input style={inputStyle} placeholder='Enter Hex Color Code' />
      <Table colors={colors} />
    </>
  );
};

export default colorsearch;
