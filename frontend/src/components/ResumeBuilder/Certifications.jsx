import React from 'react'

function Certifications({formData, handleArrayFieldChange, addItem, removeItem}) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-slate-700">Certifications</h2>
                <button
                    type="button"
                    onClick={() => addItem('certifications')}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                    Add Certification
                </button>
            </div>

            {formData.certifications.map((cert, index) => (
                <div key={index} className="mb-4 p-4 border border-slate-200 rounded bg-slate-50 relative">
                    {formData.certifications.length > 1 && (
                        <button
                            type="button"
                            onClick={() => removeItem('certifications', index)}
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                        >
                            ✕
                        </button>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Certification Name*</label>
                            <input
                                type="text"
                                name="name"
                                value={cert.name}
                                onChange={(e) => handleArrayFieldChange('certifications', index, e)}
                                required
                                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Issuing Organization*</label>
                            <input
                                type="text"
                                name="issuer"
                                value={cert.issuer}
                                onChange={(e) => handleArrayFieldChange('certifications', index, e)}
                                required
                                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Date Issued</label>
                            <input
                                type="date"
                                name="date"
                                value={cert.date}
                                onChange={(e) => handleArrayFieldChange('certifications', index, e)}
                                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Certifications
