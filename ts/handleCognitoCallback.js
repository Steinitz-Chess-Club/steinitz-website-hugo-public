(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/model/User.ts
  var User = class _User {
    constructor(payload) {
      __publicField(this, "sub");
      __publicField(this, "firstName");
      __publicField(this, "surname");
      __publicField(this, "email");
      __publicField(this, "_picture");
      __publicField(this, "groups");
      this.sub = payload.sub;
      this.firstName = payload["given_name"] || "";
      this.surname = payload["family_name"] || "";
      this.email = payload.email;
      this._picture = payload.picture;
      console.log("Google profile pic URL:", this._picture);
      this.groups = payload["cognito:groups"] || [];
    }
    get picture() {
      return this._picture;
    }
    /** Returns true if user belongs to the 'members' group */
    get isMember() {
      return this.groups.includes("members");
    }
    set picture(value) {
      this._picture = value;
    }
    /** Returns true if user belongs to a given group */
    inGroup(group) {
      return this.groups.includes(group);
    }
    toPublic() {
      return {
        sub: this.sub,
        email: this.email,
        picture: this._picture,
        groups: this.groups,
        isMember: this.isMember
      };
    }
    /** Parses a JWT id_token and returns a User instance */
    static fromIdToken(idToken) {
      if (!idToken) return null;
      try {
        const base64 = idToken.split(".")[1];
        if (!base64) return null;
        const payload = JSON.parse(atob(base64));
        console.log("User payload:", payload);
        const user = new _User(payload);
        return user;
      } catch (err) {
        console.error("Invalid ID token:", err);
        return null;
      }
    }
  };

  // <stdin>
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
      const redirectUri = `${window.location.origin}/callback/index.html`;
      console.log(`redirectUri: ${redirectUri}`);
      const body = new URLSearchParams({
        grant_type: "authorization_code",
        client_id: clientId,
        code,
        redirect_uri: redirectUri
      });
      const response = await fetch(`https://${domain}/oauth2/token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString()
      });
      if (!response.ok) {
        console.error("Failed to fetch tokens:", response.statusText);
        return;
      }
      const tokens2 = await response.json();
      localStorage.setItem("cognito_tokens", JSON.stringify(tokens2));
    }
    const tokens = JSON.parse(localStorage.getItem("cognito_tokens") || "{}");
    const user = User.fromIdToken(tokens.id_token);
    const redirectAfterAuth = sessionStorage.getItem("redirectAfterAuth");
    if (redirectAfterAuth) {
      const decoded = decodeURIComponent(redirectAfterAuth);
      console.log("Redirecting to:", decoded);
      window.location.href = decoded;
    } else {
      console.log("Falling back to home page");
      window.location.href = "/";
    }
  }
  window.handleCognitoCallback = handleCognitoCallback;
})();
