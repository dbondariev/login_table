import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Table from "./Table";
import { fetchDataFromAPI } from "@/api";
import { User } from "../components/Table";

interface PaginationContainerProps {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

const ITEMS_PER_PAGE = 10; // Define the number of items per page

const PaginationContainer: React.FC<PaginationContainerProps> = ({
  page,
  pageCount,
  onPageChange,
}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    // Fetch data based on the current page
    const fetchData = async () => {
      try {
        // Calculate the offset based on the current page
        const offset = (page - 1) * ITEMS_PER_PAGE;
        const apiData = await fetchDataFromAPI(offset, ITEMS_PER_PAGE); // Pass offset and limit to your API request
        setData(apiData.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page]);

  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
  };

  return (
    <div>
      <Table data={data} loading={loading} />
      <div style={{ marginTop: "20px" }}>
        <Pagination
          page={page}
          pageCount={pageCount}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PaginationContainer;
