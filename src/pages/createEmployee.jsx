import Select from "react-select";
import countryList from "react-select-country-list";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from "react-hook-form";
import { EmployeeContext } from "../context/EmployeeContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "@victornain26/react-modal-component";
import { Button, TextField } from "@mui/material";

const options = [
	{ value: "sales", label: "Sales" },
	{ value: "marketing", label: "Marketing" },
	{ value: "engineering", label: "Engineering" },
	{ value: "human Resources", label: "Human Resources" },
	{ value: "legal", label: "Legal" },
];

export function CreateEmployee() {
	const [show, setShow] = useState(false);
	const { register, handleSubmit, control } = useForm();
	const employee = useContext(EmployeeContext);

	const submitForm = (data) => {
		const employeeFormat = {
			id: Date.now(),
			firstName: data.firstName,
			lastName: data.lastName,
			street: data.street,
			city: data.city,
			zipCode: data.zipCode,
			dateOfBirth: `${data.dateOfBirth.getDate()}/${data.dateOfBirth.getMonth()}/${data.dateOfBirth.getFullYear()}`,
			startDate: `${data.startDate.getDate()}/${data.startDate.getMonth()}/${data.startDate.getFullYear()}`,
			state: data.state.label,
			department: data.department.label,
		};

		employee.push(employeeFormat);
		setShow(true);
	};

	return (
		<>
			<h1>HRnet</h1>

			<div>
				<Link to={"/employee-list"}>{"View Current Employees"}</Link>
			</div>

			<h2>Create Employee</h2>

			<form onSubmit={handleSubmit(submitForm)}>
				<div className="input-container">
					<label htmlFor="firstName">First Name</label>
					<TextField
						type="text"
						id="first-name"
						{...register("firstName", { required: true })}
					/>
				</div>

				<div className="input-container">
					<label htmlFor="lastName">Last Name</label>
					<TextField
						type="text"
						id="last-name"
						{...register("lastName", { required: true })}
					/>
				</div>

				<div className="input-container">
					<label htmlFor="date-of-birth">Date of Birth</label>
					<Controller
						name="dateOfBirth"
						control={control}
						render={({ field }) => (
							<DatePicker
								placeholderText='Select date'
								{...field}
								selected={field.value}
							/>
						)}
					/>
				</div>

				<div className="input-container">
					<label htmlFor="start-date">Start Date</label>
					<Controller
						name="startDate"
						control={control}
						render={({ field }) => (
							<DatePicker
								placeholderText='Select date'
								{...field}
								selected={field.value}
							/>
						)}
					/>
				</div>

				<fieldset className="address">
					<legend>Address</legend>

					<div className="input-container">
						<label htmlFor="street">Street</label>
						<TextField
							id="street"
							type="text"
							{...register("street", { required: true })}
						/>
					</div>

					<div className="input-container">
						<label htmlFor="city">City</label>
						<TextField
							id="city"
							type="text"
							{...register("city", { required: true })}
						/>
					</div>

					<div className="input-container">
						<label htmlFor="state">State</label>
						<Controller
							name="state"
							control={control}
							render={({ field }) => (
								<Select {...field} options={countryList().getData()} />
							)}
						/>
					</div>

					<div className="input-container">
						<label htmlFor="zipCode">Zip Code</label>
						<TextField
							id="zip-code"
							type="number"
							{...register("zipCode", { required: true })}
						/>
					</div>
				</fieldset>

				<div className="input-container">
					<label htmlFor="department">Department</label>
					<Controller
						name="department"
						control={control}
						render={({ field }) => <Select {...field} options={options} />}
					/>
				</div>

				<Button variant="contained" type="submit" className="button">
					Save
				</Button>
			</form>

			<Modal title="Employé créé" onClose={() => setShow(false)} show={show}>
				<p>L'employé a été ajouté à la base !</p>
			</Modal>
		</>
	);
}
