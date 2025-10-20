"use strict";
(() => {
  // ../steinitz-common-source/src/api/handleCognitoCallback.ts
  async function handleCognitoCallback() {
    console.log("handleCognitoCallback!!");
    try {
      const response = await fetch("https://api.steinitzchessclub.co.za/auth/me", {
        method: "GET",
        credentials: "include",
        // <== crucial for sending cookies
        headers: {
          "Accept": "application/json"
        }
      });
      if (!response.ok) {
        console.error("auth/me failed:", response.status, await response.text());
      } else {
        const user = await response.json();
        console.log("Authenticated user:", user);
        sessionStorage.setItem("user", JSON.stringify(user));
        window.currentUser = user;
      }
    } catch (err) {
      console.error("Error during /auth/me call:", err);
    }
    const redirectAfterAuth = sessionStorage.getItem("redirectAfterAuth");
    sessionStorage.removeItem("redirectAfterAuth");
    if (redirectAfterAuth) {
      const decoded = decodeURIComponent(redirectAfterAuth);
      console.log("Redirecting to:", decoded);
    } else {
      console.log("Falling back to home page");
    }
  }
  window.handleCognitoCallback = handleCognitoCallback;

  // <stdin>
  window.handleCognitoCallback = handleCognitoCallback;
})();
