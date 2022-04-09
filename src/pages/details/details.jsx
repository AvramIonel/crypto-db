import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCoinDetails } from "../../services/api";
import TableComponent from "../../components/table/table";
import { Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// aici vom avea id pt fiecare coin - prin click pe respectiva moneda...
const Details = () => {
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState({});
  const [coinDescription, setCoinDescription] = useState("");
  const [homepages, setHomePages] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const coinId = location.pathname.substr(9);
    const getCoinDetailsParams = {};

    async function fetchDetails() {
      setLoading(true);
      const res = await getCoinDetails(coinId, getCoinDetailsParams);
      if (res.data) {
        setTableData({
          name: res.data.name,
          symbol: res.data.symbol,
          hashing_algorithm: res.data.hashing_algorithm,
          market_cap_eur: res.data.market_data?.market_cap?.eur,
          genesis_date: res.data.genesis_date,
        });
        setCoinDescription(res.data.description.en);
        setHomePages(res.data.links.homepage);
      }
      setLoading(false);
    }
    fetchDetails();
  }, []);
  console.log(tableData);
  function buildTableHeaderData() {
    return Object.keys(tableData);
  }
  return (
    <div className="p-5">
      {loading ? (
        <Spinner
          animation="border"
          variant="primary"
          className="spinner-center"
        />
      ) : (
        <div>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} size={"3x"} />
            Go to HomePage
          </Link>
          <TableComponent
            containerClassName="mt-4"
            headerData={buildTableHeaderData()}
            tableData={[tableData]}
            showPagination={false}
          />
          {/* <div
            className="description-container"
            dangerouslySetInnerHTML={{ __html: coinDescription }}
          ></div> */}
          <iframe
            srcDoc={'<head><base target="_blank"> </head>' + coinDescription}
            width={"100%"}
            style={{ minHeight: "20rem", border: "none" }}
          />
          <div className="d-flex flex-column">
            {homepages.map((hp, index) => (
              <a key={hp + index} href={hp} target="_blank">
                {hp}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
