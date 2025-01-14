import { useState } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { useQuill } from 'react-quilljs';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import 'quill/dist/quill.snow.css';

// Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #007bff;
  padding: 10px 0;
`;

const LeftCorner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 12px;
  color: #333;
`;

const EditableInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  font-size: 14px;
  color: #333;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.4);
  }
`;

const LogoSection = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  width: 60px;
  height: auto;
  margin-bottom: 5px;
`;

const CompanyName = styled.h1`
  font-size: 20px;
  margin: 0;
  color: #007bff;
`;

const MainSection = styled.div`
  padding: 20px 0;
`;

const DateSection = styled.div`
  text-align: right;
  margin-bottom: 10px;
  font-size: 14px;
  color: #555;
`;

const Footer = styled.div`
  margin-top: auto;
  text-align: center;
  border-top: 2px solid #007bff;
  padding: 10px 0;
  font-size: 12px;
  color: #333;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #0056b3;
  }
`;

// Component
const PrintableLetterhead = () => {
  const [email, setEmail] = useState('example@rkinsurance.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const { quill, quillRef } = useQuill();

  // Generate PDF
  const generatePDF = async () => {
    const printElement = document.getElementById('print-view');

    if (!printElement) {
      alert('Print content not found!');
      return;
    }

    // Temporarily show the hidden printable content
    printElement.style.display = 'block';

    try {
      const canvas = await html2canvas(printElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('letterhead.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF.');
    } finally {
      printElement.style.display = 'none';
    }
  };

  return (
    <>
      {/* User Editable Section */}
      <Container>
        <Header>
        <LogoSection>
            <Logo src="public/logo.png" alt="Company Logo" />
            <CompanyName>RK Insurance Services</CompanyName>
          </LogoSection>

          <LeftCorner>
            <div>
              <label>Email: </label>
              <EditableInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>
            <div>
              <label>Phone: </label>
              <EditableInput
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone"
              />
            </div>
          </LeftCorner>

        </Header>

        <MainSection>
          <DateSection>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{ border: 'none', fontSize: '14px', padding: '5px', outline: 'none' }}
            />
          </DateSection>

          <div
            ref={quillRef}
            style={{
              minHeight: '200px',
              border: '1px solid #ddd',
              padding: '10px',
              backgroundColor: '#fff',
            }}
          />
        </MainSection>

        <Footer>
          <p>Address : OFFICE NO. D-319, 2ND FLOOR,<br /> SHANTI SHOPPING CENTRE, OPP. MIRA ROAD RAILWAY STATION, MIRA ROAD (EAST), THANE , Pin 401107</p>
        </Footer>

        <Button onClick={generatePDF}>Generate PDF</Button>
      </Container>

      {/* Printable Content */}
      <div id="print-view" style={{ display: 'none', padding: '30px', backgroundColor: 'white' }}>
        <Header>
          <LogoSection>
            <Logo src="public/logo.png" alt="Company Logo" />
            <CompanyName>RK Insurance Services</CompanyName>
          </LogoSection>

          <LeftCorner>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
          </LeftCorner>
        </Header>

        <MainSection>
          <DateSection>
            <p>{date}</p>
          </DateSection>

          <div
            dangerouslySetInnerHTML={{ __html: quill?.root.innerHTML || '' }}
            style={{ fontSize: '14px', color: '#333' }}
          />
        </MainSection>

        <Footer>
          <p>OFFICE NO. D-319, 2ND FLOOR, SHANTI SHOPPING CENTRE, OPP. MIRA ROAD RAILWAY STATION, MIRA ROAD (EAST), THANE , Pin 401107</p>
        </Footer>
      </div>
    </>
  );
};

export default PrintableLetterhead;
