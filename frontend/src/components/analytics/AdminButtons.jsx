import React from 'react'

function AdminButtons( { isEditOpen, handleEdit, handleCancel, authUser }) {
    return (
        <div className='ml-12 -mt-[500px] md:mt-0 '>
            {authUser.role === 'admin' && (
                <button
                    className="bg-[#7ffad5] hover:bg-[#3fc49c] border-1 hover:scale-x-110 transition-all duration-300 h-12 w-24 rounded-md "
                    onClick={handleEdit}
                >
                    {isEditOpen ? 'Save' : 'Edit'}
                </button>
            )}
            {isEditOpen && (
                <button
                    className="bg-red-500 border-1 hover:scale-x-110 hover:bg-red-700 transition-all duration-300 h-12 w-24 rounded-md ml-4"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            )}
        </div>
    )
}

export default AdminButtons
