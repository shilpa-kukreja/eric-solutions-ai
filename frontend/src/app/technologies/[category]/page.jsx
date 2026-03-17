import {TechnologyAnimatedContent} from "../../components/TechnologyAnimatedContent";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// this is for the banners 
const categoryBanners = {
    "clinical-trial-management-software": "/commercial.jpeg",
    "electronic-data-transfer": "/commercial.jpeg",
};


const technologiesData = {
   
    "clinical-trial-management-software": {
        title: "Eric Clinical Trial Management Software(CTMS)",
        subtitle: "Scalable and Cost Effective Clinical Study Solutions",
        description:"ERIC CTMS is designed to provide the benefits of a Clinical Trial Management System (CTMS) without the substantial upfront financial and resource commitments typical of traditional enterprise systems or the inefficiencies inherent in spreadsheet trackers.ERIC CTMS offers drug developers a scalable and cost-effective solution to enhance management, performance, and reduce study startup costs in clinical trials.",
        services: [
            {
                title: "Portfolio Management",
                desc: "Provides consolidated views across studies with data import support for investigators, sites, and contacts. Offers calendar visibility for events scheduled within each study and by team members. Dashboards display portfolio and summary data points, with visualizations by study, region, country, and monitor, including download capabilities. Defines critical information at the study level, including subject visit schedules, CRA monitoring frequency, study milestones, protocol violations, and study documents. The outsourcing tab offers a straightforward yet comprehensive overview of study components, identifying external vendors by task, country, and primary point of contact. Milestone management allows complete customization of key dates for study progress and events.",
            },
            {
                title: "Countries Planning and Management",
                desc: "Manage key milestones and target site/enrollment metrics for each study country compared with overall study milestones. Enrollment planning by country for target screening and enrollment as well as counts for actuals compared with subject screening and enrollment data. Planning of screening and enrollment targets by month and establish targets for subjects to complete treatment. Data views allow quick comparison of target versus actuals and visualizations of differences with study planning metrics. Insight into country level planning and actuals vs study level expectations",
            },
            {
                title: "Site and Investigator Management",
                desc: "Site contact management including primary, alternate and site-specific details. Oversight of site selection and participation status across sites. Detailed enrollment planning and sub-study participation. Tracking of key milestones for study startup from CDA through enrollment. Study document tracking and file uploading for site essential documents. Detailed startup tracking for EC submissions, communications and site documents. Contract and budget management including invoice generation, partial payments and histories.",
            },
             {
                title: "Subject Management",
                desc: "Manage key milestones and target site/enrollment metrics for each study country compared with overall study milestones. Enrollment planning by country for target screening and enrollment as well as counts for actuals compared with subject screening and enrollment data. Planning of screening and enrollment targets by month and establish targets for subjects to complete treatment Data views allow quick comparison of target versus actuals and visualizations of differences with study planning metrics. Insight into country level planning and actuals vs study level expectations",
            },
             {
                title: "Study Team Management",
                desc: "Team roster with CRA-site assignments, start/stop dates on project, roles and titles. Ability for authorized users to trigger team member account invitations. Supports global team member collaboration with built in study view settings and country and site assignments appropriate to given person/team. Action item tracking by functional area with assignment to team members and ability to export. Study document development tracking area for monitoring plans, AE plans, etc. Training status by team member for defined study and team procedures.",
            },
             {
                title: "CRA Workspace",
                desc: "Fully integrated site visit calendar for CRA visit planning and insight into visit report authoring progress. eVisit Report (EVR) authoring and approval features directly in the system. Supports site visit report tracking for EVRs and external reports with related visit letter and document upload features. Cumulative action item views and tracking supports content from EVRs as well as items directly added via the tab. Integrated alerts for action items and electronic visit reports. Integrated TMF repository for approved EVRs and attachments. Tools for CRA visits including interactive site map and shared repositories.",
            },
             {
                title: "Regulatory Affairs and Safety",
                desc: "Define and plan submission timelines by country for up to 3 regulatory agencies and submission content. Track expected regulatory agency approvals by country per defined submission timelines and submission actuals. Define essential document package details by document including country-specific items and desired document numbering and folder structures. View uploaded site essential document files in organized file folder structures per definitions. File upload and tracking support for IND Safety reports, agency submission tracking and repositories for standard forms and progress reports.",
            },
             {
                title: "Additional Details",
                desc: "Repositories: Limited access repositories throughout functional areas for files uploaded and content created within the application. Reports and Dashboards: SimpleCTMS supports a flexible reporting interface and dashboards to provide data summaries, charts and visualizations, and checklists. Ad hoc reports supported. Study Document bundle: Download all study level documents as a zip file with established folder structure. Data Export: Data exports allow download or email delivery of tracking views in common formats.",
            },
        ],
    },
     "electronic-data-transfer": {
        title: "Eric Electronic Data Capture(EDC)",
        subtitle: "Capture and Re-use Research Data from anywhere and anytime",
        description:"ERIC’s Electronic Data Capture (EDC) simplifies the process of capturing your trial data and integrating it seamlessly with other data in your clinical trial ecosystem. ERIC EDC offers one of the shortest build times, with more than 90% of our studies deployed within the first three weeks. Explore ERIC EDC, our most robust module, to see how it can help you capture and manage all your study data in one centralized hub. ",
        services: [
            {
                title: "Build Advance eCRF quickly",
                desc: "Begin with one of our pre-built eCRF templates. Customize your form with 21 different field types. Clone and reuse forms as you develop additional studies",
            },
            {
                title: "Store Data Securely",
                desc: "Store study data in real-time. Store it automatically on certified, compliant servers in any country. Safeguard your data with 25-year retention, field-level encryption, and two-factor authentication.",
            },
            {
                title: "Amend Studies With Less Risk",
                desc: "Simplify protocol amendments with a tool that’s secure, trackable, and easy to validate. Easily create test environments for your subsequent studies.",
            },
             {
                title: "Acheive Global Compliance Easily",
                desc: "Comply with global standards such as FDA CFR Part 11, GDPR (EU), ICH GCP, HIPAA (US), ISO 27001, and ISO 9001. Align with GCP, HL7 FHIR, and other regulatory guidelines. Adhere to GCP, HL7 FHIR, and other regulatory guidelines.",
            },
           
          
           
        
        ],
    },
   
};



export default async function TechnologyPage({ params}) {

    const { category } =await  params;
    const current = technologiesData[category] ?? technologiesData["clinical-trial-management-software"];
    const banner = categoryBanners[category] || categoryBanners["clinical-trial-management-software"];


     return (
     <div className="bg-white text-[#111]">

      <Navbar />
      <TechnologyAnimatedContent
      category={category}
      current={current}
      banner={banner}
      />
      <Footer />

    </div>
  )

}