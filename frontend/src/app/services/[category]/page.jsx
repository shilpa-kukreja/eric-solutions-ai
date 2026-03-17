import { AnimatedContent } from '../../components/AnimatedContent';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// this is for the banners 
const categoryBanners = {
    "clinical-operation-project-management": "/hospitality.png",
    "data-management": "/hospitality.png",
    "clinical-data-standards": "/hospitality.png",
    biostatistics: "/hospitality.png",
    "medical-writing": "/hospitality.png",
    "etmf-services": "/hospitality.png",
    "pharmacovigilance": "/hospitality.png",
};


const servicesData = {
    "clinical-operation-project-management": {
        title: "Clinical Operation & Project Management",
        subtitle: "Clinical Operation & Project Management.",
        description:"Our core strength lies in project management, supported by comprehensive and consistent processes that meet global regulatory standards. At Eric Solutions, we combine services and systems to deliver tailored solutions with faster timelines and cost-effective results, ensuring exceptional value for our clients.",
        services: [
            {
                title: "Expert Project Management for Clinical Development Programs",
                desc: "We specialize in the seamless management of clinical development programs, ensuring precision, compliance, and efficiency at every stage. Our expertise drives successful outcomes while adhering to global standards and timelines.",
            },
            {
                title: "Quality Clinical Monitoring: On-Site, Remote, and Centralized",
                desc: "Eric Solutions delivers exceptional clinical monitoring solutions, offering flexibility through on-site, remote, and centralized approaches. As part of our commitment to innovation, we provide a cutting-edge remote monitoring platform designed to support decentralized clinical trials, ensuring efficiency, compliance, and seamless data management.",
            },
            {
                title: "Optimized Resourcing for Maximum Efficiency",
                desc: "We specialize in delivering optimized resourcing strategies tailored to your needs, ensuring the right talent and tools are in place to drive efficiency, reduce costs, and achieve exceptional results.",
            },
              {
                title: "Smart Study Start-Up: Streamlined Site Onboarding and Regulatory Approvals",
                desc: "Our smart study start-up approach ensures optimized site onboarding and accelerated regulatory approvals, reducing delays and enhancing efficiency. By leveraging proven strategies and innovative tools, we help you kick off clinical trials faster and with greater confidence.",
            },
            {
                title: "Site and Patient Solutions: Enhancing Recruitment and Engagement",
                desc: "Eric Solutions specializes in innovative site and patient solutions, focusing on effective recruitment and meaningful patient engagement. Through strategic partnerships with leading site networks, we ensure seamless trial execution and improved patient participation, driving successful clinical outcomes.",
            },
        ],
    },
    "data-management": {
        title: "Data Management Services",
        subtitle: "ERIC Data Management: Comprehensive Clinical Data Management",
        description:"At ERIC, our Clinical Data Management (CDM) team oversees every stage of the clinical trial process, from Case Report Form (CRF) design and Electronic Data Capture (EDC) development to database lock. With extensive experience across various therapeutic areas, we utilize EDC and paper-based systems while adhering to strict quality standards. ",
        services: [
            {
                title: "CRF Design at ERIC",
                desc: "At ERIC, we specialize in Case Report Form (CRF) design, ensuring seamless data collection, accuracy, and regulatory compliance in clinical trials. Our team develops customized CRFs tailored to study protocols, optimizing Electronic Data Capture (EDC) systems and paper-based workflows for efficient data management.",
            },
            {
                title: "Database Design (eCRF & Paper) at ERIC",
                desc: "Our team develops customized, protocol-driven databases optimized for Electronic Data Capture (EDC) systems and traditional paper-based workflows. With a focus on data integrity, validation, and regulatory adherence, we create structured, audit-ready databases that streamline clinical trial management and improve efficiency.",
            },
            {
                title: "Data Management & SAS Programming at ERIC",
                desc: "At ERIC, our Data Management (DM) and SAS Programming team ensures accurate, efficient, and regulatory-compliant clinical trial data processing. We specialize in data cleaning, validation, transformation, and statistical programming, enabling seamless CDISC SDTM & ADaM compliance.",
            },
            {
                title: "Blinded Data Entry at ERIC",
                desc: "At ERIC, we ensure accurate and unbiased blinded data entry for clinical trials, maintaining data integrity and regulatory compliance. Our trained professionals handle electronic (eCRF) and paper-based data entry with strict quality control measures, minimizing errors and ensuring data confidentiality.",
            },
             {
                title: "Data Validation at ERIC",
                desc: "At ERIC, we ensure clinical trial data accuracy, consistency, and compliance through a rigorous data validation process. Our experts implement automated and manual validation checks to identify discrepancies, ensuring high-quality, regulatory-compliant datasets.",
            },
            {
                title: "Clinical Data Coding",
                desc: "At ERIC, we ensure standardized and compliant clinical data coding for accurate medical terminology classification in clinical trials. Our experts use industry-standard dictionaries such as MedDRA and WHODrug to code adverse events (AEs), concomitant medications, and medical history, ensuring regulatory compliance and data consistency.",
            },
            {
                title: "External Data Handling at ERIC",
                desc: "External Data Handling at ERIC. At ERIC, we specialize in external data handling, seamlessly integrating data from central labs, biomarkers, imaging, and other third-party vendors into clinical trial databases. Our team ensures data consistency, accuracy, and regulatory compliance through rigorous data reconciliation, validation, and standardization processes.",
            },
            {
                title: "SAE Reconciliation at ERIC",
                desc: "At ERIC, we ensure accurate and compliant Serious Adverse Event (SAE) reconciliation, aligning clinical and safety databases to maintain data integrity in clinical trials. Our experts systematically compare SAE data from clinical trial records and pharmacovigilance databases, identifying and resolving discrepancies to meet regulatory requirements.",
            },
             {
                title: "Medical Review at ERIC",
                desc: "At ERIC, our Medical Review process ensures the accuracy, consistency, and clinical relevance of trial data. Our medical experts conduct comprehensive data assessments, identifying discrepancies, protocol deviations, and safety concerns to maintain regulatory compliance and data integrity.",
            },
             {
                title: "Protocol Validation at ERIC",
                desc: "At ERIC, we ensure rigorous protocol validation to confirm that clinical trials adhere to regulatory guidelines, study objectives, and data integrity standards. Our experts conduct comprehensive protocol reviews, verifying consistency across Case Report Forms (CRFs), Electronic Data Capture (EDC) systems, and statistical analysis plans.",
            },
             {
                title: "Database Closure at ERIC",
                desc: "At ERIC, we ensure a seamless and compliant database closure process, marking the final stage of clinical data management. Our team conducts comprehensive data validation, discrepancy resolution, and quality checks to confirm data accuracy and integrity before locking the database.",
            },
             {
                title: "Data Mapping (CDISC) at ERIC",
                desc: "At ERIC, we specialize in CDISC-compliant data mapping, ensuring seamless conversion of clinical trial data into SDTM (Study Data Tabulation Model) and ADaM (Analysis Data Model) formats. Our experts align raw data with CDISC standards, enhancing data consistency, traceability, and regulatory compliance for streamlined submissions to the FDA, EMA, and other regulatory bodies.",
            },
        ],
    },
    "clinical-data-standards": {
        title: "Clinical Data Standards",
        subtitle: "The Importance of CDISC Standards in Regulatory Submissions",
        description:"In 2013, the FDA emphasized the critical role of standardized study data, highlighting its ability to enhance reviewers' understanding of a medical product's efficacy and safety. By 2014, the FDA finalized binding guidance, mandating the submission of electronic data in a standardized format for efficient processing, review, and archiving.",
        services: [
            {
                title: "Comprehensive Data Standards Library",
                desc: "Our Data Standards Library provides a centralized repository of standardized data definitions, formats, and guidelines, ensuring consistency, compliance, and efficiency across clinical trials. This resource supports seamless data integration, regulatory submissions, and streamlined study processes.",
            },
            {
                title: "Seamless Data Migration Projects to CDISC Standards",
                desc: "We specialize in efficient data migration projects, transforming legacy data into CDISC-compliant formats. Our expertise ensures accurate, standardized, and regulatory-ready data, supporting seamless submissions and enhancing the overall quality of your clinical",
            },
            {
                title: "Precise Standard Mapping for Data Consistency",
                desc: "We provide expert standard mapping services to align your clinical trial data with CDISC and other regulatory requirements. Our meticulous approach ensures data consistency, compliance, and seamless integration, supporting accurate analysis and successful submissions.",
            },
             {
                title: "Expert Programming Services for Clinical Trials",
                desc: "We deliver high-quality programming services tailored to your clinical trial needs, including data analysis, reporting, and CDISC-compliant submissions. Our skilled team ensures accuracy, efficiency, and regulatory compliance, supporting the success of your studies.",
            },
        ],
    },
    biostatistics: {
        title: "Biostatistics",
        subtitle: "Comprehensive Data Analysis Across Clinical Development Stages",
        description:"ERIC excels in analyzing data from all phases of clinical development, leveraging diverse designs and statistical hypotheses. Our expertise includes interim analyses, adaptive and sequential designs, and sample size adjustments to ensure robust and flexible trial outcomes. ",
        services: [
            {
                title: "Precise Sample Size Calculation",
                desc: "We provide accurate and scientifically validated sample size calculations tailored to your study design. Our expertise ensures optimal participant numbers, balancing statistical power, resource efficiency, and reliable trial outcomes.",
            },
            {
                title: "Expert Statistical Input in Protocol Development",
                desc: "We offer specialized statistical input during protocol design, ensuring robust methodologies, clear endpoints, and optimal trial structures. Our contributions enhance the scientific rigor and feasibility of your study, setting the foundation for successful clinical outcomes.",
            },
            {
                title: "Comprehensive Statistical Analysis Plans",
                desc: "We develop detailed and tailored Statistical Analysis Plans (SAPs) that outline precise methodologies, endpoints, and analytical approaches for your clinical trials. Our plans ensure clarity, consistency, and regulatory compliance, supporting robust data interpretation and reliable study outcomes.",
            },
              {
                title: "Expert Interim Analysis for Informed Decision-Making",
                desc: "We conduct thorough interim analyses to evaluate ongoing clinical trial data, providing critical insights for informed decision-making. Our approach ensures timely adjustments, enhances trial efficiency, and maintains the integrity of your study while safeguarding patient safety.",
            },
              {
                title: "Clear and Comprehensive Tables, Listings, and Figures (TLFs)",
                desc: "We deliver meticulously crafted tables, listings, and figures (TLFs) that present clinical trial data with clarity and precision. Our TLFs enhance data interpretation, support regulatory submissions, and provide actionable insights for informed decision-making.",
            },
              {
                title: "Comprehensive Statistical Reports & CDISC-Compliant Data Submissions for USFDA",
                desc: "We provide detailed statistical reports and ensure seamless CDISC-compliant data submissions tailored to meet USFDA requirements. Our expertise guarantees accuracy, regulatory compliance, and timely submissions, supporting successful clinical trial outcomes and approvals.",
            },
        ],
    },
     "medical-writing": {
        title: "Medical Writing",
        subtitle: "ERIC's Medical Writing Services",
        description:"At ERIC, our medical writers collaborate with medical teams and statisticians to create accurate, regulatory-compliant clinical study reports (CSRs) while adhering to strict timelines. We follow ICH E3 guidelines or sponsor-specific formats to ensure clarity and compliance. We also support eCTD submissions and provide abstract, poster, and manuscript preparation, helping sponsors effectively present their study findings.",
        services: [
            {
                title: "Protocol Writing",
                desc: "Our experts develop clear, compliant, and well-structured clinical trial protocols, ensuring alignment with regulatory guidelines and study objectives. We create detailed documents covering study design, endpoints, eligibility criteria, and data collection methods, optimizing trial efficiency and compliance.",
            },
            {
                title: "Manuscript Writing",
                desc: "We specialize in crafting high-quality, publication-ready manuscripts that effectively communicate clinical trial findings. Our expert medical writers ensure clarity, accuracy, and compliance with journal guidelines, enhancing the impact of research.",
            },
            {
                title: "Clinical Study Reports",
                desc: "Our expert medical writers collaborate with medical teams and statisticians to develop comprehensive, accurate, and regulatory-compliant Clinical Study Reports (CSRs). We ensure clarity, adherence to ICH E3 guidelines, and alignment with sponsor-specific requirements.",
            },
              {
                title: "Publications",
                desc: "We provide end-to-end publication support, ensuring clinical research findings are effectively communicated in peer-reviewed journals, conference proceedings, and scientific forums. Our expert medical writers craft clear, accurate, and impactful manuscripts, abstracts, and posters while adhering to journal and regulatory guidelines.",
            },
        ],
    },
     "etmf-services": {
        title: "eTMF Service",
        subtitle: "ERIC's eTMF Service",
        description:"Managing vast amounts of clinical trial documentation across multiple sites can be overwhelming, especially with semi-structured and unstructured data in varied formats. Multiple authors and versions make it challenging to maintain audit and inspection readiness, increasing compliance risks.",
        services: [
            {
                title: "Ensuring Audit Readiness",
                desc: "At ERIC, we help sponsors maintain audit and inspection readiness by ensuring accurate, compliant, and well-organized clinical documentation. Our solutions provide real-time data tracking, version control, and automated workflows, minimizing compliance risks.",
            },
            {
                title: "Efficient Indexing and Workflow",
                desc: "We optimize clinical document management with efficient indexing and automated workflows, ensuring quick access, organization, and retrieval of critical trial data. Our structured approach enhances compliance, version control, and audit readiness while reducing manual effort.",
            },
            {
                title: "Powerful Analytics for Actionable Insights",
                desc: "We leverage advanced analytics to transform clinical trial data into powerful, actionable insights. Our solutions provide real-time monitoring, trend analysis, and predictive modeling, helping sponsors make data-driven decisions that enhance trial efficiency and compliance.",
            },
              {
                title: "Smart Study Start-Up",
                desc: "We streamline site onboarding and regulatory approvals with an optimized Smart Study Start-Up approach. Our solutions automate workflows, accelerate document processing, and ensure compliance, reducing delays in trial initiation.",
            },
            {
                title: "Seamless System Integration",
                desc: "We ensure the smooth integration of Clinical Data Management Systems (CDMS), Clinical Trial Management Systems (CTMS), and other critical platforms, enabling a unified and efficient clinical trial process. Our solutions facilitate real-time data exchange, interoperability, and automated workflows, eliminating data silos and enhancing operational efficiency.",
            },
        ],
    },
     "pharmacovigilance": {
        title: "Pharmacovigilance",
        subtitle: "ERIC Pharmacovigilance: Meeting Your Pharmacovigilance and Drug Safety Needs.",
        description:"ERIC delivers tailored solutions to address your evolving pharmacovigilance and drug safety challenges. Through well-defined processes and seamless integration of data from diverse sources, we ensure robust safety monitoring.",
        services: [
            {
                title: "Efficient Case Processing and Reporting",
                desc: "We specialize in streamlined case processing and accurate reporting, ensuring timely and precise handling of safety data. Our robust systems and expert oversight enhance compliance, improve efficiency, and support proactive risk management in pharmacovigilance.",
            },
            {
                title: "Comprehensive Serious Adverse Event (SAE) Management",
                desc: "We provide end-to-end Serious Adverse Event (SAE) management, ensuring timely detection, accurate reporting, and effective resolution. Our systematic approach enhances patient safety, maintains regulatory compliance, and supports robust risk management throughout the clinical trial process.",
            },
            {
                title: "Proactive Signal Management",
                desc: "We offer advanced signal management solutions designed to detect, assess, and mitigate potential safety signals early. Our systematic approach ensures timely identification of risks, supports data-driven decision-making, and maintains compliance with regulatory requirements, safeguarding patient safety throughout the product lifecycle.",
            },
              {
                title: "Expert Contributions to Safety Sections of Clinical Study Reports",
                desc: "We provide specialized expertise in developing and reviewing safety sections for clinical study reports. Our meticulous approach ensures accurate, comprehensive, and regulatory-compliant documentation, highlighting critical safety data and supporting informed decision-making for your clinical trials.",
            },
            {
                title: "Streamlined Preparation and Submission of Drug Safety Update Reports (DSURs)",
                desc: "We specialize in the efficient preparation and timely submission of Drug Safety Update Reports (DSURs), ensuring compliance with regulatory requirements. Our expert team delivers accurate, comprehensive, and well-organized reports, providing a clear overview of safety data and supporting ongoing risk-benefit assessments.",
            },
            {
                title: "Strategic Risk Management Planning and Implementation",
                desc: "We offer end-to-end risk management solutions, from meticulous planning to seamless implementation. Our proactive approach identifies, assesses, and mitigates potential risks, ensuring patient safety, regulatory compliance, and the successful execution of your clinical trials.",
            },
        ],
    },

};

export default async function ServicesPage({ params}) {

    const { category } =await  params;
    const current = servicesData[category] ?? servicesData["real-estate"];
    const banner = categoryBanners[category] || categoryBanners["real-estate"];


     return (
     <div className="bg-white text-[#111]">

      <Navbar />
      <AnimatedContent
      category={category}
      current={current}
      banner={banner}
      />
      <Footer />

    </div>
  )

}