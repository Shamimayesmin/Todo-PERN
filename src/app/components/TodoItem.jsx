import React from 'react';

const TodoItem = () => {
    return (
        <>
        <h1 className='text-center mt-11 mb-5 text-2xl text-sky-600 font-bold font-serif'>Input TODO</h1>
        <form className='w-1/2 mx-auto flex flex-col items-center p-4'>
            <input type="text" 
            placeholder='input todo'
            className='w-1/2 p-3 text-center rounded-md border-2'
             />
        </form>
            
        </>
    );
};

export default TodoItem;