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
        return new _User(payload);
      } catch (err) {
        console.error("Invalid ID token:", err);
        return null;
      }
    }
  };

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/HeaderLogin.ts
  var HeaderLogin = class {
    constructor(clientId, domain, loginRedirectPath, logoutRedirectPath) {
      this.clientId = clientId;
      this.domain = domain;
      this.loginRedirectPath = loginRedirectPath;
      this.logoutRedirectPath = logoutRedirectPath;
      __publicField(this, "user", null);
      __publicField(this, "loginRedirectUri", `${window.location.origin}${this.loginRedirectPath}`);
      __publicField(this, "logoutRedirectUri", `${window.location.origin}${this.logoutRedirectPath}`);
      __publicField(this, "loginUrl", "");
      __publicField(this, "logoutUrl", "");
      // --- DOM Elements ---
      __publicField(this, "authMobileBtn", document.getElementById("auth-mobile-btn"));
      __publicField(this, "authBrowserBtn", document.getElementById("auth-browser-btn"));
      __publicField(this, "userPic", document.getElementById("user-pic"));
    }
    // --- Public Getters ---
    get isLoggedIn() {
      return !!this.user;
    }
    get isMember() {
      return !!this.user?.isMember;
    }
    getPublicState() {
      return {
        isLoggedIn: this.isLoggedIn,
        isMember: this.isMember,
        user: this.user?.toPublic() || null
      };
    }
    // --- Local Storage ---
    getTokens() {
      try {
        const stored = localStorage.getItem("cognito_tokens");
        return stored ? JSON.parse(stored) : {};
      } catch (err) {
        console.error("Failed to parse tokens:", err);
        return {};
      }
    }
    prepareLogout() {
      this.clearTokens();
      this.saveCurrentPath();
    }
    saveCurrentPath() {
      sessionStorage.setItem("redirectAfterAuth", encodeURIComponent(window.location.pathname + window.location.search + window.location.hash));
    }
    clearTokens() {
      localStorage.removeItem("cognito_code");
      localStorage.removeItem("cognito_tokens");
    }
    // --- UI ---
    showLoggedIn() {
      console.log("User is logged in:", this.user);
      this.authMobileBtn.text = "Log Out";
      this.authBrowserBtn.text = "Log Out";
      this.authMobileBtn.href = this.logoutUrl;
      this.authBrowserBtn.href = this.logoutUrl;
      if (this.user && this.userPic) {
        this.userPic.src = this.user.picture || "https://www.gravatar.com/avatar/?d=mp";
        if (this.user.isMember) {
          this.userPic.addEventListener("click", () => {
            this.navigateToUserPage();
          });
        }
      }
    }
    navigateToUserPage() {
      window.location.href = `/members/${this.user.firstName.toLowerCase()}-${this.user.surname.toLowerCase()}/`;
    }
    showLoggedOut() {
      console.log("User is logged out:", this.user);
      this.user = null;
      this.authMobileBtn.text = "Log In";
      this.authBrowserBtn.text = "Log In";
      this.authMobileBtn.href = this.loginUrl;
      this.authBrowserBtn.href = this.loginUrl;
      this.userPic.src = "https://www.gravatar.com/avatar/?d=mp";
      this.userPic.removeEventListener("click", () => {
        this.navigateToUserPage();
      });
    }
    // --- Initialize ---
    init() {
      this.bindEvents();
      const tokens = this.getTokens();
      const user = User.fromIdToken(tokens.id_token);
      if (user) {
        this.user = user;
        this.showLoggedIn();
        console.log(user.isMember ? "User is a member" : "User is not a member");
      } else {
        this.showLoggedOut();
      }
    }
    bindEvents() {
      let url = new URL(`https://${this.domain}/login`);
      url.searchParams.set("client_id", this.clientId);
      url.searchParams.set("response_type", "code");
      url.searchParams.set("scope", "email openid profile");
      url.searchParams.set("redirect_uri", this.loginRedirectUri);
      this.loginUrl = url.toString();
      url = new URL(`https://${this.domain}/logout`);
      url.searchParams.set("client_id", this.clientId);
      url.searchParams.set("logout_uri", this.logoutRedirectUri);
      this.logoutUrl = url.toString();
      this.authBrowserBtn?.addEventListener("click", () => {
        this.prepareLogout();
      });
      this.authMobileBtn?.addEventListener("click", () => {
        this.prepareLogout();
      });
    }
  };

  // <stdin>
  var SteinitzAuth = {
    initHeaderLogin(config) {
      const auth = new HeaderLogin(
        config.clientId,
        config.domain,
        config.loginRedirectPath,
        config.logoutRedirectPath
      );
      auth.init();
      return auth.getPublicState();
    }
  };
  window.SteinitzAuth = SteinitzAuth;
})();
