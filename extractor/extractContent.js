const fs = require('fs');
const pdf = require('pdf-parse');
const mammoth = require('mammoth');

async function extract() {
  try {
    // 1. Mural 
    const muralBuffer = fs.readFileSync('C:\\Users\\camil\\OneDrive\\Escritorio\\Mario\\Propuesta - Mural de Las Americas - Mario Moreno Lazarte - 2025.pdf');
    const muralData = await pdf(muralBuffer);
    fs.writeFileSync('./mural_text.txt', muralData.text);
    console.log("Mural extracted");

    // 2. Galpon
    try {
      const galponBuffer = fs.readFileSync('C:\\Users\\camil\\OneDrive\\Escritorio\\Mario\\Proyecto Galpon2099.pdf');
      const galponData = await pdf(galponBuffer);
      fs.writeFileSync('./galpon_text.txt', galponData.text);
      console.log("Galpon PDF extracted");
    } catch (e) {
      console.log("Error reading Galpon PDF: ", e.message);
    }
    
    // 3. Galpon Docx
    try {
      const docxResult = await mammoth.extractRawText({path: 'C:\\Users\\camil\\OneDrive\\Escritorio\\Mario\\Proyecto_Galpon2099_EN.docx'});
      fs.writeFileSync('./galpon_docx_text.txt', docxResult.value);
      console.log("Galpon DOCX extracted");
    } catch (e) {
      console.log("Error reading Galpon DOCX: ", e.message);
    }

  } catch (e) {
    console.error(e);
  }
}
extract();
