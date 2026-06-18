import { BetaAnalyticsDataClient } from "@google-analytics/data";
import path from "path";

const analyticsDataClient =
  new BetaAnalyticsDataClient({
    keyFilename: path.join(process.cwd(), "service-account.json"),
  });

export const getAnalyticsDashboard = async (req, res) => {
  try {

    const [response] =
      await analyticsDataClient.runReport({
        property: `properties/${process.env.GA_PROPERTY_ID}`,

        dateRanges: [
          {
            startDate: "30daysAgo",
            endDate: "today",
          },
        ],

        metrics: [
          { name: "activeUsers" },
          { name: "sessions" },
          { name: "screenPageViews" },
        ],
      });

    const row = response.rows?.[0];

    res.status(200).json({
      success: true,
      activeUsers: row?.metricValues?.[0]?.value || 0,
      sessions: row?.metricValues?.[1]?.value || 0,
      pageViews: row?.metricValues?.[2]?.value || 0,
    });

  } catch (error) {

    console.error("GA Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};