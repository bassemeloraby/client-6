import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { useSelector } from "react-redux";

const ExportToExcel = ({ apiData, fileName }) => {
  const { user } = useSelector((state) => state.auth);

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <div>
      {" "}
      {user && (
        <button
          type="button"
          className="btn btn-dark"
          onClick={(e) => exportToCSV(apiData, fileName)}
        >
          Export to Excel
        </button>
      )}
    </div>
  );
};

export default ExportToExcel;
