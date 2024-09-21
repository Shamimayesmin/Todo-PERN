"use client";

import { useState } from "react";

const EditTodo = ({ todo, fetchAllTodos }) => {
	console.log("tood", todo);
	const { description, id } = todo || {};
	const [updatedDescription, setUpdatedDescription] = useState(
		description || ""
	);

	const updateTodo = async (e) => {
		e.preventDefault();
		try {
			const body = { description: updatedDescription };
			const response = await fetch(`http://localhost:5000/todos/${id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
			console.log("Updated todo:", response);
			fetchAllTodos();
			// window.location = "/";
			document.getElementById(`my_modal_${id}`).close();
		} catch (error) {
			console.error(error.message);
		}
	};
	return (
		<>
			<button
				className="btn btn-ghost btn-sm bg-sky-400"
				type="button"
				data-toggle="modal"
				onClick={() => document.getElementById(`my_modal_${id}`).showModal()}
			>
				Edit
			</button>

			<dialog
				id={`my_modal_${id}`}
				className="modal modal-bottom sm:modal-middle"
			>
				<div className="modal-box p-10">
					<h3 className="font-bold text-lg">Edit Task! {id}</h3>

					<div className="flex-none mt-5">
						<form method="dialog" onSubmit={updateTodo}>
							<div>
								<input
									type="text"
									placeholder="Type here"
									className=" input input-bordered input-accent w-full max-w-lg"
									value={updatedDescription}
									onChange={(e) => setUpdatedDescription(e.target.value)}
								/>
							</div>
							<div className="mt-5 flex justify-end items-center">
								<button type="submit" className="btn btn-sm mr-4 bg-sky-400 text-white hover:bg-sky-500">
									Save
								</button>
								<button
									onClick={() =>
										document.getElementById(`my_modal_${id}`).close()
									}
									className="btn btn-sm bg-fuchsia-400 text-white hover:bg-fuchsia-500"
								>
									Close
								</button>
							</div>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
};

export default EditTodo;
