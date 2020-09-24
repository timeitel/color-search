import Table from '../Table/table';

const colorsearch = ({ colors }) => {
  return (
    <>
      <h2>Colors</h2>
      <input placeholder='Enter	Hex Color Code' />
      <Table colors={colors} />
    </>
  );
};

export default colorsearch;
