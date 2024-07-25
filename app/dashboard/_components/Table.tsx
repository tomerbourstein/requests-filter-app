import { table } from "console";
import TableRow from "./TableRow";

const MOCK_TABLE_DATA: Row[] = [
  {
    id: 1,
    queryName: "Example 1",
    request: "REQUEST EXAMPLE REQUEST EXAMPLE",
  },
  {
    id: 2,
    queryName: "Example 2",
    request: "REQUEST EXAMPLE REQUEST EXAMPLE",
  },
  {
    id: 3,
    queryName: "Example 3",
    request: "REQUEST EXAMPLE REQUEST EXAMPLE",
  },
  {
    id: 4,
    queryName: "Example 4",
    request: "REQUEST EXAMPLE REQUEST EXAMPLE",
  },
  {
    id: 5,
    queryName: "Example 5",
    request: "REQUEST EXAMPLE REQUEST EXAMPLE",
  },
  {
    id: 6,
    queryName: "Example 6",
    request: "REQUEST EXAMPLE REQUEST EXAMPLE",
  },
];

const Table: React.FC = () => {
  return (
    <table id="requests-table">
      <tbody>
        <TableRow id="#" queryName="Query" request="Request" th={true} />
        {MOCK_TABLE_DATA.map((row) => (
          <TableRow
            key={row.id}
            id={row.id}
            queryName={row.queryName}
            request={row.request}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
