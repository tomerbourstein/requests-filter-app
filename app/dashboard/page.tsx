export default function Dashboard() {
  const goBack: string = "<- GO BACK";

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-5 px-10 py-5">
      <header
        id="header"
        className="flex flex-row gap-5 justify-between w-full"
      >
        <div id="header-logo-back" className="flex gap-5">
          <button>LOGO</button>
          <button>{goBack}</button>
        </div>
        <div id="navbar-buttons" className="flex flex-row gap-5">
          <button>Overview</button>
          <button>Requests</button>
          <button>Visuals</button>
        </div>
      </header>

      <section id="input-section" className="mt-4 flex-1 w-full">
        <div className="border-2 flex flex-row gap-2 items-center">
          <div id="left-col" className="flex flex-col gap-5 w-1/2">
            <table id="requests-table">
              <tbody>
                <tr>
                  <th>#</th>
                  <th>Query</th>
                  <th>Request</th> <th></th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>EXAMPLE 1</td> <td>REQUEST EXAMPLE REQUEST EXAMPLE </td>{" "}
                  <td>button</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>EXAMPLE 2</td> <td>REQUEST EXAMPLE REQUEST EXAMPLE </td>{" "}
                  <td>button</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>EXAMPLE 3</td> <td>REQUEST EXAMPLE REQUEST EXAMPLE </td>{" "}
                  <td>button</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>EXAMPLE 4</td> <td>REQUEST EXAMPLE REQUEST EXAMPLE </td>{" "}
                  <td>button</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>EXAMPLE 5</td> <td>REQUEST EXAMPLE REQUEST EXAMPLE </td>{" "}
                  <td>button</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>EXAMPLE 6</td> <td>REQUEST EXAMPLE REQUEST EXAMPLE </td>{" "}
                  <td>button</td>
                </tr>
              </tbody>
            </table>

            <div id="graph" className="">
              <div className=" flex flex-col items-start">
                <p>THIS IS A CHART OF ALL THE DATA</p>
                <p>THIS IS ANOTHER ROW OF TEXT</p>
                <p>THIS IS ANOTHER ROW OF TEXT</p>
                <p>THIS IS ANOTHER ROW OF TEXT</p>
                <p>THIS IS ANOTHER ROW OF TEXT</p>
                <p>THIS IS ANOTHER ROW OF TEXT</p>
                <p>THIS IS ANOTHER ROW OF TEXT</p>
              </div>
            </div>
          </div>
          <div
            id="right-col"
            className="flex flex-col items-center gap-5 w-1/2"
          >
            <div id="pie-legend" className="flex gap-2">
              <p>#el1</p>
              <p>#el2</p>
              <p>#el3</p>
              <p>#el4</p>
              <p>#el5</p>
            </div>
            <div className="w-72 h-72 border-2 border-black   rounded-full flex justify-center items-center">
              <p>PIE</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="">
        <p>Designed and Built by</p>
        <p>© Tomer Bourstein </p>
      </footer>
    </main>
  );
}
