import React from 'react'

function Skills({formData, setFormData, addItem, removeItem}) {
    const handleSkillChange = (index, value) => {
        const updatedSkills = [...formData.skills];
        updatedSkills[index] = value;

        setFormData({
            ...formData,
            skills: updatedSkills
        });
    };
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-slate-700">Skills</h2>
                <button
                    type="button"
                    onClick={() => addItem('skills')}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                    Add Skill
                </button>
            </div>

            <div className="flex flex-wrap gap-2">
                {formData.skills.map((skill, index) => (
                    <div key={index} className="flex items-center bg-slate-50 border border-slate-200 rounded p-2">
                        <input
                            type="text"
                            value={skill}
                            onChange={(e) => handleSkillChange(index, e.target.value)}
                            className="w-full border-none bg-transparent focus:outline-none"
                            placeholder="Enter a skill"
                        />
                        {formData.skills.length > 1 && (
                            <button
                                type="button"
                                onClick={() => removeItem('skills', index)}
                                className="ml-2 text-red-500 hover:text-red-700"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
