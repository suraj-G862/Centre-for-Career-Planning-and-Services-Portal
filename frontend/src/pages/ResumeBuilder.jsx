import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useResume } from '../api/useResume';
import PersonalInfo from '../components/ResumeBuilder/PersonalInfo';
import Education from '../components/ResumeBuilder/Education';
import Experience from '../components/ResumeBuilder/Experience';
import Skills from '../components/ResumeBuilder/Skills';
import Project from '../components/ResumeBuilder/Project';
import Certifications from '../components/ResumeBuilder/Certifications';

function ResumeBuilder() {
    const { generateResume, loading } = useResume();
    const [formData, setFormData] = useState({
        personalInfo: { name: '', email: '', phone: '', address: '', linkedin: '', github: '' },
        education: [{ institution: '', degree: '', field: '', startDate: '', endDate: '', gpa: '' }],
        experience: [{ company: '', position: '', startDate: '', endDate: '', description: '', location: '' }],
        skills: [''],
        projects: [{ title: '', description: '', technologies: '', link: '' }],
        certifications: [{ name: '', issuer: '', date: '' }]
    });

    const handleArrayFieldChange = (category, index, e) => {
        const { name, value } = e.target;
        const updatedItems = [...formData[category]];
        updatedItems[index] = {
            ...updatedItems[index],
            [name]: value
        };

        setFormData({
            ...formData,
            [category]: updatedItems
        });
    };

    const addItem = (category) => {
        let newItem;

        switch (category) {
            case 'education':
                newItem = { institution: '', degree: '', field: '', startDate: '', endDate: '', gpa: '' };
                break;
            case 'experience':
                newItem = { company: '', position: '', startDate: '', endDate: '', description: '', location: '' };
                break;
            case 'skills':
                newItem = '';
                break;
            case 'projects':
                newItem = { title: '', description: '', technologies: '', link: '' };
                break;
            case 'certifications':
                newItem = { name: '', issuer: '', date: '' };
                break;
            default:
                return;
        }

        setFormData({
            ...formData,
            [category]: [...formData[category], newItem]
        });
    };

    const removeItem = (category, index) => {
        if (formData[category].length <= 1) return;

        const updatedItems = [...formData[category]];
        updatedItems.splice(index, 1);

        setFormData({
            ...formData,
            [category]: updatedItems
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await generateResume(formData);
    };

    return (
        <div className="flex h-screen bg-slate-100">
            <Sidebar />
            <div className="flex-1 p-6 overflow-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold text-slate-800">Resume Builder</h1>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={loading}
                        className={`px-4 py-2 rounded font-medium ${loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'
                            }`}
                    >
                        {loading ? 'Generating...' : 'Generate Resume'}
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <PersonalInfo formData={formData} setFormData={setFormData} />
                    <Education formData={formData} handleArrayFieldChange={handleArrayFieldChange} addItem={addItem} removeItem={removeItem} />
                    <Experience formData={formData} handleArrayFieldChange={handleArrayFieldChange} addItem={addItem} removeItem={removeItem} />
                    <Skills formData={formData} setFormData={setFormData} addItem={addItem} removeItem={removeItem} />
                    <Project formData={formData} handleArrayFieldChange={handleArrayFieldChange} addItem={addItem} removeItem={removeItem} />
                    <Certifications formData={formData} handleArrayFieldChange={handleArrayFieldChange} addItem={addItem} removeItem={removeItem} />
                    <div className="mt-6 flex justify-end">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`px-6 py-3 rounded-lg font-medium text-lg ${loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'
                                }`}
                        >
                            {loading ? 'Generating Resume...' : 'Generate Resume PDF'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ResumeBuilder;