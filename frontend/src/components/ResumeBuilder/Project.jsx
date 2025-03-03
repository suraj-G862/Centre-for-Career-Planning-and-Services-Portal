import React from 'react'

function Project({formData, handleArrayFieldChange, addItem, removeItem}) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-slate-700">Projects</h2>
                <button
                    type="button"
                    onClick={() => addItem('projects')}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                    Add Project
                </button>
            </div>

            {formData.projects.map((project, index) => (
                <div key={index} className="mb-6 p-4 border border-slate-200 rounded bg-slate-50 relative">
                    {formData.projects.length > 1 && (
                        <button
                            type="button"
                            onClick={() => removeItem('projects', index)}
                            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                        >
                            ✕
                        </button>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Project Title*</label>
                            <input
                                type="text"
                                name="title"
                                value={project.title}
                                onChange={(e) => handleArrayFieldChange('projects', index, e)}
                                required
                                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Technologies Used*</label>
                            <input
                                type="text"
                                name="technologies"
                                value={project.technologies}
                                onChange={(e) => handleArrayFieldChange('projects', index, e)}
                                required
                                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="e.g., React, Node.js, MongoDB"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-600 mb-1">Description*</label>
                            <textarea
                                name="description"
                                value={project.description}
                                onChange={(e) => handleArrayFieldChange('projects', index, e)}
                                required
                                rows="3"
                                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Describe the project, your role, and achievements"
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600 mb-1">Project Link</label>
                            <input
                                type="url"
                                name="link"
                                value={project.link}
                                onChange={(e) => handleArrayFieldChange('projects', index, e)}
                                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="https://github.com/yourusername/project"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Project
