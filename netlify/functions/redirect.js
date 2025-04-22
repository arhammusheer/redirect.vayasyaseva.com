exports.handler = async (event) => {
    const allowedDomains = {
      "books.vayasyaseva.com": "https://books.zoho.in/app/60038782923",
      "portal.vayasyaseva.com": "https://books.zohosecure.in/portal/vayasyaseva",
      // Add more here as needed
    };
  
    const host = (event.headers.host || "").toLowerCase();
  
    const target = allowedDomains[host];
  
    if (target) {
      return {
        statusCode: 302,
        headers: {
          Location: target,
        },
      };
    }
  
    return {
      statusCode: 404,
      body: `No redirect defined for domain: ${host}`,
    };
  };
  