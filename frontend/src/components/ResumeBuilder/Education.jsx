import React from 'react'

function Education({formData, handleArrayFieldChange, addItem, removeItem}) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-slate-700">Education</h2>
                <button
                    type="button"
                    onClick={() => addItem('education')}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                    Add Education
                </button>
            </div>

            {formData.education.map((edu, index) => (
                <div key={index} className="mb-6 p-4 border border-slate-200 rounded bg-slate-50 relative">
                    {formData.education.length > 1 && (
                        <button
                            type="button"
                            onClick={() => removeItem('education', index)}
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                        >
                            ✕
                        </button>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Institution*</label>
                            <input
                                type="text"
                                name="institution"
                                value={edu.institution}
                                onChange={(e) => handleArrayFieldChange('education', index, e)}
                                required
                                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Degree*</label>
                            <input
                                type="text"
                                name="degree"
                                value={edu.degree}
                                onChange={(e) => handleArrayFieldChange('education', index, e)}
                                required
                                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Field of Study*</label>
                            <input
                                type="text"
                                name="field"
                                value={edu.field}
                                onChange={(e) => handleArrayFieldChange('education', index, e)}
                                required
                                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">GPA</label>
                            <input
                                type="text"
                                name="gpa"
                                value={edu.gpa}
                                onChange={(e) => handleArrayFieldChange('education', index, e)}
                                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Start Date*</label>
                            <input
                                type="date"
                                name="startDate"
                                value={edu.startDate}
                                onChange={(e) => handleArrayFieldChange('education', index, e)}
                                required
                                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">End Date (or Expected)</label>
                            <input
                                type="date"
                                name="endDate"
                                value={edu.endDate}
                                onChange={(e) => handleArrayFieldChange('education', index, e)}
                                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Education
