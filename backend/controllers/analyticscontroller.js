// import { BetaAnalyticsDataClient } from "@google-analytics/data";
// import path from "path";

// const analyticsDataClient =
//   new BetaAnalyticsDataClient({
//     keyFilename: path.join(process.cwd(), "service-account.json"),
//   });

// export const getAnalyticsDashboard = async (req, res) => {
//   try {

//     const [response] =
//       await analyticsDataClient.runReport({
//         property: `properties/${process.env.GA_PROPERTY_ID}`,

//         dateRanges: [
//           {
//             startDate: "30daysAgo",
//             endDate: "today",
//           },
//         ],

//         metrics: [
//           { name: "activeUsers" },
//           { name: "sessions" },
//           { name: "screenPageViews" },
//         ],
//       });

//       console.log(JSON.stringify(response, null, 2));

      

//     const row = response.rows?.[0];

//     res.status(200).json({
//       success: true,
//       activeUsers: row?.metricValues?.[0]?.value || 0,
//       sessions: row?.metricValues?.[1]?.value || 0,
//       pageViews: row?.metricValues?.[2]?.value || 0,
//     });

//   } catch (error) {

//     console.error("GA Error:", error);

//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });

//   }
// };



import { BetaAnalyticsDataClient } from "@google-analytics/data";
import path from "path";

const credentials = JSON.parse(
  process.env.GOOGLE_SERVICE_ACCOUNT_JSON
);

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials,
});

export const getAnalyticsDashboard = async (req, res) => {
  try {
    // const analyticsDataClient = new BetaAnalyticsDataClient({
    //   keyFilename: path.join(process.cwd(), "service-account.json"),
    // });

    // (Optional) Log all available metrics – kept for reference
    const [metadata] = await analyticsDataClient.getMetadata({
      name: `properties/${process.env.GA_PROPERTY_ID}/metadata`,
    });
    console.log("All metric names:", metadata.metrics.map(m => m.apiName));

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA_PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: "30daysAgo",
          endDate: "today",
        },
      ],
      metrics: [
        { name: "activeUsers" },
        { name: "newUsers" },
        { name: "totalUsers" },
        { name: "sessions" },
        { name: "engagedSessions" },
        { name: "averageSessionDuration" },
        { name: "bounceRate" },
        { name: "screenPageViews" },
        { name: "eventCount" },
        { name: "keyEvents" },
      ],
    });

    // Log full response for debugging (optional)
    console.log("=== Full GA Response ===");
    console.log(JSON.stringify(response, null, 2));

    const row = response.rows?.[0];
    const values = row?.metricValues || [];

    // Extract each metric in order
    const activeUsers = Number(values[0]?.value) || 0;
    const newUsers = Number(values[1]?.value) || 0;
    const totalUsers = Number(values[2]?.value) || 0;
    const sessions = Number(values[3]?.value) || 0;
    const engagedSessions = Number(values[4]?.value) || 0;
    const averageSessionDuration = Number(values[5]?.value) || 0; // seconds
    const bounceRate = Number(values[6]?.value) || 0; // percentage
    const screenPageViews = Number(values[7]?.value) || 0;
    const eventCount = Number(values[8]?.value) || 0;
    const keyEvents = Number(values[9]?.value) || 0; // conversions

    res.status(200).json({
      success: true,
      data: {
        activeUsers,
        newUsers,
        totalUsers,
        sessions,
        engagedSessions,
        averageSessionDuration, // in seconds – format on frontend
        bounceRate,             // e.g., 45.23 → frontend shows "45.23%"
        pageViews: screenPageViews,
        eventCount,
        conversions: keyEvents,
      },
    });
  } catch (error) {
    console.error("GA Error:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// controllers/analyticsController.js

export const getAnalyticsByCountry = async (req, res) => {
  try {
    // const analyticsDataClient = new BetaAnalyticsDataClient({
    //   keyFilename: path.join(process.cwd(), "service-account.json"),
    // });

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA_PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: "30daysAgo",
          endDate: "today",
        },
      ],
      // ***** DIMENSION(s) – what to break down by *****
      dimensions: [
        { name: "country" },
        // Optional: add region, city, etc.
        // { name: "region" },
        // { name: "city" },
      ],
      metrics: [
        { name: "activeUsers" },
        { name: "newUsers" },
        { name: "totalUsers" },
        { name: "sessions" },
        // Add any other metrics you need
      ],
      // Optionally limit to top N countries
      limit: 20,
      // Optional: sort by activeUsers descending
      orderBys: [
        {
          metric: { metricName: "activeUsers" },
          desc: true,
        },
      ],
    });

    // Transform rows into a clean array
    const countries = (response.rows || []).map(row => {
      const country = row.dimensionValues?.[0]?.value || "(unknown)";
      const activeUsers = Number(row.metricValues?.[0]?.value) || 0;
      const newUsers = Number(row.metricValues?.[1]?.value) || 0;
      const totalUsers = Number(row.metricValues?.[2]?.value) || 0;
      const sessions = Number(row.metricValues?.[3]?.value) || 0;

      return {
        country,
        activeUsers,
        newUsers,
        totalUsers,
        sessions,
      };
    });

    res.status(200).json({
      success: true,
      data: countries,
    });
  } catch (error) {
    console.error("GA Location Error:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};








// controllers/analyticsController.js

export const getRealtimeActiveUsers = async (req, res) => {
  try {
    // const analyticsDataClient = new BetaAnalyticsDataClient({
    //   keyFilename: path.join(process.cwd(), "service-account.json"),
    // });

    // --- 1. Real‑time report for last 30 minutes ---
    const [response30] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${process.env.GA_PROPERTY_ID}`,
      minutesAgo: 30,                // include data from the last 30 minutes
      metrics: [{ name: "activeUsers" }],
      // Optionally add dimensions if you need breakdowns (e.g., country)
      // dimensions: [{ name: "country" }],
    });

    const activeUsers30 = Number(response30.rows?.[0]?.metricValues?.[0]?.value) || 0;

    // --- 2. Real‑time report for last 5 minutes ---
    const [response5] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${process.env.GA_PROPERTY_ID}`,
      minutesAgo: 5,
      metrics: [{ name: "activeUsers" }],
    });

    const activeUsers5 = Number(response5.rows?.[0]?.metricValues?.[0]?.value) || 0;

    res.status(200).json({
      success: true,
      data: {
        activeUsersLast30Minutes: activeUsers30,
        activeUsersLast5Minutes: activeUsers5,
      },
    });
  } catch (error) {
    console.error("GA Real‑time Error:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};