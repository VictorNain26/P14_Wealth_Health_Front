import { Route, Routes } from "react-router-dom";
import { CreateEmployee } from "./pages/createEmployee";
import { EmployeeList } from "./pages/employeeList";
import { EmployeeContext } from "./context/EmployeeContext";

export const Router = () => {
	const value = [];
	return (
		<EmployeeContext.Provider value={value}>
			<Routes>
				<Route path="/" element={<CreateEmployee />} />
				<Route path="/employee-list" element={<EmployeeList />} />
			</Routes>
		</EmployeeContext.Provider>
	);
};
