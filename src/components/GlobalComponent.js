import Table from "./Table";
import Chart from "./Chart";

function GlobalComponent({ theme }) {

    return (
        <>
            <Chart />
            <Table theme={theme} />
        </>
    )
}

export default GlobalComponent;