(() => {
  // <stdin>
  function parseJwt(token) {
    if (!token || typeof token !== "string") return null;
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  }
  async function handleCognitoCallback(clientId, domain) {
    console.log("handleCognitoCallback");
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (!code) return;
    const existingCode = localStorage.getItem("cognito_code");
    if (existingCode && existingCode === code) {
      console.log("Code has already been used for authentication, ignoring");
    } else {
      localStorage.setItem("cognito_code", code);
      const redirectUri = window.location.origin + "/callback/index.html";
      console.log(`redirectUri: ${redirectUri}`);
      const body = new URLSearchParams();
      body.append("grant_type", "authorization_code");
      body.append("client_id", clientId);
      body.append("code", code);
      body.append("redirect_uri", redirectUri);
      if (body) {
        const response = await fetch(`https://${domain}/oauth2/token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: body.toString()
        });
        const tokens2 = await response.json();
        localStorage.setItem("cognito_tokens", JSON.stringify(tokens2));
      }
    }
    const tokens = JSON.parse(localStorage.getItem("cognito_tokens") || "{}");
    if (tokens.id_token) {
      const user = parseJwt(tokens.id_token);
      console.log("Logged in user:", user.email);
      const groups = user["cognito:groups"] || [];
      if (groups.includes("members")) {
        console.log("User is a member");
        window.location.href = "/members/";
      } else {
        console.log("User is not a member");
        window.location.href = "/";
      }
    } else {
      console.log("No id_token to parse");
      window.location.href = "/";
    }
  }
  window.handleCognitoCallback = handleCognitoCallback;
})();
