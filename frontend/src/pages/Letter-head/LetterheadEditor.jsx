import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

// Styled components for the editable section
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

// Styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottom: 2,
    borderBottomColor: '#007bff',
    paddingBottom: 10,
  },
  logoSection: {
    textAlign: 'center',
  },
  logo: {
    width: 60,
    height: 'auto',
    marginBottom: 5
  },
  companyName: {
    fontSize: 20,
    margin: 0,
    color: '#007bff',
  },
  leftCorner: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    fontSize: 12,
    color: '#333',
    alignItems: 'flex-end',
  },
  mainSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  dateSection: {
    textAlign: 'right',
    marginBottom: 10,
    fontSize: 14,
    color: '#555',
  },
  content: {
    fontSize: 12,
    lineHeight: 1.5,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    borderTop: 2,
    borderTopColor: '#007bff',
    paddingTop: 10,
    fontSize: 10,
  },
});

// Function to remove HTML tags
const removeHtmlTags = (str) => {
  if (typeof str !== 'string') return '';  
  return str.replace(/<[^>]*>/g, '');
};

// PDF Document component
const MyDocument = ({ email, phone, date, content }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.logoSection}>
          <Image style={styles.logo} src="/logo.png" />
          <Text style={styles.companyName}>RK Insurance Services</Text>
        </View>
        <View style={styles.leftCorner}>
          <Text>{email}</Text>
          <Text>{phone}</Text>
        </View>
      </View>
      <View style={styles.mainSection}>
        <View style={styles.dateSection}>
          <Text>{date}</Text>
        </View>
        <Text style={styles.content}>{removeHtmlTags(content)}</Text>
      </View>
      <View style={styles.footer}>
        <Text>OFFICE NO. D-319, 2ND FLOOR, SHANTI SHOPPING CENTRE, OPP. MIRA ROAD RAILWAY STATION, MIRA ROAD (EAST), THANE , Pin 401107</Text>
      </View>
    </Page>
  </Document>
);

// Main component
export default function PrintableLetterhead() {
  const [email, setEmail] = useState('example@rkinsurance.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [showPDF, setShowPDF] = useState(false);
  const [content, setContent] = useState('');

  const generatePDF = () => {
    setShowPDF(true);
  };

  return (
    <>
      {/* User Editable Section */}
      <Container>
        <Header>
          <LogoSection>
            <Logo src="/logo.png" alt="Company Logo" />
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

          {/* Quill Editor */}
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            style={{
              height: '200px',
              marginBottom: '50px',
            }}
          />
        </MainSection>

        <Button onClick={generatePDF}>Generate PDF</Button>
      </Container>

      {/* PDF Viewer */}
      {showPDF && (
        <PDFViewer width="100%" height={600}>
          <MyDocument
            email={email}
            phone={phone}
            date={date}
            content={removeHtmlTags(content)}  // Ensure content is extracted from Quill
          />
        </PDFViewer>
      )}
    </>
  );
}
