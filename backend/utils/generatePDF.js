
const generatePDF=(doc, data)=> {
    const { personalInfo, education, experience, skills, projects, certifications } = data;

    doc.fontSize(24).font('Helvetica-Bold').text(personalInfo.name, { align: 'center' });
    doc.moveDown(0.5);

    doc.fontSize(10).font('Helvetica');
    let contactText = `${personalInfo.email} | ${personalInfo.phone}`;
    if (personalInfo.address) contactText += ` | ${personalInfo.address}`;
    doc.text(contactText, { align: 'center' });

    if (personalInfo.linkedin || personalInfo.github) {
        let linksText = [];
        if (personalInfo.linkedin) linksText.push(`LinkedIn: ${personalInfo.linkedin}`);
        if (personalInfo.github) linksText.push(`GitHub: ${personalInfo.github}`);
        doc.text(linksText.join(' | '), { align: 'center' });
    }

    doc.moveDown(1);

    addSeparator(doc);

    if (education && education.length > 0) {
        doc.fontSize(14).font('Helvetica-Bold').text('EDUCATION');
        doc.moveDown(0.5);

        education.forEach(edu => {
            doc.fontSize(12).font('Helvetica-Bold').text(edu.institution);

            let degreeText = `${edu.degree} in ${edu.field}`;
            if (edu.gpa) degreeText += ` | GPA: ${edu.gpa}`;
            doc.fontSize(10).font('Helvetica').text(degreeText);

            const startDate = edu.startDate ? new Date(edu.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '';
            const endDate = edu.endDate ? new Date(edu.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present';
            doc.fontSize(10).font('Helvetica-Oblique').text(`${startDate} - ${endDate}`);

            doc.moveDown(0.5);
        });

        addSeparator(doc);
    }


    if (experience && experience.length > 0) {
        doc.fontSize(14).font('Helvetica-Bold').text('PROFESSIONAL EXPERIENCE');
        doc.moveDown(0.5);

        experience.forEach(exp => {
            let companyText = exp.company;
            if (exp.location) companyText += ` | ${exp.location}`;
            doc.fontSize(12).font('Helvetica-Bold').text(companyText);

            doc.fontSize(11).font('Helvetica-Bold').text(exp.position);

            const startDate = exp.startDate ? new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : '';
            const endDate = exp.endDate ? new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present';
            doc.fontSize(10).font('Helvetica-Oblique').text(`${startDate} - ${endDate}`);

            doc.fontSize(10).font('Helvetica').text(exp.description);

            doc.moveDown(0.5);
        });

        addSeparator(doc);
    }

    if (skills && skills.length > 0) {
        doc.fontSize(14).font('Helvetica-Bold').text('SKILLS');
        doc.moveDown(0.5);

        const filteredSkills = skills.filter(skill => skill.trim() !== '');
        doc.fontSize(10).font('Helvetica').text(filteredSkills.join(', '));

        doc.moveDown(0.5);
        addSeparator(doc);
    }

    if (projects && projects.length > 0) {
        doc.fontSize(14).font('Helvetica-Bold').text('PROJECTS');
        doc.moveDown(0.5);

        projects.forEach(project => {
            let titleText = project.title;
            if (project.link) titleText += ` | ${project.link}`;

            doc.fontSize(12).font('Helvetica-Bold').text(titleText);
            doc.fontSize(10).font('Helvetica-Oblique').text(`Technologies: ${project.technologies}`);
            doc.fontSize(10).font('Helvetica').text(project.description);

            doc.moveDown(0.5);
        });

        addSeparator(doc);
    }

    if (certifications && certifications.length > 0) {
        doc.fontSize(14).font('Helvetica-Bold').text('CERTIFICATIONS');
        doc.moveDown(0.5);

        certifications.forEach(cert => {
            doc.fontSize(11).font('Helvetica-Bold').text(cert.name);

            let issuerText = cert.issuer;
            if (cert.date) {
                const certDate = new Date(cert.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
                issuerText += ` | ${certDate}`;
            }

            doc.fontSize(10).font('Helvetica').text(issuerText);
            doc.moveDown(0.5);
        });
    }
}

function addSeparator(doc) {
    doc.moveDown(0.5);
    doc.moveTo(50, doc.y)
        .lineTo(doc.page.width - 50, doc.y)
        .stroke();
    doc.moveDown(0.5);
}



export default generatePDF;