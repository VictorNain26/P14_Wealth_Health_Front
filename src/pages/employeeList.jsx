import { EmployeeContext } from "../context/EmployeeContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import MaterialReactTable from "material-react-table";

const columns = [
	{
		header: "Firstname",
		accessorKey: "firstName",
	},
	{
		header: "Lastname",
		accessorKey: "lastName",
	},
	{
		header: "DateOfBirth",
		accessorKey: "dateOfBirth",
	},
	{
		header: "StartDate",
		accessorKey: "startDate",
	},
	{
		header: "Street",
		accessorKey: "street",
	},
	{
		header: "City",
		accessorKey: "city",
	},
	{
		header: "State",
		accessorKey: "state",
	},
	{
		header: "ZipCode",
		accessorKey: "zipCode",
	},
	{
		header: "Department",
		accessorKey: "department",
	},
];

export function EmployeeList() {
	const employee = useContext(EmployeeContext);

	useEffect(() => {
		console.log(employee);
	}, [employee]);

	return (
		<>
			<div>
				<h1>Current Employees</h1>
				<MaterialReactTable
					columns={columns}
					data={employee}
					enableColumnOrdering
				/>
				<div className="home-container">
					<Link to={"/"}>{"Home"}</Link>
				</div>
			</div>
		</>
	);
}
