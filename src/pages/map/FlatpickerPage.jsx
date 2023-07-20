import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Flatpickr from "react-flatpickr";
import { format } from "date-fns";
import { Button } from "reactstrap";

const FlatpickerPage = ({ onDateRangeChange }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSearchButtonClick = () => {
    const formattedStartDate = startDate ? format(startDate, "dd-MM-yyyy") : null;
    const formattedEndDate = endDate ? format(endDate, "dd-MM-yyyy") : null;
    onDateRangeChange(formattedStartDate, formattedEndDate);
  };

  return (
    <div>
      <div className="grid xl:grid-cols-2  grid-cols-1 gap-5">
        <div>
          <label htmlFor="default-picker" className="form-label">
            Date debut
          </label>
          <Flatpickr
            className="form-control py-2"
            value={startDate}
            onChange={(date) => setStartDate(date[0])}
            id="start-picker"
          />
        </div>
      </div>
      <div className="grid xl:grid-cols-2  grid-cols-1 gap-5">
        <div>
          <label htmlFor="default-picker" className="form-label">
            Date fin
          </label>
          <Flatpickr
            className="form-control py-2"
            value={endDate}
            onChange={(date) => setEndDate(date[0])}
           
            id="end-picker"
          />
        </div>
      </div>
      <Button className="btn-outline-success rounded-[500px] m-1" onClick={handleSearchButtonClick}>Rechercher</Button>
    </div>
  );
};

export default FlatpickerPage;
