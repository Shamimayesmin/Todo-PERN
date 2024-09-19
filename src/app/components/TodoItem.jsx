"use client";
import React, { useState } from "react";

const TodoItem = () => {
	const [description, setDescription] = useState("");

	const onSubmitForm = async (e) => {
		e.preventDefault();
		

		try {
			const body = { description };
			const response = await fetch("http://localhost:5000/todos", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});

			if (!response.ok) {
				// If response status is not ok, log an error
				throw new Error(`Server error: ${response.statusText}`);
			}

			const data = await response.json(); // Assuming response is JSON
			console.log("Response from server:", data);
		} catch (err) {
			console.error(err.message);
		}
	};
	return (
		<>
			<h1 className="text-center mt-11 mb-5 text-2xl text-sky-600 font-bold font-serif">
				Input TODO
			</h1>
			<div className="w-1/2 mx-auto">
				<form
					className=" p-4 flex justify-center gap-3"
					onSubmit={onSubmitForm}
				>
					<input
						type="text"
						placeholder="input todo"
						className="w-1/2 p-3 text-center rounded-md border-2"
						value={description}
						onChange={(e) => {
							setDescription(e.target.value);
							console.log("Current input value:", e.target.value);
						}}
					/>
					<button className="px-4 bg-blue-500 text-white rounded-md">
						Add
					</button>
				</form>
			</div>
		</>
	);
};

export default TodoItem;
