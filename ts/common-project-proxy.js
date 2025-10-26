"use strict";
(() => {
  // ../steinitz-common-source/src/api/SteinitzApi.ts
  var SteinitzApi = class {
    constructor() {
    }
    // Helper: read cookie by name
    getCookie(name) {
      const cookies = document.cookie ? document.cookie.split("; ") : [];
      for (const c of cookies) {
        const [k, ...rest] = c.split("=");
        if (decodeURIComponent(k) === name) {
          return decodeURIComponent(rest.join("="));
        }
      }
      return null;
    }
    async apiFetch(path, options = {}) {
      const baseUrl = "https://api.steinitzchessclub.co.za";
      const url = `${baseUrl}${path}`;
      try {
        const response = await fetch(url, {
          method: "GET",
          credentials: "include",
          // ✅ ensure cookies are sent
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            ...options.headers || {}
          },
          ...options
        });
        if (!response.ok) {
          const text = await response.text();
          console.error(`\u274C API error ${response.status} on ${path}:`, text);
          return null;
        }
        const contentType = response.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          return await response.json();
        }
        return await response.text();
      } catch (err) {
        console.error("\u{1F6A8} API request failed:", path, err);
        return null;
      }
    }
    /**
     * Handle Cognito redirect callback: extracts id_token from hash or query,
     * stores it in a cookie (so apiFetch can pick it up), then cleans the URL.
     *
     * Note: adjust cookie attributes (Secure, SameSite, expires) as you require.
     */
    async handleCognitoCallback() {
      console.log("handleCognitoCallback from common");
      if (await this.fetchAuthenticatedUser()) {
        const redirectAfterAuth = sessionStorage.getItem("redirectAfterAuth");
        sessionStorage.removeItem("redirectAfterAuth");
        if (redirectAfterAuth) {
          const decoded = decodeURIComponent(redirectAfterAuth);
          console.log("Redirecting to:", decoded);
          window.location.href = decoded;
        } else {
          console.log("Falling back to home page");
          window.location.href = "/";
        }
      }
    }
    async fetchAuthenticatedUser() {
      const user = await this.apiFetch("/auth/me");
      if (user) {
        sessionStorage.setItem("user", JSON.stringify(user));
        window.currentUser = user;
      }
      return user;
    }
  };
  var api = new SteinitzApi();

  // <stdin>
  window.handleCognitoCallback = api.handleCognitoCallback.bind(api);
})();
