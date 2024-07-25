const TableRow: React.FC<{
  key: number;
  queryName: string;
  request: string;
}> = (props) => {
  return (
    <tr>
      <td>{props.key}</td>
      <td>{props.queryName}</td> <td>{props.request} </td> <td>button</td>
    </tr>
  );
};

export default TableRow;
