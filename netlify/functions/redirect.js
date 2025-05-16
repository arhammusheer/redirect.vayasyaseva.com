exports.handler = async (event) => {
  const allowedDomains = {
    "books.vayasyaseva.com": "https://books.zoho.in/app/60038782923",
    "portal.vayasyaseva.com": "https://books.zohosecure.in/portal/vayasyaseva",
    "mail.vayasyaseva.com": "https://mail.zoho.in/zm",
    // Add more as needed
  };

  const host = (event.headers.host || "").toLowerCase();

  if (allowedDomains[host]) {
    return {
      statusCode: 302,
      headers: {
        Location: allowedDomains[host],
      },
    };
  }

  // Catch-all for *.vayasyaseva.com → https://vayasyaseva.com
  if (host.endsWith(".vayasyaseva.com")) {
    return {
      statusCode: 302,
      headers: {
        Location: "https://vayasyaseva.com",
      },
    };
  }

  return {
    statusCode: 404,
    body: `No redirect defined for domain: ${host}`,
  };
};
