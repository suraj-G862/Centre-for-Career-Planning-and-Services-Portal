import React from 'react'

function Experience({formData, handleArrayFieldChange, addItem, removeItem}) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-slate-700">Experience</h2>
                <button
                    type="button"
                    onClick={() => addItem('experience')}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                    Add Experience
                </button>
            </div>

            {formData.experience.map((exp, index) => (
                <div key={index} className="mb-6 p-4 border border-slate-200 rounded bg-slate-50 relative">
                    {formData.experience.length > 1 && (
                        <button
                            type="button"
                            onClick={() => removeItem('experience', index)}
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                        >
                            ✕
                        </button>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Company*</label>
                            <input
                                type="text"
                                name="company"
                                value={exp.company}
                                onChange={(e) => handleArrayFieldChange('experience', index, e)}
                                required
                                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Position*</label>
                            <input
                                type="text"
                                name="position"
                                value={exp.position}
                                onChange={(e) => handleArrayFieldChange('experience', index, e)}
                                required
                                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Location</label>
                            <input
                                type="text"
                                name="location"
                                value={exp.location}
                                onChange={(e) => handleArrayFieldChange('experience', index, e)}
                                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-600 mb-1">Description*</label>
                            <textarea
                                name="description"
                                value={exp.description}
                                onChange={(e) => handleArrayFieldChange('experience', index, e)}
                                required
                                rows="3"
                                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Describe your responsibilities and achievements"
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Start Date*</label>
                            <input
                                type="date"
                                name="startDate"
                                value={exp.startDate}
                                onChange={(e) => handleArrayFieldChange('experience', index, e)}
                                required
                                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">End Date (or Current)</label>
                            <input
                                type="date"
                                name="endDate"
                                value={exp.endDate}
                                onChange={(e) => handleArrayFieldChange('experience', index, e)}
                                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Experience
