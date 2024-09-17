import React from "react";

const TodoItem = () => {
	return (
		<>
			<h1 className="text-center mt-11 mb-5 text-2xl text-sky-600 font-bold font-serif">
				Input TODO
			</h1>
			<div className="w-1/2 mx-auto">
				<form className=" p-4 flex justify-center gap-3">
					<input
						type="text"
						placeholder="input todo"
						className="w-1/2 p-3 text-center rounded-md border-2"
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
