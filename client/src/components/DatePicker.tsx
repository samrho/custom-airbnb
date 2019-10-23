import React, { Fragment, Component, useState } from "react";
import { DayPickerRangeController } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "../styles/DatePicker.css";
const DatePicker = () => {
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	const [focusedInput, setFocusedInput] = useState(startDate);

	return (
		<div className="App">
			<DayPickerRangeController
				// startDateId="startDate"
				// endDateId="endDate"
				startDate={startDate}
				endDate={endDate}
				onDatesChange={({ startDate, endDate }) => {
					setStartDate(startDate);
					setEndDate(endDate);
				}}
				focusedInput={focusedInput}
				onFocusChange={(focusedInput) => {
					setFocusedInput(focusedInput);
				}}
			/>
		</div>
	);
};

export default DatePicker;
