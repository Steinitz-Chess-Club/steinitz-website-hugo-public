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
      __publicField(this, "_pictureUrl");
      __publicField(this, "_pictureBase64");
      __publicField(this, "groups");
      this.sub = payload.sub;
      this.firstName = payload["given_name"] || "";
      this.surname = payload["family_name"] || "";
      this.email = payload.email;
      this._pictureUrl = payload.picture;
      this._pictureBase64 = payload.picture_base64;
      this.groups = payload["groups"] || [];
      console.log("User payload:", payload);
      console.log("Groups:", this.groups);
      console.log("Profile pic URL:", this._pictureUrl);
      if (this._pictureBase64) console.log("Profile pic base64 included");
    }
    /** Returns true if user belongs to the 'members' group */
    get isMember() {
      return this.groups.includes("members");
    }
    /** Returns original picture URL */
    get pictureUrl() {
      return this._pictureUrl;
    }
    /** Returns base64-encoded picture (if available) */
    get pictureBase64() {
      return this._pictureBase64;
    }
    set pictureBase64(value) {
      this._pictureBase64 = value;
    }
    /** Returns true if user belongs to a given group */
    inGroup(group) {
      return this.groups.includes(group);
    }
    /** Returns a safe public representation of the user */
    toPublic() {
      return {
        sub: this.sub,
        email: this.email,
        pictureUrl: this._pictureUrl,
        pictureBase64: this._pictureBase64,
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
        return new _User(payload);
      } catch (err) {
        console.error("Invalid ID token:", err);
        return null;
      }
    }
    /** Creates a User instance from stored session object (e.g., sessionStorage) */
    static fromSessionObject(obj) {
      if (!obj) return null;
      return new _User(obj);
    }
  };

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/HeaderLogin.ts
  var HeaderLogin = class {
    constructor(clientId, domain, loginRedirectPath, logoutRedirectPath) {
      this.clientId = clientId;
      this.domain = domain;
      this.loginRedirectPath = loginRedirectPath;
      this.logoutRedirectPath = logoutRedirectPath;
      __publicField(this, "apiBaseUrl", "https://api.steinitzchessclub.co.za");
      __publicField(this, "user", null);
      __publicField(this, "loginRedirectUri", `${this.apiBaseUrl}${this.loginRedirectPath}`);
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
    // --- Session Storage ---
    getUserFromSession() {
      const userJson = sessionStorage.getItem("user");
      return userJson ? User.fromSessionObject(JSON.parse(userJson)) : null;
    }
    prepareLogout() {
      this.clearTokens();
      this.saveCurrentPath();
    }
    saveCurrentPath() {
      sessionStorage.setItem(
        "redirectAfterAuth",
        encodeURIComponent(window.location.pathname + window.location.search + window.location.hash)
      );
    }
    clearTokens() {
      localStorage.removeItem("cognito_code");
      localStorage.removeItem("cognito_tokens");
      sessionStorage.removeItem("user");
      document.cookie = "id_token=; Max-Age=0; Path=/; Domain=.steinitzchessclub.co.za; Secure; SameSite=None";
    }
    // --- UI ---
    showLoggedIn() {
      console.log("User is logged in:", this.user);
      this.authMobileBtn.text = "Log Out";
      this.authBrowserBtn.text = "Log Out";
      this.authMobileBtn.href = this.logoutUrl;
      this.authBrowserBtn.href = this.logoutUrl;
      if (this.user && this.userPic) {
        if (this.user.isMember) {
          const fname = this.user.firstName.toLowerCase();
          const sname = this.user.surname.toLowerCase();
          this.userPic.src = `/images/people/${fname}-${sname}.png`;
          this.userPic.addEventListener("click", () => this.navigateToUserPage());
        } else if (this.user.pictureBase64) {
          this.userPic.src = this.user.pictureBase64.startsWith("data:") ? this.user.pictureBase64 : `data:image/jpeg;base64,${this.user.pictureBase64}`;
        } else if (this.user.pictureUrl) {
          this.userPic.src = this.user.pictureUrl;
        } else {
          this.userPic.src = "https://www.gravatar.com/avatar/?d=mp";
        }
      }
    }
    navigateToUserPage() {
      if (!this.user) return;
      window.location.href = `/members/${this.user.firstName.toLowerCase()}-${this.user.surname.toLowerCase()}/`;
    }
    showLoggedOut() {
      console.log("User is logged out:", this.user);
      this.user = null;
      if (!this.authMobileBtn || !this.authBrowserBtn || !this.userPic) return;
      this.authMobileBtn.text = "Log In";
      this.authBrowserBtn.text = "Log In";
      this.authMobileBtn.href = this.loginUrl;
      this.authBrowserBtn.href = this.loginUrl;
      this.userPic.src = "https://www.gravatar.com/avatar/?d=mp";
      this.userPic.replaceWith(this.userPic.cloneNode(true));
    }
    // --- Initialize ---
    init() {
      this.bindEvents();
      const user = this.getUserFromSession();
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
