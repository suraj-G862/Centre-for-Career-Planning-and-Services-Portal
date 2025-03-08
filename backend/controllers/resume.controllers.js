import PDFDocument from "pdfkit";
import  generatePDF  from "../utils/generatePDF.js";

export const generateResume = async (req, res) => {
  try {
    const resumeData = req.body;
    const doc = new PDFDocument({
      margins: { top: 50, bottom: 50, left: 50, right: 50 },
      size: 'A4'
    });
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${resumeData.personalInfo.name.replace(/\s+/g, '_')}_resume.pdf`);

    doc.pipe(res);

    generatePDF(doc, resumeData);

    doc.end();
    
  } catch (error) {
    console.error('Error generating resume:', error);
    res.status(500).json({ message: 'Failed to generate resume', error: error.message });
  }
};

