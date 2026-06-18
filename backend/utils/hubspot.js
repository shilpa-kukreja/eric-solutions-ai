import axios from "axios";

export const createHubspotContact = async ({
  name,
  email,
  phone = "",
}) => {
  try {
    await axios.post(
      "https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert",
      {
        inputs: [
          {
            idProperty: "email",
            id: email,
            properties: {
              firstname: name || "",
              email,
              phone,
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
console.log("HubSpot function called");
    return true;
  } catch (error) {
    console.error(
      error.response?.data || error.message
    );
    return false;
  }
};