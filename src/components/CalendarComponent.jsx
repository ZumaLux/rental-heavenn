import { DateRange } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./CalendarComponent.css";

import React, { useEffect, useState } from "react";

const CalendarComponent = ({ takenDates, setStartDate, setEndDate }) => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    setStartDate(format(range[0].startDate, "MM/dd/yyyy"));
    setEndDate(format(range[0].endDate, "MM/dd/yyyy"));
  }, [range, setStartDate, setEndDate]);

  return (
    <div className="calendar-wrap">
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setRange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={range}
        months={1}
        direction="horizontal"
        className="calendar-element"
        minDate={new Date()}
        disabledDates={takenDates}
      />
    </div>
  );
};

export default CalendarComponent;
