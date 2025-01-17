import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image,
    Font,
  } from "@react-pdf/renderer";
  import * as React from 'react';
import AppointmentLetter from './Main';
  
  // Register custom fonts
  Font.register({
    family: "Open Sans",
    fonts: [
      {
        src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
        fontWeight: 600,
      },
      {
        src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf",
        fontWeight: 700,
      },
      {
        src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-italic.ttf",
        fontStyle: "italic",
      },
    ],
  });
  
  const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontSize: 10,
      fontFamily: "Open Sans",
      backgroundColor: "#F8F9FA",
    },
    header: {
      marginBottom: 20,
    },
    headerContent: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
    },
    logo: {
      width: 90,
      height: 50,
      marginRight: 15,
    },
    companyName: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#3B82F6",
    },
    headerText: {
      fontSize: 20,
      fontWeight: 700,
      color: "#4A90E2",
    },
    subject: {
      fontSize: 14,
      fontWeight: 700,
      marginBottom: 5,
      color: "#2C3E50",
      textAlign: "center",
    },
    section: {
      marginBottom: 5,
    },
    title: {
      fontSize: 14,
      fontWeight: 700,
      marginBottom: 5,
      color: "#2C3E50",
    },
    subtitle: {
      fontSize: 8,
      fontWeight: 500,
      marginBottom: 3,
      width: 200,
      maxWidth: 200,
      color: "#34495E",
      textAlign: "left",
    },
    text: {
      marginBottom: 5,
      lineHeight: 1.5,
    },
    bulletPoint: {
      marginLeft: 10,
      flexDirection: "row",
    },
    bullet: {
      width: 10,
    },
    bulletContent: {
      flex: 1,
    },
    table: {
      display: "flex",
      width: "auto",
      marginVertical: 10,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#4A90E2",
    },
    tableRow: {
      flexDirection: "row",
    },
    tableCell: {
      padding: 5,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#4A90E2",
    },
    tableCellHeader: {
      backgroundColor: "#E8F0FE",
      fontWeight: 700,
      color: "#2C3E50",
    },
    footer: {
      position: "absolute",
      bottom: 25,
      left: 30,
      right: 30,
      textAlign: "center",
      color: "#7F8C8D",
      borderTop: 1,
      borderTopColor: "#BDC3C7",
      paddingTop: 10,
    },
    pageNumber: {
      position: "absolute",
      bottom: 35,
      left: 0,
      right: 0,
      textAlign: "center",
      fontSize: 10,
      color: "#7F8C8D",
    },
    divider: {
      height: 1,
      backgroundColor: "#3B82F6", // #515a5a
      marginVertical: 5,
    },
    referenceAddress: {
      position: "absolute",
      bottom: 10,
      left: 20,
      right: 0,
      textAlign: "left",
      fontSize: 8,
      color: "black",
    },
    signature: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 50,
    },
    signatureLine: {
      width: 200,
      borderBottom: 1,
      borderBottomColor: "#2C3E50",
    },
    companyNameContainer: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
    companyNameSecondary: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#4B5563",
      marginTop: 4,
    },
    tagline: {
      fontSize: 12,
      color: '#6B7280',
      marginTop: 8,
      fontStyle: 'italic',
    },
    logoContainer: {
      padding: 10,
      marginRight: 20,
    },
  });
  
  interface OfferLetterPDFProps {
    data: {
      position: string;
      name: string;
      date: string;
      address: string;
      mail: string;
      mobile: string;
      basicDAMonthly: string;
      basicDAYearly: string;
      hraMonthly: string;
      hraYearly: string;
      executiveAllowanceMonthly: string;
      executiveAllowanceYearly: string;
      bonusMonthly: string;
      bonusYearly: string;
      epfMonthly: string;
      epfYearly: string;
      monthlyGrossSalary: string;
      yearlyGrossSalary: string;
      professionalTaxMonthly: string;
      professionalTaxYearly: string;
      incomeTaxMonthly: string;
      incomeTaxYearly: string;
      netMonthlyTakeHome: string;
      netYearlyTakeHome: string;
    };
  }
  
  export default function AppointmentLetterPDF({ data }: OfferLetterPDFProps) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <View style={styles.logoContainer}>
                <Image src="/logo.png" style={styles.logo} />
              </View>
              <View style={styles.companyNameContainer}>
                <Text style={styles.companyName}>RK</Text>
                <Text style={styles.companyNameSecondary}>
                  Insurance Services
                </Text>
                <Text style={styles.tagline}>
                  Securing Your Future, One Policy at a Time
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.divider}/>
          <View style={styles.section}>
          <Text style={styles.subject}>APPOINTMENT LETTER</Text>
            <Text style={styles.subtitle}>{data.date}</Text>
            <Text style={styles.subtitle}>To,  {data.name}</Text>
            <Text style={styles.subtitle}>Address:- {data.address}</Text>
          </View>
          <View style={styles.section}>
           
            <Text style={styles.text}>Dear {data.name},</Text>
            <Text style={styles.text}>
             We are delighted to extend on offer of employment to you for the position of "
              {data.position}" at "RK Insurance Service". We were impressed with your qualifications, and believe that 
              your skills and experience make you an excellent fit for our organization. <br />
              Your employment with "RK Insurance Service" will begin on {data.date}. You will
              report to Manager at RK Insurance Services Mumbai.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.text}>
              Employment Terms
            </Text>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletContent}>
                Position : {data.position}
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletContent}>
                Start Date : {data.date}
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletContent}>
                Salary : {data.netYearlyTakeHome} annually
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletContent}>
                Work Schedule : 9:00 AM to 6:00 PM 
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletContent}>
                Benefits : As per company policy
              </Text>
            </View>
            <View style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletContent}>
                Reporting to : Manager
              </Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.text}>
             We are excited to welcome you to our team and believe that your contributions 
             will be valuable to our organization's success.Terms of performance expectations, you and your team will be required to achieve a target of 10 times your monthly CTC, with a stretch target of 10 times your monthly CTC. Should not be less than 7 Time.
             If target less than 40% you get only basic pay and bailance pay and target curry forward for nest month. If you have any questions or
             need further clarifcation, please do not hesitate to contact us.
             Congratulations once again on your appointment, and we look forward to 
             having you on board.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.text}>
              Sincerely , 
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>
              Candidate's Name:
              ...........................................................................
            </Text>
            <Text style={styles.subtitle}>
              Candidate's Email:
              ...........................................................................
            </Text>
            <Text style={styles.subtitle}>
              Candidate's Signature:
              .......................................................................
            </Text>
            <Text style={styles.subtitle}>
              Date: ................................................
            </Text>
          </View>
          <>
            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
              fixed
            />
            <Text style={styles.referenceAddress} fixed>
              D/ 319, Shanti Shopping Center, Mira Road East - 401107.
            </Text>
          </>
        </Page>
      </Document>
    );
  }
  