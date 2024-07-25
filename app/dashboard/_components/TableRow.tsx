const TableRow: React.FC<{
  id: number | string;
  queryName: string;
  request: string;
  th?: boolean;
}> = (props) => {
  return (
    <tr>
      {props.th ? (
        <>
          <th>{props.id}</th>
          <th>{props.queryName}</th> <th>{props.request} </th>
        </>
      ) : (
        <>
          <td>{props.id}</td>
          <td>{props.queryName}</td> <td>{props.request} </td> <td>button</td>
        </>
      )}
    </tr>
  );
};

export default TableRow;
