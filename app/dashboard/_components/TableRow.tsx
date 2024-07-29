const TableRow: React.FC<{
  id: number | string;
  queryName: string;
  request: string;
  th?: boolean;
}> = (props) => {
  return (
    <>
      {props.th ? (
        <tr>
          <th>{props.id}</th>
          <th>{props.queryName}</th>
          <th>{props.request}</th>
        </tr>
      ) : (
        <tr>
          <td>{props.id}</td>
          <td>{props.queryName}</td>
          <td>{props.request}</td>
          <td>button</td>
        </tr>
      )}
    </>
  );
};

export default TableRow;
