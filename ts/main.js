(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // node_modules/@bity/oauth2-auth-code-pkce/index.js
  var require_oauth2_auth_code_pkce = __commonJS({
    "node_modules/@bity/oauth2-auth-code-pkce/index.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || /* @__PURE__ */ (function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      })();
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step2(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step2(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step2(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step2((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = exports && exports.__generator || function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step2([n, v]);
          };
        }
        function step2(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2]) _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
          if (op[0] & 5) throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      var __spreadArrays = exports && exports.__spreadArrays || function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var ErrorOAuth2 = (
        /** @class */
        (function() {
          function ErrorOAuth22() {
          }
          ErrorOAuth22.prototype.toString = function() {
            return "ErrorOAuth2";
          };
          return ErrorOAuth22;
        })()
      );
      exports.ErrorOAuth2 = ErrorOAuth2;
      var ErrorUnknown = (
        /** @class */
        (function(_super) {
          __extends(ErrorUnknown2, _super);
          function ErrorUnknown2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          ErrorUnknown2.prototype.toString = function() {
            return "ErrorUnknown";
          };
          return ErrorUnknown2;
        })(ErrorOAuth2)
      );
      exports.ErrorUnknown = ErrorUnknown;
      var ErrorNoAuthCode = (
        /** @class */
        (function(_super) {
          __extends(ErrorNoAuthCode2, _super);
          function ErrorNoAuthCode2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          ErrorNoAuthCode2.prototype.toString = function() {
            return "ErrorNoAuthCode";
          };
          return ErrorNoAuthCode2;
        })(ErrorOAuth2)
      );
      exports.ErrorNoAuthCode = ErrorNoAuthCode;
      var ErrorInvalidReturnedStateParam = (
        /** @class */
        (function(_super) {
          __extends(ErrorInvalidReturnedStateParam2, _super);
          function ErrorInvalidReturnedStateParam2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          ErrorInvalidReturnedStateParam2.prototype.toString = function() {
            return "ErrorInvalidReturnedStateParam";
          };
          return ErrorInvalidReturnedStateParam2;
        })(ErrorOAuth2)
      );
      exports.ErrorInvalidReturnedStateParam = ErrorInvalidReturnedStateParam;
      var ErrorInvalidJson = (
        /** @class */
        (function(_super) {
          __extends(ErrorInvalidJson2, _super);
          function ErrorInvalidJson2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          ErrorInvalidJson2.prototype.toString = function() {
            return "ErrorInvalidJson";
          };
          return ErrorInvalidJson2;
        })(ErrorOAuth2)
      );
      exports.ErrorInvalidJson = ErrorInvalidJson;
      var ErrorInvalidScope = (
        /** @class */
        (function(_super) {
          __extends(ErrorInvalidScope2, _super);
          function ErrorInvalidScope2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          ErrorInvalidScope2.prototype.toString = function() {
            return "ErrorInvalidScope";
          };
          return ErrorInvalidScope2;
        })(ErrorOAuth2)
      );
      exports.ErrorInvalidScope = ErrorInvalidScope;
      var ErrorInvalidRequest = (
        /** @class */
        (function(_super) {
          __extends(ErrorInvalidRequest2, _super);
          function ErrorInvalidRequest2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          ErrorInvalidRequest2.prototype.toString = function() {
            return "ErrorInvalidRequest";
          };
          return ErrorInvalidRequest2;
        })(ErrorOAuth2)
      );
      exports.ErrorInvalidRequest = ErrorInvalidRequest;
      var ErrorInvalidToken = (
        /** @class */
        (function(_super) {
          __extends(ErrorInvalidToken2, _super);
          function ErrorInvalidToken2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          ErrorInvalidToken2.prototype.toString = function() {
            return "ErrorInvalidToken";
          };
          return ErrorInvalidToken2;
        })(ErrorOAuth2)
      );
      exports.ErrorInvalidToken = ErrorInvalidToken;
      var ErrorAuthenticationGrant = (
        /** @class */
        (function(_super) {
          __extends(ErrorAuthenticationGrant2, _super);
          function ErrorAuthenticationGrant2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          ErrorAuthenticationGrant2.prototype.toString = function() {
            return "ErrorAuthenticationGrant";
          };
          return ErrorAuthenticationGrant2;
        })(ErrorOAuth2)
      );
      exports.ErrorAuthenticationGrant = ErrorAuthenticationGrant;
      var ErrorUnauthorizedClient = (
        /** @class */
        (function(_super) {
          __extends(ErrorUnauthorizedClient2, _super);
          function ErrorUnauthorizedClient2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          ErrorUnauthorizedClient2.prototype.toString = function() {
            return "ErrorUnauthorizedClient";
          };
          return ErrorUnauthorizedClient2;
        })(ErrorAuthenticationGrant)
      );
      exports.ErrorUnauthorizedClient = ErrorUnauthorizedClient;
      var ErrorAccessDenied = (
        /** @class */
        (function(_super) {
          __extends(ErrorAccessDenied2, _super);
          function ErrorAccessDenied2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          ErrorAccessDenied2.prototype.toString = function() {
            return "ErrorAccessDenied";
          };
          return ErrorAccessDenied2;
        })(ErrorAuthenticationGrant)
      );
      exports.ErrorAccessDenied = ErrorAccessDenied;
      var ErrorUnsupportedResponseType = (
        /** @class */
        (function(_super) {
          __extends(ErrorUnsupportedResponseType2, _super);
          function ErrorUnsupportedResponseType2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          ErrorUnsupportedResponseType2.prototype.toString = function() {
            return "ErrorUnsupportedResponseType";
          };
          return ErrorUnsupportedResponseType2;
        })(ErrorAuthenticationGrant)
      );
      exports.ErrorUnsupportedResponseType = ErrorUnsupportedResponseType;
      var ErrorServerError = (
        /** @class */
        (function(_super) {
          __extends(ErrorServerError2, _super);
          function ErrorServerError2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          ErrorServerError2.prototype.toString = function() {
            return "ErrorServerError";
          };
          return ErrorServerError2;
        })(ErrorAuthenticationGrant)
      );
      exports.ErrorServerError = ErrorServerError;
      var ErrorTemporarilyUnavailable = (
        /** @class */
        (function(_super) {
          __extends(ErrorTemporarilyUnavailable2, _super);
          function ErrorTemporarilyUnavailable2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          ErrorTemporarilyUnavailable2.prototype.toString = function() {
            return "ErrorTemporarilyUnavailable";
          };
          return ErrorTemporarilyUnavailable2;
        })(ErrorAuthenticationGrant)
      );
      exports.ErrorTemporarilyUnavailable = ErrorTemporarilyUnavailable;
      var ErrorAccessTokenResponse = (
        /** @class */
        (function(_super) {
          __extends(ErrorAccessTokenResponse2, _super);
          function ErrorAccessTokenResponse2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          ErrorAccessTokenResponse2.prototype.toString = function() {
            return "ErrorAccessTokenResponse";
          };
          return ErrorAccessTokenResponse2;
        })(ErrorOAuth2)
      );
      exports.ErrorAccessTokenResponse = ErrorAccessTokenResponse;
      var ErrorInvalidClient = (
        /** @class */
        (function(_super) {
          __extends(ErrorInvalidClient2, _super);
          function ErrorInvalidClient2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          ErrorInvalidClient2.prototype.toString = function() {
            return "ErrorInvalidClient";
          };
          return ErrorInvalidClient2;
        })(ErrorAccessTokenResponse)
      );
      exports.ErrorInvalidClient = ErrorInvalidClient;
      var ErrorInvalidGrant = (
        /** @class */
        (function(_super) {
          __extends(ErrorInvalidGrant2, _super);
          function ErrorInvalidGrant2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          ErrorInvalidGrant2.prototype.toString = function() {
            return "ErrorInvalidGrant";
          };
          return ErrorInvalidGrant2;
        })(ErrorAccessTokenResponse)
      );
      exports.ErrorInvalidGrant = ErrorInvalidGrant;
      var ErrorUnsupportedGrantType = (
        /** @class */
        (function(_super) {
          __extends(ErrorUnsupportedGrantType2, _super);
          function ErrorUnsupportedGrantType2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          ErrorUnsupportedGrantType2.prototype.toString = function() {
            return "ErrorUnsupportedGrantType";
          };
          return ErrorUnsupportedGrantType2;
        })(ErrorAccessTokenResponse)
      );
      exports.ErrorUnsupportedGrantType = ErrorUnsupportedGrantType;
      var ErrorWWWAuthenticate = (
        /** @class */
        /* @__PURE__ */ (function() {
          function ErrorWWWAuthenticate2() {
            this.realm = "";
            this.error = "";
          }
          return ErrorWWWAuthenticate2;
        })()
      );
      exports.ErrorWWWAuthenticate = ErrorWWWAuthenticate;
      exports.RawErrorToErrorClassMap = {
        invalid_request: ErrorInvalidRequest,
        invalid_grant: ErrorInvalidGrant,
        unauthorized_client: ErrorUnauthorizedClient,
        access_denied: ErrorAccessDenied,
        unsupported_response_type: ErrorUnsupportedResponseType,
        invalid_scope: ErrorInvalidScope,
        server_error: ErrorServerError,
        temporarily_unavailable: ErrorTemporarilyUnavailable,
        invalid_client: ErrorInvalidClient,
        unsupported_grant_type: ErrorUnsupportedGrantType,
        invalid_json: ErrorInvalidJson,
        invalid_token: ErrorInvalidToken
      };
      function toErrorClass(rawError) {
        return new (exports.RawErrorToErrorClassMap[rawError] || ErrorUnknown)();
      }
      exports.toErrorClass = toErrorClass;
      function fromWWWAuthenticateHeaderStringToObject(a) {
        var obj = a.slice("Bearer ".length).replace(/"/g, "").split(", ").map(function(tokens) {
          var _a;
          var _b = tokens.split("="), k = _b[0], v = _b[1];
          return _a = {}, _a[k] = v, _a;
        }).reduce(function(a2, c) {
          return __assign(__assign({}, a2), c);
        }, {});
        return { realm: obj.realm, error: obj.error };
      }
      exports.fromWWWAuthenticateHeaderStringToObject = fromWWWAuthenticateHeaderStringToObject;
      var HEADER_AUTHORIZATION = "Authorization";
      var HEADER_WWW_AUTHENTICATE = "WWW-Authenticate";
      exports.LOCALSTORAGE_ID = "oauth2authcodepkce";
      exports.LOCALSTORAGE_STATE = exports.LOCALSTORAGE_ID + "-state";
      exports.RECOMMENDED_CODE_VERIFIER_LENGTH = 96;
      exports.RECOMMENDED_STATE_LENGTH = 32;
      var PKCE_CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
      var OAuth2AuthCodePKCE2 = (
        /** @class */
        (function() {
          function OAuth2AuthCodePKCE3(config) {
            this.state = {};
            this.config = config;
            this.recoverState();
            return this;
          }
          OAuth2AuthCodePKCE3.prototype.decorateFetchHTTPClient = function(fetch2) {
            var _this = this;
            return function(url2, config) {
              var rest = [];
              for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
              }
              if (!_this.state.isHTTPDecoratorActive) {
                return fetch2.apply(void 0, __spreadArrays([url2, config], rest));
              }
              return _this.getAccessToken().then(function(_a) {
                var token = _a.token;
                var configNew = Object.assign({}, config);
                if (!configNew.headers) {
                  configNew.headers = {};
                }
                configNew.headers[HEADER_AUTHORIZATION] = "Bearer " + token.value;
                return fetch2.apply(void 0, __spreadArrays([url2, configNew], rest));
              }).then(function(res) {
                if (res.ok) {
                  return res;
                }
                if (!res.headers.has(HEADER_WWW_AUTHENTICATE.toLowerCase())) {
                  return res;
                }
                var error = toErrorClass(fromWWWAuthenticateHeaderStringToObject(res.headers.get(HEADER_WWW_AUTHENTICATE.toLowerCase())).error);
                if (error instanceof ErrorInvalidToken) {
                  _this.config.onAccessTokenExpiry(function() {
                    return _this.exchangeRefreshTokenForAccessToken();
                  });
                }
                return Promise.reject(error);
              });
            };
          };
          OAuth2AuthCodePKCE3.prototype.isReturningFromAuthServer = function() {
            var error = OAuth2AuthCodePKCE3.extractParamFromUrl(location.href, "error");
            if (error) {
              return Promise.reject(toErrorClass(error));
            }
            var code = OAuth2AuthCodePKCE3.extractParamFromUrl(location.href, "code");
            if (!code) {
              return Promise.resolve(false);
            }
            var state = JSON.parse(localStorage.getItem(exports.LOCALSTORAGE_STATE) || "{}");
            var stateQueryParam = OAuth2AuthCodePKCE3.extractParamFromUrl(location.href, "state");
            if (stateQueryParam !== state.stateQueryParam) {
              console.warn("state query string parameter doesn't match the one sent! Possible malicious activity somewhere.");
              return Promise.reject(new ErrorInvalidReturnedStateParam());
            }
            state.authorizationCode = code;
            state.hasAuthCodeBeenExchangedForAccessToken = false;
            localStorage.setItem(exports.LOCALSTORAGE_STATE, JSON.stringify(state));
            this.setState(state);
            return Promise.resolve(true);
          };
          OAuth2AuthCodePKCE3.prototype.fetchAuthorizationCode = function(oneTimeParams) {
            return __awaiter(this, void 0, void 0, function() {
              var _a, clientId2, extraAuthorizationParams, redirectUrl, scopes2, _b, codeChallenge, codeVerifier, stateQueryParam, url2, extraParameters;
              return __generator(this, function(_c) {
                switch (_c.label) {
                  case 0:
                    this.assertStateAndConfigArePresent();
                    _a = this.config, clientId2 = _a.clientId, extraAuthorizationParams = _a.extraAuthorizationParams, redirectUrl = _a.redirectUrl, scopes2 = _a.scopes;
                    return [4, OAuth2AuthCodePKCE3.generatePKCECodes()];
                  case 1:
                    _b = _c.sent(), codeChallenge = _b.codeChallenge, codeVerifier = _b.codeVerifier;
                    stateQueryParam = OAuth2AuthCodePKCE3.generateRandomState(exports.RECOMMENDED_STATE_LENGTH);
                    this.state = __assign(__assign({}, this.state), {
                      codeChallenge,
                      codeVerifier,
                      stateQueryParam,
                      isHTTPDecoratorActive: true
                    });
                    localStorage.setItem(exports.LOCALSTORAGE_STATE, JSON.stringify(this.state));
                    url2 = this.config.authorizationUrl + "?response_type=code&" + ("client_id=" + encodeURIComponent(clientId2) + "&") + ("redirect_uri=" + encodeURIComponent(redirectUrl) + "&") + ("scope=" + encodeURIComponent(scopes2.join(" ")) + "&") + ("state=" + stateQueryParam + "&") + ("code_challenge=" + encodeURIComponent(codeChallenge) + "&") + "code_challenge_method=S256";
                    if (extraAuthorizationParams || oneTimeParams) {
                      extraParameters = __assign(__assign({}, extraAuthorizationParams), oneTimeParams);
                      url2 = url2 + "&" + OAuth2AuthCodePKCE3.objectToQueryString(extraParameters);
                    }
                    location.replace(url2);
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          };
          OAuth2AuthCodePKCE3.prototype.getAccessToken = function() {
            var _this = this;
            this.assertStateAndConfigArePresent();
            var onAccessTokenExpiry = this.config.onAccessTokenExpiry;
            var _a = this.state, accessToken = _a.accessToken, authorizationCode = _a.authorizationCode, explicitlyExposedTokens = _a.explicitlyExposedTokens, hasAuthCodeBeenExchangedForAccessToken = _a.hasAuthCodeBeenExchangedForAccessToken, refreshToken = _a.refreshToken, scopes2 = _a.scopes;
            if (!authorizationCode) {
              return Promise.reject(new ErrorNoAuthCode());
            }
            if (this.authCodeForAccessTokenRequest) {
              return this.authCodeForAccessTokenRequest;
            }
            if (!this.isAuthorized() || !hasAuthCodeBeenExchangedForAccessToken) {
              this.authCodeForAccessTokenRequest = this.exchangeAuthCodeForAccessToken();
              return this.authCodeForAccessTokenRequest;
            }
            if (refreshToken && this.isAccessTokenExpired()) {
              return onAccessTokenExpiry(function() {
                return _this.exchangeRefreshTokenForAccessToken();
              });
            }
            return Promise.resolve({
              token: accessToken,
              explicitlyExposedTokens,
              scopes: scopes2,
              refreshToken
            });
          };
          OAuth2AuthCodePKCE3.prototype.exchangeRefreshTokenForAccessToken = function() {
            var _this = this;
            var _a;
            this.assertStateAndConfigArePresent();
            var _b = this.config, extraRefreshParams = _b.extraRefreshParams, clientId2 = _b.clientId, tokenUrl = _b.tokenUrl;
            var refreshToken = this.state.refreshToken;
            if (!refreshToken) {
              console.warn("No refresh token is present.");
            }
            var url2 = tokenUrl;
            var body = "grant_type=refresh_token&" + ("refresh_token=" + ((_a = refreshToken) === null || _a === void 0 ? void 0 : _a.value) + "&") + ("client_id=" + clientId2);
            if (extraRefreshParams) {
              body = url2 + "&" + OAuth2AuthCodePKCE3.objectToQueryString(extraRefreshParams);
            }
            return fetch(url2, {
              method: "POST",
              body,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            }).then(function(res) {
              return res.status >= 400 ? res.json().then(function(data) {
                return Promise.reject(data);
              }) : res.json();
            }).then(function(json) {
              var access_token = json.access_token, expires_in = json.expires_in, refresh_token = json.refresh_token, scope = json.scope;
              var explicitlyExposedTokens = _this.config.explicitlyExposedTokens;
              var scopes2 = [];
              var tokensToExpose = {};
              var accessToken = {
                value: access_token,
                expiry: new Date(Date.now() + parseInt(expires_in) * 1e3).toString()
              };
              _this.state.accessToken = accessToken;
              if (refresh_token) {
                var refreshToken_1 = {
                  value: refresh_token
                };
                _this.state.refreshToken = refreshToken_1;
              }
              if (explicitlyExposedTokens) {
                tokensToExpose = Object.fromEntries(explicitlyExposedTokens.map(function(tokenName) {
                  return [tokenName, json[tokenName]];
                }).filter(function(_a2) {
                  var _ = _a2[0], tokenValue = _a2[1];
                  return tokenValue !== void 0;
                }));
                _this.state.explicitlyExposedTokens = tokensToExpose;
              }
              if (scope) {
                scopes2 = scope.split(" ");
                _this.state.scopes = scopes2;
              }
              localStorage.setItem(exports.LOCALSTORAGE_STATE, JSON.stringify(_this.state));
              var accessContext = { token: accessToken, scopes: scopes2 };
              if (explicitlyExposedTokens) {
                accessContext.explicitlyExposedTokens = tokensToExpose;
              }
              return accessContext;
            }).catch(function(data) {
              var onInvalidGrant = _this.config.onInvalidGrant;
              var error = data.error || "There was a network error.";
              switch (error) {
                case "invalid_grant":
                  onInvalidGrant(function() {
                    return _this.fetchAuthorizationCode();
                  });
                  break;
                default:
                  break;
              }
              return Promise.reject(toErrorClass(error));
            });
          };
          OAuth2AuthCodePKCE3.prototype.getGrantedScopes = function() {
            return this.state.scopes;
          };
          OAuth2AuthCodePKCE3.prototype.isHTTPDecoratorActive = function(isActive) {
            this.state.isHTTPDecoratorActive = isActive;
            localStorage.setItem(exports.LOCALSTORAGE_STATE, JSON.stringify(this.state));
          };
          OAuth2AuthCodePKCE3.prototype.isAuthorized = function() {
            return !!this.state.accessToken;
          };
          OAuth2AuthCodePKCE3.prototype.isAccessTokenExpired = function() {
            var accessToken = this.state.accessToken;
            return Boolean(accessToken && /* @__PURE__ */ new Date() >= new Date(accessToken.expiry));
          };
          OAuth2AuthCodePKCE3.prototype.reset = function() {
            this.setState({});
            this.authCodeForAccessTokenRequest = void 0;
          };
          OAuth2AuthCodePKCE3.prototype.assertStateAndConfigArePresent = function() {
            if (!this.state || !this.config) {
              console.error("state:", this.state, "config:", this.config);
              throw new Error("state or config is not set.");
            }
          };
          OAuth2AuthCodePKCE3.prototype.exchangeAuthCodeForAccessToken = function(codeOverride) {
            var _this = this;
            this.assertStateAndConfigArePresent();
            var _a = this.state, _b = _a.authorizationCode, authorizationCode = _b === void 0 ? codeOverride : _b, _c = _a.codeVerifier, codeVerifier = _c === void 0 ? "" : _c;
            var _d = this.config, clientId2 = _d.clientId, onInvalidGrant = _d.onInvalidGrant, redirectUrl = _d.redirectUrl;
            if (!codeVerifier) {
              console.warn("No code verifier is being sent.");
            } else if (!authorizationCode) {
              console.warn("No authorization grant code is being passed.");
            }
            var url2 = this.config.tokenUrl;
            var body = "grant_type=authorization_code&" + ("code=" + encodeURIComponent(authorizationCode || "") + "&") + ("redirect_uri=" + encodeURIComponent(redirectUrl) + "&") + ("client_id=" + encodeURIComponent(clientId2) + "&") + ("code_verifier=" + codeVerifier);
            return fetch(url2, {
              method: "POST",
              body,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            }).then(function(res) {
              var jsonPromise = res.json().catch(function(_) {
                return { error: "invalid_json" };
              });
              if (!res.ok) {
                return jsonPromise.then(function(_a2) {
                  var error = _a2.error;
                  switch (error) {
                    case "invalid_grant":
                      onInvalidGrant(function() {
                        return _this.fetchAuthorizationCode();
                      });
                      break;
                    default:
                      break;
                  }
                  return Promise.reject(toErrorClass(error));
                });
              }
              return jsonPromise.then(function(json) {
                var access_token = json.access_token, expires_in = json.expires_in, refresh_token = json.refresh_token, scope = json.scope;
                var explicitlyExposedTokens = _this.config.explicitlyExposedTokens;
                var scopes2 = [];
                var tokensToExpose = {};
                _this.state.hasAuthCodeBeenExchangedForAccessToken = true;
                _this.authCodeForAccessTokenRequest = void 0;
                var accessToken = {
                  value: access_token,
                  expiry: new Date(Date.now() + parseInt(expires_in) * 1e3).toString()
                };
                _this.state.accessToken = accessToken;
                if (refresh_token) {
                  var refreshToken = {
                    value: refresh_token
                  };
                  _this.state.refreshToken = refreshToken;
                }
                if (explicitlyExposedTokens) {
                  tokensToExpose = Object.fromEntries(explicitlyExposedTokens.map(function(tokenName) {
                    return [tokenName, json[tokenName]];
                  }).filter(function(_a2) {
                    var _ = _a2[0], tokenValue = _a2[1];
                    return tokenValue !== void 0;
                  }));
                  _this.state.explicitlyExposedTokens = tokensToExpose;
                }
                if (scope) {
                  scopes2 = scope.split(" ");
                  _this.state.scopes = scopes2;
                }
                localStorage.setItem(exports.LOCALSTORAGE_STATE, JSON.stringify(_this.state));
                var accessContext = { token: accessToken, scopes: scopes2 };
                if (explicitlyExposedTokens) {
                  accessContext.explicitlyExposedTokens = tokensToExpose;
                }
                return accessContext;
              });
            });
          };
          OAuth2AuthCodePKCE3.prototype.recoverState = function() {
            this.state = JSON.parse(localStorage.getItem(exports.LOCALSTORAGE_STATE) || "{}");
            return this;
          };
          OAuth2AuthCodePKCE3.prototype.setState = function(state) {
            this.state = state;
            localStorage.setItem(exports.LOCALSTORAGE_STATE, JSON.stringify(state));
            return this;
          };
          OAuth2AuthCodePKCE3.base64urlEncode = function(value) {
            var base64 = btoa(value);
            base64 = base64.replace(/\+/g, "-");
            base64 = base64.replace(/\//g, "_");
            base64 = base64.replace(/=/g, "");
            return base64;
          };
          OAuth2AuthCodePKCE3.extractParamFromUrl = function(url2, param) {
            var queryString = url2.split("?");
            if (queryString.length < 2) {
              return "";
            }
            queryString = queryString[1].split("#");
            var parts = queryString[0].split("&").reduce(function(a, s) {
              return a.concat(s.split("="));
            }, []);
            if (parts.length < 2) {
              return "";
            }
            var paramIdx = parts.indexOf(param);
            return decodeURIComponent(paramIdx >= 0 ? parts[paramIdx + 1] : "");
          };
          OAuth2AuthCodePKCE3.objectToQueryString = function(dict) {
            return Object.entries(dict).map(function(_a) {
              var key = _a[0], val = _a[1];
              return key + "=" + encodeURIComponent(val);
            }).join("&");
          };
          OAuth2AuthCodePKCE3.generatePKCECodes = function() {
            var output = new Uint32Array(exports.RECOMMENDED_CODE_VERIFIER_LENGTH);
            crypto.getRandomValues(output);
            var codeVerifier = OAuth2AuthCodePKCE3.base64urlEncode(Array.from(output).map(function(num) {
              return PKCE_CHARSET[num % PKCE_CHARSET.length];
            }).join(""));
            return crypto.subtle.digest("SHA-256", new TextEncoder().encode(codeVerifier)).then(function(buffer) {
              var hash2 = new Uint8Array(buffer);
              var binary = "";
              var hashLength = hash2.byteLength;
              for (var i = 0; i < hashLength; i++) {
                binary += String.fromCharCode(hash2[i]);
              }
              return binary;
            }).then(OAuth2AuthCodePKCE3.base64urlEncode).then(function(codeChallenge) {
              return { codeChallenge, codeVerifier };
            });
          };
          OAuth2AuthCodePKCE3.generateRandomState = function(lengthOfState) {
            var output = new Uint32Array(lengthOfState);
            crypto.getRandomValues(output);
            return Array.from(output).map(function(num) {
              return PKCE_CHARSET[num % PKCE_CHARSET.length];
            }).join("");
          };
          return OAuth2AuthCodePKCE3;
        })()
      );
      exports.OAuth2AuthCodePKCE = OAuth2AuthCodePKCE2;
    }
  });

  // node_modules/page/page.js
  var require_page = __commonJS({
    "node_modules/page/page.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.page = factory();
      })(exports, (function() {
        "use strict";
        var isarray = Array.isArray || function(arr) {
          return Object.prototype.toString.call(arr) == "[object Array]";
        };
        var pathToRegexp_1 = pathToRegexp;
        var parse_1 = parse;
        var compile_1 = compile;
        var tokensToFunction_1 = tokensToFunction;
        var tokensToRegExp_1 = tokensToRegExp;
        var PATH_REGEXP = new RegExp([
          // Match escaped characters that would otherwise appear in future matches.
          // This allows the user to escape special characters that won't transform.
          "(\\\\.)",
          // Match Express-style parameters and un-named parameters with a prefix
          // and optional suffixes. Matches appear as:
          //
          // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
          // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
          // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"
        ].join("|"), "g");
        function parse(str) {
          var tokens = [];
          var key = 0;
          var index = 0;
          var path = "";
          var res;
          while ((res = PATH_REGEXP.exec(str)) != null) {
            var m = res[0];
            var escaped = res[1];
            var offset = res.index;
            path += str.slice(index, offset);
            index = offset + m.length;
            if (escaped) {
              path += escaped[1];
              continue;
            }
            if (path) {
              tokens.push(path);
              path = "";
            }
            var prefix = res[2];
            var name = res[3];
            var capture = res[4];
            var group = res[5];
            var suffix = res[6];
            var asterisk = res[7];
            var repeat = suffix === "+" || suffix === "*";
            var optional = suffix === "?" || suffix === "*";
            var delimiter = prefix || "/";
            var pattern = capture || group || (asterisk ? ".*" : "[^" + delimiter + "]+?");
            tokens.push({
              name: name || key++,
              prefix: prefix || "",
              delimiter,
              optional,
              repeat,
              pattern: escapeGroup(pattern)
            });
          }
          if (index < str.length) {
            path += str.substr(index);
          }
          if (path) {
            tokens.push(path);
          }
          return tokens;
        }
        function compile(str) {
          return tokensToFunction(parse(str));
        }
        function tokensToFunction(tokens) {
          var matches = new Array(tokens.length);
          for (var i = 0; i < tokens.length; i++) {
            if (typeof tokens[i] === "object") {
              matches[i] = new RegExp("^" + tokens[i].pattern + "$");
            }
          }
          return function(obj) {
            var path = "";
            var data = obj || {};
            for (var i2 = 0; i2 < tokens.length; i2++) {
              var token = tokens[i2];
              if (typeof token === "string") {
                path += token;
                continue;
              }
              var value = data[token.name];
              var segment;
              if (value == null) {
                if (token.optional) {
                  continue;
                } else {
                  throw new TypeError('Expected "' + token.name + '" to be defined');
                }
              }
              if (isarray(value)) {
                if (!token.repeat) {
                  throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"');
                }
                if (value.length === 0) {
                  if (token.optional) {
                    continue;
                  } else {
                    throw new TypeError('Expected "' + token.name + '" to not be empty');
                  }
                }
                for (var j = 0; j < value.length; j++) {
                  segment = encodeURIComponent(value[j]);
                  if (!matches[i2].test(segment)) {
                    throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
                  }
                  path += (j === 0 ? token.prefix : token.delimiter) + segment;
                }
                continue;
              }
              segment = encodeURIComponent(value);
              if (!matches[i2].test(segment)) {
                throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
              }
              path += token.prefix + segment;
            }
            return path;
          };
        }
        function escapeString(str) {
          return str.replace(/([.+*?=^!:${}()[\]|\/])/g, "\\$1");
        }
        function escapeGroup(group) {
          return group.replace(/([=!:$\/()])/g, "\\$1");
        }
        function attachKeys(re, keys) {
          re.keys = keys;
          return re;
        }
        function flags(options) {
          return options.sensitive ? "" : "i";
        }
        function regexpToRegexp(path, keys) {
          var groups = path.source.match(/\((?!\?)/g);
          if (groups) {
            for (var i = 0; i < groups.length; i++) {
              keys.push({
                name: i,
                prefix: null,
                delimiter: null,
                optional: false,
                repeat: false,
                pattern: null
              });
            }
          }
          return attachKeys(path, keys);
        }
        function arrayToRegexp(path, keys, options) {
          var parts = [];
          for (var i = 0; i < path.length; i++) {
            parts.push(pathToRegexp(path[i], keys, options).source);
          }
          var regexp = new RegExp("(?:" + parts.join("|") + ")", flags(options));
          return attachKeys(regexp, keys);
        }
        function stringToRegexp(path, keys, options) {
          var tokens = parse(path);
          var re = tokensToRegExp(tokens, options);
          for (var i = 0; i < tokens.length; i++) {
            if (typeof tokens[i] !== "string") {
              keys.push(tokens[i]);
            }
          }
          return attachKeys(re, keys);
        }
        function tokensToRegExp(tokens, options) {
          options = options || {};
          var strict = options.strict;
          var end3 = options.end !== false;
          var route = "";
          var lastToken = tokens[tokens.length - 1];
          var endsWithSlash = typeof lastToken === "string" && /\/$/.test(lastToken);
          for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
              route += escapeString(token);
            } else {
              var prefix = escapeString(token.prefix);
              var capture = token.pattern;
              if (token.repeat) {
                capture += "(?:" + prefix + capture + ")*";
              }
              if (token.optional) {
                if (prefix) {
                  capture = "(?:" + prefix + "(" + capture + "))?";
                } else {
                  capture = "(" + capture + ")?";
                }
              } else {
                capture = prefix + "(" + capture + ")";
              }
              route += capture;
            }
          }
          if (!strict) {
            route = (endsWithSlash ? route.slice(0, -2) : route) + "(?:\\/(?=$))?";
          }
          if (end3) {
            route += "$";
          } else {
            route += strict && endsWithSlash ? "" : "(?=\\/|$)";
          }
          return new RegExp("^" + route, flags(options));
        }
        function pathToRegexp(path, keys, options) {
          keys = keys || [];
          if (!isarray(keys)) {
            options = keys;
            keys = [];
          } else if (!options) {
            options = {};
          }
          if (path instanceof RegExp) {
            return regexpToRegexp(path, keys, options);
          }
          if (isarray(path)) {
            return arrayToRegexp(path, keys, options);
          }
          return stringToRegexp(path, keys, options);
        }
        pathToRegexp_1.parse = parse_1;
        pathToRegexp_1.compile = compile_1;
        pathToRegexp_1.tokensToFunction = tokensToFunction_1;
        pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;
        var hasDocument = "undefined" !== typeof document;
        var hasWindow = "undefined" !== typeof window;
        var hasHistory = "undefined" !== typeof history;
        var hasProcess = typeof process !== "undefined";
        var clickEvent = hasDocument && document.ontouchstart ? "touchstart" : "click";
        var isLocation = hasWindow && !!(window.history.location || window.location);
        function Page() {
          this.callbacks = [];
          this.exits = [];
          this.current = "";
          this.len = 0;
          this._decodeURLComponents = true;
          this._base = "";
          this._strict = false;
          this._running = false;
          this._hashbang = false;
          this.clickHandler = this.clickHandler.bind(this);
          this._onpopstate = this._onpopstate.bind(this);
        }
        Page.prototype.configure = function(options) {
          var opts = options || {};
          this._window = opts.window || hasWindow && window;
          this._decodeURLComponents = opts.decodeURLComponents !== false;
          this._popstate = opts.popstate !== false && hasWindow;
          this._click = opts.click !== false && hasDocument;
          this._hashbang = !!opts.hashbang;
          var _window = this._window;
          if (this._popstate) {
            _window.addEventListener("popstate", this._onpopstate, false);
          } else if (hasWindow) {
            _window.removeEventListener("popstate", this._onpopstate, false);
          }
          if (this._click) {
            _window.document.addEventListener(clickEvent, this.clickHandler, false);
          } else if (hasDocument) {
            _window.document.removeEventListener(clickEvent, this.clickHandler, false);
          }
          if (this._hashbang && hasWindow && !hasHistory) {
            _window.addEventListener("hashchange", this._onpopstate, false);
          } else if (hasWindow) {
            _window.removeEventListener("hashchange", this._onpopstate, false);
          }
        };
        Page.prototype.base = function(path) {
          if (0 === arguments.length) return this._base;
          this._base = path;
        };
        Page.prototype._getBase = function() {
          var base = this._base;
          if (!!base) return base;
          var loc = hasWindow && this._window && this._window.location;
          if (hasWindow && this._hashbang && loc && loc.protocol === "file:") {
            base = loc.pathname;
          }
          return base;
        };
        Page.prototype.strict = function(enable) {
          if (0 === arguments.length) return this._strict;
          this._strict = enable;
        };
        Page.prototype.start = function(options) {
          var opts = options || {};
          this.configure(opts);
          if (false === opts.dispatch) return;
          this._running = true;
          var url2;
          if (isLocation) {
            var window2 = this._window;
            var loc = window2.location;
            if (this._hashbang && ~loc.hash.indexOf("#!")) {
              url2 = loc.hash.substr(2) + loc.search;
            } else if (this._hashbang) {
              url2 = loc.search + loc.hash;
            } else {
              url2 = loc.pathname + loc.search + loc.hash;
            }
          }
          this.replace(url2, null, true, opts.dispatch);
        };
        Page.prototype.stop = function() {
          if (!this._running) return;
          this.current = "";
          this.len = 0;
          this._running = false;
          var window2 = this._window;
          this._click && window2.document.removeEventListener(clickEvent, this.clickHandler, false);
          hasWindow && window2.removeEventListener("popstate", this._onpopstate, false);
          hasWindow && window2.removeEventListener("hashchange", this._onpopstate, false);
        };
        Page.prototype.show = function(path, state, dispatch, push) {
          var ctx = new Context(path, state, this), prev = this.prevContext;
          this.prevContext = ctx;
          this.current = ctx.path;
          if (false !== dispatch) this.dispatch(ctx, prev);
          if (false !== ctx.handled && false !== push) ctx.pushState();
          return ctx;
        };
        Page.prototype.back = function(path, state) {
          var page6 = this;
          if (this.len > 0) {
            var window2 = this._window;
            hasHistory && window2.history.back();
            this.len--;
          } else if (path) {
            setTimeout(function() {
              page6.show(path, state);
            });
          } else {
            setTimeout(function() {
              page6.show(page6._getBase(), state);
            });
          }
        };
        Page.prototype.redirect = function(from, to) {
          var inst = this;
          if ("string" === typeof from && "string" === typeof to) {
            page5.call(this, from, function(e) {
              setTimeout(function() {
                inst.replace(
                  /** @type {!string} */
                  to
                );
              }, 0);
            });
          }
          if ("string" === typeof from && "undefined" === typeof to) {
            setTimeout(function() {
              inst.replace(from);
            }, 0);
          }
        };
        Page.prototype.replace = function(path, state, init2, dispatch) {
          var ctx = new Context(path, state, this), prev = this.prevContext;
          this.prevContext = ctx;
          this.current = ctx.path;
          ctx.init = init2;
          ctx.save();
          if (false !== dispatch) this.dispatch(ctx, prev);
          return ctx;
        };
        Page.prototype.dispatch = function(ctx, prev) {
          var i = 0, j = 0, page6 = this;
          function nextExit() {
            var fn = page6.exits[j++];
            if (!fn) return nextEnter();
            fn(prev, nextExit);
          }
          function nextEnter() {
            var fn = page6.callbacks[i++];
            if (ctx.path !== page6.current) {
              ctx.handled = false;
              return;
            }
            if (!fn) return unhandled.call(page6, ctx);
            fn(ctx, nextEnter);
          }
          if (prev) {
            nextExit();
          } else {
            nextEnter();
          }
        };
        Page.prototype.exit = function(path, fn) {
          if (typeof path === "function") {
            return this.exit("*", path);
          }
          var route = new Route(path, null, this);
          for (var i = 1; i < arguments.length; ++i) {
            this.exits.push(route.middleware(arguments[i]));
          }
        };
        Page.prototype.clickHandler = function(e) {
          if (1 !== this._which(e)) return;
          if (e.metaKey || e.ctrlKey || e.shiftKey) return;
          if (e.defaultPrevented) return;
          var el = e.target;
          var eventPath = e.path || (e.composedPath ? e.composedPath() : null);
          if (eventPath) {
            for (var i = 0; i < eventPath.length; i++) {
              if (!eventPath[i].nodeName) continue;
              if (eventPath[i].nodeName.toUpperCase() !== "A") continue;
              if (!eventPath[i].href) continue;
              el = eventPath[i];
              break;
            }
          }
          while (el && "A" !== el.nodeName.toUpperCase()) el = el.parentNode;
          if (!el || "A" !== el.nodeName.toUpperCase()) return;
          var svg = typeof el.href === "object" && el.href.constructor.name === "SVGAnimatedString";
          if (el.hasAttribute("download") || el.getAttribute("rel") === "external") return;
          var link = el.getAttribute("href");
          if (!this._hashbang && this._samePath(el) && (el.hash || "#" === link)) return;
          if (link && link.indexOf("mailto:") > -1) return;
          if (svg ? el.target.baseVal : el.target) return;
          if (!svg && !this.sameOrigin(el.href)) return;
          var path = svg ? el.href.baseVal : el.pathname + el.search + (el.hash || "");
          path = path[0] !== "/" ? "/" + path : path;
          if (hasProcess && path.match(/^\/[a-zA-Z]:\//)) {
            path = path.replace(/^\/[a-zA-Z]:\//, "/");
          }
          var orig = path;
          var pageBase = this._getBase();
          if (path.indexOf(pageBase) === 0) {
            path = path.substr(pageBase.length);
          }
          if (this._hashbang) path = path.replace("#!", "");
          if (pageBase && orig === path && (!isLocation || this._window.location.protocol !== "file:")) {
            return;
          }
          e.preventDefault();
          this.show(orig);
        };
        Page.prototype._onpopstate = (function() {
          var loaded = false;
          if (!hasWindow) {
            return function() {
            };
          }
          if (hasDocument && document.readyState === "complete") {
            loaded = true;
          } else {
            window.addEventListener("load", function() {
              setTimeout(function() {
                loaded = true;
              }, 0);
            });
          }
          return function onpopstate(e) {
            if (!loaded) return;
            var page6 = this;
            if (e.state) {
              var path = e.state.path;
              page6.replace(path, e.state);
            } else if (isLocation) {
              var loc = page6._window.location;
              page6.show(loc.pathname + loc.search + loc.hash, void 0, void 0, false);
            }
          };
        })();
        Page.prototype._which = function(e) {
          e = e || hasWindow && this._window.event;
          return null == e.which ? e.button : e.which;
        };
        Page.prototype._toURL = function(href2) {
          var window2 = this._window;
          if (typeof URL === "function" && isLocation) {
            return new URL(href2, window2.location.toString());
          } else if (hasDocument) {
            var anc = window2.document.createElement("a");
            anc.href = href2;
            return anc;
          }
        };
        Page.prototype.sameOrigin = function(href2) {
          if (!href2 || !isLocation) return false;
          var url2 = this._toURL(href2);
          var window2 = this._window;
          var loc = window2.location;
          return loc.protocol === url2.protocol && loc.hostname === url2.hostname && (loc.port === url2.port || loc.port === "" && (url2.port == 80 || url2.port == 443));
        };
        Page.prototype._samePath = function(url2) {
          if (!isLocation) return false;
          var window2 = this._window;
          var loc = window2.location;
          return url2.pathname === loc.pathname && url2.search === loc.search;
        };
        Page.prototype._decodeURLEncodedURIComponent = function(val) {
          if (typeof val !== "string") {
            return val;
          }
          return this._decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, " ")) : val;
        };
        function createPage() {
          var pageInstance = new Page();
          function pageFn() {
            return page5.apply(pageInstance, arguments);
          }
          pageFn.callbacks = pageInstance.callbacks;
          pageFn.exits = pageInstance.exits;
          pageFn.base = pageInstance.base.bind(pageInstance);
          pageFn.strict = pageInstance.strict.bind(pageInstance);
          pageFn.start = pageInstance.start.bind(pageInstance);
          pageFn.stop = pageInstance.stop.bind(pageInstance);
          pageFn.show = pageInstance.show.bind(pageInstance);
          pageFn.back = pageInstance.back.bind(pageInstance);
          pageFn.redirect = pageInstance.redirect.bind(pageInstance);
          pageFn.replace = pageInstance.replace.bind(pageInstance);
          pageFn.dispatch = pageInstance.dispatch.bind(pageInstance);
          pageFn.exit = pageInstance.exit.bind(pageInstance);
          pageFn.configure = pageInstance.configure.bind(pageInstance);
          pageFn.sameOrigin = pageInstance.sameOrigin.bind(pageInstance);
          pageFn.clickHandler = pageInstance.clickHandler.bind(pageInstance);
          pageFn.create = createPage;
          Object.defineProperty(pageFn, "len", {
            get: function() {
              return pageInstance.len;
            },
            set: function(val) {
              pageInstance.len = val;
            }
          });
          Object.defineProperty(pageFn, "current", {
            get: function() {
              return pageInstance.current;
            },
            set: function(val) {
              pageInstance.current = val;
            }
          });
          pageFn.Context = Context;
          pageFn.Route = Route;
          return pageFn;
        }
        function page5(path, fn) {
          if ("function" === typeof path) {
            return page5.call(this, "*", path);
          }
          if ("function" === typeof fn) {
            var route = new Route(
              /** @type {string} */
              path,
              null,
              this
            );
            for (var i = 1; i < arguments.length; ++i) {
              this.callbacks.push(route.middleware(arguments[i]));
            }
          } else if ("string" === typeof path) {
            this["string" === typeof fn ? "redirect" : "show"](path, fn);
          } else {
            this.start(path);
          }
        }
        function unhandled(ctx) {
          if (ctx.handled) return;
          var current;
          var page6 = this;
          var window2 = page6._window;
          if (page6._hashbang) {
            current = isLocation && this._getBase() + window2.location.hash.replace("#!", "");
          } else {
            current = isLocation && window2.location.pathname + window2.location.search;
          }
          if (current === ctx.canonicalPath) return;
          page6.stop();
          ctx.handled = false;
          isLocation && (window2.location.href = ctx.canonicalPath);
        }
        function escapeRegExp(s) {
          return s.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
        }
        function Context(path, state, pageInstance) {
          var _page = this.page = pageInstance || page5;
          var window2 = _page._window;
          var hashbang = _page._hashbang;
          var pageBase = _page._getBase();
          if ("/" === path[0] && 0 !== path.indexOf(pageBase)) path = pageBase + (hashbang ? "#!" : "") + path;
          var i = path.indexOf("?");
          this.canonicalPath = path;
          var re = new RegExp("^" + escapeRegExp(pageBase));
          this.path = path.replace(re, "") || "/";
          if (hashbang) this.path = this.path.replace("#!", "") || "/";
          this.title = hasDocument && window2.document.title;
          this.state = state || {};
          this.state.path = path;
          this.querystring = ~i ? _page._decodeURLEncodedURIComponent(path.slice(i + 1)) : "";
          this.pathname = _page._decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
          this.params = {};
          this.hash = "";
          if (!hashbang) {
            if (!~this.path.indexOf("#")) return;
            var parts = this.path.split("#");
            this.path = this.pathname = parts[0];
            this.hash = _page._decodeURLEncodedURIComponent(parts[1]) || "";
            this.querystring = this.querystring.split("#")[0];
          }
        }
        Context.prototype.pushState = function() {
          var page6 = this.page;
          var window2 = page6._window;
          var hashbang = page6._hashbang;
          page6.len++;
          if (hasHistory) {
            window2.history.pushState(
              this.state,
              this.title,
              hashbang && this.path !== "/" ? "#!" + this.path : this.canonicalPath
            );
          }
        };
        Context.prototype.save = function() {
          var page6 = this.page;
          if (hasHistory) {
            page6._window.history.replaceState(
              this.state,
              this.title,
              page6._hashbang && this.path !== "/" ? "#!" + this.path : this.canonicalPath
            );
          }
        };
        function Route(path, options, page6) {
          var _page = this.page = page6 || globalPage;
          var opts = options || {};
          opts.strict = opts.strict || _page._strict;
          this.path = path === "*" ? "(.*)" : path;
          this.method = "GET";
          this.regexp = pathToRegexp_1(this.path, this.keys = [], opts);
        }
        Route.prototype.middleware = function(fn) {
          var self2 = this;
          return function(ctx, next) {
            if (self2.match(ctx.path, ctx.params)) {
              ctx.routePath = self2.path;
              return fn(ctx, next);
            }
            next();
          };
        };
        Route.prototype.match = function(path, params) {
          var keys = this.keys, qsIndex = path.indexOf("?"), pathname = ~qsIndex ? path.slice(0, qsIndex) : path, m = this.regexp.exec(decodeURIComponent(pathname));
          if (!m) return false;
          delete params[0];
          for (var i = 1, len = m.length; i < len; ++i) {
            var key = keys[i - 1];
            var val = this.page._decodeURLEncodedURIComponent(m[i]);
            if (val !== void 0 || !hasOwnProperty.call(params, key.name)) {
              params[key.name] = val;
            }
          }
          return true;
        };
        var globalPage = createPage();
        var page_js = globalPage;
        var default_1 = globalPage;
        page_js.default = default_1;
        return page_js;
      }));
    }
  });

  // node_modules/@popperjs/core/dist/cjs/popper.js
  var require_popper = __commonJS({
    "node_modules/@popperjs/core/dist/cjs/popper.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function getWindow(node) {
        if (node == null) {
          return window;
        }
        if (node.toString() !== "[object Window]") {
          var ownerDocument = node.ownerDocument;
          return ownerDocument ? ownerDocument.defaultView || window : window;
        }
        return node;
      }
      function isElement3(node) {
        var OwnElement = getWindow(node).Element;
        return node instanceof OwnElement || node instanceof Element;
      }
      function isHTMLElement(node) {
        var OwnElement = getWindow(node).HTMLElement;
        return node instanceof OwnElement || node instanceof HTMLElement;
      }
      function isShadowRoot(node) {
        if (typeof ShadowRoot === "undefined") {
          return false;
        }
        var OwnElement = getWindow(node).ShadowRoot;
        return node instanceof OwnElement || node instanceof ShadowRoot;
      }
      var max = Math.max;
      var min = Math.min;
      var round = Math.round;
      function getUAString() {
        var uaData = navigator.userAgentData;
        if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
          return uaData.brands.map(function(item) {
            return item.brand + "/" + item.version;
          }).join(" ");
        }
        return navigator.userAgent;
      }
      function isLayoutViewport() {
        return !/^((?!chrome|android).)*safari/i.test(getUAString());
      }
      function getBoundingClientRect(element, includeScale, isFixedStrategy) {
        if (includeScale === void 0) {
          includeScale = false;
        }
        if (isFixedStrategy === void 0) {
          isFixedStrategy = false;
        }
        var clientRect = element.getBoundingClientRect();
        var scaleX = 1;
        var scaleY = 1;
        if (includeScale && isHTMLElement(element)) {
          scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
          scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
        }
        var _ref = isElement3(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
        var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
        var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
        var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
        var width = clientRect.width / scaleX;
        var height = clientRect.height / scaleY;
        return {
          width,
          height,
          top: y,
          right: x + width,
          bottom: y + height,
          left: x,
          x,
          y
        };
      }
      function getWindowScroll(node) {
        var win = getWindow(node);
        var scrollLeft = win.pageXOffset;
        var scrollTop = win.pageYOffset;
        return {
          scrollLeft,
          scrollTop
        };
      }
      function getHTMLElementScroll(element) {
        return {
          scrollLeft: element.scrollLeft,
          scrollTop: element.scrollTop
        };
      }
      function getNodeScroll(node) {
        if (node === getWindow(node) || !isHTMLElement(node)) {
          return getWindowScroll(node);
        } else {
          return getHTMLElementScroll(node);
        }
      }
      function getNodeName(element) {
        return element ? (element.nodeName || "").toLowerCase() : null;
      }
      function getDocumentElement(element) {
        return ((isElement3(element) ? element.ownerDocument : (
          // $FlowFixMe[prop-missing]
          element.document
        )) || window.document).documentElement;
      }
      function getWindowScrollBarX(element) {
        return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
      }
      function getComputedStyle2(element) {
        return getWindow(element).getComputedStyle(element);
      }
      function isScrollParent(element) {
        var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
        return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
      }
      function isElementScaled(element) {
        var rect = element.getBoundingClientRect();
        var scaleX = round(rect.width) / element.offsetWidth || 1;
        var scaleY = round(rect.height) / element.offsetHeight || 1;
        return scaleX !== 1 || scaleY !== 1;
      }
      function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
        if (isFixed === void 0) {
          isFixed = false;
        }
        var isOffsetParentAnElement = isHTMLElement(offsetParent);
        var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
        var documentElement = getDocumentElement(offsetParent);
        var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
        var scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        var offsets = {
          x: 0,
          y: 0
        };
        if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
          if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
          isScrollParent(documentElement)) {
            scroll = getNodeScroll(offsetParent);
          }
          if (isHTMLElement(offsetParent)) {
            offsets = getBoundingClientRect(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
          } else if (documentElement) {
            offsets.x = getWindowScrollBarX(documentElement);
          }
        }
        return {
          x: rect.left + scroll.scrollLeft - offsets.x,
          y: rect.top + scroll.scrollTop - offsets.y,
          width: rect.width,
          height: rect.height
        };
      }
      function getLayoutRect(element) {
        var clientRect = getBoundingClientRect(element);
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        if (Math.abs(clientRect.width - width) <= 1) {
          width = clientRect.width;
        }
        if (Math.abs(clientRect.height - height) <= 1) {
          height = clientRect.height;
        }
        return {
          x: element.offsetLeft,
          y: element.offsetTop,
          width,
          height
        };
      }
      function getParentNode(element) {
        if (getNodeName(element) === "html") {
          return element;
        }
        return (
          // this is a quicker (but less type safe) way to save quite some bytes from the bundle
          // $FlowFixMe[incompatible-return]
          // $FlowFixMe[prop-missing]
          element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
          element.parentNode || // DOM Element detected
          (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
          // $FlowFixMe[incompatible-call]: HTMLElement is a Node
          getDocumentElement(element)
        );
      }
      function getScrollParent(node) {
        if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
          return node.ownerDocument.body;
        }
        if (isHTMLElement(node) && isScrollParent(node)) {
          return node;
        }
        return getScrollParent(getParentNode(node));
      }
      function listScrollParents(element, list) {
        var _element$ownerDocumen;
        if (list === void 0) {
          list = [];
        }
        var scrollParent = getScrollParent(element);
        var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
        var win = getWindow(scrollParent);
        var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
        var updatedList = list.concat(target);
        return isBody ? updatedList : (
          // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
          updatedList.concat(listScrollParents(getParentNode(target)))
        );
      }
      function isTableElement(element) {
        return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
      }
      function getTrueOffsetParent(element) {
        if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
        getComputedStyle2(element).position === "fixed") {
          return null;
        }
        return element.offsetParent;
      }
      function getContainingBlock(element) {
        var isFirefox = /firefox/i.test(getUAString());
        var isIE = /Trident/i.test(getUAString());
        if (isIE && isHTMLElement(element)) {
          var elementCss = getComputedStyle2(element);
          if (elementCss.position === "fixed") {
            return null;
          }
        }
        var currentNode = getParentNode(element);
        if (isShadowRoot(currentNode)) {
          currentNode = currentNode.host;
        }
        while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
          var css = getComputedStyle2(currentNode);
          if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
            return currentNode;
          } else {
            currentNode = currentNode.parentNode;
          }
        }
        return null;
      }
      function getOffsetParent(element) {
        var window2 = getWindow(element);
        var offsetParent = getTrueOffsetParent(element);
        while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
          offsetParent = getTrueOffsetParent(offsetParent);
        }
        if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
          return window2;
        }
        return offsetParent || getContainingBlock(element) || window2;
      }
      var top = "top";
      var bottom = "bottom";
      var right = "right";
      var left = "left";
      var auto = "auto";
      var basePlacements = [top, bottom, right, left];
      var start4 = "start";
      var end3 = "end";
      var clippingParents = "clippingParents";
      var viewport = "viewport";
      var popper = "popper";
      var reference = "reference";
      var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
        return acc.concat([placement + "-" + start4, placement + "-" + end3]);
      }, []);
      var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
        return acc.concat([placement, placement + "-" + start4, placement + "-" + end3]);
      }, []);
      var beforeRead = "beforeRead";
      var read2 = "read";
      var afterRead = "afterRead";
      var beforeMain = "beforeMain";
      var main = "main";
      var afterMain = "afterMain";
      var beforeWrite = "beforeWrite";
      var write2 = "write";
      var afterWrite = "afterWrite";
      var modifierPhases = [beforeRead, read2, afterRead, beforeMain, main, afterMain, beforeWrite, write2, afterWrite];
      function order(modifiers) {
        var map = /* @__PURE__ */ new Map();
        var visited = /* @__PURE__ */ new Set();
        var result = [];
        modifiers.forEach(function(modifier) {
          map.set(modifier.name, modifier);
        });
        function sort(modifier) {
          visited.add(modifier.name);
          var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
          requires.forEach(function(dep) {
            if (!visited.has(dep)) {
              var depModifier = map.get(dep);
              if (depModifier) {
                sort(depModifier);
              }
            }
          });
          result.push(modifier);
        }
        modifiers.forEach(function(modifier) {
          if (!visited.has(modifier.name)) {
            sort(modifier);
          }
        });
        return result;
      }
      function orderModifiers(modifiers) {
        var orderedModifiers = order(modifiers);
        return modifierPhases.reduce(function(acc, phase) {
          return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
          }));
        }, []);
      }
      function debounce(fn) {
        var pending;
        return function() {
          if (!pending) {
            pending = new Promise(function(resolve) {
              Promise.resolve().then(function() {
                pending = void 0;
                resolve(fn());
              });
            });
          }
          return pending;
        };
      }
      function mergeByName(modifiers) {
        var merged = modifiers.reduce(function(merged2, current) {
          var existing = merged2[current.name];
          merged2[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
          }) : current;
          return merged2;
        }, {});
        return Object.keys(merged).map(function(key) {
          return merged[key];
        });
      }
      function getViewportRect(element, strategy) {
        var win = getWindow(element);
        var html = getDocumentElement(element);
        var visualViewport = win.visualViewport;
        var width = html.clientWidth;
        var height = html.clientHeight;
        var x = 0;
        var y = 0;
        if (visualViewport) {
          width = visualViewport.width;
          height = visualViewport.height;
          var layoutViewport = isLayoutViewport();
          if (layoutViewport || !layoutViewport && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
          }
        }
        return {
          width,
          height,
          x: x + getWindowScrollBarX(element),
          y
        };
      }
      function getDocumentRect(element) {
        var _element$ownerDocumen;
        var html = getDocumentElement(element);
        var winScroll = getWindowScroll(element);
        var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
        var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
        var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
        var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
        var y = -winScroll.scrollTop;
        if (getComputedStyle2(body || html).direction === "rtl") {
          x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
        }
        return {
          width,
          height,
          x,
          y
        };
      }
      function contains(parent, child) {
        var rootNode = child.getRootNode && child.getRootNode();
        if (parent.contains(child)) {
          return true;
        } else if (rootNode && isShadowRoot(rootNode)) {
          var next = child;
          do {
            if (next && parent.isSameNode(next)) {
              return true;
            }
            next = next.parentNode || next.host;
          } while (next);
        }
        return false;
      }
      function rectToClientRect(rect) {
        return Object.assign({}, rect, {
          left: rect.x,
          top: rect.y,
          right: rect.x + rect.width,
          bottom: rect.y + rect.height
        });
      }
      function getInnerBoundingClientRect(element, strategy) {
        var rect = getBoundingClientRect(element, false, strategy === "fixed");
        rect.top = rect.top + element.clientTop;
        rect.left = rect.left + element.clientLeft;
        rect.bottom = rect.top + element.clientHeight;
        rect.right = rect.left + element.clientWidth;
        rect.width = element.clientWidth;
        rect.height = element.clientHeight;
        rect.x = rect.left;
        rect.y = rect.top;
        return rect;
      }
      function getClientRectFromMixedType(element, clippingParent, strategy) {
        return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement3(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
      }
      function getClippingParents(element) {
        var clippingParents2 = listScrollParents(getParentNode(element));
        var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
        var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
        if (!isElement3(clipperElement)) {
          return [];
        }
        return clippingParents2.filter(function(clippingParent) {
          return isElement3(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
        });
      }
      function getClippingRect(element, boundary, rootBoundary, strategy) {
        var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
        var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
        var firstClippingParent = clippingParents2[0];
        var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
          var rect = getClientRectFromMixedType(element, clippingParent, strategy);
          accRect.top = max(rect.top, accRect.top);
          accRect.right = min(rect.right, accRect.right);
          accRect.bottom = min(rect.bottom, accRect.bottom);
          accRect.left = max(rect.left, accRect.left);
          return accRect;
        }, getClientRectFromMixedType(element, firstClippingParent, strategy));
        clippingRect.width = clippingRect.right - clippingRect.left;
        clippingRect.height = clippingRect.bottom - clippingRect.top;
        clippingRect.x = clippingRect.left;
        clippingRect.y = clippingRect.top;
        return clippingRect;
      }
      function getBasePlacement(placement) {
        return placement.split("-")[0];
      }
      function getVariation(placement) {
        return placement.split("-")[1];
      }
      function getMainAxisFromPlacement(placement) {
        return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
      }
      function computeOffsets(_ref) {
        var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
        var basePlacement = placement ? getBasePlacement(placement) : null;
        var variation = placement ? getVariation(placement) : null;
        var commonX = reference2.x + reference2.width / 2 - element.width / 2;
        var commonY = reference2.y + reference2.height / 2 - element.height / 2;
        var offsets;
        switch (basePlacement) {
          case top:
            offsets = {
              x: commonX,
              y: reference2.y - element.height
            };
            break;
          case bottom:
            offsets = {
              x: commonX,
              y: reference2.y + reference2.height
            };
            break;
          case right:
            offsets = {
              x: reference2.x + reference2.width,
              y: commonY
            };
            break;
          case left:
            offsets = {
              x: reference2.x - element.width,
              y: commonY
            };
            break;
          default:
            offsets = {
              x: reference2.x,
              y: reference2.y
            };
        }
        var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
        if (mainAxis != null) {
          var len = mainAxis === "y" ? "height" : "width";
          switch (variation) {
            case start4:
              offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
              break;
            case end3:
              offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
              break;
          }
        }
        return offsets;
      }
      function getFreshSideObject() {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        };
      }
      function mergePaddingObject(paddingObject) {
        return Object.assign({}, getFreshSideObject(), paddingObject);
      }
      function expandToHashMap(value, keys) {
        return keys.reduce(function(hashMap, key) {
          hashMap[key] = value;
          return hashMap;
        }, {});
      }
      function detectOverflow(state, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
        var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
        var altContext = elementContext === popper ? reference : popper;
        var popperRect = state.rects.popper;
        var element = state.elements[altBoundary ? altContext : elementContext];
        var clippingClientRect = getClippingRect(isElement3(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
        var referenceClientRect = getBoundingClientRect(state.elements.reference);
        var popperOffsets2 = computeOffsets({
          reference: referenceClientRect,
          element: popperRect,
          strategy: "absolute",
          placement
        });
        var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
        var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
        var overflowOffsets = {
          top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
          bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
          left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
          right: elementClientRect.right - clippingClientRect.right + paddingObject.right
        };
        var offsetData = state.modifiersData.offset;
        if (elementContext === popper && offsetData) {
          var offset2 = offsetData[placement];
          Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
            var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset2[axis] * multiply;
          });
        }
        return overflowOffsets;
      }
      var DEFAULT_OPTIONS = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
      };
      function areValidElements() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return !args.some(function(element) {
          return !(element && typeof element.getBoundingClientRect === "function");
        });
      }
      function popperGenerator(generatorOptions) {
        if (generatorOptions === void 0) {
          generatorOptions = {};
        }
        var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
        return function createPopper2(reference2, popper2, options) {
          if (options === void 0) {
            options = defaultOptions;
          }
          var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
              reference: reference2,
              popper: popper2
            },
            attributes: {},
            styles: {}
          };
          var effectCleanupFns = [];
          var isDestroyed = false;
          var instance = {
            state,
            setOptions: function setOptions(setOptionsAction) {
              var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
              cleanupModifierEffects();
              state.options = Object.assign({}, defaultOptions, state.options, options2);
              state.scrollParents = {
                reference: isElement3(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
                popper: listScrollParents(popper2)
              };
              var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
              state.orderedModifiers = orderedModifiers.filter(function(m) {
                return m.enabled;
              });
              runModifierEffects();
              return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
              if (isDestroyed) {
                return;
              }
              var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
              if (!areValidElements(reference3, popper3)) {
                return;
              }
              state.rects = {
                reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
                popper: getLayoutRect(popper3)
              };
              state.reset = false;
              state.placement = state.options.placement;
              state.orderedModifiers.forEach(function(modifier) {
                return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
              });
              for (var index = 0; index < state.orderedModifiers.length; index++) {
                if (state.reset === true) {
                  state.reset = false;
                  index = -1;
                  continue;
                }
                var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                if (typeof fn === "function") {
                  state = fn({
                    state,
                    options: _options,
                    name,
                    instance
                  }) || state;
                }
              }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: debounce(function() {
              return new Promise(function(resolve) {
                instance.forceUpdate();
                resolve(state);
              });
            }),
            destroy: function destroy() {
              cleanupModifierEffects();
              isDestroyed = true;
            }
          };
          if (!areValidElements(reference2, popper2)) {
            return instance;
          }
          instance.setOptions(options).then(function(state2) {
            if (!isDestroyed && options.onFirstUpdate) {
              options.onFirstUpdate(state2);
            }
          });
          function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref) {
              var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
              if (typeof effect2 === "function") {
                var cleanupFn = effect2({
                  state,
                  name,
                  instance,
                  options: options2
                });
                var noopFn = function noopFn2() {
                };
                effectCleanupFns.push(cleanupFn || noopFn);
              }
            });
          }
          function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
              return fn();
            });
            effectCleanupFns = [];
          }
          return instance;
        };
      }
      var passive = {
        passive: true
      };
      function effect$2(_ref) {
        var state = _ref.state, instance = _ref.instance, options = _ref.options;
        var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
        var window2 = getWindow(state.elements.popper);
        var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
        if (scroll) {
          scrollParents.forEach(function(scrollParent) {
            scrollParent.addEventListener("scroll", instance.update, passive);
          });
        }
        if (resize) {
          window2.addEventListener("resize", instance.update, passive);
        }
        return function() {
          if (scroll) {
            scrollParents.forEach(function(scrollParent) {
              scrollParent.removeEventListener("scroll", instance.update, passive);
            });
          }
          if (resize) {
            window2.removeEventListener("resize", instance.update, passive);
          }
        };
      }
      var eventListeners = {
        name: "eventListeners",
        enabled: true,
        phase: "write",
        fn: function fn() {
        },
        effect: effect$2,
        data: {}
      };
      function popperOffsets(_ref) {
        var state = _ref.state, name = _ref.name;
        state.modifiersData[name] = computeOffsets({
          reference: state.rects.reference,
          element: state.rects.popper,
          strategy: "absolute",
          placement: state.placement
        });
      }
      var popperOffsets$1 = {
        name: "popperOffsets",
        enabled: true,
        phase: "read",
        fn: popperOffsets,
        data: {}
      };
      var unsetSides = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
      };
      function roundOffsetsByDPR(_ref, win) {
        var x = _ref.x, y = _ref.y;
        var dpr = win.devicePixelRatio || 1;
        return {
          x: round(x * dpr) / dpr || 0,
          y: round(y * dpr) / dpr || 0
        };
      }
      function mapToStyles(_ref2) {
        var _Object$assign2;
        var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
        var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
        var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
          x,
          y
        }) : {
          x,
          y
        };
        x = _ref3.x;
        y = _ref3.y;
        var hasX = offsets.hasOwnProperty("x");
        var hasY = offsets.hasOwnProperty("y");
        var sideX = left;
        var sideY = top;
        var win = window;
        if (adaptive) {
          var offsetParent = getOffsetParent(popper2);
          var heightProp = "clientHeight";
          var widthProp = "clientWidth";
          if (offsetParent === getWindow(popper2)) {
            offsetParent = getDocumentElement(popper2);
            if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
              heightProp = "scrollHeight";
              widthProp = "scrollWidth";
            }
          }
          offsetParent = offsetParent;
          if (placement === top || (placement === left || placement === right) && variation === end3) {
            sideY = bottom;
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
              // $FlowFixMe[prop-missing]
              offsetParent[heightProp]
            );
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
          }
          if (placement === left || (placement === top || placement === bottom) && variation === end3) {
            sideX = right;
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
              // $FlowFixMe[prop-missing]
              offsetParent[widthProp]
            );
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
          }
        }
        var commonStyles = Object.assign({
          position
        }, adaptive && unsetSides);
        var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
          x,
          y
        }, getWindow(popper2)) : {
          x,
          y
        };
        x = _ref4.x;
        y = _ref4.y;
        if (gpuAcceleration) {
          var _Object$assign;
          return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
        }
        return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
      }
      function computeStyles(_ref5) {
        var state = _ref5.state, options = _ref5.options;
        var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
        var commonStyles = {
          placement: getBasePlacement(state.placement),
          variation: getVariation(state.placement),
          popper: state.elements.popper,
          popperRect: state.rects.popper,
          gpuAcceleration,
          isFixed: state.options.strategy === "fixed"
        };
        if (state.modifiersData.popperOffsets != null) {
          state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.popperOffsets,
            position: state.options.strategy,
            adaptive,
            roundOffsets
          })));
        }
        if (state.modifiersData.arrow != null) {
          state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.arrow,
            position: "absolute",
            adaptive: false,
            roundOffsets
          })));
        }
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-placement": state.placement
        });
      }
      var computeStyles$1 = {
        name: "computeStyles",
        enabled: true,
        phase: "beforeWrite",
        fn: computeStyles,
        data: {}
      };
      function applyStyles(_ref) {
        var state = _ref.state;
        Object.keys(state.elements).forEach(function(name) {
          var style = state.styles[name] || {};
          var attributes = state.attributes[name] || {};
          var element = state.elements[name];
          if (!isHTMLElement(element) || !getNodeName(element)) {
            return;
          }
          Object.assign(element.style, style);
          Object.keys(attributes).forEach(function(name2) {
            var value = attributes[name2];
            if (value === false) {
              element.removeAttribute(name2);
            } else {
              element.setAttribute(name2, value === true ? "" : value);
            }
          });
        });
      }
      function effect$1(_ref2) {
        var state = _ref2.state;
        var initialStyles = {
          popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;
        if (state.elements.arrow) {
          Object.assign(state.elements.arrow.style, initialStyles.arrow);
        }
        return function() {
          Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
            var style = styleProperties.reduce(function(style2, property) {
              style2[property] = "";
              return style2;
            }, {});
            if (!isHTMLElement(element) || !getNodeName(element)) {
              return;
            }
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
              element.removeAttribute(attribute);
            });
          });
        };
      }
      var applyStyles$1 = {
        name: "applyStyles",
        enabled: true,
        phase: "write",
        fn: applyStyles,
        effect: effect$1,
        requires: ["computeStyles"]
      };
      function distanceAndSkiddingToXY(placement, rects, offset2) {
        var basePlacement = getBasePlacement(placement);
        var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
        var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
          placement
        })) : offset2, skidding = _ref[0], distance = _ref[1];
        skidding = skidding || 0;
        distance = (distance || 0) * invertDistance;
        return [left, right].indexOf(basePlacement) >= 0 ? {
          x: distance,
          y: skidding
        } : {
          x: skidding,
          y: distance
        };
      }
      function offset(_ref2) {
        var state = _ref2.state, options = _ref2.options, name = _ref2.name;
        var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
        var data = placements.reduce(function(acc, placement) {
          acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
          return acc;
        }, {});
        var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
        if (state.modifiersData.popperOffsets != null) {
          state.modifiersData.popperOffsets.x += x;
          state.modifiersData.popperOffsets.y += y;
        }
        state.modifiersData[name] = data;
      }
      var offset$1 = {
        name: "offset",
        enabled: true,
        phase: "main",
        requires: ["popperOffsets"],
        fn: offset
      };
      var hash$1 = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, function(matched) {
          return hash$1[matched];
        });
      }
      var hash2 = {
        start: "end",
        end: "start"
      };
      function getOppositeVariationPlacement(placement) {
        return placement.replace(/start|end/g, function(matched) {
          return hash2[matched];
        });
      }
      function computeAutoPlacement(state, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
        var variation = getVariation(placement);
        var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
          return getVariation(placement2) === variation;
        }) : basePlacements;
        var allowedPlacements = placements$1.filter(function(placement2) {
          return allowedAutoPlacements.indexOf(placement2) >= 0;
        });
        if (allowedPlacements.length === 0) {
          allowedPlacements = placements$1;
        }
        var overflows = allowedPlacements.reduce(function(acc, placement2) {
          acc[placement2] = detectOverflow(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding
          })[getBasePlacement(placement2)];
          return acc;
        }, {});
        return Object.keys(overflows).sort(function(a, b) {
          return overflows[a] - overflows[b];
        });
      }
      function getExpandedFallbackPlacements(placement) {
        if (getBasePlacement(placement) === auto) {
          return [];
        }
        var oppositePlacement = getOppositePlacement(placement);
        return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
      }
      function flip(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        if (state.modifiersData[name]._skip) {
          return;
        }
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
        var preferredPlacement = state.options.placement;
        var basePlacement = getBasePlacement(preferredPlacement);
        var isBasePlacement = basePlacement === preferredPlacement;
        var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
        var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
          return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding,
            flipVariations,
            allowedAutoPlacements
          }) : placement2);
        }, []);
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var checksMap = /* @__PURE__ */ new Map();
        var makeFallbackChecks = true;
        var firstFittingPlacement = placements2[0];
        for (var i = 0; i < placements2.length; i++) {
          var placement = placements2[i];
          var _basePlacement = getBasePlacement(placement);
          var isStartVariation = getVariation(placement) === start4;
          var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
          var len = isVertical ? "width" : "height";
          var overflow = detectOverflow(state, {
            placement,
            boundary,
            rootBoundary,
            altBoundary,
            padding
          });
          var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
          if (referenceRect[len] > popperRect[len]) {
            mainVariationSide = getOppositePlacement(mainVariationSide);
          }
          var altVariationSide = getOppositePlacement(mainVariationSide);
          var checks = [];
          if (checkMainAxis) {
            checks.push(overflow[_basePlacement] <= 0);
          }
          if (checkAltAxis) {
            checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
          }
          if (checks.every(function(check) {
            return check;
          })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
          }
          checksMap.set(placement, checks);
        }
        if (makeFallbackChecks) {
          var numberOfChecks = flipVariations ? 3 : 1;
          var _loop = function _loop2(_i2) {
            var fittingPlacement = placements2.find(function(placement2) {
              var checks2 = checksMap.get(placement2);
              if (checks2) {
                return checks2.slice(0, _i2).every(function(check) {
                  return check;
                });
              }
            });
            if (fittingPlacement) {
              firstFittingPlacement = fittingPlacement;
              return "break";
            }
          };
          for (var _i = numberOfChecks; _i > 0; _i--) {
            var _ret = _loop(_i);
            if (_ret === "break") break;
          }
        }
        if (state.placement !== firstFittingPlacement) {
          state.modifiersData[name]._skip = true;
          state.placement = firstFittingPlacement;
          state.reset = true;
        }
      }
      var flip$1 = {
        name: "flip",
        enabled: true,
        phase: "main",
        fn: flip,
        requiresIfExists: ["offset"],
        data: {
          _skip: false
        }
      };
      function getAltAxis(axis) {
        return axis === "x" ? "y" : "x";
      }
      function within(min$1, value, max$1) {
        return max(min$1, min(value, max$1));
      }
      function withinMaxClamp(min2, value, max2) {
        var v = within(min2, value, max2);
        return v > max2 ? max2 : v;
      }
      function preventOverflow(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
        var overflow = detectOverflow(state, {
          boundary,
          rootBoundary,
          padding,
          altBoundary
        });
        var basePlacement = getBasePlacement(state.placement);
        var variation = getVariation(state.placement);
        var isBasePlacement = !variation;
        var mainAxis = getMainAxisFromPlacement(basePlacement);
        var altAxis = getAltAxis(mainAxis);
        var popperOffsets2 = state.modifiersData.popperOffsets;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
          placement: state.placement
        })) : tetherOffset;
        var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
          mainAxis: tetherOffsetValue,
          altAxis: tetherOffsetValue
        } : Object.assign({
          mainAxis: 0,
          altAxis: 0
        }, tetherOffsetValue);
        var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
        var data = {
          x: 0,
          y: 0
        };
        if (!popperOffsets2) {
          return;
        }
        if (checkMainAxis) {
          var _offsetModifierState$;
          var mainSide = mainAxis === "y" ? top : left;
          var altSide = mainAxis === "y" ? bottom : right;
          var len = mainAxis === "y" ? "height" : "width";
          var offset2 = popperOffsets2[mainAxis];
          var min$1 = offset2 + overflow[mainSide];
          var max$1 = offset2 - overflow[altSide];
          var additive = tether ? -popperRect[len] / 2 : 0;
          var minLen = variation === start4 ? referenceRect[len] : popperRect[len];
          var maxLen = variation === start4 ? -popperRect[len] : -referenceRect[len];
          var arrowElement = state.elements.arrow;
          var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
            width: 0,
            height: 0
          };
          var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
          var arrowPaddingMin = arrowPaddingObject[mainSide];
          var arrowPaddingMax = arrowPaddingObject[altSide];
          var arrowLen = within(0, referenceRect[len], arrowRect[len]);
          var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
          var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
          var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
          var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
          var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
          var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
          var tetherMax = offset2 + maxOffset - offsetModifierValue;
          var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
          popperOffsets2[mainAxis] = preventedOffset;
          data[mainAxis] = preventedOffset - offset2;
        }
        if (checkAltAxis) {
          var _offsetModifierState$2;
          var _mainSide = mainAxis === "x" ? top : left;
          var _altSide = mainAxis === "x" ? bottom : right;
          var _offset = popperOffsets2[altAxis];
          var _len = altAxis === "y" ? "height" : "width";
          var _min = _offset + overflow[_mainSide];
          var _max = _offset - overflow[_altSide];
          var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
          var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
          var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
          var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
          var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
          popperOffsets2[altAxis] = _preventedOffset;
          data[altAxis] = _preventedOffset - _offset;
        }
        state.modifiersData[name] = data;
      }
      var preventOverflow$1 = {
        name: "preventOverflow",
        enabled: true,
        phase: "main",
        fn: preventOverflow,
        requiresIfExists: ["offset"]
      };
      var toPaddingObject = function toPaddingObject2(padding, state) {
        padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
          placement: state.placement
        })) : padding;
        return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
      };
      function arrow(_ref) {
        var _state$modifiersData$;
        var state = _ref.state, name = _ref.name, options = _ref.options;
        var arrowElement = state.elements.arrow;
        var popperOffsets2 = state.modifiersData.popperOffsets;
        var basePlacement = getBasePlacement(state.placement);
        var axis = getMainAxisFromPlacement(basePlacement);
        var isVertical = [left, right].indexOf(basePlacement) >= 0;
        var len = isVertical ? "height" : "width";
        if (!arrowElement || !popperOffsets2) {
          return;
        }
        var paddingObject = toPaddingObject(options.padding, state);
        var arrowRect = getLayoutRect(arrowElement);
        var minProp = axis === "y" ? top : left;
        var maxProp = axis === "y" ? bottom : right;
        var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
        var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
        var arrowOffsetParent = getOffsetParent(arrowElement);
        var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
        var centerToReference = endDiff / 2 - startDiff / 2;
        var min2 = paddingObject[minProp];
        var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
        var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
        var offset2 = within(min2, center, max2);
        var axisProp = axis;
        state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
      }
      function effect(_ref2) {
        var state = _ref2.state, options = _ref2.options;
        var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
        if (arrowElement == null) {
          return;
        }
        if (typeof arrowElement === "string") {
          arrowElement = state.elements.popper.querySelector(arrowElement);
          if (!arrowElement) {
            return;
          }
        }
        if (!contains(state.elements.popper, arrowElement)) {
          return;
        }
        state.elements.arrow = arrowElement;
      }
      var arrow$1 = {
        name: "arrow",
        enabled: true,
        phase: "main",
        fn: arrow,
        effect,
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
      };
      function getSideOffsets(overflow, rect, preventedOffsets) {
        if (preventedOffsets === void 0) {
          preventedOffsets = {
            x: 0,
            y: 0
          };
        }
        return {
          top: overflow.top - rect.height - preventedOffsets.y,
          right: overflow.right - rect.width + preventedOffsets.x,
          bottom: overflow.bottom - rect.height + preventedOffsets.y,
          left: overflow.left - rect.width - preventedOffsets.x
        };
      }
      function isAnySideFullyClipped(overflow) {
        return [top, right, bottom, left].some(function(side) {
          return overflow[side] >= 0;
        });
      }
      function hide(_ref) {
        var state = _ref.state, name = _ref.name;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var preventedOffsets = state.modifiersData.preventOverflow;
        var referenceOverflow = detectOverflow(state, {
          elementContext: "reference"
        });
        var popperAltOverflow = detectOverflow(state, {
          altBoundary: true
        });
        var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
        var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
        var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
        var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
        state.modifiersData[name] = {
          referenceClippingOffsets,
          popperEscapeOffsets,
          isReferenceHidden,
          hasPopperEscaped
        };
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-reference-hidden": isReferenceHidden,
          "data-popper-escaped": hasPopperEscaped
        });
      }
      var hide$1 = {
        name: "hide",
        enabled: true,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: hide
      };
      var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
      var createPopper$1 = /* @__PURE__ */ popperGenerator({
        defaultModifiers: defaultModifiers$1
      });
      var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
      var createPopper = /* @__PURE__ */ popperGenerator({
        defaultModifiers
      });
      exports.applyStyles = applyStyles$1;
      exports.arrow = arrow$1;
      exports.computeStyles = computeStyles$1;
      exports.createPopper = createPopper;
      exports.createPopperLite = createPopper$1;
      exports.defaultModifiers = defaultModifiers;
      exports.detectOverflow = detectOverflow;
      exports.eventListeners = eventListeners;
      exports.flip = flip$1;
      exports.hide = hide$1;
      exports.offset = offset$1;
      exports.popperGenerator = popperGenerator;
      exports.popperOffsets = popperOffsets$1;
      exports.preventOverflow = preventOverflow$1;
    }
  });

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/lib/bootstrap/dom/data.js
  var require_data = __commonJS({
    "ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/lib/bootstrap/dom/data.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Data = factory());
      })(exports, (function() {
        "use strict";
        const elementMap = /* @__PURE__ */ new Map();
        const data = {
          set(element, key, instance) {
            if (!elementMap.has(element)) {
              elementMap.set(element, /* @__PURE__ */ new Map());
            }
            const instanceMap = elementMap.get(element);
            if (!instanceMap.has(key) && instanceMap.size !== 0) {
              console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
              return;
            }
            instanceMap.set(key, instance);
          },
          get(element, key) {
            if (elementMap.has(element)) {
              return elementMap.get(element).get(key) || null;
            }
            return null;
          },
          remove(element, key) {
            if (!elementMap.has(element)) {
              return;
            }
            const instanceMap = elementMap.get(element);
            instanceMap.delete(key);
            if (instanceMap.size === 0) {
              elementMap.delete(element);
            }
          }
        };
        return data;
      }));
    }
  });

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/lib/bootstrap/util/index.js
  var require_util = __commonJS({
    "ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/lib/bootstrap/util/index.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.Index = {}));
      })(exports, (function(exports2) {
        "use strict";
        const MAX_UID = 1e6;
        const MILLISECONDS_MULTIPLIER = 1e3;
        const TRANSITION_END = "transitionend";
        const parseSelector = (selector) => {
          if (selector && window.CSS && window.CSS.escape) {
            selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
          }
          return selector;
        };
        const toType = (object) => {
          if (object === null || object === void 0) {
            return `${object}`;
          }
          return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
        };
        const getUID = (prefix) => {
          do {
            prefix += Math.floor(Math.random() * MAX_UID);
          } while (document.getElementById(prefix));
          return prefix;
        };
        const getTransitionDurationFromElement = (element) => {
          if (!element) {
            return 0;
          }
          let {
            transitionDuration,
            transitionDelay
          } = window.getComputedStyle(element);
          const floatTransitionDuration = Number.parseFloat(transitionDuration);
          const floatTransitionDelay = Number.parseFloat(transitionDelay);
          if (!floatTransitionDuration && !floatTransitionDelay) {
            return 0;
          }
          transitionDuration = transitionDuration.split(",")[0];
          transitionDelay = transitionDelay.split(",")[0];
          return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
        };
        const triggerTransitionEnd = (element) => {
          element.dispatchEvent(new Event(TRANSITION_END));
        };
        const isElement3 = (object) => {
          if (!object || typeof object !== "object") {
            return false;
          }
          if (typeof object.jquery !== "undefined") {
            object = object[0];
          }
          return typeof object.nodeType !== "undefined";
        };
        const getElement = (object) => {
          if (isElement3(object)) {
            return object.jquery ? object[0] : object;
          }
          if (typeof object === "string" && object.length > 0) {
            return document.querySelector(parseSelector(object));
          }
          return null;
        };
        const isVisible = (element) => {
          if (!isElement3(element) || element.getClientRects().length === 0) {
            return false;
          }
          const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
          const closedDetails = element.closest("details:not([open])");
          if (!closedDetails) {
            return elementIsVisible;
          }
          if (closedDetails !== element) {
            const summary = element.closest("summary");
            if (summary && summary.parentNode !== closedDetails) {
              return false;
            }
            if (summary === null) {
              return false;
            }
          }
          return elementIsVisible;
        };
        const isDisabled = (element) => {
          if (!element || element.nodeType !== Node.ELEMENT_NODE) {
            return true;
          }
          if (element.classList.contains("disabled")) {
            return true;
          }
          if (typeof element.disabled !== "undefined") {
            return element.disabled;
          }
          return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
        };
        const findShadowRoot = (element) => {
          if (!document.documentElement.attachShadow) {
            return null;
          }
          if (typeof element.getRootNode === "function") {
            const root = element.getRootNode();
            return root instanceof ShadowRoot ? root : null;
          }
          if (element instanceof ShadowRoot) {
            return element;
          }
          if (!element.parentNode) {
            return null;
          }
          return findShadowRoot(element.parentNode);
        };
        const noop = () => {
        };
        const reflow = (element) => {
          element.offsetHeight;
        };
        const getjQuery = () => {
          if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
            return window.jQuery;
          }
          return null;
        };
        const DOMContentLoadedCallbacks = [];
        const onDOMContentLoaded = (callback) => {
          if (document.readyState === "loading") {
            if (!DOMContentLoadedCallbacks.length) {
              document.addEventListener("DOMContentLoaded", () => {
                for (const callback2 of DOMContentLoadedCallbacks) {
                  callback2();
                }
              });
            }
            DOMContentLoadedCallbacks.push(callback);
          } else {
            callback();
          }
        };
        const isRTL = () => document.documentElement.dir === "rtl";
        const defineJQueryPlugin = (plugin) => {
          onDOMContentLoaded(() => {
            const $ = getjQuery();
            if ($) {
              const name = plugin.NAME;
              const JQUERY_NO_CONFLICT = $.fn[name];
              $.fn[name] = plugin.jQueryInterface;
              $.fn[name].Constructor = plugin;
              $.fn[name].noConflict = () => {
                $.fn[name] = JQUERY_NO_CONFLICT;
                return plugin.jQueryInterface;
              };
            }
          });
        };
        const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
          return typeof possibleCallback === "function" ? possibleCallback.call(...args) : defaultValue;
        };
        const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
          if (!waitForTransition) {
            execute(callback);
            return;
          }
          const durationPadding = 5;
          const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
          let called = false;
          const handler = ({
            target
          }) => {
            if (target !== transitionElement) {
              return;
            }
            called = true;
            transitionElement.removeEventListener(TRANSITION_END, handler);
            execute(callback);
          };
          transitionElement.addEventListener(TRANSITION_END, handler);
          setTimeout(() => {
            if (!called) {
              triggerTransitionEnd(transitionElement);
            }
          }, emulatedDuration);
        };
        const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
          const listLength = list.length;
          let index = list.indexOf(activeElement);
          if (index === -1) {
            return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
          }
          index += shouldGetNext ? 1 : -1;
          if (isCycleAllowed) {
            index = (index + listLength) % listLength;
          }
          return list[Math.max(0, Math.min(index, listLength - 1))];
        };
        exports2.defineJQueryPlugin = defineJQueryPlugin;
        exports2.execute = execute;
        exports2.executeAfterTransition = executeAfterTransition;
        exports2.findShadowRoot = findShadowRoot;
        exports2.getElement = getElement;
        exports2.getNextActiveElement = getNextActiveElement;
        exports2.getTransitionDurationFromElement = getTransitionDurationFromElement;
        exports2.getUID = getUID;
        exports2.getjQuery = getjQuery;
        exports2.isDisabled = isDisabled;
        exports2.isElement = isElement3;
        exports2.isRTL = isRTL;
        exports2.isVisible = isVisible;
        exports2.noop = noop;
        exports2.onDOMContentLoaded = onDOMContentLoaded;
        exports2.parseSelector = parseSelector;
        exports2.reflow = reflow;
        exports2.toType = toType;
        exports2.triggerTransitionEnd = triggerTransitionEnd;
        Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
      }));
    }
  });

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/lib/bootstrap/dom/event-handler.js
  var require_event_handler = __commonJS({
    "ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/lib/bootstrap/dom/event-handler.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_util()) : typeof define === "function" && define.amd ? define(["../util/index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.EventHandler = factory(global.Index));
      })(exports, (function(index_js) {
        "use strict";
        const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
        const stripNameRegex = /\..*/;
        const stripUidRegex = /::\d+$/;
        const eventRegistry = {};
        let uidEvent = 1;
        const customEvents = {
          mouseenter: "mouseover",
          mouseleave: "mouseout"
        };
        const nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
        function makeEventUid(element, uid) {
          return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
        }
        function getElementEvents(element) {
          const uid = makeEventUid(element);
          element.uidEvent = uid;
          eventRegistry[uid] = eventRegistry[uid] || {};
          return eventRegistry[uid];
        }
        function bootstrapHandler(element, fn) {
          return function handler(event) {
            hydrateObj(event, {
              delegateTarget: element
            });
            if (handler.oneOff) {
              EventHandler.off(element, event.type, fn);
            }
            return fn.apply(element, [event]);
          };
        }
        function bootstrapDelegationHandler(element, selector, fn) {
          return function handler(event) {
            const domElements = element.querySelectorAll(selector);
            for (let {
              target
            } = event; target && target !== this; target = target.parentNode) {
              for (const domElement of domElements) {
                if (domElement !== target) {
                  continue;
                }
                hydrateObj(event, {
                  delegateTarget: target
                });
                if (handler.oneOff) {
                  EventHandler.off(element, event.type, selector, fn);
                }
                return fn.apply(target, [event]);
              }
            }
          };
        }
        function findHandler(events, callable, delegationSelector = null) {
          return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
        }
        function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
          const isDelegated = typeof handler === "string";
          const callable = isDelegated ? delegationFunction : handler || delegationFunction;
          let typeEvent = getTypeEvent(originalTypeEvent);
          if (!nativeEvents.has(typeEvent)) {
            typeEvent = originalTypeEvent;
          }
          return [isDelegated, callable, typeEvent];
        }
        function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
          if (typeof originalTypeEvent !== "string" || !element) {
            return;
          }
          let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
          if (originalTypeEvent in customEvents) {
            const wrapFunction = (fn2) => {
              return function(event) {
                if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
                  return fn2.call(this, event);
                }
              };
            };
            callable = wrapFunction(callable);
          }
          const events = getElementEvents(element);
          const handlers = events[typeEvent] || (events[typeEvent] = {});
          const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
          if (previousFunction) {
            previousFunction.oneOff = previousFunction.oneOff && oneOff;
            return;
          }
          const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
          const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
          fn.delegationSelector = isDelegated ? handler : null;
          fn.callable = callable;
          fn.oneOff = oneOff;
          fn.uidEvent = uid;
          handlers[uid] = fn;
          element.addEventListener(typeEvent, fn, isDelegated);
        }
        function removeHandler(element, events, typeEvent, handler, delegationSelector) {
          const fn = findHandler(events[typeEvent], handler, delegationSelector);
          if (!fn) {
            return;
          }
          element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
          delete events[typeEvent][fn.uidEvent];
        }
        function removeNamespacedHandlers(element, events, typeEvent, namespace) {
          const storeElementEvent = events[typeEvent] || {};
          for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
            if (handlerKey.includes(namespace)) {
              removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
            }
          }
        }
        function getTypeEvent(event) {
          event = event.replace(stripNameRegex, "");
          return customEvents[event] || event;
        }
        const EventHandler = {
          on(element, event, handler, delegationFunction) {
            addHandler(element, event, handler, delegationFunction, false);
          },
          one(element, event, handler, delegationFunction) {
            addHandler(element, event, handler, delegationFunction, true);
          },
          off(element, originalTypeEvent, handler, delegationFunction) {
            if (typeof originalTypeEvent !== "string" || !element) {
              return;
            }
            const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
            const inNamespace = typeEvent !== originalTypeEvent;
            const events = getElementEvents(element);
            const storeElementEvent = events[typeEvent] || {};
            const isNamespace = originalTypeEvent.startsWith(".");
            if (typeof callable !== "undefined") {
              if (!Object.keys(storeElementEvent).length) {
                return;
              }
              removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
              return;
            }
            if (isNamespace) {
              for (const elementEvent of Object.keys(events)) {
                removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
              }
            }
            for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
              const handlerKey = keyHandlers.replace(stripUidRegex, "");
              if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
              }
            }
          },
          trigger(element, event, args) {
            if (typeof event !== "string" || !element) {
              return null;
            }
            const $ = index_js.getjQuery();
            const typeEvent = getTypeEvent(event);
            const inNamespace = event !== typeEvent;
            let jQueryEvent = null;
            let bubbles = true;
            let nativeDispatch = true;
            let defaultPrevented = false;
            if (inNamespace && $) {
              jQueryEvent = $.Event(event, args);
              $(element).trigger(jQueryEvent);
              bubbles = !jQueryEvent.isPropagationStopped();
              nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
              defaultPrevented = jQueryEvent.isDefaultPrevented();
            }
            const evt = hydrateObj(new Event(event, {
              bubbles,
              cancelable: true
            }), args);
            if (defaultPrevented) {
              evt.preventDefault();
            }
            if (nativeDispatch) {
              element.dispatchEvent(evt);
            }
            if (evt.defaultPrevented && jQueryEvent) {
              jQueryEvent.preventDefault();
            }
            return evt;
          }
        };
        function hydrateObj(obj, meta = {}) {
          for (const [key, value] of Object.entries(meta)) {
            try {
              obj[key] = value;
            } catch (_unused) {
              Object.defineProperty(obj, key, {
                configurable: true,
                get() {
                  return value;
                }
              });
            }
          }
          return obj;
        }
        return EventHandler;
      }));
    }
  });

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/lib/bootstrap/dom/manipulator.js
  var require_manipulator = __commonJS({
    "ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/lib/bootstrap/dom/manipulator.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Manipulator = factory());
      })(exports, (function() {
        "use strict";
        function normalizeData(value) {
          if (value === "true") {
            return true;
          }
          if (value === "false") {
            return false;
          }
          if (value === Number(value).toString()) {
            return Number(value);
          }
          if (value === "" || value === "null") {
            return null;
          }
          if (typeof value !== "string") {
            return value;
          }
          try {
            return JSON.parse(decodeURIComponent(value));
          } catch (_unused) {
            return value;
          }
        }
        function normalizeDataKey(key) {
          return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
        }
        const Manipulator = {
          setDataAttribute(element, key, value) {
            element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
          },
          removeDataAttribute(element, key) {
            element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
          },
          getDataAttributes(element) {
            if (!element) {
              return {};
            }
            const attributes = {};
            const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
            for (const key of bsKeys) {
              let pureKey = key.replace(/^bs/, "");
              pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1);
              attributes[pureKey] = normalizeData(element.dataset[key]);
            }
            return attributes;
          },
          getDataAttribute(element, key) {
            return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
          }
        };
        return Manipulator;
      }));
    }
  });

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/lib/bootstrap/util/config.js
  var require_config = __commonJS({
    "ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/lib/bootstrap/util/config.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_manipulator(), require_util()) : typeof define === "function" && define.amd ? define(["../dom/manipulator", "./index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Config = factory(global.Manipulator, global.Index));
      })(exports, (function(Manipulator, index_js) {
        "use strict";
        class Config {
          // Getters
          static get Default() {
            return {};
          }
          static get DefaultType() {
            return {};
          }
          static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
          }
          _getConfig(config) {
            config = this._mergeConfigObj(config);
            config = this._configAfterMerge(config);
            this._typeCheckConfig(config);
            return config;
          }
          _configAfterMerge(config) {
            return config;
          }
          _mergeConfigObj(config, element) {
            const jsonConfig = index_js.isElement(element) ? Manipulator.getDataAttribute(element, "config") : {};
            return {
              ...this.constructor.Default,
              ...typeof jsonConfig === "object" ? jsonConfig : {},
              ...index_js.isElement(element) ? Manipulator.getDataAttributes(element) : {},
              ...typeof config === "object" ? config : {}
            };
          }
          _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
            for (const [property, expectedTypes] of Object.entries(configTypes)) {
              const value = config[property];
              const valueType = index_js.isElement(value) ? "element" : index_js.toType(value);
              if (!new RegExp(expectedTypes).test(valueType)) {
                throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
              }
            }
          }
        }
        return Config;
      }));
    }
  });

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/lib/bootstrap/base-component.js
  var require_base_component = __commonJS({
    "ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/lib/bootstrap/base-component.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_data(), require_event_handler(), require_config(), require_util()) : typeof define === "function" && define.amd ? define(["./dom/data", "./dom/event-handler", "./util/config", "./util/index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.BaseComponent = factory(global.Data, global.EventHandler, global.Config, global.Index));
      })(exports, (function(Data, EventHandler, Config, index_js) {
        "use strict";
        const VERSION = "5.3.8";
        class BaseComponent extends Config {
          constructor(element, config) {
            super();
            element = index_js.getElement(element);
            if (!element) {
              return;
            }
            this._element = element;
            this._config = this._getConfig(config);
            Data.set(this._element, this.constructor.DATA_KEY, this);
          }
          // Public
          dispose() {
            Data.remove(this._element, this.constructor.DATA_KEY);
            EventHandler.off(this._element, this.constructor.EVENT_KEY);
            for (const propertyName of Object.getOwnPropertyNames(this)) {
              this[propertyName] = null;
            }
          }
          // Private
          _queueCallback(callback, element, isAnimated = true) {
            index_js.executeAfterTransition(callback, element, isAnimated);
          }
          _getConfig(config) {
            config = this._mergeConfigObj(config, this._element);
            config = this._configAfterMerge(config);
            this._typeCheckConfig(config);
            return config;
          }
          // Static
          static getInstance(element) {
            return Data.get(index_js.getElement(element), this.DATA_KEY);
          }
          static getOrCreateInstance(element, config = {}) {
            return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
          }
          static get VERSION() {
            return VERSION;
          }
          static get DATA_KEY() {
            return `bs.${this.NAME}`;
          }
          static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
          }
          static eventName(name) {
            return `${name}${this.EVENT_KEY}`;
          }
        }
        return BaseComponent;
      }));
    }
  });

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/lib/bootstrap/dom/selector-engine.js
  var require_selector_engine = __commonJS({
    "ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/lib/bootstrap/dom/selector-engine.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_util()) : typeof define === "function" && define.amd ? define(["../util/index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.SelectorEngine = factory(global.Index));
      })(exports, (function(index_js) {
        "use strict";
        const getSelector = (element) => {
          let selector = element.getAttribute("data-bs-target");
          if (!selector || selector === "#") {
            let hrefAttribute = element.getAttribute("href");
            if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
              return null;
            }
            if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
              hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
            }
            selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
          }
          return selector ? selector.split(",").map((sel) => index_js.parseSelector(sel)).join(",") : null;
        };
        const SelectorEngine = {
          find(selector, element = document.documentElement) {
            return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
          },
          findOne(selector, element = document.documentElement) {
            return Element.prototype.querySelector.call(element, selector);
          },
          children(element, selector) {
            return [].concat(...element.children).filter((child) => child.matches(selector));
          },
          parents(element, selector) {
            const parents = [];
            let ancestor = element.parentNode.closest(selector);
            while (ancestor) {
              parents.push(ancestor);
              ancestor = ancestor.parentNode.closest(selector);
            }
            return parents;
          },
          prev(element, selector) {
            let previous = element.previousElementSibling;
            while (previous) {
              if (previous.matches(selector)) {
                return [previous];
              }
              previous = previous.previousElementSibling;
            }
            return [];
          },
          // TODO: this is now unused; remove later along with prev()
          next(element, selector) {
            let next = element.nextElementSibling;
            while (next) {
              if (next.matches(selector)) {
                return [next];
              }
              next = next.nextElementSibling;
            }
            return [];
          },
          focusableChildren(element) {
            const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
            return this.find(focusables, element).filter((el) => !index_js.isDisabled(el) && index_js.isVisible(el));
          },
          getSelectorFromElement(element) {
            const selector = getSelector(element);
            if (selector) {
              return SelectorEngine.findOne(selector) ? selector : null;
            }
            return null;
          },
          getElementFromSelector(element) {
            const selector = getSelector(element);
            return selector ? SelectorEngine.findOne(selector) : null;
          },
          getMultipleElementsFromSelector(element) {
            const selector = getSelector(element);
            return selector ? SelectorEngine.find(selector) : [];
          }
        };
        return SelectorEngine;
      }));
    }
  });

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/lib/bootstrap/dropdown.js
  var require_dropdown = __commonJS({
    "ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/lib/bootstrap/dropdown.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_popper(), require_base_component(), require_event_handler(), require_manipulator(), require_selector_engine(), require_util()) : typeof define === "function" && define.amd ? define(["@popperjs/core", "./base-component", "./dom/event-handler", "./dom/manipulator", "./dom/selector-engine", "./util/index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Dropdown = factory(global["@popperjs/core"], global.BaseComponent, global.EventHandler, global.Manipulator, global.SelectorEngine, global.Index));
      })(exports, (function(Popper, BaseComponent, EventHandler, Manipulator, SelectorEngine, index_js) {
        "use strict";
        function _interopNamespaceDefault(e) {
          const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
          if (e) {
            for (const k in e) {
              if (k !== "default") {
                const d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                  enumerable: true,
                  get: () => e[k]
                });
              }
            }
          }
          n.default = e;
          return Object.freeze(n);
        }
        const Popper__namespace = /* @__PURE__ */ _interopNamespaceDefault(Popper);
        const NAME = "dropdown";
        const DATA_KEY = "bs.dropdown";
        const EVENT_KEY = `.${DATA_KEY}`;
        const DATA_API_KEY = ".data-api";
        const ESCAPE_KEY = "Escape";
        const TAB_KEY = "Tab";
        const ARROW_UP_KEY = "ArrowUp";
        const ARROW_DOWN_KEY = "ArrowDown";
        const RIGHT_MOUSE_BUTTON = 2;
        const EVENT_HIDE = `hide${EVENT_KEY}`;
        const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
        const EVENT_SHOW = `show${EVENT_KEY}`;
        const EVENT_SHOWN = `shown${EVENT_KEY}`;
        const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
        const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY}${DATA_API_KEY}`;
        const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`;
        const CLASS_NAME_SHOW = "show";
        const CLASS_NAME_DROPUP = "dropup";
        const CLASS_NAME_DROPEND = "dropend";
        const CLASS_NAME_DROPSTART = "dropstart";
        const CLASS_NAME_DROPUP_CENTER = "dropup-center";
        const CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
        const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
        const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE}.${CLASS_NAME_SHOW}`;
        const SELECTOR_MENU = ".dropdown-menu";
        const SELECTOR_NAVBAR = ".navbar";
        const SELECTOR_NAVBAR_NAV = ".navbar-nav";
        const SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
        const PLACEMENT_TOP = index_js.isRTL() ? "top-end" : "top-start";
        const PLACEMENT_TOPEND = index_js.isRTL() ? "top-start" : "top-end";
        const PLACEMENT_BOTTOM = index_js.isRTL() ? "bottom-end" : "bottom-start";
        const PLACEMENT_BOTTOMEND = index_js.isRTL() ? "bottom-start" : "bottom-end";
        const PLACEMENT_RIGHT = index_js.isRTL() ? "left-start" : "right-start";
        const PLACEMENT_LEFT = index_js.isRTL() ? "right-start" : "left-start";
        const PLACEMENT_TOPCENTER = "top";
        const PLACEMENT_BOTTOMCENTER = "bottom";
        const Default = {
          autoClose: true,
          boundary: "clippingParents",
          display: "dynamic",
          offset: [0, 2],
          popperConfig: null,
          reference: "toggle"
        };
        const DefaultType = {
          autoClose: "(boolean|string)",
          boundary: "(string|element)",
          display: "string",
          offset: "(array|string|function)",
          popperConfig: "(null|object|function)",
          reference: "(string|element|object)"
        };
        class Dropdown extends BaseComponent {
          constructor(element, config) {
            super(element, config);
            this._popper = null;
            this._parent = this._element.parentNode;
            this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
            this._inNavbar = this._detectNavbar();
          }
          // Getters
          static get Default() {
            return Default;
          }
          static get DefaultType() {
            return DefaultType;
          }
          static get NAME() {
            return NAME;
          }
          // Public
          toggle() {
            return this._isShown() ? this.hide() : this.show();
          }
          show() {
            if (index_js.isDisabled(this._element) || this._isShown()) {
              return;
            }
            const relatedTarget = {
              relatedTarget: this._element
            };
            const showEvent = EventHandler.trigger(this._element, EVENT_SHOW, relatedTarget);
            if (showEvent.defaultPrevented) {
              return;
            }
            this._createPopper();
            if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
              for (const element of [].concat(...document.body.children)) {
                EventHandler.on(element, "mouseover", index_js.noop);
              }
            }
            this._element.focus();
            this._element.setAttribute("aria-expanded", true);
            this._menu.classList.add(CLASS_NAME_SHOW);
            this._element.classList.add(CLASS_NAME_SHOW);
            EventHandler.trigger(this._element, EVENT_SHOWN, relatedTarget);
          }
          hide() {
            if (index_js.isDisabled(this._element) || !this._isShown()) {
              return;
            }
            const relatedTarget = {
              relatedTarget: this._element
            };
            this._completeHide(relatedTarget);
          }
          dispose() {
            if (this._popper) {
              this._popper.destroy();
            }
            super.dispose();
          }
          update() {
            this._inNavbar = this._detectNavbar();
            if (this._popper) {
              this._popper.update();
            }
          }
          // Private
          _completeHide(relatedTarget) {
            const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE, relatedTarget);
            if (hideEvent.defaultPrevented) {
              return;
            }
            if ("ontouchstart" in document.documentElement) {
              for (const element of [].concat(...document.body.children)) {
                EventHandler.off(element, "mouseover", index_js.noop);
              }
            }
            if (this._popper) {
              this._popper.destroy();
            }
            this._menu.classList.remove(CLASS_NAME_SHOW);
            this._element.classList.remove(CLASS_NAME_SHOW);
            this._element.setAttribute("aria-expanded", "false");
            Manipulator.removeDataAttribute(this._menu, "popper");
            EventHandler.trigger(this._element, EVENT_HIDDEN, relatedTarget);
          }
          _getConfig(config) {
            config = super._getConfig(config);
            if (typeof config.reference === "object" && !index_js.isElement(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
              throw new TypeError(`${NAME.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            }
            return config;
          }
          _createPopper() {
            if (typeof Popper__namespace === "undefined") {
              throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
            }
            let referenceElement = this._element;
            if (this._config.reference === "parent") {
              referenceElement = this._parent;
            } else if (index_js.isElement(this._config.reference)) {
              referenceElement = index_js.getElement(this._config.reference);
            } else if (typeof this._config.reference === "object") {
              referenceElement = this._config.reference;
            }
            const popperConfig = this._getPopperConfig();
            this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);
          }
          _isShown() {
            return this._menu.classList.contains(CLASS_NAME_SHOW);
          }
          _getPlacement() {
            const parentDropdown = this._parent;
            if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
              return PLACEMENT_RIGHT;
            }
            if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
              return PLACEMENT_LEFT;
            }
            if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
              return PLACEMENT_TOPCENTER;
            }
            if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
              return PLACEMENT_BOTTOMCENTER;
            }
            const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
            if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
              return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
            }
            return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
          }
          _detectNavbar() {
            return this._element.closest(SELECTOR_NAVBAR) !== null;
          }
          _getOffset() {
            const {
              offset
            } = this._config;
            if (typeof offset === "string") {
              return offset.split(",").map((value) => Number.parseInt(value, 10));
            }
            if (typeof offset === "function") {
              return (popperData) => offset(popperData, this._element);
            }
            return offset;
          }
          _getPopperConfig() {
            const defaultBsPopperConfig = {
              placement: this._getPlacement(),
              modifiers: [{
                name: "preventOverflow",
                options: {
                  boundary: this._config.boundary
                }
              }, {
                name: "offset",
                options: {
                  offset: this._getOffset()
                }
              }]
            };
            if (this._inNavbar || this._config.display === "static") {
              Manipulator.setDataAttribute(this._menu, "popper", "static");
              defaultBsPopperConfig.modifiers = [{
                name: "applyStyles",
                enabled: false
              }];
            }
            return {
              ...defaultBsPopperConfig,
              ...index_js.execute(this._config.popperConfig, [void 0, defaultBsPopperConfig])
            };
          }
          _selectMenuItem({
            key,
            target
          }) {
            const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => index_js.isVisible(element));
            if (!items.length) {
              return;
            }
            index_js.getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
          }
          // Static
          static jQueryInterface(config) {
            return this.each(function() {
              const data = Dropdown.getOrCreateInstance(this, config);
              if (typeof config !== "string") {
                return;
              }
              if (typeof data[config] === "undefined") {
                throw new TypeError(`No method named "${config}"`);
              }
              data[config]();
            });
          }
          static clearMenus(event) {
            if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY) {
              return;
            }
            const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
            for (const toggle of openToggles) {
              const context = Dropdown.getInstance(toggle);
              if (!context || context._config.autoClose === false) {
                continue;
              }
              const composedPath = event.composedPath();
              const isMenuTarget = composedPath.includes(context._menu);
              if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
                continue;
              }
              if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) {
                continue;
              }
              const relatedTarget = {
                relatedTarget: context._element
              };
              if (event.type === "click") {
                relatedTarget.clickEvent = event;
              }
              context._completeHide(relatedTarget);
            }
          }
          static dataApiKeydownHandler(event) {
            const isInput = /input|textarea/i.test(event.target.tagName);
            const isEscapeEvent = event.key === ESCAPE_KEY;
            const isUpOrDownEvent = [ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key);
            if (!isUpOrDownEvent && !isEscapeEvent) {
              return;
            }
            if (isInput && !isEscapeEvent) {
              return;
            }
            event.preventDefault();
            const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE, event.delegateTarget.parentNode);
            const instance = Dropdown.getOrCreateInstance(getToggleButton);
            if (isUpOrDownEvent) {
              event.stopPropagation();
              instance.show();
              instance._selectMenuItem(event);
              return;
            }
            if (instance._isShown()) {
              event.stopPropagation();
              instance.hide();
              getToggleButton.focus();
            }
          }
        }
        EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown.dataApiKeydownHandler);
        EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
        EventHandler.on(document, EVENT_CLICK_DATA_API, Dropdown.clearMenus);
        EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
        EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
          event.preventDefault();
          Dropdown.getOrCreateInstance(this).toggle();
        });
        index_js.defineJQueryPlugin(Dropdown);
        return Dropdown;
      }));
    }
  });

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/lib/bootstrap/collapse.js
  var require_collapse = __commonJS({
    "ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/lib/bootstrap/collapse.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_base_component(), require_event_handler(), require_selector_engine(), require_util()) : typeof define === "function" && define.amd ? define(["./base-component", "./dom/event-handler", "./dom/selector-engine", "./util/index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Collapse = factory(global.BaseComponent, global.EventHandler, global.SelectorEngine, global.Index));
      })(exports, (function(BaseComponent, EventHandler, SelectorEngine, index_js) {
        "use strict";
        const NAME = "collapse";
        const DATA_KEY = "bs.collapse";
        const EVENT_KEY = `.${DATA_KEY}`;
        const DATA_API_KEY = ".data-api";
        const EVENT_SHOW = `show${EVENT_KEY}`;
        const EVENT_SHOWN = `shown${EVENT_KEY}`;
        const EVENT_HIDE = `hide${EVENT_KEY}`;
        const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
        const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
        const CLASS_NAME_SHOW = "show";
        const CLASS_NAME_COLLAPSE = "collapse";
        const CLASS_NAME_COLLAPSING = "collapsing";
        const CLASS_NAME_COLLAPSED = "collapsed";
        const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
        const CLASS_NAME_HORIZONTAL = "collapse-horizontal";
        const WIDTH = "width";
        const HEIGHT = "height";
        const SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
        const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="collapse"]';
        const Default = {
          parent: null,
          toggle: true
        };
        const DefaultType = {
          parent: "(null|element)",
          toggle: "boolean"
        };
        class Collapse extends BaseComponent {
          constructor(element, config) {
            super(element, config);
            this._isTransitioning = false;
            this._triggerArray = [];
            const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE);
            for (const elem of toggleList) {
              const selector = SelectorEngine.getSelectorFromElement(elem);
              const filterElement = SelectorEngine.find(selector).filter((foundElement) => foundElement === this._element);
              if (selector !== null && filterElement.length) {
                this._triggerArray.push(elem);
              }
            }
            this._initializeChildren();
            if (!this._config.parent) {
              this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
            }
            if (this._config.toggle) {
              this.toggle();
            }
          }
          // Getters
          static get Default() {
            return Default;
          }
          static get DefaultType() {
            return DefaultType;
          }
          static get NAME() {
            return NAME;
          }
          // Public
          toggle() {
            if (this._isShown()) {
              this.hide();
            } else {
              this.show();
            }
          }
          show() {
            if (this._isTransitioning || this._isShown()) {
              return;
            }
            let activeChildren = [];
            if (this._config.parent) {
              activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => Collapse.getOrCreateInstance(element, {
                toggle: false
              }));
            }
            if (activeChildren.length && activeChildren[0]._isTransitioning) {
              return;
            }
            const startEvent = EventHandler.trigger(this._element, EVENT_SHOW);
            if (startEvent.defaultPrevented) {
              return;
            }
            for (const activeInstance of activeChildren) {
              activeInstance.hide();
            }
            const dimension = this._getDimension();
            this._element.classList.remove(CLASS_NAME_COLLAPSE);
            this._element.classList.add(CLASS_NAME_COLLAPSING);
            this._element.style[dimension] = 0;
            this._addAriaAndCollapsedClass(this._triggerArray, true);
            this._isTransitioning = true;
            const complete = () => {
              this._isTransitioning = false;
              this._element.classList.remove(CLASS_NAME_COLLAPSING);
              this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
              this._element.style[dimension] = "";
              EventHandler.trigger(this._element, EVENT_SHOWN);
            };
            const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
            const scrollSize = `scroll${capitalizedDimension}`;
            this._queueCallback(complete, this._element, true);
            this._element.style[dimension] = `${this._element[scrollSize]}px`;
          }
          hide() {
            if (this._isTransitioning || !this._isShown()) {
              return;
            }
            const startEvent = EventHandler.trigger(this._element, EVENT_HIDE);
            if (startEvent.defaultPrevented) {
              return;
            }
            const dimension = this._getDimension();
            this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
            index_js.reflow(this._element);
            this._element.classList.add(CLASS_NAME_COLLAPSING);
            this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
            for (const trigger of this._triggerArray) {
              const element = SelectorEngine.getElementFromSelector(trigger);
              if (element && !this._isShown(element)) {
                this._addAriaAndCollapsedClass([trigger], false);
              }
            }
            this._isTransitioning = true;
            const complete = () => {
              this._isTransitioning = false;
              this._element.classList.remove(CLASS_NAME_COLLAPSING);
              this._element.classList.add(CLASS_NAME_COLLAPSE);
              EventHandler.trigger(this._element, EVENT_HIDDEN);
            };
            this._element.style[dimension] = "";
            this._queueCallback(complete, this._element, true);
          }
          // Private
          _isShown(element = this._element) {
            return element.classList.contains(CLASS_NAME_SHOW);
          }
          _configAfterMerge(config) {
            config.toggle = Boolean(config.toggle);
            config.parent = index_js.getElement(config.parent);
            return config;
          }
          _getDimension() {
            return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
          }
          _initializeChildren() {
            if (!this._config.parent) {
              return;
            }
            const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE);
            for (const element of children) {
              const selected = SelectorEngine.getElementFromSelector(element);
              if (selected) {
                this._addAriaAndCollapsedClass([element], this._isShown(selected));
              }
            }
          }
          _getFirstLevelChildren(selector) {
            const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
            return SelectorEngine.find(selector, this._config.parent).filter((element) => !children.includes(element));
          }
          _addAriaAndCollapsedClass(triggerArray, isOpen) {
            if (!triggerArray.length) {
              return;
            }
            for (const element of triggerArray) {
              element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
              element.setAttribute("aria-expanded", isOpen);
            }
          }
          // Static
          static jQueryInterface(config) {
            const _config = {};
            if (typeof config === "string" && /show|hide/.test(config)) {
              _config.toggle = false;
            }
            return this.each(function() {
              const data = Collapse.getOrCreateInstance(this, _config);
              if (typeof config === "string") {
                if (typeof data[config] === "undefined") {
                  throw new TypeError(`No method named "${config}"`);
                }
                data[config]();
              }
            });
          }
        }
        EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
          if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
            event.preventDefault();
          }
          for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
            Collapse.getOrCreateInstance(element, {
              toggle: false
            }).toggle();
          }
        });
        index_js.defineJQueryPlugin(Collapse);
        return Collapse;
      }));
    }
  });

  // node_modules/snabbdom/build/htmldomapi.js
  function createElement(tagName2, options) {
    return document.createElement(tagName2, options);
  }
  function createElementNS(namespaceURI, qualifiedName, options) {
    return document.createElementNS(namespaceURI, qualifiedName, options);
  }
  function createDocumentFragment() {
    return parseFragment(document.createDocumentFragment());
  }
  function createTextNode(text) {
    return document.createTextNode(text);
  }
  function createComment(text) {
    return document.createComment(text);
  }
  function insertBefore(parentNode2, newNode, referenceNode) {
    if (isDocumentFragment(parentNode2)) {
      let node = parentNode2;
      while (node && isDocumentFragment(node)) {
        const fragment2 = parseFragment(node);
        node = fragment2.parent;
      }
      parentNode2 = node !== null && node !== void 0 ? node : parentNode2;
    }
    if (isDocumentFragment(newNode)) {
      newNode = parseFragment(newNode, parentNode2);
    }
    if (referenceNode && isDocumentFragment(referenceNode)) {
      referenceNode = parseFragment(referenceNode).firstChildNode;
    }
    parentNode2.insertBefore(newNode, referenceNode);
  }
  function removeChild(node, child) {
    node.removeChild(child);
  }
  function appendChild(node, child) {
    if (isDocumentFragment(child)) {
      child = parseFragment(child, node);
    }
    node.appendChild(child);
  }
  function parentNode(node) {
    if (isDocumentFragment(node)) {
      while (node && isDocumentFragment(node)) {
        const fragment2 = parseFragment(node);
        node = fragment2.parent;
      }
      return node !== null && node !== void 0 ? node : null;
    }
    return node.parentNode;
  }
  function nextSibling(node) {
    var _a;
    if (isDocumentFragment(node)) {
      const fragment2 = parseFragment(node);
      const parent = parentNode(fragment2);
      if (parent && fragment2.lastChildNode) {
        const children = Array.from(parent.childNodes);
        const index = children.indexOf(fragment2.lastChildNode);
        return (_a = children[index + 1]) !== null && _a !== void 0 ? _a : null;
      }
      return null;
    }
    return node.nextSibling;
  }
  function tagName(elm) {
    return elm.tagName;
  }
  function setTextContent(node, text) {
    node.textContent = text;
  }
  function getTextContent(node) {
    return node.textContent;
  }
  function isElement(node) {
    return node.nodeType === 1;
  }
  function isText(node) {
    return node.nodeType === 3;
  }
  function isComment(node) {
    return node.nodeType === 8;
  }
  function isDocumentFragment(node) {
    return node.nodeType === 11;
  }
  function parseFragment(fragmentNode, parentNode2) {
    var _a, _b, _c;
    const fragment2 = fragmentNode;
    (_a = fragment2.parent) !== null && _a !== void 0 ? _a : fragment2.parent = parentNode2 !== null && parentNode2 !== void 0 ? parentNode2 : null;
    (_b = fragment2.firstChildNode) !== null && _b !== void 0 ? _b : fragment2.firstChildNode = fragmentNode.firstChild;
    (_c = fragment2.lastChildNode) !== null && _c !== void 0 ? _c : fragment2.lastChildNode = fragmentNode.lastChild;
    return fragment2;
  }
  var htmlDomApi = {
    createElement,
    createElementNS,
    createTextNode,
    createDocumentFragment,
    createComment,
    insertBefore,
    removeChild,
    appendChild,
    parentNode,
    nextSibling,
    tagName,
    setTextContent,
    getTextContent,
    isElement,
    isText,
    isComment,
    isDocumentFragment
  };

  // node_modules/snabbdom/build/vnode.js
  function vnode(sel, data, children, text, elm) {
    const key = data === void 0 ? void 0 : data.key;
    return { sel, data, children, text, elm, key };
  }

  // node_modules/snabbdom/build/is.js
  var array = Array.isArray;
  function primitive(s) {
    return typeof s === "string" || typeof s === "number" || s instanceof String || s instanceof Number;
  }

  // node_modules/snabbdom/build/init.js
  function isUndef(s) {
    return s === void 0;
  }
  function isDef(s) {
    return s !== void 0;
  }
  var emptyNode = vnode("", {}, [], void 0, void 0);
  function sameVnode(vnode1, vnode2) {
    var _a, _b;
    const isSameKey = vnode1.key === vnode2.key;
    const isSameIs = ((_a = vnode1.data) === null || _a === void 0 ? void 0 : _a.is) === ((_b = vnode2.data) === null || _b === void 0 ? void 0 : _b.is);
    const isSameSel = vnode1.sel === vnode2.sel;
    const isSameTextOrFragment = !vnode1.sel && vnode1.sel === vnode2.sel ? typeof vnode1.text === typeof vnode2.text : true;
    return isSameSel && isSameKey && isSameIs && isSameTextOrFragment;
  }
  function documentFragmentIsNotSupported() {
    throw new Error("The document fragment is not supported on this platform.");
  }
  function isElement2(api, vnode2) {
    return api.isElement(vnode2);
  }
  function isDocumentFragment2(api, vnode2) {
    return api.isDocumentFragment(vnode2);
  }
  function createKeyToOldIdx(children, beginIdx, endIdx) {
    var _a;
    const map = {};
    for (let i = beginIdx; i <= endIdx; ++i) {
      const key = (_a = children[i]) === null || _a === void 0 ? void 0 : _a.key;
      if (key !== void 0) {
        map[key] = i;
      }
    }
    return map;
  }
  var hooks = [
    "create",
    "update",
    "remove",
    "destroy",
    "pre",
    "post"
  ];
  function init(modules, domApi, options) {
    const cbs = {
      create: [],
      update: [],
      remove: [],
      destroy: [],
      pre: [],
      post: []
    };
    const api = domApi !== void 0 ? domApi : htmlDomApi;
    for (const hook of hooks) {
      for (const module of modules) {
        const currentHook = module[hook];
        if (currentHook !== void 0) {
          cbs[hook].push(currentHook);
        }
      }
    }
    function emptyNodeAt(elm) {
      const id = elm.id ? "#" + elm.id : "";
      const classes = elm.getAttribute("class");
      const c = classes ? "." + classes.split(" ").join(".") : "";
      return vnode(api.tagName(elm).toLowerCase() + id + c, {}, [], void 0, elm);
    }
    function emptyDocumentFragmentAt(frag) {
      return vnode(void 0, {}, [], void 0, frag);
    }
    function createRmCb(childElm, listeners) {
      return function rmCb() {
        if (--listeners === 0) {
          const parent = api.parentNode(childElm);
          if (parent !== null) {
            api.removeChild(parent, childElm);
          }
        }
      };
    }
    function createElm(vnode2, insertedVnodeQueue) {
      var _a, _b, _c, _d;
      let i;
      let data = vnode2.data;
      if (data !== void 0) {
        const init2 = (_a = data.hook) === null || _a === void 0 ? void 0 : _a.init;
        if (isDef(init2)) {
          init2(vnode2);
          data = vnode2.data;
        }
      }
      const children = vnode2.children;
      const sel = vnode2.sel;
      if (sel === "!") {
        if (isUndef(vnode2.text)) {
          vnode2.text = "";
        }
        vnode2.elm = api.createComment(vnode2.text);
      } else if (sel === "") {
        vnode2.elm = api.createTextNode(vnode2.text);
      } else if (sel !== void 0) {
        const hashIdx = sel.indexOf("#");
        const dotIdx = sel.indexOf(".", hashIdx);
        const hash2 = hashIdx > 0 ? hashIdx : sel.length;
        const dot = dotIdx > 0 ? dotIdx : sel.length;
        const tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash2, dot)) : sel;
        const elm = vnode2.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag, data) : api.createElement(tag, data);
        if (hash2 < dot)
          elm.setAttribute("id", sel.slice(hash2 + 1, dot));
        if (dotIdx > 0)
          elm.setAttribute("class", sel.slice(dot + 1).replace(/\./g, " "));
        for (i = 0; i < cbs.create.length; ++i)
          cbs.create[i](emptyNode, vnode2);
        if (primitive(vnode2.text) && (!array(children) || children.length === 0)) {
          api.appendChild(elm, api.createTextNode(vnode2.text));
        }
        if (array(children)) {
          for (i = 0; i < children.length; ++i) {
            const ch = children[i];
            if (ch != null) {
              api.appendChild(elm, createElm(ch, insertedVnodeQueue));
            }
          }
        }
        const hook = vnode2.data.hook;
        if (isDef(hook)) {
          (_b = hook.create) === null || _b === void 0 ? void 0 : _b.call(hook, emptyNode, vnode2);
          if (hook.insert) {
            insertedVnodeQueue.push(vnode2);
          }
        }
      } else if (((_c = options === null || options === void 0 ? void 0 : options.experimental) === null || _c === void 0 ? void 0 : _c.fragments) && vnode2.children) {
        vnode2.elm = ((_d = api.createDocumentFragment) !== null && _d !== void 0 ? _d : documentFragmentIsNotSupported)();
        for (i = 0; i < cbs.create.length; ++i)
          cbs.create[i](emptyNode, vnode2);
        for (i = 0; i < vnode2.children.length; ++i) {
          const ch = vnode2.children[i];
          if (ch != null) {
            api.appendChild(vnode2.elm, createElm(ch, insertedVnodeQueue));
          }
        }
      } else {
        vnode2.elm = api.createTextNode(vnode2.text);
      }
      return vnode2.elm;
    }
    function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        const ch = vnodes[startIdx];
        if (ch != null) {
          api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
        }
      }
    }
    function invokeDestroyHook(vnode2) {
      var _a, _b;
      const data = vnode2.data;
      if (data !== void 0) {
        (_b = (_a = data === null || data === void 0 ? void 0 : data.hook) === null || _a === void 0 ? void 0 : _a.destroy) === null || _b === void 0 ? void 0 : _b.call(_a, vnode2);
        for (let i = 0; i < cbs.destroy.length; ++i)
          cbs.destroy[i](vnode2);
        if (vnode2.children !== void 0) {
          for (let j = 0; j < vnode2.children.length; ++j) {
            const child = vnode2.children[j];
            if (child != null && typeof child !== "string") {
              invokeDestroyHook(child);
            }
          }
        }
      }
    }
    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
      var _a, _b;
      for (; startIdx <= endIdx; ++startIdx) {
        let listeners;
        let rm;
        const ch = vnodes[startIdx];
        if (ch != null) {
          if (isDef(ch.sel)) {
            invokeDestroyHook(ch);
            listeners = cbs.remove.length + 1;
            rm = createRmCb(ch.elm, listeners);
            for (let i = 0; i < cbs.remove.length; ++i)
              cbs.remove[i](ch, rm);
            const removeHook = (_b = (_a = ch === null || ch === void 0 ? void 0 : ch.data) === null || _a === void 0 ? void 0 : _a.hook) === null || _b === void 0 ? void 0 : _b.remove;
            if (isDef(removeHook)) {
              removeHook(ch, rm);
            } else {
              rm();
            }
          } else if (ch.children) {
            invokeDestroyHook(ch);
            removeVnodes(parentElm, ch.children, 0, ch.children.length - 1);
          } else {
            api.removeChild(parentElm, ch.elm);
          }
        }
      }
    }
    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
      let oldStartIdx = 0;
      let newStartIdx = 0;
      let oldEndIdx = oldCh.length - 1;
      let oldStartVnode = oldCh[0];
      let oldEndVnode = oldCh[oldEndIdx];
      let newEndIdx = newCh.length - 1;
      let newStartVnode = newCh[0];
      let newEndVnode = newCh[newEndIdx];
      let oldKeyToIdx;
      let idxInOld;
      let elmToMove;
      let before;
      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
          oldStartVnode = oldCh[++oldStartIdx];
        } else if (oldEndVnode == null) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (newStartVnode == null) {
          newStartVnode = newCh[++newStartIdx];
        } else if (newEndVnode == null) {
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
          api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
          api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (oldKeyToIdx === void 0) {
            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
          }
          idxInOld = oldKeyToIdx[newStartVnode.key];
          if (isUndef(idxInOld)) {
            api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else if (isUndef(oldKeyToIdx[newEndVnode.key])) {
            api.insertBefore(parentElm, createElm(newEndVnode, insertedVnodeQueue), api.nextSibling(oldEndVnode.elm));
            newEndVnode = newCh[--newEndIdx];
          } else {
            elmToMove = oldCh[idxInOld];
            if (elmToMove.sel !== newStartVnode.sel) {
              api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
            } else {
              patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
              oldCh[idxInOld] = void 0;
              api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
            }
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
      if (newStartIdx <= newEndIdx) {
        before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      }
      if (oldStartIdx <= oldEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }
    function patchVnode(oldVnode, vnode2, insertedVnodeQueue) {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const hook = (_a = vnode2.data) === null || _a === void 0 ? void 0 : _a.hook;
      (_b = hook === null || hook === void 0 ? void 0 : hook.prepatch) === null || _b === void 0 ? void 0 : _b.call(hook, oldVnode, vnode2);
      const elm = vnode2.elm = oldVnode.elm;
      if (oldVnode === vnode2)
        return;
      if (vnode2.data !== void 0 || isDef(vnode2.text) && vnode2.text !== oldVnode.text) {
        (_c = vnode2.data) !== null && _c !== void 0 ? _c : vnode2.data = {};
        (_d = oldVnode.data) !== null && _d !== void 0 ? _d : oldVnode.data = {};
        for (let i = 0; i < cbs.update.length; ++i)
          cbs.update[i](oldVnode, vnode2);
        (_g = (_f = (_e = vnode2.data) === null || _e === void 0 ? void 0 : _e.hook) === null || _f === void 0 ? void 0 : _f.update) === null || _g === void 0 ? void 0 : _g.call(_f, oldVnode, vnode2);
      }
      const oldCh = oldVnode.children;
      const ch = vnode2.children;
      if (isUndef(vnode2.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch)
            updateChildren(elm, oldCh, ch, insertedVnodeQueue);
        } else if (isDef(ch)) {
          if (isDef(oldVnode.text))
            api.setTextContent(elm, "");
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          api.setTextContent(elm, "");
        }
      } else if (oldVnode.text !== vnode2.text) {
        if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        }
        api.setTextContent(elm, vnode2.text);
      }
      (_h = hook === null || hook === void 0 ? void 0 : hook.postpatch) === null || _h === void 0 ? void 0 : _h.call(hook, oldVnode, vnode2);
    }
    return function patch(oldVnode, vnode2) {
      let i, elm, parent;
      const insertedVnodeQueue = [];
      for (i = 0; i < cbs.pre.length; ++i)
        cbs.pre[i]();
      if (isElement2(api, oldVnode)) {
        oldVnode = emptyNodeAt(oldVnode);
      } else if (isDocumentFragment2(api, oldVnode)) {
        oldVnode = emptyDocumentFragmentAt(oldVnode);
      }
      if (sameVnode(oldVnode, vnode2)) {
        patchVnode(oldVnode, vnode2, insertedVnodeQueue);
      } else {
        elm = oldVnode.elm;
        parent = api.parentNode(elm);
        createElm(vnode2, insertedVnodeQueue);
        if (parent !== null) {
          api.insertBefore(parent, vnode2.elm, api.nextSibling(elm));
          removeVnodes(parent, [oldVnode], 0, 0);
        }
      }
      for (i = 0; i < insertedVnodeQueue.length; ++i) {
        insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
      }
      for (i = 0; i < cbs.post.length; ++i)
        cbs.post[i]();
      return vnode2;
    };
  }

  // node_modules/snabbdom/build/h.js
  function addNS(data, children, sel) {
    data.ns = "http://www.w3.org/2000/svg";
    if (sel !== "foreignObject" && children !== void 0) {
      for (let i = 0; i < children.length; ++i) {
        const child = children[i];
        if (typeof child === "string")
          continue;
        const childData = child.data;
        if (childData !== void 0) {
          addNS(childData, child.children, child.sel);
        }
      }
    }
  }
  function h(sel, b, c) {
    let data = {};
    let children;
    let text;
    let i;
    if (c !== void 0) {
      if (b !== null) {
        data = b;
      }
      if (array(c)) {
        children = c;
      } else if (primitive(c)) {
        text = c.toString();
      } else if (c && c.sel) {
        children = [c];
      }
    } else if (b !== void 0 && b !== null) {
      if (array(b)) {
        children = b;
      } else if (primitive(b)) {
        text = b.toString();
      } else if (b && b.sel) {
        children = [b];
      } else {
        data = b;
      }
    }
    if (children !== void 0) {
      for (i = 0; i < children.length; ++i) {
        if (primitive(children[i]))
          children[i] = vnode(void 0, void 0, void 0, children[i], void 0);
      }
    }
    if (sel.startsWith("svg") && (sel.length === 3 || sel[3] === "." || sel[3] === "#")) {
      addNS(data, children, sel);
    }
    return vnode(sel, data, children, text, void 0);
  }

  // node_modules/snabbdom/build/modules/attributes.js
  var xlinkNS = "http://www.w3.org/1999/xlink";
  var xmlnsNS = "http://www.w3.org/2000/xmlns/";
  var xmlNS = "http://www.w3.org/XML/1998/namespace";
  var colonChar = 58;
  var xChar = 120;
  var mChar = 109;
  function updateAttrs(oldVnode, vnode2) {
    let key;
    const elm = vnode2.elm;
    let oldAttrs = oldVnode.data.attrs;
    let attrs = vnode2.data.attrs;
    if (!oldAttrs && !attrs)
      return;
    if (oldAttrs === attrs)
      return;
    oldAttrs = oldAttrs || {};
    attrs = attrs || {};
    for (key in attrs) {
      const cur = attrs[key];
      const old = oldAttrs[key];
      if (old !== cur) {
        if (cur === true) {
          elm.setAttribute(key, "");
        } else if (cur === false) {
          elm.removeAttribute(key);
        } else {
          if (key.charCodeAt(0) !== xChar) {
            elm.setAttribute(key, cur);
          } else if (key.charCodeAt(3) === colonChar) {
            elm.setAttributeNS(xmlNS, key, cur);
          } else if (key.charCodeAt(5) === colonChar) {
            key.charCodeAt(1) === mChar ? elm.setAttributeNS(xmlnsNS, key, cur) : elm.setAttributeNS(xlinkNS, key, cur);
          } else {
            elm.setAttribute(key, cur);
          }
        }
      }
    }
    for (key in oldAttrs) {
      if (!(key in attrs)) {
        elm.removeAttribute(key);
      }
    }
  }
  var attributesModule = {
    create: updateAttrs,
    update: updateAttrs
  };

  // node_modules/snabbdom/build/modules/class.js
  function updateClass(oldVnode, vnode2) {
    let cur;
    let name;
    const elm = vnode2.elm;
    let oldClass = oldVnode.data.class;
    let klass = vnode2.data.class;
    if (!oldClass && !klass)
      return;
    if (oldClass === klass)
      return;
    oldClass = oldClass || {};
    klass = klass || {};
    for (name in oldClass) {
      if (oldClass[name] && !Object.prototype.hasOwnProperty.call(klass, name)) {
        elm.classList.remove(name);
      }
    }
    for (name in klass) {
      cur = klass[name];
      if (cur !== oldClass[name]) {
        elm.classList[cur ? "add" : "remove"](name);
      }
    }
  }
  var classModule = { create: updateClass, update: updateClass };

  // node_modules/snabbdom/build/modules/eventlisteners.js
  function invokeHandler(handler, vnode2, event) {
    if (typeof handler === "function") {
      handler.call(vnode2, event, vnode2);
    } else if (typeof handler === "object") {
      for (let i = 0; i < handler.length; i++) {
        invokeHandler(handler[i], vnode2, event);
      }
    }
  }
  function handleEvent(event, vnode2) {
    const name = event.type;
    const on = vnode2.data.on;
    if (on && on[name]) {
      invokeHandler(on[name], vnode2, event);
    }
  }
  function createListener() {
    return function handler(event) {
      handleEvent(event, handler.vnode);
    };
  }
  function updateEventListeners(oldVnode, vnode2) {
    const oldOn = oldVnode.data.on;
    const oldListener = oldVnode.listener;
    const oldElm = oldVnode.elm;
    const on = vnode2 && vnode2.data.on;
    const elm = vnode2 && vnode2.elm;
    let name;
    if (oldOn === on) {
      return;
    }
    if (oldOn && oldListener) {
      if (!on) {
        for (name in oldOn) {
          oldElm.removeEventListener(name, oldListener, false);
        }
      } else {
        for (name in oldOn) {
          if (!on[name]) {
            oldElm.removeEventListener(name, oldListener, false);
          }
        }
      }
    }
    if (on) {
      const listener = vnode2.listener = oldVnode.listener || createListener();
      listener.vnode = vnode2;
      if (!oldOn) {
        for (name in on) {
          elm.addEventListener(name, listener, false);
        }
      } else {
        for (name in on) {
          if (!oldOn[name]) {
            elm.addEventListener(name, listener, false);
          }
        }
      }
    }
  }
  var eventListenersModule = {
    create: updateEventListeners,
    update: updateEventListeners,
    destroy: updateEventListeners
  };

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/auth.ts
  var import_oauth2_auth_code_pkce = __toESM(require_oauth2_auth_code_pkce());

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/ndJsonStream.ts
  var readStream = (name, response, handler) => {
    const stream = response.body.getReader();
    const matcher = /\r?\n/;
    const decoder = new TextDecoder();
    let buf = "";
    const process2 = (json) => {
      const msg = JSON.parse(json);
      console.log(name, msg);
      handler(msg);
    };
    const loop = () => stream.read().then(({ done, value }) => {
      if (done) {
        if (buf.length > 0) process2(buf);
        return;
      } else {
        const chunk = decoder.decode(value, {
          stream: true
        });
        buf += chunk;
        const parts = buf.split(matcher);
        buf = parts.pop() || "";
        for (const i of parts.filter((p) => p)) process2(i);
        return loop();
      }
    });
    return {
      closePromise: loop(),
      close: () => stream.cancel()
    };
  };

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/routing.ts
  var import_page = __toESM(require_page());
  function routing_default(ctrl) {
    import_page.default.base(BASE_PATH);
    (0, import_page.default)("/", async (ctx) => {
      if (ctx.querystring.includes("code=liu_")) history.pushState({}, "", BASE_PATH || "/");
      ctrl.openHome();
    });
    (0, import_page.default)("/login", async (_) => {
      if (ctrl.auth.me) return (0, import_page.default)("/");
      await ctrl.auth.login();
    });
    (0, import_page.default)("/logout", async (_) => {
      await ctrl.auth.logout();
      location.href = BASE_PATH;
    });
    (0, import_page.default)("/game/:id", (ctx) => {
      ctrl.openGame(ctx.params.id);
    });
    (0, import_page.default)("/tv", (ctx) => ctrl.watchTv());
    (0, import_page.default)({ hashbang: true });
  }
  var BASE_PATH = location.pathname.replace(/\/$/, "");
  var url = (path) => `${BASE_PATH}${path}`;
  var href = (path) => ({ href: url(path) });

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/auth.ts
  var lichessHost = "https://lichess.org";
  var scopes = ["board:play"];
  var clientId = "lichess-api-demo";
  var clientUrl = `${location.protocol}//${location.host}${BASE_PATH || "/"}`;
  var Auth = class {
    constructor() {
      __publicField(this, "oauth", new import_oauth2_auth_code_pkce.OAuth2AuthCodePKCE({
        authorizationUrl: `${lichessHost}/oauth`,
        tokenUrl: `${lichessHost}/api/token`,
        clientId,
        scopes,
        redirectUrl: clientUrl,
        onAccessTokenExpiry: (refreshAccessToken) => refreshAccessToken(),
        onInvalidGrant: console.warn
      }));
      __publicField(this, "me");
      __publicField(this, "authenticate", async () => {
        const httpClient = this.oauth.decorateFetchHTTPClient(window.fetch);
        const res = await httpClient(`${lichessHost}/api/account`);
        const me = {
          ...await res.json(),
          httpClient
        };
        if (me.error) throw me.error;
        this.me = me;
      });
      __publicField(this, "openStream", async (path, config, handler) => {
        const stream = await this.fetchResponse(path, config);
        return readStream(`STREAM ${path}`, stream, handler);
      });
      __publicField(this, "fetchBody", async (path, config = {}) => {
        const res = await this.fetchResponse(path, config);
        const body = await res.json();
        return body;
      });
      __publicField(this, "fetchResponse", async (path, config = {}) => {
        const res = await (this.me?.httpClient || window.fetch)(`${lichessHost}${path}`, config);
        if (res.error || !res.ok) {
          const err = `${res.error} ${res.status} ${res.statusText}`;
          alert(err);
          throw err;
        }
        return res;
      });
    }
    async init() {
      try {
        const accessContext = await this.oauth.getAccessToken();
        if (accessContext) await this.authenticate();
      } catch (err) {
        console.error(err);
      }
      if (!this.me) {
        try {
          const hasAuthCode = await this.oauth.isReturningFromAuthServer();
          if (hasAuthCode) await this.authenticate();
        } catch (err) {
          console.error(err);
        }
      }
    }
    async login() {
      await this.oauth.fetchAuthorizationCode();
    }
    async logout() {
      if (this.me) await this.me.httpClient(`${lichessHost}/api/token`, { method: "DELETE" });
      localStorage.clear();
      this.me = void 0;
    }
  };

  // node_modules/chessops/dist/esm/types.js
  var FILE_NAMES = ["a", "b", "c", "d", "e", "f", "g", "h"];
  var RANK_NAMES = ["1", "2", "3", "4", "5", "6", "7", "8"];
  var COLORS = ["white", "black"];
  var ROLES = ["pawn", "knight", "bishop", "rook", "queen", "king"];
  var CASTLING_SIDES = ["a", "h"];
  var isDrop = (v) => "role" in v;

  // node_modules/chessops/dist/esm/util.js
  var defined = (v) => v !== void 0;
  var opposite = (color) => color === "white" ? "black" : "white";
  var squareRank = (square) => square >> 3;
  var squareFile = (square) => square & 7;
  var squareFromCoords = (file, rank) => 0 <= file && file < 8 && 0 <= rank && rank < 8 ? file + 8 * rank : void 0;
  var roleToChar = (role) => {
    switch (role) {
      case "pawn":
        return "p";
      case "knight":
        return "n";
      case "bishop":
        return "b";
      case "rook":
        return "r";
      case "queen":
        return "q";
      case "king":
        return "k";
    }
  };
  function charToRole(ch) {
    switch (ch.toLowerCase()) {
      case "p":
        return "pawn";
      case "n":
        return "knight";
      case "b":
        return "bishop";
      case "r":
        return "rook";
      case "q":
        return "queen";
      case "k":
        return "king";
      default:
        return;
    }
  }
  function parseSquare(str) {
    if (str.length !== 2)
      return;
    return squareFromCoords(str.charCodeAt(0) - "a".charCodeAt(0), str.charCodeAt(1) - "1".charCodeAt(0));
  }
  var makeSquare = (square) => FILE_NAMES[squareFile(square)] + RANK_NAMES[squareRank(square)];
  var parseUci = (str) => {
    if (str[1] === "@" && str.length === 4) {
      const role = charToRole(str[0]);
      const to = parseSquare(str.slice(2));
      if (role && defined(to))
        return { role, to };
    } else if (str.length === 4 || str.length === 5) {
      const from = parseSquare(str.slice(0, 2));
      const to = parseSquare(str.slice(2, 4));
      let promotion;
      if (str.length === 5) {
        promotion = charToRole(str[4]);
        if (!promotion)
          return;
      }
      if (defined(from) && defined(to))
        return { from, to, promotion };
    }
    return;
  };
  var kingCastlesTo = (color, side) => color === "white" ? side === "a" ? 2 : 6 : side === "a" ? 58 : 62;
  var rookCastlesTo = (color, side) => color === "white" ? side === "a" ? 3 : 5 : side === "a" ? 59 : 61;

  // node_modules/chessops/dist/esm/squareSet.js
  var popcnt32 = (n) => {
    n = n - (n >>> 1 & 1431655765);
    n = (n & 858993459) + (n >>> 2 & 858993459);
    return Math.imul(n + (n >>> 4) & 252645135, 16843009) >> 24;
  };
  var bswap32 = (n) => {
    n = n >>> 8 & 16711935 | (n & 16711935) << 8;
    return n >>> 16 & 65535 | (n & 65535) << 16;
  };
  var rbit32 = (n) => {
    n = n >>> 1 & 1431655765 | (n & 1431655765) << 1;
    n = n >>> 2 & 858993459 | (n & 858993459) << 2;
    n = n >>> 4 & 252645135 | (n & 252645135) << 4;
    return bswap32(n);
  };
  var SquareSet = class _SquareSet {
    constructor(lo, hi) {
      this.lo = lo | 0;
      this.hi = hi | 0;
    }
    static fromSquare(square) {
      return square >= 32 ? new _SquareSet(0, 1 << square - 32) : new _SquareSet(1 << square, 0);
    }
    static fromRank(rank) {
      return new _SquareSet(255, 0).shl64(8 * rank);
    }
    static fromFile(file) {
      return new _SquareSet(16843009 << file, 16843009 << file);
    }
    static empty() {
      return new _SquareSet(0, 0);
    }
    static full() {
      return new _SquareSet(4294967295, 4294967295);
    }
    static corners() {
      return new _SquareSet(129, 2164260864);
    }
    static center() {
      return new _SquareSet(402653184, 24);
    }
    static backranks() {
      return new _SquareSet(255, 4278190080);
    }
    static backrank(color) {
      return color === "white" ? new _SquareSet(255, 0) : new _SquareSet(0, 4278190080);
    }
    static lightSquares() {
      return new _SquareSet(1437226410, 1437226410);
    }
    static darkSquares() {
      return new _SquareSet(2857740885, 2857740885);
    }
    complement() {
      return new _SquareSet(~this.lo, ~this.hi);
    }
    xor(other) {
      return new _SquareSet(this.lo ^ other.lo, this.hi ^ other.hi);
    }
    union(other) {
      return new _SquareSet(this.lo | other.lo, this.hi | other.hi);
    }
    intersect(other) {
      return new _SquareSet(this.lo & other.lo, this.hi & other.hi);
    }
    diff(other) {
      return new _SquareSet(this.lo & ~other.lo, this.hi & ~other.hi);
    }
    intersects(other) {
      return this.intersect(other).nonEmpty();
    }
    isDisjoint(other) {
      return this.intersect(other).isEmpty();
    }
    supersetOf(other) {
      return other.diff(this).isEmpty();
    }
    subsetOf(other) {
      return this.diff(other).isEmpty();
    }
    shr64(shift) {
      if (shift >= 64)
        return _SquareSet.empty();
      if (shift >= 32)
        return new _SquareSet(this.hi >>> shift - 32, 0);
      if (shift > 0)
        return new _SquareSet(this.lo >>> shift ^ this.hi << 32 - shift, this.hi >>> shift);
      return this;
    }
    shl64(shift) {
      if (shift >= 64)
        return _SquareSet.empty();
      if (shift >= 32)
        return new _SquareSet(0, this.lo << shift - 32);
      if (shift > 0)
        return new _SquareSet(this.lo << shift, this.hi << shift ^ this.lo >>> 32 - shift);
      return this;
    }
    bswap64() {
      return new _SquareSet(bswap32(this.hi), bswap32(this.lo));
    }
    rbit64() {
      return new _SquareSet(rbit32(this.hi), rbit32(this.lo));
    }
    minus64(other) {
      const lo = this.lo - other.lo;
      const c = (lo & other.lo & 1) + (other.lo >>> 1) + (lo >>> 1) >>> 31;
      return new _SquareSet(lo, this.hi - (other.hi + c));
    }
    equals(other) {
      return this.lo === other.lo && this.hi === other.hi;
    }
    size() {
      return popcnt32(this.lo) + popcnt32(this.hi);
    }
    isEmpty() {
      return this.lo === 0 && this.hi === 0;
    }
    nonEmpty() {
      return this.lo !== 0 || this.hi !== 0;
    }
    has(square) {
      return (square >= 32 ? this.hi & 1 << square - 32 : this.lo & 1 << square) !== 0;
    }
    set(square, on) {
      return on ? this.with(square) : this.without(square);
    }
    with(square) {
      return square >= 32 ? new _SquareSet(this.lo, this.hi | 1 << square - 32) : new _SquareSet(this.lo | 1 << square, this.hi);
    }
    without(square) {
      return square >= 32 ? new _SquareSet(this.lo, this.hi & ~(1 << square - 32)) : new _SquareSet(this.lo & ~(1 << square), this.hi);
    }
    toggle(square) {
      return square >= 32 ? new _SquareSet(this.lo, this.hi ^ 1 << square - 32) : new _SquareSet(this.lo ^ 1 << square, this.hi);
    }
    last() {
      if (this.hi !== 0)
        return 63 - Math.clz32(this.hi);
      if (this.lo !== 0)
        return 31 - Math.clz32(this.lo);
      return;
    }
    first() {
      if (this.lo !== 0)
        return 31 - Math.clz32(this.lo & -this.lo);
      if (this.hi !== 0)
        return 63 - Math.clz32(this.hi & -this.hi);
      return;
    }
    withoutFirst() {
      if (this.lo !== 0)
        return new _SquareSet(this.lo & this.lo - 1, this.hi);
      return new _SquareSet(0, this.hi & this.hi - 1);
    }
    moreThanOne() {
      return this.hi !== 0 && this.lo !== 0 || (this.lo & this.lo - 1) !== 0 || (this.hi & this.hi - 1) !== 0;
    }
    singleSquare() {
      return this.moreThanOne() ? void 0 : this.last();
    }
    *[Symbol.iterator]() {
      let lo = this.lo;
      let hi = this.hi;
      while (lo !== 0) {
        const idx = 31 - Math.clz32(lo & -lo);
        lo ^= 1 << idx;
        yield idx;
      }
      while (hi !== 0) {
        const idx = 31 - Math.clz32(hi & -hi);
        hi ^= 1 << idx;
        yield 32 + idx;
      }
    }
    *reversed() {
      let lo = this.lo;
      let hi = this.hi;
      while (hi !== 0) {
        const idx = 31 - Math.clz32(hi);
        hi ^= 1 << idx;
        yield 32 + idx;
      }
      while (lo !== 0) {
        const idx = 31 - Math.clz32(lo);
        lo ^= 1 << idx;
        yield idx;
      }
    }
  };

  // node_modules/chessops/dist/esm/attacks.js
  var computeRange = (square, deltas) => {
    let range = SquareSet.empty();
    for (const delta of deltas) {
      const sq = square + delta;
      if (0 <= sq && sq < 64 && Math.abs(squareFile(square) - squareFile(sq)) <= 2) {
        range = range.with(sq);
      }
    }
    return range;
  };
  var tabulate = (f) => {
    const table = [];
    for (let square = 0; square < 64; square++)
      table[square] = f(square);
    return table;
  };
  var KING_ATTACKS = tabulate((sq) => computeRange(sq, [-9, -8, -7, -1, 1, 7, 8, 9]));
  var KNIGHT_ATTACKS = tabulate((sq) => computeRange(sq, [-17, -15, -10, -6, 6, 10, 15, 17]));
  var PAWN_ATTACKS = {
    white: tabulate((sq) => computeRange(sq, [7, 9])),
    black: tabulate((sq) => computeRange(sq, [-7, -9]))
  };
  var kingAttacks = (square) => KING_ATTACKS[square];
  var knightAttacks = (square) => KNIGHT_ATTACKS[square];
  var pawnAttacks = (color, square) => PAWN_ATTACKS[color][square];
  var FILE_RANGE = tabulate((sq) => SquareSet.fromFile(squareFile(sq)).without(sq));
  var RANK_RANGE = tabulate((sq) => SquareSet.fromRank(squareRank(sq)).without(sq));
  var DIAG_RANGE = tabulate((sq) => {
    const diag = new SquareSet(134480385, 2151686160);
    const shift = 8 * (squareRank(sq) - squareFile(sq));
    return (shift >= 0 ? diag.shl64(shift) : diag.shr64(-shift)).without(sq);
  });
  var ANTI_DIAG_RANGE = tabulate((sq) => {
    const diag = new SquareSet(270549120, 16909320);
    const shift = 8 * (squareRank(sq) + squareFile(sq) - 7);
    return (shift >= 0 ? diag.shl64(shift) : diag.shr64(-shift)).without(sq);
  });
  var hyperbola = (bit, range, occupied) => {
    let forward = occupied.intersect(range);
    let reverse = forward.bswap64();
    forward = forward.minus64(bit);
    reverse = reverse.minus64(bit.bswap64());
    return forward.xor(reverse.bswap64()).intersect(range);
  };
  var fileAttacks = (square, occupied) => hyperbola(SquareSet.fromSquare(square), FILE_RANGE[square], occupied);
  var rankAttacks = (square, occupied) => {
    const range = RANK_RANGE[square];
    let forward = occupied.intersect(range);
    let reverse = forward.rbit64();
    forward = forward.minus64(SquareSet.fromSquare(square));
    reverse = reverse.minus64(SquareSet.fromSquare(63 - square));
    return forward.xor(reverse.rbit64()).intersect(range);
  };
  var bishopAttacks = (square, occupied) => {
    const bit = SquareSet.fromSquare(square);
    return hyperbola(bit, DIAG_RANGE[square], occupied).xor(hyperbola(bit, ANTI_DIAG_RANGE[square], occupied));
  };
  var rookAttacks = (square, occupied) => fileAttacks(square, occupied).xor(rankAttacks(square, occupied));
  var queenAttacks = (square, occupied) => bishopAttacks(square, occupied).xor(rookAttacks(square, occupied));
  var ray = (a, b) => {
    const other = SquareSet.fromSquare(b);
    if (RANK_RANGE[a].intersects(other))
      return RANK_RANGE[a].with(a);
    if (ANTI_DIAG_RANGE[a].intersects(other))
      return ANTI_DIAG_RANGE[a].with(a);
    if (DIAG_RANGE[a].intersects(other))
      return DIAG_RANGE[a].with(a);
    if (FILE_RANGE[a].intersects(other))
      return FILE_RANGE[a].with(a);
    return SquareSet.empty();
  };
  var between = (a, b) => ray(a, b).intersect(SquareSet.full().shl64(a).xor(SquareSet.full().shl64(b))).withoutFirst();

  // node_modules/chessops/dist/esm/board.js
  var Board = class _Board {
    constructor() {
    }
    static default() {
      const board = new _Board();
      board.reset();
      return board;
    }
    /**
     * Resets all pieces to the default starting position for standard chess.
     */
    reset() {
      this.occupied = new SquareSet(65535, 4294901760);
      this.promoted = SquareSet.empty();
      this.white = new SquareSet(65535, 0);
      this.black = new SquareSet(0, 4294901760);
      this.pawn = new SquareSet(65280, 16711680);
      this.knight = new SquareSet(66, 1107296256);
      this.bishop = new SquareSet(36, 603979776);
      this.rook = new SquareSet(129, 2164260864);
      this.queen = new SquareSet(8, 134217728);
      this.king = new SquareSet(16, 268435456);
    }
    static empty() {
      const board = new _Board();
      board.clear();
      return board;
    }
    clear() {
      this.occupied = SquareSet.empty();
      this.promoted = SquareSet.empty();
      for (const color of COLORS)
        this[color] = SquareSet.empty();
      for (const role of ROLES)
        this[role] = SquareSet.empty();
    }
    clone() {
      const board = new _Board();
      board.occupied = this.occupied;
      board.promoted = this.promoted;
      for (const color of COLORS)
        board[color] = this[color];
      for (const role of ROLES)
        board[role] = this[role];
      return board;
    }
    getColor(square) {
      if (this.white.has(square))
        return "white";
      if (this.black.has(square))
        return "black";
      return;
    }
    getRole(square) {
      for (const role of ROLES) {
        if (this[role].has(square))
          return role;
      }
      return;
    }
    get(square) {
      const color = this.getColor(square);
      if (!color)
        return;
      const role = this.getRole(square);
      const promoted = this.promoted.has(square);
      return { color, role, promoted };
    }
    /**
     * Removes and returns the piece from the given `square`, if any.
     */
    take(square) {
      const piece = this.get(square);
      if (piece) {
        this.occupied = this.occupied.without(square);
        this[piece.color] = this[piece.color].without(square);
        this[piece.role] = this[piece.role].without(square);
        if (piece.promoted)
          this.promoted = this.promoted.without(square);
      }
      return piece;
    }
    /**
     * Put `piece` onto `square`, potentially replacing an existing piece.
     * Returns the existing piece, if any.
     */
    set(square, piece) {
      const old = this.take(square);
      this.occupied = this.occupied.with(square);
      this[piece.color] = this[piece.color].with(square);
      this[piece.role] = this[piece.role].with(square);
      if (piece.promoted)
        this.promoted = this.promoted.with(square);
      return old;
    }
    has(square) {
      return this.occupied.has(square);
    }
    *[Symbol.iterator]() {
      for (const square of this.occupied) {
        yield [square, this.get(square)];
      }
    }
    pieces(color, role) {
      return this[color].intersect(this[role]);
    }
    rooksAndQueens() {
      return this.rook.union(this.queen);
    }
    bishopsAndQueens() {
      return this.bishop.union(this.queen);
    }
    steppers() {
      return this.knight.union(this.pawn).union(this.king);
    }
    sliders() {
      return this.bishop.union(this.rook).union(this.queen);
    }
    /**
     * Finds the unique king of the given `color`, if any.
     */
    kingOf(color) {
      return this.pieces(color, "king").singleSquare();
    }
  };

  // node_modules/chessops/dist/esm/setup.js
  var MaterialSide = class _MaterialSide {
    constructor() {
    }
    static empty() {
      const m = new _MaterialSide();
      for (const role of ROLES)
        m[role] = 0;
      return m;
    }
    static fromBoard(board, color) {
      const m = new _MaterialSide();
      for (const role of ROLES)
        m[role] = board.pieces(color, role).size();
      return m;
    }
    clone() {
      const m = new _MaterialSide();
      for (const role of ROLES)
        m[role] = this[role];
      return m;
    }
    equals(other) {
      return ROLES.every((role) => this[role] === other[role]);
    }
    add(other) {
      const m = new _MaterialSide();
      for (const role of ROLES)
        m[role] = this[role] + other[role];
      return m;
    }
    subtract(other) {
      const m = new _MaterialSide();
      for (const role of ROLES)
        m[role] = this[role] - other[role];
      return m;
    }
    nonEmpty() {
      return ROLES.some((role) => this[role] > 0);
    }
    isEmpty() {
      return !this.nonEmpty();
    }
    hasPawns() {
      return this.pawn > 0;
    }
    hasNonPawns() {
      return this.knight > 0 || this.bishop > 0 || this.rook > 0 || this.queen > 0 || this.king > 0;
    }
    size() {
      return this.pawn + this.knight + this.bishop + this.rook + this.queen + this.king;
    }
  };
  var Material = class _Material {
    constructor(white, black) {
      this.white = white;
      this.black = black;
    }
    static empty() {
      return new _Material(MaterialSide.empty(), MaterialSide.empty());
    }
    static fromBoard(board) {
      return new _Material(MaterialSide.fromBoard(board, "white"), MaterialSide.fromBoard(board, "black"));
    }
    clone() {
      return new _Material(this.white.clone(), this.black.clone());
    }
    equals(other) {
      return this.white.equals(other.white) && this.black.equals(other.black);
    }
    add(other) {
      return new _Material(this.white.add(other.white), this.black.add(other.black));
    }
    subtract(other) {
      return new _Material(this.white.subtract(other.white), this.black.subtract(other.black));
    }
    count(role) {
      return this.white[role] + this.black[role];
    }
    size() {
      return this.white.size() + this.black.size();
    }
    isEmpty() {
      return this.white.isEmpty() && this.black.isEmpty();
    }
    nonEmpty() {
      return !this.isEmpty();
    }
    hasPawns() {
      return this.white.hasPawns() || this.black.hasPawns();
    }
    hasNonPawns() {
      return this.white.hasNonPawns() || this.black.hasNonPawns();
    }
  };
  var RemainingChecks = class _RemainingChecks {
    constructor(white, black) {
      this.white = white;
      this.black = black;
    }
    static default() {
      return new _RemainingChecks(3, 3);
    }
    clone() {
      return new _RemainingChecks(this.white, this.black);
    }
    equals(other) {
      return this.white === other.white && this.black === other.black;
    }
  };
  var defaultSetup = () => ({
    board: Board.default(),
    pockets: void 0,
    turn: "white",
    castlingRights: SquareSet.corners(),
    epSquare: void 0,
    remainingChecks: void 0,
    halfmoves: 0,
    fullmoves: 1
  });

  // node_modules/@badrap/result/dist/mjs/index.mjs
  var _Result = class {
    unwrap(ok, err) {
      const r = this._chain((value) => Result.ok(ok ? ok(value) : value), (error) => err ? Result.ok(err(error)) : Result.err(error));
      if (r.isErr) {
        throw r.error;
      }
      return r.value;
    }
    map(ok, err) {
      return this._chain((value) => Result.ok(ok(value)), (error) => Result.err(err ? err(error) : error));
    }
    chain(ok, err) {
      return this._chain(ok, err !== null && err !== void 0 ? err : ((error) => Result.err(error)));
    }
  };
  var _Ok = class extends _Result {
    constructor(value) {
      super();
      this.value = value;
      this.isOk = true;
      this.isErr = false;
    }
    _chain(ok, _err) {
      return ok(this.value);
    }
  };
  var _Err = class extends _Result {
    constructor(error) {
      super();
      this.error = error;
      this.isOk = false;
      this.isErr = true;
    }
    _chain(_ok, err) {
      return err(this.error);
    }
  };
  var Result;
  (function(Result2) {
    function ok(value) {
      return new _Ok(value);
    }
    Result2.ok = ok;
    function err(error) {
      return new _Err(error || new Error());
    }
    Result2.err = err;
    function all(obj) {
      if (Array.isArray(obj)) {
        const res2 = [];
        for (let i = 0; i < obj.length; i++) {
          const item = obj[i];
          if (item.isErr) {
            return item;
          }
          res2.push(item.value);
        }
        return Result2.ok(res2);
      }
      const res = {};
      const keys = Object.keys(obj);
      for (let i = 0; i < keys.length; i++) {
        const item = obj[keys[i]];
        if (item.isErr) {
          return item;
        }
        res[keys[i]] = item.value;
      }
      return Result2.ok(res);
    }
    Result2.all = all;
  })(Result || (Result = {}));

  // node_modules/chessops/dist/esm/chess.js
  var IllegalSetup;
  (function(IllegalSetup2) {
    IllegalSetup2["Empty"] = "ERR_EMPTY";
    IllegalSetup2["OppositeCheck"] = "ERR_OPPOSITE_CHECK";
    IllegalSetup2["PawnsOnBackrank"] = "ERR_PAWNS_ON_BACKRANK";
    IllegalSetup2["Kings"] = "ERR_KINGS";
    IllegalSetup2["Variant"] = "ERR_VARIANT";
  })(IllegalSetup || (IllegalSetup = {}));
  var PositionError = class extends Error {
  };
  var attacksTo = (square, attacker, board, occupied) => board[attacker].intersect(rookAttacks(square, occupied).intersect(board.rooksAndQueens()).union(bishopAttacks(square, occupied).intersect(board.bishopsAndQueens())).union(knightAttacks(square).intersect(board.knight)).union(kingAttacks(square).intersect(board.king)).union(pawnAttacks(opposite(attacker), square).intersect(board.pawn)));
  var Castles = class _Castles {
    constructor() {
    }
    static default() {
      const castles = new _Castles();
      castles.castlingRights = SquareSet.corners();
      castles.rook = {
        white: { a: 0, h: 7 },
        black: { a: 56, h: 63 }
      };
      castles.path = {
        white: { a: new SquareSet(14, 0), h: new SquareSet(96, 0) },
        black: { a: new SquareSet(0, 234881024), h: new SquareSet(0, 1610612736) }
      };
      return castles;
    }
    static empty() {
      const castles = new _Castles();
      castles.castlingRights = SquareSet.empty();
      castles.rook = {
        white: { a: void 0, h: void 0 },
        black: { a: void 0, h: void 0 }
      };
      castles.path = {
        white: { a: SquareSet.empty(), h: SquareSet.empty() },
        black: { a: SquareSet.empty(), h: SquareSet.empty() }
      };
      return castles;
    }
    clone() {
      const castles = new _Castles();
      castles.castlingRights = this.castlingRights;
      castles.rook = {
        white: { a: this.rook.white.a, h: this.rook.white.h },
        black: { a: this.rook.black.a, h: this.rook.black.h }
      };
      castles.path = {
        white: { a: this.path.white.a, h: this.path.white.h },
        black: { a: this.path.black.a, h: this.path.black.h }
      };
      return castles;
    }
    add(color, side, king2, rook2) {
      const kingTo = kingCastlesTo(color, side);
      const rookTo = rookCastlesTo(color, side);
      this.castlingRights = this.castlingRights.with(rook2);
      this.rook[color][side] = rook2;
      this.path[color][side] = between(rook2, rookTo).with(rookTo).union(between(king2, kingTo).with(kingTo)).without(king2).without(rook2);
    }
    static fromSetup(setup) {
      const castles = _Castles.empty();
      const rooks = setup.castlingRights.intersect(setup.board.rook);
      for (const color of COLORS) {
        const backrank = SquareSet.backrank(color);
        const king2 = setup.board.kingOf(color);
        if (!defined(king2) || !backrank.has(king2))
          continue;
        const side = rooks.intersect(setup.board[color]).intersect(backrank);
        const aSide = side.first();
        if (defined(aSide) && aSide < king2)
          castles.add(color, "a", king2, aSide);
        const hSide = side.last();
        if (defined(hSide) && king2 < hSide)
          castles.add(color, "h", king2, hSide);
      }
      return castles;
    }
    discardRook(square) {
      if (this.castlingRights.has(square)) {
        this.castlingRights = this.castlingRights.without(square);
        for (const color of COLORS) {
          for (const side of CASTLING_SIDES) {
            if (this.rook[color][side] === square)
              this.rook[color][side] = void 0;
          }
        }
      }
    }
    discardColor(color) {
      this.castlingRights = this.castlingRights.diff(SquareSet.backrank(color));
      this.rook[color].a = void 0;
      this.rook[color].h = void 0;
    }
  };
  var Position = class {
    constructor(rules) {
      this.rules = rules;
    }
    reset() {
      this.board = Board.default();
      this.pockets = void 0;
      this.turn = "white";
      this.castles = Castles.default();
      this.epSquare = void 0;
      this.remainingChecks = void 0;
      this.halfmoves = 0;
      this.fullmoves = 1;
    }
    setupUnchecked(setup) {
      this.board = setup.board.clone();
      this.board.promoted = SquareSet.empty();
      this.pockets = void 0;
      this.turn = setup.turn;
      this.castles = Castles.fromSetup(setup);
      this.epSquare = validEpSquare(this, setup.epSquare);
      this.remainingChecks = void 0;
      this.halfmoves = setup.halfmoves;
      this.fullmoves = setup.fullmoves;
    }
    // When subclassing overwrite at least:
    //
    // - static default()
    // - static fromSetup()
    // - static clone()
    //
    // - dests()
    // - isVariantEnd()
    // - variantOutcome()
    // - hasInsufficientMaterial()
    // - isStandardMaterial()
    kingAttackers(square, attacker, occupied) {
      return attacksTo(square, attacker, this.board, occupied);
    }
    playCaptureAt(square, captured) {
      this.halfmoves = 0;
      if (captured.role === "rook")
        this.castles.discardRook(square);
      if (this.pockets)
        this.pockets[opposite(captured.color)][captured.promoted ? "pawn" : captured.role]++;
    }
    ctx() {
      const variantEnd = this.isVariantEnd();
      const king2 = this.board.kingOf(this.turn);
      if (!defined(king2)) {
        return { king: king2, blockers: SquareSet.empty(), checkers: SquareSet.empty(), variantEnd, mustCapture: false };
      }
      const snipers = rookAttacks(king2, SquareSet.empty()).intersect(this.board.rooksAndQueens()).union(bishopAttacks(king2, SquareSet.empty()).intersect(this.board.bishopsAndQueens())).intersect(this.board[opposite(this.turn)]);
      let blockers = SquareSet.empty();
      for (const sniper of snipers) {
        const b = between(king2, sniper).intersect(this.board.occupied);
        if (!b.moreThanOne())
          blockers = blockers.union(b);
      }
      const checkers = this.kingAttackers(king2, opposite(this.turn), this.board.occupied);
      return {
        king: king2,
        blockers,
        checkers,
        variantEnd,
        mustCapture: false
      };
    }
    clone() {
      var _a, _b;
      const pos = new this.constructor();
      pos.board = this.board.clone();
      pos.pockets = (_a = this.pockets) === null || _a === void 0 ? void 0 : _a.clone();
      pos.turn = this.turn;
      pos.castles = this.castles.clone();
      pos.epSquare = this.epSquare;
      pos.remainingChecks = (_b = this.remainingChecks) === null || _b === void 0 ? void 0 : _b.clone();
      pos.halfmoves = this.halfmoves;
      pos.fullmoves = this.fullmoves;
      return pos;
    }
    validate() {
      if (this.board.occupied.isEmpty())
        return Result.err(new PositionError(IllegalSetup.Empty));
      if (this.board.king.size() !== 2)
        return Result.err(new PositionError(IllegalSetup.Kings));
      if (!defined(this.board.kingOf(this.turn)))
        return Result.err(new PositionError(IllegalSetup.Kings));
      const otherKing = this.board.kingOf(opposite(this.turn));
      if (!defined(otherKing))
        return Result.err(new PositionError(IllegalSetup.Kings));
      if (this.kingAttackers(otherKing, this.turn, this.board.occupied).nonEmpty()) {
        return Result.err(new PositionError(IllegalSetup.OppositeCheck));
      }
      if (SquareSet.backranks().intersects(this.board.pawn)) {
        return Result.err(new PositionError(IllegalSetup.PawnsOnBackrank));
      }
      return Result.ok(void 0);
    }
    dropDests(_ctx) {
      return SquareSet.empty();
    }
    dests(square, ctx) {
      ctx = ctx || this.ctx();
      if (ctx.variantEnd)
        return SquareSet.empty();
      const piece = this.board.get(square);
      if (!piece || piece.color !== this.turn)
        return SquareSet.empty();
      let pseudo, legal;
      if (piece.role === "pawn") {
        pseudo = pawnAttacks(this.turn, square).intersect(this.board[opposite(this.turn)]);
        const delta = this.turn === "white" ? 8 : -8;
        const step2 = square + delta;
        if (0 <= step2 && step2 < 64 && !this.board.occupied.has(step2)) {
          pseudo = pseudo.with(step2);
          const canDoubleStep = this.turn === "white" ? square < 16 : square >= 64 - 16;
          const doubleStep = step2 + delta;
          if (canDoubleStep && !this.board.occupied.has(doubleStep)) {
            pseudo = pseudo.with(doubleStep);
          }
        }
        if (defined(this.epSquare) && canCaptureEp(this, square, ctx)) {
          legal = SquareSet.fromSquare(this.epSquare);
        }
      } else if (piece.role === "bishop")
        pseudo = bishopAttacks(square, this.board.occupied);
      else if (piece.role === "knight")
        pseudo = knightAttacks(square);
      else if (piece.role === "rook")
        pseudo = rookAttacks(square, this.board.occupied);
      else if (piece.role === "queen")
        pseudo = queenAttacks(square, this.board.occupied);
      else
        pseudo = kingAttacks(square);
      pseudo = pseudo.diff(this.board[this.turn]);
      if (defined(ctx.king)) {
        if (piece.role === "king") {
          const occ = this.board.occupied.without(square);
          for (const to of pseudo) {
            if (this.kingAttackers(to, opposite(this.turn), occ).nonEmpty())
              pseudo = pseudo.without(to);
          }
          return pseudo.union(castlingDest(this, "a", ctx)).union(castlingDest(this, "h", ctx));
        }
        if (ctx.checkers.nonEmpty()) {
          const checker = ctx.checkers.singleSquare();
          if (!defined(checker))
            return SquareSet.empty();
          pseudo = pseudo.intersect(between(checker, ctx.king).with(checker));
        }
        if (ctx.blockers.has(square))
          pseudo = pseudo.intersect(ray(square, ctx.king));
      }
      if (legal)
        pseudo = pseudo.union(legal);
      return pseudo;
    }
    isVariantEnd() {
      return false;
    }
    variantOutcome(_ctx) {
      return;
    }
    hasInsufficientMaterial(color) {
      if (this.board[color].intersect(this.board.pawn.union(this.board.rooksAndQueens())).nonEmpty())
        return false;
      if (this.board[color].intersects(this.board.knight)) {
        return this.board[color].size() <= 2 && this.board[opposite(color)].diff(this.board.king).diff(this.board.queen).isEmpty();
      }
      if (this.board[color].intersects(this.board.bishop)) {
        const sameColor = !this.board.bishop.intersects(SquareSet.darkSquares()) || !this.board.bishop.intersects(SquareSet.lightSquares());
        return sameColor && this.board.pawn.isEmpty() && this.board.knight.isEmpty();
      }
      return true;
    }
    // The following should be identical in all subclasses
    toSetup() {
      var _a, _b;
      return {
        board: this.board.clone(),
        pockets: (_a = this.pockets) === null || _a === void 0 ? void 0 : _a.clone(),
        turn: this.turn,
        castlingRights: this.castles.castlingRights,
        epSquare: legalEpSquare(this),
        remainingChecks: (_b = this.remainingChecks) === null || _b === void 0 ? void 0 : _b.clone(),
        halfmoves: Math.min(this.halfmoves, 150),
        fullmoves: Math.min(Math.max(this.fullmoves, 1), 9999)
      };
    }
    isInsufficientMaterial() {
      return COLORS.every((color) => this.hasInsufficientMaterial(color));
    }
    hasDests(ctx) {
      ctx = ctx || this.ctx();
      for (const square of this.board[this.turn]) {
        if (this.dests(square, ctx).nonEmpty())
          return true;
      }
      return this.dropDests(ctx).nonEmpty();
    }
    isLegal(move3, ctx) {
      if (isDrop(move3)) {
        if (!this.pockets || this.pockets[this.turn][move3.role] <= 0)
          return false;
        if (move3.role === "pawn" && SquareSet.backranks().has(move3.to))
          return false;
        return this.dropDests(ctx).has(move3.to);
      } else {
        if (move3.promotion === "pawn")
          return false;
        if (move3.promotion === "king" && this.rules !== "antichess")
          return false;
        if (!!move3.promotion !== (this.board.pawn.has(move3.from) && SquareSet.backranks().has(move3.to)))
          return false;
        const dests = this.dests(move3.from, ctx);
        return dests.has(move3.to) || dests.has(normalizeMove(this, move3).to);
      }
    }
    isCheck() {
      const king2 = this.board.kingOf(this.turn);
      return defined(king2) && this.kingAttackers(king2, opposite(this.turn), this.board.occupied).nonEmpty();
    }
    isEnd(ctx) {
      if (ctx ? ctx.variantEnd : this.isVariantEnd())
        return true;
      return this.isInsufficientMaterial() || !this.hasDests(ctx);
    }
    isCheckmate(ctx) {
      ctx = ctx || this.ctx();
      return !ctx.variantEnd && ctx.checkers.nonEmpty() && !this.hasDests(ctx);
    }
    isStalemate(ctx) {
      ctx = ctx || this.ctx();
      return !ctx.variantEnd && ctx.checkers.isEmpty() && !this.hasDests(ctx);
    }
    outcome(ctx) {
      const variantOutcome = this.variantOutcome(ctx);
      if (variantOutcome)
        return variantOutcome;
      ctx = ctx || this.ctx();
      if (this.isCheckmate(ctx))
        return { winner: opposite(this.turn) };
      else if (this.isInsufficientMaterial() || this.isStalemate(ctx))
        return { winner: void 0 };
      else
        return;
    }
    allDests(ctx) {
      ctx = ctx || this.ctx();
      const d = /* @__PURE__ */ new Map();
      if (ctx.variantEnd)
        return d;
      for (const square of this.board[this.turn]) {
        d.set(square, this.dests(square, ctx));
      }
      return d;
    }
    play(move3) {
      const turn = this.turn;
      const epSquare = this.epSquare;
      const castling = castlingSide(this, move3);
      this.epSquare = void 0;
      this.halfmoves += 1;
      if (turn === "black")
        this.fullmoves += 1;
      this.turn = opposite(turn);
      if (isDrop(move3)) {
        this.board.set(move3.to, { role: move3.role, color: turn });
        if (this.pockets)
          this.pockets[turn][move3.role]--;
        if (move3.role === "pawn")
          this.halfmoves = 0;
      } else {
        const piece = this.board.take(move3.from);
        if (!piece)
          return;
        let epCapture;
        if (piece.role === "pawn") {
          this.halfmoves = 0;
          if (move3.to === epSquare) {
            epCapture = this.board.take(move3.to + (turn === "white" ? -8 : 8));
          }
          const delta = move3.from - move3.to;
          if (Math.abs(delta) === 16 && 8 <= move3.from && move3.from <= 55) {
            this.epSquare = move3.from + move3.to >> 1;
          }
          if (move3.promotion) {
            piece.role = move3.promotion;
            piece.promoted = !!this.pockets;
          }
        } else if (piece.role === "rook") {
          this.castles.discardRook(move3.from);
        } else if (piece.role === "king") {
          if (castling) {
            const rookFrom = this.castles.rook[turn][castling];
            if (defined(rookFrom)) {
              const rook2 = this.board.take(rookFrom);
              this.board.set(kingCastlesTo(turn, castling), piece);
              if (rook2)
                this.board.set(rookCastlesTo(turn, castling), rook2);
            }
          }
          this.castles.discardColor(turn);
        }
        if (!castling) {
          const capture = this.board.set(move3.to, piece) || epCapture;
          if (capture)
            this.playCaptureAt(move3.to, capture);
        }
      }
      if (this.remainingChecks) {
        if (this.isCheck())
          this.remainingChecks[turn] = Math.max(this.remainingChecks[turn] - 1, 0);
      }
    }
  };
  var Chess = class extends Position {
    constructor() {
      super("chess");
    }
    static default() {
      const pos = new this();
      pos.reset();
      return pos;
    }
    static fromSetup(setup) {
      const pos = new this();
      pos.setupUnchecked(setup);
      return pos.validate().map((_) => pos);
    }
    clone() {
      return super.clone();
    }
  };
  var validEpSquare = (pos, square) => {
    if (!defined(square))
      return;
    const epRank = pos.turn === "white" ? 5 : 2;
    const forward = pos.turn === "white" ? 8 : -8;
    if (squareRank(square) !== epRank)
      return;
    if (pos.board.occupied.has(square + forward))
      return;
    const pawn2 = square - forward;
    if (!pos.board.pawn.has(pawn2) || !pos.board[opposite(pos.turn)].has(pawn2))
      return;
    return square;
  };
  var legalEpSquare = (pos) => {
    if (!defined(pos.epSquare))
      return;
    const ctx = pos.ctx();
    const ourPawns = pos.board.pieces(pos.turn, "pawn");
    const candidates = ourPawns.intersect(pawnAttacks(opposite(pos.turn), pos.epSquare));
    for (const candidate of candidates) {
      if (pos.dests(candidate, ctx).has(pos.epSquare))
        return pos.epSquare;
    }
    return;
  };
  var canCaptureEp = (pos, pawnFrom, ctx) => {
    if (!defined(pos.epSquare))
      return false;
    if (!pawnAttacks(pos.turn, pawnFrom).has(pos.epSquare))
      return false;
    if (!defined(ctx.king))
      return true;
    const delta = pos.turn === "white" ? 8 : -8;
    const captured = pos.epSquare - delta;
    return pos.kingAttackers(ctx.king, opposite(pos.turn), pos.board.occupied.toggle(pawnFrom).toggle(captured).with(pos.epSquare)).without(captured).isEmpty();
  };
  var castlingDest = (pos, side, ctx) => {
    if (!defined(ctx.king) || ctx.checkers.nonEmpty())
      return SquareSet.empty();
    const rook2 = pos.castles.rook[pos.turn][side];
    if (!defined(rook2))
      return SquareSet.empty();
    if (pos.castles.path[pos.turn][side].intersects(pos.board.occupied))
      return SquareSet.empty();
    const kingTo = kingCastlesTo(pos.turn, side);
    const kingPath = between(ctx.king, kingTo);
    const occ = pos.board.occupied.without(ctx.king);
    for (const sq of kingPath) {
      if (pos.kingAttackers(sq, opposite(pos.turn), occ).nonEmpty())
        return SquareSet.empty();
    }
    const rookTo = rookCastlesTo(pos.turn, side);
    const after = pos.board.occupied.toggle(ctx.king).toggle(rook2).toggle(rookTo);
    if (pos.kingAttackers(kingTo, opposite(pos.turn), after).nonEmpty())
      return SquareSet.empty();
    return SquareSet.fromSquare(rook2);
  };
  var castlingSide = (pos, move3) => {
    if (isDrop(move3))
      return;
    const delta = move3.to - move3.from;
    if (Math.abs(delta) !== 2 && !pos.board[pos.turn].has(move3.to))
      return;
    if (!pos.board.king.has(move3.from))
      return;
    return delta > 0 ? "h" : "a";
  };
  var normalizeMove = (pos, move3) => {
    const side = castlingSide(pos, move3);
    if (!side)
      return move3;
    const rookFrom = pos.castles.rook[pos.turn][side];
    return {
      from: move3.from,
      to: defined(rookFrom) ? rookFrom : move3.to
    };
  };

  // node_modules/chessops/dist/esm/compat.js
  var chessgroundDests = (pos, opts) => {
    const result = /* @__PURE__ */ new Map();
    const ctx = pos.ctx();
    for (const [from, squares] of pos.allDests(ctx)) {
      if (squares.nonEmpty()) {
        const d = Array.from(squares, makeSquare);
        if (!(opts === null || opts === void 0 ? void 0 : opts.chess960) && from === ctx.king && squareFile(from) === 4) {
          if (squares.has(0))
            d.push("c1");
          else if (squares.has(56))
            d.push("c8");
          if (squares.has(7))
            d.push("g1");
          else if (squares.has(63))
            d.push("g8");
        }
        result.set(makeSquare(from), d);
      }
    }
    return result;
  };

  // node_modules/chessops/dist/esm/fen.js
  var INITIAL_BOARD_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
  var INITIAL_EPD = INITIAL_BOARD_FEN + " w KQkq -";
  var INITIAL_FEN = INITIAL_EPD + " 0 1";
  var EMPTY_BOARD_FEN = "8/8/8/8/8/8/8/8";
  var EMPTY_EPD = EMPTY_BOARD_FEN + " w - -";
  var EMPTY_FEN = EMPTY_EPD + " 0 1";
  var InvalidFen;
  (function(InvalidFen2) {
    InvalidFen2["Fen"] = "ERR_FEN";
    InvalidFen2["Board"] = "ERR_BOARD";
    InvalidFen2["Pockets"] = "ERR_POCKETS";
    InvalidFen2["Turn"] = "ERR_TURN";
    InvalidFen2["Castling"] = "ERR_CASTLING";
    InvalidFen2["EpSquare"] = "ERR_EP_SQUARE";
    InvalidFen2["RemainingChecks"] = "ERR_REMAINING_CHECKS";
    InvalidFen2["Halfmoves"] = "ERR_HALFMOVES";
    InvalidFen2["Fullmoves"] = "ERR_FULLMOVES";
  })(InvalidFen || (InvalidFen = {}));
  var FenError = class extends Error {
  };
  var nthIndexOf = (haystack, needle, n) => {
    let index = haystack.indexOf(needle);
    while (n-- > 0) {
      if (index === -1)
        break;
      index = haystack.indexOf(needle, index + needle.length);
    }
    return index;
  };
  var parseSmallUint = (str) => /^\d{1,4}$/.test(str) ? parseInt(str, 10) : void 0;
  var charToPiece = (ch) => {
    const role = charToRole(ch);
    return role && { role, color: ch.toLowerCase() === ch ? "black" : "white" };
  };
  var parseBoardFen = (boardPart) => {
    const board = Board.empty();
    let rank = 7;
    let file = 0;
    for (let i = 0; i < boardPart.length; i++) {
      const c = boardPart[i];
      if (c === "/" && file === 8) {
        file = 0;
        rank--;
      } else {
        const step2 = parseInt(c, 10);
        if (step2 > 0)
          file += step2;
        else {
          if (file >= 8 || rank < 0)
            return Result.err(new FenError(InvalidFen.Board));
          const square = file + rank * 8;
          const piece = charToPiece(c);
          if (!piece)
            return Result.err(new FenError(InvalidFen.Board));
          if (boardPart[i + 1] === "~") {
            piece.promoted = true;
            i++;
          }
          board.set(square, piece);
          file++;
        }
      }
    }
    if (rank !== 0 || file !== 8)
      return Result.err(new FenError(InvalidFen.Board));
    return Result.ok(board);
  };
  var parsePockets = (pocketPart) => {
    if (pocketPart.length > 64)
      return Result.err(new FenError(InvalidFen.Pockets));
    const pockets = Material.empty();
    for (const c of pocketPart) {
      const piece = charToPiece(c);
      if (!piece)
        return Result.err(new FenError(InvalidFen.Pockets));
      pockets[piece.color][piece.role]++;
    }
    return Result.ok(pockets);
  };
  var parseCastlingFen = (board, castlingPart) => {
    let castlingRights = SquareSet.empty();
    if (castlingPart === "-")
      return Result.ok(castlingRights);
    for (const c of castlingPart) {
      const lower = c.toLowerCase();
      const color = c === lower ? "black" : "white";
      const rank = color === "white" ? 0 : 7;
      if ("a" <= lower && lower <= "h") {
        castlingRights = castlingRights.with(squareFromCoords(lower.charCodeAt(0) - "a".charCodeAt(0), rank));
      } else if (lower === "k" || lower === "q") {
        const rooksAndKings = board[color].intersect(SquareSet.backrank(color)).intersect(board.rook.union(board.king));
        const candidate = lower === "k" ? rooksAndKings.last() : rooksAndKings.first();
        castlingRights = castlingRights.with(defined(candidate) && board.rook.has(candidate) ? candidate : squareFromCoords(lower === "k" ? 7 : 0, rank));
      } else
        return Result.err(new FenError(InvalidFen.Castling));
    }
    if (COLORS.some((color) => SquareSet.backrank(color).intersect(castlingRights).size() > 2)) {
      return Result.err(new FenError(InvalidFen.Castling));
    }
    return Result.ok(castlingRights);
  };
  var parseRemainingChecks = (part) => {
    const parts = part.split("+");
    if (parts.length === 3 && parts[0] === "") {
      const white = parseSmallUint(parts[1]);
      const black = parseSmallUint(parts[2]);
      if (!defined(white) || white > 3 || !defined(black) || black > 3) {
        return Result.err(new FenError(InvalidFen.RemainingChecks));
      }
      return Result.ok(new RemainingChecks(3 - white, 3 - black));
    } else if (parts.length === 2) {
      const white = parseSmallUint(parts[0]);
      const black = parseSmallUint(parts[1]);
      if (!defined(white) || white > 3 || !defined(black) || black > 3) {
        return Result.err(new FenError(InvalidFen.RemainingChecks));
      }
      return Result.ok(new RemainingChecks(white, black));
    } else
      return Result.err(new FenError(InvalidFen.RemainingChecks));
  };
  var parseFen = (fen) => {
    const parts = fen.split(/[\s_]+/);
    const boardPart = parts.shift();
    let board;
    let pockets = Result.ok(void 0);
    if (boardPart.endsWith("]")) {
      const pocketStart = boardPart.indexOf("[");
      if (pocketStart === -1)
        return Result.err(new FenError(InvalidFen.Fen));
      board = parseBoardFen(boardPart.slice(0, pocketStart));
      pockets = parsePockets(boardPart.slice(pocketStart + 1, -1));
    } else {
      const pocketStart = nthIndexOf(boardPart, "/", 7);
      if (pocketStart === -1)
        board = parseBoardFen(boardPart);
      else {
        board = parseBoardFen(boardPart.slice(0, pocketStart));
        pockets = parsePockets(boardPart.slice(pocketStart + 1));
      }
    }
    let turn;
    const turnPart = parts.shift();
    if (!defined(turnPart) || turnPart === "w")
      turn = "white";
    else if (turnPart === "b")
      turn = "black";
    else
      return Result.err(new FenError(InvalidFen.Turn));
    return board.chain((board2) => {
      const castlingPart = parts.shift();
      const castlingRights = defined(castlingPart) ? parseCastlingFen(board2, castlingPart) : Result.ok(SquareSet.empty());
      const epPart = parts.shift();
      let epSquare;
      if (defined(epPart) && epPart !== "-") {
        epSquare = parseSquare(epPart);
        if (!defined(epSquare))
          return Result.err(new FenError(InvalidFen.EpSquare));
      }
      let halfmovePart = parts.shift();
      let earlyRemainingChecks;
      if (defined(halfmovePart) && halfmovePart.includes("+")) {
        earlyRemainingChecks = parseRemainingChecks(halfmovePart);
        halfmovePart = parts.shift();
      }
      const halfmoves = defined(halfmovePart) ? parseSmallUint(halfmovePart) : 0;
      if (!defined(halfmoves))
        return Result.err(new FenError(InvalidFen.Halfmoves));
      const fullmovesPart = parts.shift();
      const fullmoves = defined(fullmovesPart) ? parseSmallUint(fullmovesPart) : 1;
      if (!defined(fullmoves))
        return Result.err(new FenError(InvalidFen.Fullmoves));
      const remainingChecksPart = parts.shift();
      let remainingChecks = Result.ok(void 0);
      if (defined(remainingChecksPart)) {
        if (defined(earlyRemainingChecks))
          return Result.err(new FenError(InvalidFen.RemainingChecks));
        remainingChecks = parseRemainingChecks(remainingChecksPart);
      } else if (defined(earlyRemainingChecks)) {
        remainingChecks = earlyRemainingChecks;
      }
      if (parts.length > 0)
        return Result.err(new FenError(InvalidFen.Fen));
      return pockets.chain((pockets2) => castlingRights.chain((castlingRights2) => remainingChecks.map((remainingChecks2) => {
        return {
          board: board2,
          pockets: pockets2,
          turn,
          castlingRights: castlingRights2,
          remainingChecks: remainingChecks2,
          epSquare,
          halfmoves,
          fullmoves: Math.max(1, fullmoves)
        };
      })));
    });
  };
  var makePiece = (piece) => {
    let r = roleToChar(piece.role);
    if (piece.color === "white")
      r = r.toUpperCase();
    if (piece.promoted)
      r += "~";
    return r;
  };
  var makeBoardFen = (board) => {
    let fen = "";
    let empty = 0;
    for (let rank = 7; rank >= 0; rank--) {
      for (let file = 0; file < 8; file++) {
        const square = file + rank * 8;
        const piece = board.get(square);
        if (!piece)
          empty++;
        else {
          if (empty > 0) {
            fen += empty;
            empty = 0;
          }
          fen += makePiece(piece);
        }
        if (file === 7) {
          if (empty > 0) {
            fen += empty;
            empty = 0;
          }
          if (rank !== 0)
            fen += "/";
        }
      }
    }
    return fen;
  };
  var makePocket = (material) => ROLES.map((role) => roleToChar(role).repeat(material[role])).join("");
  var makePockets = (pocket) => makePocket(pocket.white).toUpperCase() + makePocket(pocket.black);
  var makeCastlingFen = (board, castlingRights) => {
    let fen = "";
    for (const color of COLORS) {
      const backrank = SquareSet.backrank(color);
      let king2 = board.kingOf(color);
      if (defined(king2) && !backrank.has(king2))
        king2 = void 0;
      const candidates = board.pieces(color, "rook").intersect(backrank);
      for (const rook2 of castlingRights.intersect(backrank).reversed()) {
        if (rook2 === candidates.first() && defined(king2) && rook2 < king2) {
          fen += color === "white" ? "Q" : "q";
        } else if (rook2 === candidates.last() && defined(king2) && king2 < rook2) {
          fen += color === "white" ? "K" : "k";
        } else {
          const file = FILE_NAMES[squareFile(rook2)];
          fen += color === "white" ? file.toUpperCase() : file;
        }
      }
    }
    return fen || "-";
  };
  var makeRemainingChecks = (checks) => `${checks.white}+${checks.black}`;
  var makeFen = (setup, opts) => [
    makeBoardFen(setup.board) + (setup.pockets ? `[${makePockets(setup.pockets)}]` : ""),
    setup.turn[0],
    makeCastlingFen(setup.board, setup.castlingRights),
    defined(setup.epSquare) ? makeSquare(setup.epSquare) : "-",
    ...setup.remainingChecks ? [makeRemainingChecks(setup.remainingChecks)] : [],
    ...(opts === null || opts === void 0 ? void 0 : opts.epd) ? [] : [Math.max(0, Math.min(setup.halfmoves, 9999)), Math.max(1, Math.min(setup.fullmoves, 9999))]
  ].join(" ");

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/game.ts
  var _GameCtrl = class _GameCtrl {
    constructor(game, stream, root) {
      this.stream = stream;
      this.root = root;
      __publicField(this, "game");
      __publicField(this, "pov");
      __publicField(this, "chess", Chess.default());
      __publicField(this, "lastMove");
      __publicField(this, "lastUpdateAt", Date.now());
      __publicField(this, "ground");
      __publicField(this, "redrawInterval");
      __publicField(this, "onUnmount", () => {
        this.stream.close();
        clearInterval(this.redrawInterval);
      });
      __publicField(this, "onUpdate", () => {
        const setup = this.game.initialFen == "startpos" ? defaultSetup() : parseFen(this.game.initialFen).unwrap();
        this.chess = Chess.fromSetup(setup).unwrap();
        const moves = this.game.state.moves.split(" ").filter((m) => m);
        moves.forEach((uci) => this.chess.play(parseUci(uci)));
        const lastMove = moves[moves.length - 1];
        this.lastMove = lastMove && [lastMove.substr(0, 2), lastMove.substr(2, 2)];
        this.lastUpdateAt = Date.now();
        this.ground?.set(this.chessgroundConfig());
        if (this.chess.turn == this.pov) this.ground?.playPremove();
      });
      __publicField(this, "timeOf", (color) => this.game.state[`${color[0]}time`]);
      __publicField(this, "userMove", async (orig, dest) => {
        this.ground?.set({ turnColor: opposite(this.pov) });
        await this.root.auth.fetchBody(`/api/board/game/${this.game.id}/move/${orig}${dest}`, { method: "post" });
      });
      __publicField(this, "resign", async () => {
        await this.root.auth.fetchBody(`/api/board/game/${this.game.id}/resign`, { method: "post" });
      });
      __publicField(this, "playing", () => this.game.state.status == "started");
      __publicField(this, "chessgroundConfig", () => ({
        orientation: this.pov,
        fen: makeFen(this.chess.toSetup()),
        lastMove: this.lastMove,
        turnColor: this.chess.turn,
        check: !!this.chess.isCheck(),
        movable: {
          free: false,
          color: this.playing() ? this.pov : void 0,
          dests: chessgroundDests(this.chess)
        },
        events: {
          move: this.userMove
        }
      }));
      __publicField(this, "setGround", (cg) => this.ground = cg);
      __publicField(this, "handle", (msg) => {
        switch (msg.type) {
          case "gameFull":
            this.game = msg;
            this.onUpdate();
            this.root.redraw();
            break;
          case "gameState":
            this.game.state = msg;
            this.onUpdate();
            this.root.redraw();
            break;
          default:
            console.error(`Unknown message type: ${msg.type}`, msg);
        }
      });
      this.game = game;
      this.pov = this.game.black.id == this.root.auth.me?.id ? "black" : "white";
      this.onUpdate();
      this.redrawInterval = setInterval(root.redraw, 100);
    }
  };
  __publicField(_GameCtrl, "open", (root, id) => new Promise(async (resolve) => {
    let ctrl;
    let stream;
    const handler = (msg) => {
      if (ctrl) ctrl.handle(msg);
      else {
        ctrl = new _GameCtrl(msg, stream, root);
        resolve(ctrl);
      }
    };
    stream = await root.auth.openStream(`/api/board/game/stream/${id}`, {}, handler);
  }));
  var GameCtrl = _GameCtrl;

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/util.ts
  var formData = (data) => {
    const formData2 = new FormData();
    for (const k of Object.keys(data)) formData2.append(k, data[k]);
    return formData2;
  };

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/ongoingGames.ts
  var import_page2 = __toESM(require_page());
  var OngoingGames = class {
    constructor() {
      __publicField(this, "games", []);
      __publicField(this, "autoStart", /* @__PURE__ */ new Set());
      __publicField(this, "onStart", (game) => {
        this.remove(game);
        if (game.compat.board) {
          this.games.push(game);
          if (!this.autoStart.has(game.id)) {
            if (!game.hasMoved) (0, import_page2.default)(`/game/${game.gameId}`);
          }
          this.autoStart.add(game.id);
        } else console.log(`Skipping game ${game.gameId}, not board compatible`);
      });
      __publicField(this, "onFinish", (game) => this.remove(game));
      __publicField(this, "empty", () => {
        this.games = [];
      });
      __publicField(this, "remove", (game) => {
        this.games = this.games.filter((g) => g.gameId != game.id);
      });
    }
  };

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/seek.ts
  var import_page3 = __toESM(require_page());
  var _SeekCtrl = class _SeekCtrl {
    constructor(stream, root) {
      this.stream = stream;
      this.root = root;
      __publicField(this, "awaitClose", async () => {
        await this.stream.closePromise;
        if (this.root.page == "seek") (0, import_page3.default)("/");
      });
      __publicField(this, "onUnmount", () => this.stream.close());
      this.awaitClose();
    }
  };
  __publicField(_SeekCtrl, "make", async (config, root) => {
    const stream = await root.auth.openStream(
      "/api/board/seek",
      {
        method: "post",
        body: formData(config)
      },
      (_) => {
      }
    );
    return new _SeekCtrl(stream, root);
  });
  var SeekCtrl = _SeekCtrl;

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/challenge.ts
  var import_page4 = __toESM(require_page());
  var _ChallengeCtrl = class _ChallengeCtrl {
    constructor(stream, root) {
      this.stream = stream;
      this.root = root;
      __publicField(this, "awaitClose", async () => {
        await this.stream.closePromise;
        if (this.root.page == "challenge") (0, import_page4.default)("/");
      });
      __publicField(this, "onUnmount", () => this.stream.close());
      this.awaitClose();
    }
  };
  __publicField(_ChallengeCtrl, "make", async (config, root) => {
    const stream = await root.auth.openStream(
      `/api/challenge/${config.username}`,
      {
        method: "post",
        body: formData({
          ...config,
          keepAliveStream: true
        })
      },
      (_) => {
      }
    );
    return new _ChallengeCtrl(stream, root);
  });
  var ChallengeCtrl = _ChallengeCtrl;

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/tv.ts
  var _TvCtrl = class _TvCtrl {
    constructor(stream, game, root) {
      this.stream = stream;
      this.game = game;
      this.root = root;
      __publicField(this, "ground");
      __publicField(this, "chess", Chess.default());
      __publicField(this, "lastUpdateAt", Date.now());
      __publicField(this, "redrawInterval");
      __publicField(this, "awaitClose", async () => {
        await this.stream.closePromise;
      });
      __publicField(this, "onUnmount", () => {
        this.stream.close();
        clearInterval(this.redrawInterval);
      });
      __publicField(this, "player", (color) => this.game.players[this.game.players[0].color == color ? 0 : 1]);
      __publicField(this, "chessgroundConfig", () => {
        const chess = Chess.fromSetup(parseFen(this.game.fen).unwrap()).unwrap();
        const lm = this.game.lastMove;
        const lastMove = lm ? lm[1] === "@" ? [lm.slice(2)] : [lm[0] + lm[1], lm[2] + lm[3]] : [];
        return {
          orientation: this.game.orientation,
          fen: this.game.fen,
          lastMove,
          turnColor: chess.turn,
          check: !!chess.isCheck(),
          viewOnly: true,
          movable: { free: false },
          drawable: { visible: false },
          coordinates: false
        };
      });
      __publicField(this, "setGround", (cg) => this.ground = cg);
      __publicField(this, "onUpdate", () => {
        this.chess = Chess.fromSetup(parseFen(this.game.fen).unwrap()).unwrap();
        this.lastUpdateAt = Date.now();
      });
      __publicField(this, "handle", (msg) => {
        switch (msg.t) {
          case "featured":
            this.game = msg.d;
            this.onUpdate();
            this.root.redraw();
            break;
          case "fen":
            this.game.fen = msg.d.fen;
            this.game.lastMove = msg.d.lm;
            this.player("white").seconds = msg.d.wc;
            this.player("black").seconds = msg.d.bc;
            this.onUpdate();
            this.ground?.set(this.chessgroundConfig());
            break;
        }
      });
      this.onUpdate();
      this.redrawInterval = setInterval(root.redraw, 100);
      this.awaitClose();
    }
  };
  __publicField(_TvCtrl, "open", (root) => new Promise(async (resolve) => {
    let ctrl;
    let stream;
    const handler = (msg) => {
      if (ctrl) ctrl.handle(msg);
      else {
        ctrl = new _TvCtrl(stream, msg.d, root);
        resolve(ctrl);
      }
    };
    stream = await root.auth.openStream("/api/tv/feed", {}, handler);
  }));
  var TvCtrl = _TvCtrl;

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/ctrl.ts
  var Ctrl = class {
    constructor(redraw) {
      this.redraw = redraw;
      __publicField(this, "auth", new Auth());
      __publicField(this, "stream");
      __publicField(this, "page", "home");
      __publicField(this, "games", new OngoingGames());
      __publicField(this, "game");
      __publicField(this, "seek");
      __publicField(this, "challenge");
      __publicField(this, "tv");
      __publicField(this, "openHome", async () => {
        this.page = "home";
        if (this.auth.me) {
          await this.stream?.close();
          this.games.empty();
          this.stream = await this.auth.openStream("/api/stream/event", {}, (msg) => {
            switch (msg.type) {
              case "gameStart":
                this.games.onStart(msg.game);
                break;
              case "gameFinish":
                this.games.onFinish(msg.game);
                break;
              default:
                console.warn(`Unprocessed message of type ${msg.type}`, msg);
            }
            this.redraw();
          });
        }
        this.redraw();
      });
      __publicField(this, "openGame", async (id) => {
        this.page = "game";
        this.game = void 0;
        this.redraw();
        this.game = await GameCtrl.open(this, id);
        this.redraw();
      });
      __publicField(this, "playAi", async () => {
        this.game = void 0;
        this.page = "game";
        this.redraw();
        await this.auth.fetchBody("/api/challenge/ai", {
          method: "post",
          body: formData({
            level: 1,
            "clock.limit": 60 * 3,
            "clock.increment": 2
          })
        });
      });
      __publicField(this, "playPool", async (minutes, increment) => {
        this.seek = await SeekCtrl.make(
          {
            rated: true,
            time: minutes,
            increment
          },
          this
        );
        this.page = "seek";
        this.redraw();
      });
      __publicField(this, "playMaia", async (minutes, increment) => {
        this.challenge = await ChallengeCtrl.make(
          {
            username: "maia1",
            rated: false,
            "clock.limit": minutes * 60,
            "clock.increment": increment
          },
          this
        );
        this.page = "challenge";
        this.redraw();
      });
      __publicField(this, "watchTv", async () => {
        this.page = "tv";
        this.redraw();
        this.tv = await TvCtrl.open(this);
        this.redraw();
      });
    }
  };

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/view/colorpicker.ts
  function colorpicker() {
    return h(
      "li.nav-item.colorpicker",
      h("input#colorpicker", {
        attrs: {
          type: "color",
          value: localStorage.getItem("board.color") || defaultColor
        },
        on: {
          input: (e) => setColor(e.target.value)
        },
        hook: {
          insert: () => setColor(localStorage.getItem("board.color") || defaultColor)
        }
      })
    );
  }
  var defaultColor = "#b37c23";
  var setColor = (color) => {
    document.body.style.setProperty("--board-color", color);
    localStorage.setItem("board.color", color);
  };

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/view/layout.ts
  function layout_default(ctrl, body) {
    return h("body", [renderNavBar(ctrl), h("div.container", body)]);
  }
  var renderNavBar = (ctrl) => h("header.navbar.navbar-expand-md.navbar-dark.bg-dark", [
    h("div.container", [
      h(
        "a.navbar-brand",
        {
          attrs: href("/")
        },
        "Lichess API Demo"
      ),
      h(
        "button.navbar-toggler",
        {
          attrs: {
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": "#navbarSupportedContent",
            "aria-controls": "navbarSupportedContent",
            "aria-expanded": false,
            "aria-label": "Toggle navigation"
          }
        },
        h("span.navbar-toggler-icon")
      ),
      h("div#navbarSupportedContent.collapse.navbar-collapse", [
        h('ul.navbar-nav.me-auto.mb-lg-0"', [
          h(
            "li.nav-item",
            h(
              "a.nav-link",
              {
                class: { active: ctrl.page == "tv" },
                attrs: href("/tv")
              },
              "Watch TV"
            )
          )
        ]),
        h("ul.navbar-nav", [colorpicker(), ctrl.auth.me ? userNav(ctrl.auth.me) : anonNav()])
      ])
    ])
  ]);
  var userNav = (me) => h("li.nav-item.dropdown", [
    h(
      "a#navbarDropdown.nav-link.dropdown-toggle",
      {
        attrs: {
          href: "#",
          role: "button",
          "data-bs-toggle": "dropdown",
          "aria-expanded": false
        }
      },
      me.username
    ),
    h(
      "ul.dropdown-menu",
      {
        attrs: {
          "aria-labelledby": "navbarDropdown"
        }
      },
      [
        h(
          "li",
          h(
            "a.dropdown-item",
            {
              attrs: href("/logout")
            },
            "Log out"
          )
        )
      ]
    )
  ]);
  var anonNav = () => h(
    "li.nav-item",
    h(
      "a.btn.btn-primary.text-nowrap",
      {
        attrs: href("/login")
      },
      "Login with Lichess"
    )
  );

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/view/challenge.ts
  var renderChallenge = (ctrl) => (_) => [
    h(
      "div.challenge-page",
      {
        hook: {
          destroy: ctrl.onUnmount
        }
      },
      [
        h("div.challenge-page__awaiting", [spinner(), h("span.ms-3", "Awaiting the opponent...")]),
        h(
          "a.btn.btn-secondary",
          {
            attrs: { href: url("/") }
          },
          "Cancel"
        )
      ]
    )
  ];

  // node_modules/chessground/dist/types.js
  var colors = ["white", "black"];
  var files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  var ranks = ["1", "2", "3", "4", "5", "6", "7", "8"];

  // node_modules/chessground/dist/util.js
  var invRanks = [...ranks].reverse();
  var allKeys = Array.prototype.concat(...files.map((c) => ranks.map((r) => c + r)));
  var pos2key = (pos) => allKeys[8 * pos[0] + pos[1]];
  var key2pos = (k) => [k.charCodeAt(0) - 97, k.charCodeAt(1) - 49];
  var allPos = allKeys.map(key2pos);
  function memo(f) {
    let v;
    const ret = () => {
      if (v === void 0)
        v = f();
      return v;
    };
    ret.clear = () => {
      v = void 0;
    };
    return ret;
  }
  var timer = () => {
    let startAt;
    return {
      start() {
        startAt = performance.now();
      },
      cancel() {
        startAt = void 0;
      },
      stop() {
        if (!startAt)
          return 0;
        const time = performance.now() - startAt;
        startAt = void 0;
        return time;
      }
    };
  };
  var opposite2 = (c) => c === "white" ? "black" : "white";
  var distanceSq = (pos1, pos2) => {
    const dx = pos1[0] - pos2[0], dy = pos1[1] - pos2[1];
    return dx * dx + dy * dy;
  };
  var samePiece = (p1, p2) => p1.role === p2.role && p1.color === p2.color;
  var posToTranslate = (bounds) => (pos, asWhite) => [
    (asWhite ? pos[0] : 7 - pos[0]) * bounds.width / 8,
    (asWhite ? 7 - pos[1] : pos[1]) * bounds.height / 8
  ];
  var translate = (el, pos) => {
    el.style.transform = `translate(${pos[0]}px,${pos[1]}px)`;
  };
  var translateAndScale = (el, pos, scale = 1) => {
    el.style.transform = `translate(${pos[0]}px,${pos[1]}px) scale(${scale})`;
  };
  var setVisible = (el, v) => {
    el.style.visibility = v ? "visible" : "hidden";
  };
  var eventPosition = (e) => {
    var _a;
    if (e.clientX || e.clientX === 0)
      return [e.clientX, e.clientY];
    if ((_a = e.targetTouches) === null || _a === void 0 ? void 0 : _a[0])
      return [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
    return;
  };
  var isRightButton = (e) => e.button === 2;
  var createEl = (tagName2, className) => {
    const el = document.createElement(tagName2);
    if (className)
      el.className = className;
    return el;
  };
  function computeSquareCenter(key, asWhite, bounds) {
    const pos = key2pos(key);
    if (!asWhite) {
      pos[0] = 7 - pos[0];
      pos[1] = 7 - pos[1];
    }
    return [
      bounds.left + bounds.width * pos[0] / 8 + bounds.width / 16,
      bounds.top + bounds.height * (7 - pos[1]) / 8 + bounds.height / 16
    ];
  }

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/view/clock.ts
  function clockContent(time, decay) {
    if (!time && time !== 0) return h("span", "-");
    if (time == 2147483647) return h("span");
    const millis = time + (decay || 0);
    return millis > 1e3 * 60 * 60 * 24 ? correspondence(millis) : realTime(millis);
  }
  var realTime = (millis) => {
    const date = new Date(millis);
    return h("span.clock--realtime.font-monospace", [
      pad2(date.getUTCMinutes()) + ":" + pad2(date.getUTCSeconds()),
      h("tenths", "." + Math.floor(date.getUTCMilliseconds() / 100).toString())
    ]);
  };
  var correspondence = (ms) => {
    const date = new Date(ms), minutes = prefixInteger(date.getUTCMinutes(), 2), seconds = prefixInteger(date.getSeconds(), 2);
    let hours, str = "";
    if (ms >= 86400 * 1e3) {
      const days = date.getUTCDate() - 1;
      hours = date.getUTCHours();
      str += (days === 1 ? "One day" : `${days} days`) + " ";
      if (hours !== 0) str += `${hours} hours`;
    } else if (ms >= 3600 * 1e3) {
      hours = date.getUTCHours();
      str += bold(prefixInteger(hours, 2)) + ":" + bold(minutes);
    } else {
      str += bold(minutes) + ":" + bold(seconds);
    }
    return h("span.clock--correspondence", str);
  };
  var pad2 = (num) => (num < 10 ? "0" : "") + num;
  var prefixInteger = (num, length) => (num / Math.pow(10, length)).toFixed(length).slice(2);
  var bold = (x) => `<b>${x}</b>`;

  // node_modules/chessground/dist/premove.js
  var diff = (a, b) => Math.abs(a - b);
  var pawn = (color) => (x1, y1, x2, y2) => diff(x1, x2) < 2 && (color === "white" ? (
    // allow 2 squares from first two ranks, for horde
    y2 === y1 + 1 || y1 <= 1 && y2 === y1 + 2 && x1 === x2
  ) : y2 === y1 - 1 || y1 >= 6 && y2 === y1 - 2 && x1 === x2);
  var knight = (x1, y1, x2, y2) => {
    const xd = diff(x1, x2);
    const yd = diff(y1, y2);
    return xd === 1 && yd === 2 || xd === 2 && yd === 1;
  };
  var bishop = (x1, y1, x2, y2) => {
    return diff(x1, x2) === diff(y1, y2);
  };
  var rook = (x1, y1, x2, y2) => {
    return x1 === x2 || y1 === y2;
  };
  var queen = (x1, y1, x2, y2) => {
    return bishop(x1, y1, x2, y2) || rook(x1, y1, x2, y2);
  };
  var king = (color, rookFiles, canCastle) => (x1, y1, x2, y2) => diff(x1, x2) < 2 && diff(y1, y2) < 2 || canCastle && y1 === y2 && y1 === (color === "white" ? 0 : 7) && (x1 === 4 && (x2 === 2 && rookFiles.includes(0) || x2 === 6 && rookFiles.includes(7)) || rookFiles.includes(x2));
  function rookFilesOf(pieces, color) {
    const backrank = color === "white" ? "1" : "8";
    const files2 = [];
    for (const [key, piece] of pieces) {
      if (key[1] === backrank && piece.color === color && piece.role === "rook") {
        files2.push(key2pos(key)[0]);
      }
    }
    return files2;
  }
  function premove(pieces, key, canCastle) {
    const piece = pieces.get(key);
    if (!piece)
      return [];
    const pos = key2pos(key), r = piece.role, mobility = r === "pawn" ? pawn(piece.color) : r === "knight" ? knight : r === "bishop" ? bishop : r === "rook" ? rook : r === "queen" ? queen : king(piece.color, rookFilesOf(pieces, piece.color), canCastle);
    return allPos.filter((pos2) => (pos[0] !== pos2[0] || pos[1] !== pos2[1]) && mobility(pos[0], pos[1], pos2[0], pos2[1])).map(pos2key);
  }

  // node_modules/chessground/dist/board.js
  function callUserFunction(f, ...args) {
    if (f)
      setTimeout(() => f(...args), 1);
  }
  function toggleOrientation(state) {
    state.orientation = opposite2(state.orientation);
    state.animation.current = state.draggable.current = state.selected = void 0;
  }
  function setPieces(state, pieces) {
    for (const [key, piece] of pieces) {
      if (piece)
        state.pieces.set(key, piece);
      else
        state.pieces.delete(key);
    }
  }
  function setCheck(state, color) {
    state.check = void 0;
    if (color === true)
      color = state.turnColor;
    if (color)
      for (const [k, p] of state.pieces) {
        if (p.role === "king" && p.color === color) {
          state.check = k;
        }
      }
  }
  function setPremove(state, orig, dest, meta) {
    unsetPredrop(state);
    state.premovable.current = [orig, dest];
    callUserFunction(state.premovable.events.set, orig, dest, meta);
  }
  function unsetPremove(state) {
    if (state.premovable.current) {
      state.premovable.current = void 0;
      callUserFunction(state.premovable.events.unset);
    }
  }
  function setPredrop(state, role, key) {
    unsetPremove(state);
    state.predroppable.current = { role, key };
    callUserFunction(state.predroppable.events.set, role, key);
  }
  function unsetPredrop(state) {
    const pd = state.predroppable;
    if (pd.current) {
      pd.current = void 0;
      callUserFunction(pd.events.unset);
    }
  }
  function tryAutoCastle(state, orig, dest) {
    if (!state.autoCastle)
      return false;
    const king2 = state.pieces.get(orig);
    if (!king2 || king2.role !== "king")
      return false;
    const origPos = key2pos(orig);
    const destPos = key2pos(dest);
    if (origPos[1] !== 0 && origPos[1] !== 7 || origPos[1] !== destPos[1])
      return false;
    if (origPos[0] === 4 && !state.pieces.has(dest)) {
      if (destPos[0] === 6)
        dest = pos2key([7, destPos[1]]);
      else if (destPos[0] === 2)
        dest = pos2key([0, destPos[1]]);
    }
    const rook2 = state.pieces.get(dest);
    if (!rook2 || rook2.color !== king2.color || rook2.role !== "rook")
      return false;
    state.pieces.delete(orig);
    state.pieces.delete(dest);
    if (origPos[0] < destPos[0]) {
      state.pieces.set(pos2key([6, destPos[1]]), king2);
      state.pieces.set(pos2key([5, destPos[1]]), rook2);
    } else {
      state.pieces.set(pos2key([2, destPos[1]]), king2);
      state.pieces.set(pos2key([3, destPos[1]]), rook2);
    }
    return true;
  }
  function baseMove(state, orig, dest) {
    const origPiece = state.pieces.get(orig), destPiece = state.pieces.get(dest);
    if (orig === dest || !origPiece)
      return false;
    const captured = destPiece && destPiece.color !== origPiece.color ? destPiece : void 0;
    if (dest === state.selected)
      unselect(state);
    callUserFunction(state.events.move, orig, dest, captured);
    if (!tryAutoCastle(state, orig, dest)) {
      state.pieces.set(dest, origPiece);
      state.pieces.delete(orig);
    }
    state.lastMove = [orig, dest];
    state.check = void 0;
    callUserFunction(state.events.change);
    return captured || true;
  }
  function baseNewPiece(state, piece, key, force) {
    if (state.pieces.has(key)) {
      if (force)
        state.pieces.delete(key);
      else
        return false;
    }
    callUserFunction(state.events.dropNewPiece, piece, key);
    state.pieces.set(key, piece);
    state.lastMove = [key];
    state.check = void 0;
    callUserFunction(state.events.change);
    state.movable.dests = void 0;
    state.turnColor = opposite2(state.turnColor);
    return true;
  }
  function baseUserMove(state, orig, dest) {
    const result = baseMove(state, orig, dest);
    if (result) {
      state.movable.dests = void 0;
      state.turnColor = opposite2(state.turnColor);
      state.animation.current = void 0;
    }
    return result;
  }
  function userMove(state, orig, dest) {
    if (canMove(state, orig, dest)) {
      const result = baseUserMove(state, orig, dest);
      if (result) {
        const holdTime = state.hold.stop();
        unselect(state);
        const metadata = {
          premove: false,
          ctrlKey: state.stats.ctrlKey,
          holdTime
        };
        if (result !== true)
          metadata.captured = result;
        callUserFunction(state.movable.events.after, orig, dest, metadata);
        return true;
      }
    } else if (canPremove(state, orig, dest)) {
      setPremove(state, orig, dest, {
        ctrlKey: state.stats.ctrlKey
      });
      unselect(state);
      return true;
    }
    unselect(state);
    return false;
  }
  function dropNewPiece(state, orig, dest, force) {
    const piece = state.pieces.get(orig);
    if (piece && (canDrop(state, orig, dest) || force)) {
      state.pieces.delete(orig);
      baseNewPiece(state, piece, dest, force);
      callUserFunction(state.movable.events.afterNewPiece, piece.role, dest, {
        premove: false,
        predrop: false
      });
    } else if (piece && canPredrop(state, orig, dest)) {
      setPredrop(state, piece.role, dest);
    } else {
      unsetPremove(state);
      unsetPredrop(state);
    }
    state.pieces.delete(orig);
    unselect(state);
  }
  function selectSquare(state, key, force) {
    callUserFunction(state.events.select, key);
    if (state.selected) {
      if (state.selected === key && !state.draggable.enabled) {
        unselect(state);
        state.hold.cancel();
        return;
      } else if ((state.selectable.enabled || force) && state.selected !== key) {
        if (userMove(state, state.selected, key)) {
          state.stats.dragged = false;
          return;
        }
      }
    }
    if ((state.selectable.enabled || state.draggable.enabled) && (isMovable(state, key) || isPremovable(state, key))) {
      setSelected(state, key);
      state.hold.start();
    }
  }
  function setSelected(state, key) {
    state.selected = key;
    if (isPremovable(state, key)) {
      if (!state.premovable.customDests) {
        state.premovable.dests = premove(state.pieces, key, state.premovable.castle);
      }
    } else
      state.premovable.dests = void 0;
  }
  function unselect(state) {
    state.selected = void 0;
    state.premovable.dests = void 0;
    state.hold.cancel();
  }
  function isMovable(state, orig) {
    const piece = state.pieces.get(orig);
    return !!piece && (state.movable.color === "both" || state.movable.color === piece.color && state.turnColor === piece.color);
  }
  var canMove = (state, orig, dest) => {
    var _a, _b;
    return orig !== dest && isMovable(state, orig) && (state.movable.free || !!((_b = (_a = state.movable.dests) === null || _a === void 0 ? void 0 : _a.get(orig)) === null || _b === void 0 ? void 0 : _b.includes(dest)));
  };
  function canDrop(state, orig, dest) {
    const piece = state.pieces.get(orig);
    return !!piece && (orig === dest || !state.pieces.has(dest)) && (state.movable.color === "both" || state.movable.color === piece.color && state.turnColor === piece.color);
  }
  function isPremovable(state, orig) {
    const piece = state.pieces.get(orig);
    return !!piece && state.premovable.enabled && state.movable.color === piece.color && state.turnColor !== piece.color;
  }
  function canPremove(state, orig, dest) {
    var _a, _b;
    const validPremoves = (_b = (_a = state.premovable.customDests) === null || _a === void 0 ? void 0 : _a.get(orig)) !== null && _b !== void 0 ? _b : premove(state.pieces, orig, state.premovable.castle);
    return orig !== dest && isPremovable(state, orig) && validPremoves.includes(dest);
  }
  function canPredrop(state, orig, dest) {
    const piece = state.pieces.get(orig);
    const destPiece = state.pieces.get(dest);
    return !!piece && (!destPiece || destPiece.color !== state.movable.color) && state.predroppable.enabled && (piece.role !== "pawn" || dest[1] !== "1" && dest[1] !== "8") && state.movable.color === piece.color && state.turnColor !== piece.color;
  }
  function isDraggable(state, orig) {
    const piece = state.pieces.get(orig);
    return !!piece && state.draggable.enabled && (state.movable.color === "both" || state.movable.color === piece.color && (state.turnColor === piece.color || state.premovable.enabled));
  }
  function playPremove(state) {
    const move3 = state.premovable.current;
    if (!move3)
      return false;
    const orig = move3[0], dest = move3[1];
    let success = false;
    if (canMove(state, orig, dest)) {
      const result = baseUserMove(state, orig, dest);
      if (result) {
        const metadata = { premove: true };
        if (result !== true)
          metadata.captured = result;
        callUserFunction(state.movable.events.after, orig, dest, metadata);
        success = true;
      }
    }
    unsetPremove(state);
    return success;
  }
  function playPredrop(state, validate) {
    const drop2 = state.predroppable.current;
    let success = false;
    if (!drop2)
      return false;
    if (validate(drop2)) {
      const piece = {
        role: drop2.role,
        color: state.movable.color
      };
      if (baseNewPiece(state, piece, drop2.key)) {
        callUserFunction(state.movable.events.afterNewPiece, drop2.role, drop2.key, {
          premove: false,
          predrop: true
        });
        success = true;
      }
    }
    unsetPredrop(state);
    return success;
  }
  function cancelMove(state) {
    unsetPremove(state);
    unsetPredrop(state);
    unselect(state);
  }
  function stop(state) {
    state.movable.color = state.movable.dests = state.animation.current = void 0;
    cancelMove(state);
  }
  function getKeyAtDomPos(pos, asWhite, bounds) {
    let file = Math.floor(8 * (pos[0] - bounds.left) / bounds.width);
    if (!asWhite)
      file = 7 - file;
    let rank = 7 - Math.floor(8 * (pos[1] - bounds.top) / bounds.height);
    if (!asWhite)
      rank = 7 - rank;
    return file >= 0 && file < 8 && rank >= 0 && rank < 8 ? pos2key([file, rank]) : void 0;
  }
  function getSnappedKeyAtDomPos(orig, pos, asWhite, bounds) {
    const origPos = key2pos(orig);
    const validSnapPos = allPos.filter((pos2) => queen(origPos[0], origPos[1], pos2[0], pos2[1]) || knight(origPos[0], origPos[1], pos2[0], pos2[1]));
    const validSnapCenters = validSnapPos.map((pos2) => computeSquareCenter(pos2key(pos2), asWhite, bounds));
    const validSnapDistances = validSnapCenters.map((pos2) => distanceSq(pos, pos2));
    const [, closestSnapIndex] = validSnapDistances.reduce((a, b, index) => a[0] < b ? a : [b, index], [validSnapDistances[0], 0]);
    return pos2key(validSnapPos[closestSnapIndex]);
  }
  var whitePov = (s) => s.orientation === "white";

  // node_modules/chessground/dist/fen.js
  var initial = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
  var roles = {
    p: "pawn",
    r: "rook",
    n: "knight",
    b: "bishop",
    q: "queen",
    k: "king"
  };
  var letters = {
    pawn: "p",
    rook: "r",
    knight: "n",
    bishop: "b",
    queen: "q",
    king: "k"
  };
  function read(fen) {
    if (fen === "start")
      fen = initial;
    const pieces = /* @__PURE__ */ new Map();
    let row = 7, col = 0;
    for (const c of fen) {
      switch (c) {
        case " ":
        case "[":
          return pieces;
        case "/":
          --row;
          if (row < 0)
            return pieces;
          col = 0;
          break;
        case "~": {
          const piece = pieces.get(pos2key([col - 1, row]));
          if (piece)
            piece.promoted = true;
          break;
        }
        default: {
          const nb = c.charCodeAt(0);
          if (nb < 57)
            col += nb - 48;
          else {
            const role = c.toLowerCase();
            pieces.set(pos2key([col, row]), {
              role: roles[role],
              color: c === role ? "black" : "white"
            });
            ++col;
          }
        }
      }
    }
    return pieces;
  }
  function write(pieces) {
    return invRanks.map((y) => files.map((x) => {
      const piece = pieces.get(x + y);
      if (piece) {
        let p = letters[piece.role];
        if (piece.color === "white")
          p = p.toUpperCase();
        if (piece.promoted)
          p += "~";
        return p;
      } else
        return "1";
    }).join("")).join("/").replace(/1{2,}/g, (s) => s.length.toString());
  }

  // node_modules/chessground/dist/config.js
  function applyAnimation(state, config) {
    if (config.animation) {
      deepMerge(state.animation, config.animation);
      if ((state.animation.duration || 0) < 70)
        state.animation.enabled = false;
    }
  }
  function configure(state, config) {
    var _a, _b, _c;
    if ((_a = config.movable) === null || _a === void 0 ? void 0 : _a.dests)
      state.movable.dests = void 0;
    if ((_b = config.drawable) === null || _b === void 0 ? void 0 : _b.autoShapes)
      state.drawable.autoShapes = [];
    deepMerge(state, config);
    if (config.fen) {
      state.pieces = read(config.fen);
      state.drawable.shapes = ((_c = config.drawable) === null || _c === void 0 ? void 0 : _c.shapes) || [];
    }
    if ("check" in config)
      setCheck(state, config.check || false);
    if ("lastMove" in config && !config.lastMove)
      state.lastMove = void 0;
    else if (config.lastMove)
      state.lastMove = config.lastMove;
    if (state.selected)
      setSelected(state, state.selected);
    applyAnimation(state, config);
    if (!state.movable.rookCastle && state.movable.dests) {
      const rank = state.movable.color === "white" ? "1" : "8", kingStartPos = "e" + rank, dests = state.movable.dests.get(kingStartPos), king2 = state.pieces.get(kingStartPos);
      if (!dests || !king2 || king2.role !== "king")
        return;
      state.movable.dests.set(kingStartPos, dests.filter((d) => !(d === "a" + rank && dests.includes("c" + rank)) && !(d === "h" + rank && dests.includes("g" + rank))));
    }
  }
  function deepMerge(base, extend) {
    for (const key in extend) {
      if (key === "__proto__" || key === "constructor" || !Object.prototype.hasOwnProperty.call(extend, key))
        continue;
      if (Object.prototype.hasOwnProperty.call(base, key) && isPlainObject(base[key]) && isPlainObject(extend[key]))
        deepMerge(base[key], extend[key]);
      else
        base[key] = extend[key];
    }
  }
  function isPlainObject(o) {
    if (typeof o !== "object" || o === null)
      return false;
    const proto = Object.getPrototypeOf(o);
    return proto === Object.prototype || proto === null;
  }

  // node_modules/chessground/dist/anim.js
  var anim = (mutation, state) => state.animation.enabled ? animate(mutation, state) : render(mutation, state);
  function render(mutation, state) {
    const result = mutation(state);
    state.dom.redraw();
    return result;
  }
  var makePiece2 = (key, piece) => ({
    key,
    pos: key2pos(key),
    piece
  });
  var closer = (piece, pieces) => pieces.sort((p1, p2) => distanceSq(piece.pos, p1.pos) - distanceSq(piece.pos, p2.pos))[0];
  function computePlan(prevPieces, current) {
    const anims = /* @__PURE__ */ new Map(), animedOrigs = [], fadings = /* @__PURE__ */ new Map(), missings = [], news = [], prePieces = /* @__PURE__ */ new Map();
    let curP, preP, vector;
    for (const [k, p] of prevPieces) {
      prePieces.set(k, makePiece2(k, p));
    }
    for (const key of allKeys) {
      curP = current.pieces.get(key);
      preP = prePieces.get(key);
      if (curP) {
        if (preP) {
          if (!samePiece(curP, preP.piece)) {
            missings.push(preP);
            news.push(makePiece2(key, curP));
          }
        } else
          news.push(makePiece2(key, curP));
      } else if (preP)
        missings.push(preP);
    }
    for (const newP of news) {
      preP = closer(newP, missings.filter((p) => samePiece(newP.piece, p.piece)));
      if (preP) {
        vector = [preP.pos[0] - newP.pos[0], preP.pos[1] - newP.pos[1]];
        anims.set(newP.key, vector.concat(vector));
        animedOrigs.push(preP.key);
      }
    }
    for (const p of missings) {
      if (!animedOrigs.includes(p.key))
        fadings.set(p.key, p.piece);
    }
    return {
      anims,
      fadings
    };
  }
  function step(state, now) {
    const cur = state.animation.current;
    if (cur === void 0) {
      if (!state.dom.destroyed)
        state.dom.redrawNow();
      return;
    }
    const rest = 1 - (now - cur.start) * cur.frequency;
    if (rest <= 0) {
      state.animation.current = void 0;
      state.dom.redrawNow();
    } else {
      const ease = easing(rest);
      for (const cfg of cur.plan.anims.values()) {
        cfg[2] = cfg[0] * ease;
        cfg[3] = cfg[1] * ease;
      }
      state.dom.redrawNow(true);
      requestAnimationFrame((now2 = performance.now()) => step(state, now2));
    }
  }
  function animate(mutation, state) {
    const prevPieces = new Map(state.pieces);
    const result = mutation(state);
    const plan = computePlan(prevPieces, state);
    if (plan.anims.size || plan.fadings.size) {
      const alreadyRunning = state.animation.current && state.animation.current.start;
      state.animation.current = {
        start: performance.now(),
        frequency: 1 / state.animation.duration,
        plan
      };
      if (!alreadyRunning)
        step(state, performance.now());
    } else {
      state.dom.redraw();
    }
    return result;
  }
  var easing = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  // node_modules/chessground/dist/draw.js
  var brushes = ["green", "red", "blue", "yellow"];
  function start(state, e) {
    if (e.touches && e.touches.length > 1)
      return;
    e.stopPropagation();
    e.preventDefault();
    e.ctrlKey ? unselect(state) : cancelMove(state);
    const pos = eventPosition(e), orig = getKeyAtDomPos(pos, whitePov(state), state.dom.bounds());
    if (!orig)
      return;
    state.drawable.current = {
      orig,
      pos,
      brush: eventBrush(e),
      snapToValidMove: state.drawable.defaultSnapToValidMove
    };
    processDraw(state);
  }
  function processDraw(state) {
    requestAnimationFrame(() => {
      const cur = state.drawable.current;
      if (cur) {
        const keyAtDomPos = getKeyAtDomPos(cur.pos, whitePov(state), state.dom.bounds());
        if (!keyAtDomPos) {
          cur.snapToValidMove = false;
        }
        const mouseSq = cur.snapToValidMove ? getSnappedKeyAtDomPos(cur.orig, cur.pos, whitePov(state), state.dom.bounds()) : keyAtDomPos;
        if (mouseSq !== cur.mouseSq) {
          cur.mouseSq = mouseSq;
          cur.dest = mouseSq !== cur.orig ? mouseSq : void 0;
          state.dom.redrawNow();
        }
        processDraw(state);
      }
    });
  }
  function move(state, e) {
    if (state.drawable.current)
      state.drawable.current.pos = eventPosition(e);
  }
  function end(state) {
    const cur = state.drawable.current;
    if (cur) {
      if (cur.mouseSq)
        addShape(state.drawable, cur);
      cancel(state);
    }
  }
  function cancel(state) {
    if (state.drawable.current) {
      state.drawable.current = void 0;
      state.dom.redraw();
    }
  }
  function clear(state) {
    if (state.drawable.shapes.length) {
      state.drawable.shapes = [];
      state.dom.redraw();
      onChange(state.drawable);
    }
  }
  function eventBrush(e) {
    var _a;
    const modA = (e.shiftKey || e.ctrlKey) && isRightButton(e);
    const modB = e.altKey || e.metaKey || ((_a = e.getModifierState) === null || _a === void 0 ? void 0 : _a.call(e, "AltGraph"));
    return brushes[(modA ? 1 : 0) + (modB ? 2 : 0)];
  }
  function addShape(drawable, cur) {
    const sameShape = (s) => s.orig === cur.orig && s.dest === cur.dest;
    const similar = drawable.shapes.find(sameShape);
    if (similar)
      drawable.shapes = drawable.shapes.filter((s) => !sameShape(s));
    if (!similar || similar.brush !== cur.brush)
      drawable.shapes.push({
        orig: cur.orig,
        dest: cur.dest,
        brush: cur.brush
      });
    onChange(drawable);
  }
  function onChange(drawable) {
    if (drawable.onChange)
      drawable.onChange(drawable.shapes);
  }

  // node_modules/chessground/dist/drag.js
  function start2(s, e) {
    if (!(s.trustAllEvents || e.isTrusted))
      return;
    if (e.buttons !== void 0 && e.buttons > 1)
      return;
    if (e.touches && e.touches.length > 1)
      return;
    const bounds = s.dom.bounds(), position = eventPosition(e), orig = getKeyAtDomPos(position, whitePov(s), bounds);
    if (!orig)
      return;
    const piece = s.pieces.get(orig);
    const previouslySelected = s.selected;
    if (!previouslySelected && s.drawable.enabled && (s.drawable.eraseOnClick || !piece || piece.color !== s.turnColor))
      clear(s);
    if (e.cancelable !== false && (!e.touches || s.blockTouchScroll || piece || previouslySelected || pieceCloseTo(s, position)))
      e.preventDefault();
    else if (e.touches)
      return;
    const hadPremove = !!s.premovable.current;
    const hadPredrop = !!s.predroppable.current;
    s.stats.ctrlKey = e.ctrlKey;
    if (s.selected && canMove(s, s.selected, orig)) {
      anim((state) => selectSquare(state, orig), s);
    } else {
      selectSquare(s, orig);
    }
    const stillSelected = s.selected === orig;
    const element = pieceElementByKey(s, orig);
    if (piece && element && stillSelected && isDraggable(s, orig)) {
      s.draggable.current = {
        orig,
        piece,
        origPos: position,
        pos: position,
        started: s.draggable.autoDistance && s.stats.dragged,
        element,
        previouslySelected,
        originTarget: e.target,
        keyHasChanged: false
      };
      element.cgDragging = true;
      element.classList.add("dragging");
      const ghost = s.dom.elements.ghost;
      if (ghost) {
        ghost.className = `ghost ${piece.color} ${piece.role}`;
        translate(ghost, posToTranslate(bounds)(key2pos(orig), whitePov(s)));
        setVisible(ghost, true);
      }
      processDrag(s);
    } else {
      if (hadPremove)
        unsetPremove(s);
      if (hadPredrop)
        unsetPredrop(s);
    }
    s.dom.redraw();
  }
  function pieceCloseTo(s, pos) {
    const asWhite = whitePov(s), bounds = s.dom.bounds(), radiusSq = Math.pow(bounds.width / 8, 2);
    for (const key of s.pieces.keys()) {
      const center = computeSquareCenter(key, asWhite, bounds);
      if (distanceSq(center, pos) <= radiusSq)
        return true;
    }
    return false;
  }
  function dragNewPiece(s, piece, e, force) {
    const key = "a0";
    s.pieces.set(key, piece);
    s.dom.redraw();
    const position = eventPosition(e);
    s.draggable.current = {
      orig: key,
      piece,
      origPos: position,
      pos: position,
      started: true,
      element: () => pieceElementByKey(s, key),
      originTarget: e.target,
      newPiece: true,
      force: !!force,
      keyHasChanged: false
    };
    processDrag(s);
  }
  function processDrag(s) {
    requestAnimationFrame(() => {
      var _a;
      const cur = s.draggable.current;
      if (!cur)
        return;
      if ((_a = s.animation.current) === null || _a === void 0 ? void 0 : _a.plan.anims.has(cur.orig))
        s.animation.current = void 0;
      const origPiece = s.pieces.get(cur.orig);
      if (!origPiece || !samePiece(origPiece, cur.piece))
        cancel2(s);
      else {
        if (!cur.started && distanceSq(cur.pos, cur.origPos) >= Math.pow(s.draggable.distance, 2))
          cur.started = true;
        if (cur.started) {
          if (typeof cur.element === "function") {
            const found = cur.element();
            if (!found)
              return;
            found.cgDragging = true;
            found.classList.add("dragging");
            cur.element = found;
          }
          const bounds = s.dom.bounds();
          translate(cur.element, [
            cur.pos[0] - bounds.left - bounds.width / 16,
            cur.pos[1] - bounds.top - bounds.height / 16
          ]);
          cur.keyHasChanged || (cur.keyHasChanged = cur.orig !== getKeyAtDomPos(cur.pos, whitePov(s), bounds));
        }
      }
      processDrag(s);
    });
  }
  function move2(s, e) {
    if (s.draggable.current && (!e.touches || e.touches.length < 2)) {
      s.draggable.current.pos = eventPosition(e);
    }
  }
  function end2(s, e) {
    const cur = s.draggable.current;
    if (!cur)
      return;
    if (e.type === "touchend" && e.cancelable !== false)
      e.preventDefault();
    if (e.type === "touchend" && cur.originTarget !== e.target && !cur.newPiece) {
      s.draggable.current = void 0;
      return;
    }
    unsetPremove(s);
    unsetPredrop(s);
    const eventPos = eventPosition(e) || cur.pos;
    const dest = getKeyAtDomPos(eventPos, whitePov(s), s.dom.bounds());
    if (dest && cur.started && cur.orig !== dest) {
      if (cur.newPiece)
        dropNewPiece(s, cur.orig, dest, cur.force);
      else {
        s.stats.ctrlKey = e.ctrlKey;
        if (userMove(s, cur.orig, dest))
          s.stats.dragged = true;
      }
    } else if (cur.newPiece) {
      s.pieces.delete(cur.orig);
    } else if (s.draggable.deleteOnDropOff && !dest) {
      s.pieces.delete(cur.orig);
      callUserFunction(s.events.change);
    }
    if ((cur.orig === cur.previouslySelected || cur.keyHasChanged) && (cur.orig === dest || !dest))
      unselect(s);
    else if (!s.selectable.enabled)
      unselect(s);
    removeDragElements(s);
    s.draggable.current = void 0;
    s.dom.redraw();
  }
  function cancel2(s) {
    const cur = s.draggable.current;
    if (cur) {
      if (cur.newPiece)
        s.pieces.delete(cur.orig);
      s.draggable.current = void 0;
      unselect(s);
      removeDragElements(s);
      s.dom.redraw();
    }
  }
  function removeDragElements(s) {
    const e = s.dom.elements;
    if (e.ghost)
      setVisible(e.ghost, false);
  }
  function pieceElementByKey(s, key) {
    let el = s.dom.elements.board.firstChild;
    while (el) {
      if (el.cgKey === key && el.tagName === "PIECE")
        return el;
      el = el.nextSibling;
    }
    return;
  }

  // node_modules/chessground/dist/explosion.js
  function explosion(state, keys) {
    state.exploding = { stage: 1, keys };
    state.dom.redraw();
    setTimeout(() => {
      setStage(state, 2);
      setTimeout(() => setStage(state, void 0), 120);
    }, 120);
  }
  function setStage(state, stage) {
    if (state.exploding) {
      if (stage)
        state.exploding.stage = stage;
      else
        state.exploding = void 0;
      state.dom.redraw();
    }
  }

  // node_modules/chessground/dist/api.js
  function start3(state, redrawAll) {
    function toggleOrientation2() {
      toggleOrientation(state);
      redrawAll();
    }
    return {
      set(config) {
        if (config.orientation && config.orientation !== state.orientation)
          toggleOrientation2();
        applyAnimation(state, config);
        (config.fen ? anim : render)((state2) => configure(state2, config), state);
      },
      state,
      getFen: () => write(state.pieces),
      toggleOrientation: toggleOrientation2,
      setPieces(pieces) {
        anim((state2) => setPieces(state2, pieces), state);
      },
      selectSquare(key, force) {
        if (key)
          anim((state2) => selectSquare(state2, key, force), state);
        else if (state.selected) {
          unselect(state);
          state.dom.redraw();
        }
      },
      move(orig, dest) {
        anim((state2) => baseMove(state2, orig, dest), state);
      },
      newPiece(piece, key) {
        anim((state2) => baseNewPiece(state2, piece, key), state);
      },
      playPremove() {
        if (state.premovable.current) {
          if (anim(playPremove, state))
            return true;
          state.dom.redraw();
        }
        return false;
      },
      playPredrop(validate) {
        if (state.predroppable.current) {
          const result = playPredrop(state, validate);
          state.dom.redraw();
          return result;
        }
        return false;
      },
      cancelPremove() {
        render(unsetPremove, state);
      },
      cancelPredrop() {
        render(unsetPredrop, state);
      },
      cancelMove() {
        render((state2) => {
          cancelMove(state2);
          cancel2(state2);
        }, state);
      },
      stop() {
        render((state2) => {
          stop(state2);
          cancel2(state2);
        }, state);
      },
      explode(keys) {
        explosion(state, keys);
      },
      setAutoShapes(shapes) {
        render((state2) => state2.drawable.autoShapes = shapes, state);
      },
      setShapes(shapes) {
        render((state2) => state2.drawable.shapes = shapes, state);
      },
      getKeyAtDomPos(pos) {
        return getKeyAtDomPos(pos, whitePov(state), state.dom.bounds());
      },
      redrawAll,
      dragNewPiece(piece, event, force) {
        dragNewPiece(state, piece, event, force);
      },
      destroy() {
        stop(state);
        state.dom.unbind && state.dom.unbind();
        state.dom.destroyed = true;
      }
    };
  }

  // node_modules/chessground/dist/state.js
  function defaults() {
    return {
      pieces: read(initial),
      orientation: "white",
      turnColor: "white",
      coordinates: true,
      coordinatesOnSquares: false,
      ranksPosition: "right",
      autoCastle: true,
      viewOnly: false,
      disableContextMenu: false,
      addPieceZIndex: false,
      blockTouchScroll: false,
      pieceKey: false,
      trustAllEvents: false,
      highlight: {
        lastMove: true,
        check: true
      },
      animation: {
        enabled: true,
        duration: 200
      },
      movable: {
        free: true,
        color: "both",
        showDests: true,
        events: {},
        rookCastle: true
      },
      premovable: {
        enabled: true,
        showDests: true,
        castle: true,
        events: {}
      },
      predroppable: {
        enabled: false,
        events: {}
      },
      draggable: {
        enabled: true,
        distance: 3,
        autoDistance: true,
        showGhost: true,
        deleteOnDropOff: false
      },
      dropmode: {
        active: false
      },
      selectable: {
        enabled: true
      },
      stats: {
        // on touchscreen, default to "tap-tap" moves
        // instead of drag
        dragged: !("ontouchstart" in window)
      },
      events: {},
      drawable: {
        enabled: true,
        // can draw
        visible: true,
        // can view
        defaultSnapToValidMove: true,
        eraseOnClick: true,
        shapes: [],
        autoShapes: [],
        brushes: {
          green: { key: "g", color: "#15781B", opacity: 1, lineWidth: 10 },
          red: { key: "r", color: "#882020", opacity: 1, lineWidth: 10 },
          blue: { key: "b", color: "#003088", opacity: 1, lineWidth: 10 },
          yellow: { key: "y", color: "#e68f00", opacity: 1, lineWidth: 10 },
          paleBlue: { key: "pb", color: "#003088", opacity: 0.4, lineWidth: 15 },
          paleGreen: { key: "pg", color: "#15781B", opacity: 0.4, lineWidth: 15 },
          paleRed: { key: "pr", color: "#882020", opacity: 0.4, lineWidth: 15 },
          paleGrey: {
            key: "pgr",
            color: "#4a4a4a",
            opacity: 0.35,
            lineWidth: 15
          },
          purple: { key: "purple", color: "#68217a", opacity: 0.65, lineWidth: 10 },
          pink: { key: "pink", color: "#ee2080", opacity: 0.5, lineWidth: 10 },
          white: { key: "white", color: "white", opacity: 1, lineWidth: 10 }
        },
        prevSvgHash: ""
      },
      hold: timer()
    };
  }

  // node_modules/chessground/dist/svg.js
  var hilites = {
    hilitePrimary: { key: "hilitePrimary", color: "#3291ff", opacity: 1, lineWidth: 1 },
    hiliteWhite: { key: "hiliteWhite", color: "#ffffff", opacity: 1, lineWidth: 1 }
  };
  function createDefs() {
    const defs = createElement2("defs");
    const filter = setAttributes(createElement2("filter"), { id: "cg-filter-blur" });
    filter.appendChild(setAttributes(createElement2("feGaussianBlur"), { stdDeviation: "0.019" }));
    defs.appendChild(filter);
    return defs;
  }
  function renderSvg(state, shapesEl, customsEl) {
    var _a;
    const d = state.drawable, curD = d.current, cur = curD && curD.mouseSq ? curD : void 0, dests = /* @__PURE__ */ new Map(), bounds = state.dom.bounds(), nonPieceAutoShapes = d.autoShapes.filter((autoShape) => !autoShape.piece);
    for (const s of d.shapes.concat(nonPieceAutoShapes).concat(cur ? [cur] : [])) {
      if (!s.dest)
        continue;
      const sources = (_a = dests.get(s.dest)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set(), from = pos2user(orient(key2pos(s.orig), state.orientation), bounds), to = pos2user(orient(key2pos(s.dest), state.orientation), bounds);
      sources.add(moveAngle(from, to));
      dests.set(s.dest, sources);
    }
    const shapes = d.shapes.concat(nonPieceAutoShapes).map((s) => {
      return {
        shape: s,
        current: false,
        hash: shapeHash(s, isShort(s.dest, dests), false, bounds)
      };
    });
    if (cur)
      shapes.push({
        shape: cur,
        current: true,
        hash: shapeHash(cur, isShort(cur.dest, dests), true, bounds)
      });
    const fullHash = shapes.map((sc) => sc.hash).join(";");
    if (fullHash === state.drawable.prevSvgHash)
      return;
    state.drawable.prevSvgHash = fullHash;
    const defsEl = shapesEl.querySelector("defs");
    syncDefs(d, shapes, defsEl);
    syncShapes(shapes, shapesEl.querySelector("g"), customsEl.querySelector("g"), (s) => renderShape(state, s, d.brushes, dests, bounds));
  }
  function syncDefs(d, shapes, defsEl) {
    var _a;
    const brushes2 = /* @__PURE__ */ new Map();
    let brush;
    for (const s of shapes.filter((s2) => s2.shape.dest && s2.shape.brush)) {
      brush = makeCustomBrush(d.brushes[s.shape.brush], s.shape.modifiers);
      if ((_a = s.shape.modifiers) === null || _a === void 0 ? void 0 : _a.hilite)
        brushes2.set(hilite(brush).key, hilite(brush));
      brushes2.set(brush.key, brush);
    }
    const keysInDom = /* @__PURE__ */ new Set();
    let el = defsEl.firstElementChild;
    while (el) {
      keysInDom.add(el.getAttribute("cgKey"));
      el = el.nextElementSibling;
    }
    for (const [key, brush2] of brushes2.entries()) {
      if (!keysInDom.has(key))
        defsEl.appendChild(renderMarker(brush2));
    }
  }
  function syncShapes(syncables, shapes, customs, renderShape3) {
    const hashesInDom = /* @__PURE__ */ new Map();
    for (const sc of syncables)
      hashesInDom.set(sc.hash, false);
    for (const root of [shapes, customs]) {
      const toRemove = [];
      let el = root.firstElementChild, elHash;
      while (el) {
        elHash = el.getAttribute("cgHash");
        if (hashesInDom.has(elHash))
          hashesInDom.set(elHash, true);
        else
          toRemove.push(el);
        el = el.nextElementSibling;
      }
      for (const el2 of toRemove)
        root.removeChild(el2);
    }
    for (const sc of syncables.filter((s) => !hashesInDom.get(s.hash))) {
      for (const svg of renderShape3(sc)) {
        if (svg.isCustom)
          customs.appendChild(svg.el);
        else
          shapes.appendChild(svg.el);
      }
    }
  }
  function shapeHash({ orig, dest, brush, piece, modifiers, customSvg, label }, shorten, current, bounds) {
    var _a, _b;
    return [
      bounds.width,
      bounds.height,
      current,
      orig,
      dest,
      brush,
      shorten && "-",
      piece && pieceHash(piece),
      modifiers && modifiersHash(modifiers),
      customSvg && `custom-${textHash(customSvg.html)},${(_b = (_a = customSvg.center) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : "o"}`,
      label && `label-${textHash(label.text)}`
    ].filter((x) => x).join(",");
  }
  function pieceHash(piece) {
    return [piece.color, piece.role, piece.scale].filter((x) => x).join(",");
  }
  function modifiersHash(m) {
    return [m.lineWidth, m.hilite && "*"].filter((x) => x).join(",");
  }
  function textHash(s) {
    let h2 = 0;
    for (let i = 0; i < s.length; i++) {
      h2 = (h2 << 5) - h2 + s.charCodeAt(i) >>> 0;
    }
    return h2.toString();
  }
  function renderShape(state, { shape, current, hash: hash2 }, brushes2, dests, bounds) {
    var _a, _b;
    const from = pos2user(orient(key2pos(shape.orig), state.orientation), bounds), to = shape.dest ? pos2user(orient(key2pos(shape.dest), state.orientation), bounds) : from, brush = shape.brush && makeCustomBrush(brushes2[shape.brush], shape.modifiers), slots = dests.get(shape.dest), svgs = [];
    if (brush) {
      const el = setAttributes(createElement2("g"), { cgHash: hash2 });
      svgs.push({ el });
      if (from[0] !== to[0] || from[1] !== to[1])
        el.appendChild(renderArrow(shape, brush, from, to, current, isShort(shape.dest, dests)));
      else
        el.appendChild(renderCircle(brushes2[shape.brush], from, current, bounds));
    }
    if (shape.label) {
      const label = shape.label;
      (_a = label.fill) !== null && _a !== void 0 ? _a : label.fill = shape.brush && brushes2[shape.brush].color;
      const corner = shape.brush ? void 0 : "tr";
      svgs.push({ el: renderLabel(label, hash2, from, to, slots, corner), isCustom: true });
    }
    if (shape.customSvg) {
      const on = (_b = shape.customSvg.center) !== null && _b !== void 0 ? _b : "orig";
      const [x, y] = on === "label" ? labelCoords(from, to, slots).map((c) => c - 0.5) : on === "dest" ? to : from;
      const el = setAttributes(createElement2("g"), { transform: `translate(${x},${y})`, cgHash: hash2 });
      el.innerHTML = `<svg width="1" height="1" viewBox="0 0 100 100">${shape.customSvg.html}</svg>`;
      svgs.push({ el, isCustom: true });
    }
    return svgs;
  }
  function renderCircle(brush, at, current, bounds) {
    const widths = circleWidth(), radius = (bounds.width + bounds.height) / (4 * Math.max(bounds.width, bounds.height));
    return setAttributes(createElement2("circle"), {
      stroke: brush.color,
      "stroke-width": widths[current ? 0 : 1],
      fill: "none",
      opacity: opacity(brush, current),
      cx: at[0],
      cy: at[1],
      r: radius - widths[1] / 2
    });
  }
  function hilite(brush) {
    return ["#ffffff", "#fff", "white"].includes(brush.color) ? hilites["hilitePrimary"] : hilites["hiliteWhite"];
  }
  function renderArrow(s, brush, from, to, current, shorten) {
    var _a;
    function renderLine(isHilite) {
      var _a2;
      const m = arrowMargin(shorten && !current), dx = to[0] - from[0], dy = to[1] - from[1], angle = Math.atan2(dy, dx), xo = Math.cos(angle) * m, yo = Math.sin(angle) * m;
      return setAttributes(createElement2("line"), {
        stroke: isHilite ? hilite(brush).color : brush.color,
        "stroke-width": lineWidth(brush, current) + (isHilite ? 0.04 : 0),
        "stroke-linecap": "round",
        "marker-end": `url(#arrowhead-${isHilite ? hilite(brush).key : brush.key})`,
        opacity: ((_a2 = s.modifiers) === null || _a2 === void 0 ? void 0 : _a2.hilite) ? 1 : opacity(brush, current),
        x1: from[0],
        y1: from[1],
        x2: to[0] - xo,
        y2: to[1] - yo
      });
    }
    if (!((_a = s.modifiers) === null || _a === void 0 ? void 0 : _a.hilite))
      return renderLine(false);
    const g = createElement2("g");
    const blurred = setAttributes(createElement2("g"), { filter: "url(#cg-filter-blur)" });
    blurred.appendChild(filterBox(from, to));
    blurred.appendChild(renderLine(true));
    g.appendChild(blurred);
    g.appendChild(renderLine(false));
    return g;
  }
  function renderMarker(brush) {
    const marker = setAttributes(createElement2("marker"), {
      id: "arrowhead-" + brush.key,
      orient: "auto",
      overflow: "visible",
      markerWidth: 4,
      markerHeight: 4,
      refX: brush.key.startsWith("hilite") ? 1.86 : 2.05,
      refY: 2
    });
    marker.appendChild(setAttributes(createElement2("path"), {
      d: "M0,0 V4 L3,2 Z",
      fill: brush.color
    }));
    marker.setAttribute("cgKey", brush.key);
    return marker;
  }
  function renderLabel(label, hash2, from, to, slots, corner) {
    var _a;
    const labelSize = 0.4, fontSize = labelSize * 0.75 ** label.text.length, at = labelCoords(from, to, slots), cornerOff = corner === "tr" ? 0.4 : 0, g = setAttributes(createElement2("g"), {
      transform: `translate(${at[0] + cornerOff},${at[1] - cornerOff})`,
      cgHash: hash2
    });
    g.appendChild(setAttributes(createElement2("circle"), {
      r: labelSize / 2,
      "fill-opacity": corner ? 1 : 0.8,
      "stroke-opacity": corner ? 1 : 0.7,
      "stroke-width": 0.03,
      fill: (_a = label.fill) !== null && _a !== void 0 ? _a : "#666",
      stroke: "white"
    }));
    const labelEl = setAttributes(createElement2("text"), {
      "font-size": fontSize,
      "font-family": "Noto Sans",
      "text-anchor": "middle",
      fill: "white",
      y: 0.13 * 0.75 ** label.text.length
    });
    labelEl.innerHTML = label.text;
    g.appendChild(labelEl);
    return g;
  }
  function orient(pos, color) {
    return color === "white" ? pos : [7 - pos[0], 7 - pos[1]];
  }
  function isShort(dest, dests) {
    return true === (dest && dests.has(dest) && dests.get(dest).size > 1);
  }
  function createElement2(tagName2) {
    return document.createElementNS("http://www.w3.org/2000/svg", tagName2);
  }
  function setAttributes(el, attrs) {
    for (const key in attrs) {
      if (Object.prototype.hasOwnProperty.call(attrs, key))
        el.setAttribute(key, attrs[key]);
    }
    return el;
  }
  function makeCustomBrush(base, modifiers) {
    return !modifiers ? base : {
      color: base.color,
      opacity: Math.round(base.opacity * 10) / 10,
      lineWidth: Math.round(modifiers.lineWidth || base.lineWidth),
      key: [base.key, modifiers.lineWidth].filter((x) => x).join("")
    };
  }
  function circleWidth() {
    return [3 / 64, 4 / 64];
  }
  function lineWidth(brush, current) {
    return (brush.lineWidth || 10) * (current ? 0.85 : 1) / 64;
  }
  function opacity(brush, current) {
    return (brush.opacity || 1) * (current ? 0.9 : 1);
  }
  function arrowMargin(shorten) {
    return (shorten ? 20 : 10) / 64;
  }
  function pos2user(pos, bounds) {
    const xScale = Math.min(1, bounds.width / bounds.height);
    const yScale = Math.min(1, bounds.height / bounds.width);
    return [(pos[0] - 3.5) * xScale, (3.5 - pos[1]) * yScale];
  }
  function filterBox(from, to) {
    const box = {
      from: [Math.floor(Math.min(from[0], to[0])), Math.floor(Math.min(from[1], to[1]))],
      to: [Math.ceil(Math.max(from[0], to[0])), Math.ceil(Math.max(from[1], to[1]))]
    };
    return setAttributes(createElement2("rect"), {
      x: box.from[0],
      y: box.from[1],
      width: box.to[0] - box.from[0],
      height: box.to[1] - box.from[1],
      fill: "none",
      stroke: "none"
    });
  }
  function moveAngle(from, to, asSlot = true) {
    const angle = Math.atan2(to[1] - from[1], to[0] - from[0]) + Math.PI;
    return asSlot ? (Math.round(angle * 8 / Math.PI) + 16) % 16 : angle;
  }
  function dist(from, to) {
    return Math.sqrt([from[0] - to[0], from[1] - to[1]].reduce((acc, x) => acc + x * x, 0));
  }
  function labelCoords(from, to, slots) {
    let mag = dist(from, to);
    const angle = moveAngle(from, to, false);
    if (slots) {
      mag -= 33 / 64;
      if (slots.size > 1) {
        mag -= 10 / 64;
        const slot = moveAngle(from, to);
        if (slots.has((slot + 1) % 16) || slots.has((slot + 15) % 16)) {
          if (slot & 1)
            mag -= 0.4;
        }
      }
    }
    return [from[0] - Math.cos(angle) * mag, from[1] - Math.sin(angle) * mag].map((c) => c + 0.5);
  }

  // node_modules/chessground/dist/wrap.js
  function renderWrap(element, s) {
    element.innerHTML = "";
    element.classList.add("cg-wrap");
    for (const c of colors)
      element.classList.toggle("orientation-" + c, s.orientation === c);
    element.classList.toggle("manipulable", !s.viewOnly);
    const container = createEl("cg-container");
    element.appendChild(container);
    const board = createEl("cg-board");
    container.appendChild(board);
    let svg;
    let customSvg;
    let autoPieces;
    if (s.drawable.visible) {
      svg = setAttributes(createElement2("svg"), {
        class: "cg-shapes",
        viewBox: "-4 -4 8 8",
        preserveAspectRatio: "xMidYMid slice"
      });
      svg.appendChild(createDefs());
      svg.appendChild(createElement2("g"));
      customSvg = setAttributes(createElement2("svg"), {
        class: "cg-custom-svgs",
        viewBox: "-3.5 -3.5 8 8",
        preserveAspectRatio: "xMidYMid slice"
      });
      customSvg.appendChild(createElement2("g"));
      autoPieces = createEl("cg-auto-pieces");
      container.appendChild(svg);
      container.appendChild(customSvg);
      container.appendChild(autoPieces);
    }
    if (s.coordinates) {
      const orientClass = s.orientation === "black" ? " black" : "";
      const ranksPositionClass = s.ranksPosition === "left" ? " left" : "";
      if (s.coordinatesOnSquares) {
        const rankN = s.orientation === "white" ? (i) => i + 1 : (i) => 8 - i;
        files.forEach((f, i) => container.appendChild(renderCoords(ranks.map((r) => f + r), "squares rank" + rankN(i) + orientClass + ranksPositionClass)));
      } else {
        container.appendChild(renderCoords(ranks, "ranks" + orientClass + ranksPositionClass));
        container.appendChild(renderCoords(files, "files" + orientClass));
      }
    }
    let ghost;
    if (s.draggable.enabled && s.draggable.showGhost) {
      ghost = createEl("piece", "ghost");
      setVisible(ghost, false);
      container.appendChild(ghost);
    }
    return {
      board,
      container,
      wrap: element,
      ghost,
      svg,
      customSvg,
      autoPieces
    };
  }
  function renderCoords(elems, className) {
    const el = createEl("coords", className);
    let f;
    for (const elem of elems) {
      f = createEl("coord");
      f.textContent = elem;
      el.appendChild(f);
    }
    return el;
  }

  // node_modules/chessground/dist/drop.js
  function drop(s, e) {
    if (!s.dropmode.active)
      return;
    unsetPremove(s);
    unsetPredrop(s);
    const piece = s.dropmode.piece;
    if (piece) {
      s.pieces.set("a0", piece);
      const position = eventPosition(e);
      const dest = position && getKeyAtDomPos(position, whitePov(s), s.dom.bounds());
      if (dest)
        dropNewPiece(s, "a0", dest);
    }
    s.dom.redraw();
  }

  // node_modules/chessground/dist/events.js
  function bindBoard(s, onResize) {
    const boardEl = s.dom.elements.board;
    if ("ResizeObserver" in window)
      new ResizeObserver(onResize).observe(s.dom.elements.wrap);
    if (s.disableContextMenu || s.drawable.enabled) {
      boardEl.addEventListener("contextmenu", (e) => e.preventDefault());
    }
    if (s.viewOnly)
      return;
    const onStart = startDragOrDraw(s);
    boardEl.addEventListener("touchstart", onStart, {
      passive: false
    });
    boardEl.addEventListener("mousedown", onStart, {
      passive: false
    });
  }
  function bindDocument(s, onResize) {
    const unbinds = [];
    if (!("ResizeObserver" in window))
      unbinds.push(unbindable(document.body, "chessground.resize", onResize));
    if (!s.viewOnly) {
      const onmove = dragOrDraw(s, move2, move);
      const onend = dragOrDraw(s, end2, end);
      for (const ev of ["touchmove", "mousemove"])
        unbinds.push(unbindable(document, ev, onmove));
      for (const ev of ["touchend", "mouseup"])
        unbinds.push(unbindable(document, ev, onend));
      const onScroll = () => s.dom.bounds.clear();
      unbinds.push(unbindable(document, "scroll", onScroll, { capture: true, passive: true }));
      unbinds.push(unbindable(window, "resize", onScroll, { passive: true }));
    }
    return () => unbinds.forEach((f) => f());
  }
  function unbindable(el, eventName, callback, options) {
    el.addEventListener(eventName, callback, options);
    return () => el.removeEventListener(eventName, callback, options);
  }
  var startDragOrDraw = (s) => (e) => {
    if (s.draggable.current)
      cancel2(s);
    else if (s.drawable.current)
      cancel(s);
    else if (e.shiftKey || isRightButton(e)) {
      if (s.drawable.enabled)
        start(s, e);
    } else if (!s.viewOnly) {
      if (s.dropmode.active)
        drop(s, e);
      else
        start2(s, e);
    }
  };
  var dragOrDraw = (s, withDrag, withDraw) => (e) => {
    if (s.drawable.current) {
      if (s.drawable.enabled)
        withDraw(s, e);
    } else if (!s.viewOnly)
      withDrag(s, e);
  };

  // node_modules/chessground/dist/render.js
  function render2(s) {
    const asWhite = whitePov(s), posToTranslate2 = posToTranslate(s.dom.bounds()), boardEl = s.dom.elements.board, pieces = s.pieces, curAnim = s.animation.current, anims = curAnim ? curAnim.plan.anims : /* @__PURE__ */ new Map(), fadings = curAnim ? curAnim.plan.fadings : /* @__PURE__ */ new Map(), curDrag = s.draggable.current, squares = computeSquareClasses(s), samePieces = /* @__PURE__ */ new Set(), sameSquares = /* @__PURE__ */ new Set(), movedPieces = /* @__PURE__ */ new Map(), movedSquares = /* @__PURE__ */ new Map();
    let k, el, pieceAtKey, elPieceName, anim2, fading, pMvdset, pMvd, sMvdset, sMvd;
    el = boardEl.firstChild;
    while (el) {
      k = el.cgKey;
      if (isPieceNode(el)) {
        pieceAtKey = pieces.get(k);
        anim2 = anims.get(k);
        fading = fadings.get(k);
        elPieceName = el.cgPiece;
        if (el.cgDragging && (!curDrag || curDrag.orig !== k)) {
          el.classList.remove("dragging");
          translate(el, posToTranslate2(key2pos(k), asWhite));
          el.cgDragging = false;
        }
        if (!fading && el.cgFading) {
          el.cgFading = false;
          el.classList.remove("fading");
        }
        if (pieceAtKey) {
          if (anim2 && el.cgAnimating && elPieceName === pieceNameOf(pieceAtKey)) {
            const pos = key2pos(k);
            pos[0] += anim2[2];
            pos[1] += anim2[3];
            el.classList.add("anim");
            translate(el, posToTranslate2(pos, asWhite));
          } else if (el.cgAnimating) {
            el.cgAnimating = false;
            el.classList.remove("anim");
            translate(el, posToTranslate2(key2pos(k), asWhite));
            if (s.addPieceZIndex)
              el.style.zIndex = posZIndex(key2pos(k), asWhite);
          }
          if (elPieceName === pieceNameOf(pieceAtKey) && (!fading || !el.cgFading)) {
            samePieces.add(k);
          } else {
            if (fading && elPieceName === pieceNameOf(fading)) {
              el.classList.add("fading");
              el.cgFading = true;
            } else {
              appendValue(movedPieces, elPieceName, el);
            }
          }
        } else {
          appendValue(movedPieces, elPieceName, el);
        }
      } else if (isSquareNode(el)) {
        const cn = el.className;
        if (squares.get(k) === cn)
          sameSquares.add(k);
        else
          appendValue(movedSquares, cn, el);
      }
      el = el.nextSibling;
    }
    for (const [sk, className] of squares) {
      if (!sameSquares.has(sk)) {
        sMvdset = movedSquares.get(className);
        sMvd = sMvdset && sMvdset.pop();
        const translation = posToTranslate2(key2pos(sk), asWhite);
        if (sMvd) {
          sMvd.cgKey = sk;
          translate(sMvd, translation);
        } else {
          const squareNode = createEl("square", className);
          squareNode.cgKey = sk;
          translate(squareNode, translation);
          boardEl.insertBefore(squareNode, boardEl.firstChild);
        }
      }
    }
    for (const [k2, p] of pieces) {
      anim2 = anims.get(k2);
      if (!samePieces.has(k2)) {
        pMvdset = movedPieces.get(pieceNameOf(p));
        pMvd = pMvdset && pMvdset.pop();
        if (pMvd) {
          pMvd.cgKey = k2;
          if (pMvd.cgFading) {
            pMvd.classList.remove("fading");
            pMvd.cgFading = false;
          }
          const pos = key2pos(k2);
          if (s.addPieceZIndex)
            pMvd.style.zIndex = posZIndex(pos, asWhite);
          if (anim2) {
            pMvd.cgAnimating = true;
            pMvd.classList.add("anim");
            pos[0] += anim2[2];
            pos[1] += anim2[3];
          }
          translate(pMvd, posToTranslate2(pos, asWhite));
        } else {
          const pieceName = pieceNameOf(p), pieceNode = createEl("piece", pieceName), pos = key2pos(k2);
          pieceNode.cgPiece = pieceName;
          pieceNode.cgKey = k2;
          if (anim2) {
            pieceNode.cgAnimating = true;
            pos[0] += anim2[2];
            pos[1] += anim2[3];
          }
          translate(pieceNode, posToTranslate2(pos, asWhite));
          if (s.addPieceZIndex)
            pieceNode.style.zIndex = posZIndex(pos, asWhite);
          boardEl.appendChild(pieceNode);
        }
      }
    }
    for (const nodes of movedPieces.values())
      removeNodes(s, nodes);
    for (const nodes of movedSquares.values())
      removeNodes(s, nodes);
  }
  function renderResized(s) {
    const asWhite = whitePov(s), posToTranslate2 = posToTranslate(s.dom.bounds());
    let el = s.dom.elements.board.firstChild;
    while (el) {
      if (isPieceNode(el) && !el.cgAnimating || isSquareNode(el)) {
        translate(el, posToTranslate2(key2pos(el.cgKey), asWhite));
      }
      el = el.nextSibling;
    }
  }
  function updateBounds(s) {
    var _a, _b;
    const bounds = s.dom.elements.wrap.getBoundingClientRect();
    const container = s.dom.elements.container;
    const ratio = bounds.height / bounds.width;
    const width = Math.floor(bounds.width * window.devicePixelRatio / 8) * 8 / window.devicePixelRatio;
    const height = width * ratio;
    container.style.width = width + "px";
    container.style.height = height + "px";
    s.dom.bounds.clear();
    (_a = s.addDimensionsCssVarsTo) === null || _a === void 0 ? void 0 : _a.style.setProperty("---cg-width", width + "px");
    (_b = s.addDimensionsCssVarsTo) === null || _b === void 0 ? void 0 : _b.style.setProperty("---cg-height", height + "px");
  }
  var isPieceNode = (el) => el.tagName === "PIECE";
  var isSquareNode = (el) => el.tagName === "SQUARE";
  function removeNodes(s, nodes) {
    for (const node of nodes)
      s.dom.elements.board.removeChild(node);
  }
  function posZIndex(pos, asWhite) {
    const minZ = 3;
    const rank = pos[1];
    const z = asWhite ? minZ + 7 - rank : minZ + rank;
    return `${z}`;
  }
  var pieceNameOf = (piece) => `${piece.color} ${piece.role}`;
  function computeSquareClasses(s) {
    var _a, _b, _c;
    const squares = /* @__PURE__ */ new Map();
    if (s.lastMove && s.highlight.lastMove)
      for (const k of s.lastMove) {
        addSquare(squares, k, "last-move");
      }
    if (s.check && s.highlight.check)
      addSquare(squares, s.check, "check");
    if (s.selected) {
      addSquare(squares, s.selected, "selected");
      if (s.movable.showDests) {
        const dests = (_a = s.movable.dests) === null || _a === void 0 ? void 0 : _a.get(s.selected);
        if (dests)
          for (const k of dests) {
            addSquare(squares, k, "move-dest" + (s.pieces.has(k) ? " oc" : ""));
          }
        const pDests = (_c = (_b = s.premovable.customDests) === null || _b === void 0 ? void 0 : _b.get(s.selected)) !== null && _c !== void 0 ? _c : s.premovable.dests;
        if (pDests)
          for (const k of pDests) {
            addSquare(squares, k, "premove-dest" + (s.pieces.has(k) ? " oc" : ""));
          }
      }
    }
    const premove2 = s.premovable.current;
    if (premove2)
      for (const k of premove2)
        addSquare(squares, k, "current-premove");
    else if (s.predroppable.current)
      addSquare(squares, s.predroppable.current.key, "current-premove");
    const o = s.exploding;
    if (o)
      for (const k of o.keys)
        addSquare(squares, k, "exploding" + o.stage);
    if (s.highlight.custom) {
      s.highlight.custom.forEach((v, k) => {
        addSquare(squares, k, v);
      });
    }
    return squares;
  }
  function addSquare(squares, key, klass) {
    const classes = squares.get(key);
    if (classes)
      squares.set(key, `${classes} ${klass}`);
    else
      squares.set(key, klass);
  }
  function appendValue(map, key, value) {
    const arr = map.get(key);
    if (arr)
      arr.push(value);
    else
      map.set(key, [value]);
  }

  // node_modules/chessground/dist/sync.js
  function syncShapes2(shapes, root, renderShape3) {
    const hashesInDom = /* @__PURE__ */ new Map(), toRemove = [];
    for (const sc of shapes)
      hashesInDom.set(sc.hash, false);
    let el = root.firstElementChild, elHash;
    while (el) {
      elHash = el.getAttribute("cgHash");
      if (hashesInDom.has(elHash))
        hashesInDom.set(elHash, true);
      else
        toRemove.push(el);
      el = el.nextElementSibling;
    }
    for (const el2 of toRemove)
      root.removeChild(el2);
    for (const sc of shapes) {
      if (!hashesInDom.get(sc.hash))
        root.appendChild(renderShape3(sc));
    }
  }

  // node_modules/chessground/dist/autoPieces.js
  function render3(state, autoPieceEl) {
    const autoPieces = state.drawable.autoShapes.filter((autoShape) => autoShape.piece);
    const autoPieceShapes = autoPieces.map((s) => {
      return {
        shape: s,
        hash: hash(s),
        current: false
      };
    });
    syncShapes2(autoPieceShapes, autoPieceEl, (shape) => renderShape2(state, shape, state.dom.bounds()));
  }
  function renderResized2(state) {
    var _a;
    const asWhite = whitePov(state), posToTranslate2 = posToTranslate(state.dom.bounds());
    let el = (_a = state.dom.elements.autoPieces) === null || _a === void 0 ? void 0 : _a.firstChild;
    while (el) {
      translateAndScale(el, posToTranslate2(key2pos(el.cgKey), asWhite), el.cgScale);
      el = el.nextSibling;
    }
  }
  function renderShape2(state, { shape, hash: hash2 }, bounds) {
    var _a, _b, _c;
    const orig = shape.orig;
    const role = (_a = shape.piece) === null || _a === void 0 ? void 0 : _a.role;
    const color = (_b = shape.piece) === null || _b === void 0 ? void 0 : _b.color;
    const scale = (_c = shape.piece) === null || _c === void 0 ? void 0 : _c.scale;
    const pieceEl = createEl("piece", `${role} ${color}`);
    pieceEl.setAttribute("cgHash", hash2);
    pieceEl.cgKey = orig;
    pieceEl.cgScale = scale;
    translateAndScale(pieceEl, posToTranslate(bounds)(key2pos(orig), whitePov(state)), scale);
    return pieceEl;
  }
  var hash = (autoPiece) => {
    var _a, _b, _c;
    return [autoPiece.orig, (_a = autoPiece.piece) === null || _a === void 0 ? void 0 : _a.role, (_b = autoPiece.piece) === null || _b === void 0 ? void 0 : _b.color, (_c = autoPiece.piece) === null || _c === void 0 ? void 0 : _c.scale].join(",");
  };

  // node_modules/chessground/dist/chessground.js
  function Chessground(element, config) {
    const maybeState = defaults();
    configure(maybeState, config || {});
    function redrawAll() {
      const prevUnbind = "dom" in maybeState ? maybeState.dom.unbind : void 0;
      const elements = renderWrap(element, maybeState), bounds = memo(() => elements.board.getBoundingClientRect()), redrawNow = (skipSvg) => {
        render2(state);
        if (elements.autoPieces)
          render3(state, elements.autoPieces);
        if (!skipSvg && elements.svg)
          renderSvg(state, elements.svg, elements.customSvg);
      }, onResize = () => {
        updateBounds(state);
        renderResized(state);
        if (elements.autoPieces)
          renderResized2(state);
      };
      const state = maybeState;
      state.dom = {
        elements,
        bounds,
        redraw: debounceRedraw(redrawNow),
        redrawNow,
        unbind: prevUnbind
      };
      state.drawable.prevSvgHash = "";
      updateBounds(state);
      redrawNow(false);
      bindBoard(state, onResize);
      if (!prevUnbind)
        state.dom.unbind = bindDocument(state, onResize);
      state.events.insert && state.events.insert(elements);
      return state;
    }
    return start3(redrawAll(), redrawAll);
  }
  function debounceRedraw(redrawNow) {
    let redrawing = false;
    return () => {
      if (redrawing)
        return;
      redrawing = true;
      requestAnimationFrame(() => {
        redrawNow();
        redrawing = false;
      });
    };
  }

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/view/board.ts
  var renderBoard = (ctrl) => h(
    "div.game-page__board",
    h(
      "div.cg-wrap",
      {
        hook: {
          insert(vnode2) {
            ctrl.setGround(Chessground(vnode2.elm, ctrl.chessgroundConfig()));
          }
        }
      },
      "loading..."
    )
  );
  var renderPlayer = (ctrl, color, clock, name, title, rating, aiLevel) => {
    return h(
      "div.game-page__player",
      {
        class: {
          turn: ctrl.chess.turn == color
        }
      },
      [
        h("div.game-page__player__user", [
          title && h("span.game-page__player__user__title.display-5", title),
          h("span.game-page__player__user__name.display-5", aiLevel ? `Stockfish level ${aiLevel}` : name || "Anon"),
          h("span.game-page__player__user__rating", rating || "")
        ]),
        h("div.game-page__player__clock.display-6", clock)
      ]
    );
  };

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/view/game.ts
  var renderGame = (ctrl) => (_) => [
    h(
      `div.game-page.game-page--${ctrl.game.id}`,
      {
        hook: {
          destroy: ctrl.onUnmount
        }
      },
      [
        renderGamePlayer(ctrl, opposite2(ctrl.pov)),
        renderBoard(ctrl),
        renderGamePlayer(ctrl, ctrl.pov),
        ctrl.playing() ? renderButtons(ctrl) : renderState(ctrl)
      ]
    )
  ];
  var renderButtons = (ctrl) => h("div.btn-group.mt-4", [
    h(
      "button.btn.btn-secondary",
      {
        attrs: { type: "button", disabled: !ctrl.playing() },
        on: {
          click() {
            if (confirm("Confirm?")) ctrl.resign();
          }
        }
      },
      ctrl.chess.fullmoves > 1 ? "Resign" : "Abort"
    )
  ]);
  var renderState = (ctrl) => h("div.game-page__state", ctrl.game.state.status);
  var renderGamePlayer = (ctrl, color) => {
    const p = ctrl.game[color];
    const clock = clockContent(
      ctrl.timeOf(color),
      color == ctrl.chess.turn && ctrl.chess.fullmoves > 1 && ctrl.playing() ? ctrl.lastUpdateAt - Date.now() : 0
    );
    return renderPlayer(ctrl, color, clock, p.name, p.title, p.rating, p.aiLevel);
  };

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/view/home.ts
  var renderHome = (ctrl) => ctrl.auth.me ? userHome(ctrl) : anonHome();
  var userHome = (ctrl) => [
    h("div", [
      h("div.btn-group.mt-5", [
        h(
          "button.btn.btn-outline-primary.btn-lg",
          {
            attrs: { type: "button" },
            on: { click: ctrl.playAi }
          },
          "Play the Lichess AI"
        ),
        h(
          "button.btn.btn-outline-primary.btn-lg",
          {
            attrs: { type: "button" },
            on: { click: () => ctrl.playMaia(10, 0) }
          },
          "Play a casual 10+0 game with the maia1 BOT"
        ),
        h(
          "button.btn.btn-outline-primary.btn-lg",
          {
            attrs: { type: "button" },
            on: { click: () => ctrl.playPool(10, 0) }
          },
          "Play a rated 10+0 game with a random opponent"
        )
      ]),
      h("h2.mt-5", "Games in progress"),
      h("div.games", renderGames(ctrl.games)),
      h("h2.mt-5.mb-3", "About"),
      renderAbout()
    ])
  ];
  var renderGames = (ongoing) => ongoing.games.length ? ongoing.games.map(renderGameWidget) : [h("p", "No ongoing games at the moment")];
  var renderGameWidget = (game) => h(
    `a.game-widget.text-decoration-none.game-widget--${game.id}`,
    {
      attrs: href(`/game/${game.gameId}`)
    },
    [
      h("span.game-widget__opponent", [
        h("span.game-widget__opponent__name", game.opponent.username || "Anon"),
        game.opponent.rating && h("span.game-widget__opponent__rating", game.opponent.rating)
      ]),
      h(
        "span.game-widget__board.cg-wrap",
        {
          hook: {
            insert(vnode2) {
              const el = vnode2.elm;
              Chessground(el, {
                fen: game.fen,
                orientation: game.color,
                lastMove: game.lastMove.match(/.{1,2}/g),
                viewOnly: true,
                movable: { free: false },
                drawable: { visible: false },
                coordinates: false
              });
            }
          }
        },
        "board"
      )
    ]
  );
  var anonHome = () => [
    h("div.login.text-center", [
      renderAbout(),
      h("div.big", [h("p", "Please log in to continue.")]),
      h(
        "a.btn.btn-primary.btn-lg.mt-5",
        {
          attrs: href("/login")
        },
        "Login with Lichess"
      )
    ])
  ];
  var renderAbout = () => h("div.about", [
    h("p", "This is an example for a fully client side OAuth app that uses various Lichess APIs."),
    h("ul", [
      h(
        "li",
        h(
          "a",
          {
            attrs: { href: "https://github.com/lichess-org/api-demo" }
          },
          "Source code of this demo"
        )
      ),
      h(
        "li",
        h(
          "a",
          {
            attrs: { href: "https://github.com/lichess-org/api-demo#lichess-oauth-app-demo" }
          },
          "README"
        )
      ),
      h(
        "li",
        h(
          "a",
          {
            attrs: { href: "https://lichess.org/api" }
          },
          "Lichess.org API documentation"
        )
      )
    ]),
    h("p", [
      "Press ",
      h("code", "<Ctrl+Shift+j>"),
      " to open your browser console and view incoming events.",
      h("br"),
      "Check out the network tab as well to view API calls."
    ])
  ]);

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/view/seek.ts
  var renderSeek = (ctrl) => (_) => [
    h(
      "div.seek-page",
      {
        hook: {
          destroy: ctrl.onUnmount
        }
      },
      [
        h("div.seek-page__awaiting", [spinner(), h("span.ms-3", "Awaiting a game...")]),
        h(
          "a.btn.btn-secondary",
          {
            attrs: { href: url("/") }
          },
          "Cancel"
        )
      ]
    )
  ];

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/view/tv.ts
  var renderTv = (ctrl) => (_) => [
    h(
      `div.game-page.game-page--${ctrl.game.id}`,
      {
        hook: {
          destroy: ctrl.onUnmount
        }
      },
      [
        renderTvPlayer(ctrl, opposite2(ctrl.game.orientation)),
        renderBoard(ctrl),
        renderTvPlayer(ctrl, ctrl.game.orientation)
      ]
    )
  ];
  var renderTvPlayer = (ctrl, color) => {
    const p = ctrl.player(color);
    const clock = clockContent(
      p.seconds && p.seconds * 1e3,
      color == ctrl.chess.turn ? ctrl.lastUpdateAt - Date.now() : 0
    );
    return renderPlayer(ctrl, color, clock, p.user.name, p.user.title, p.rating);
  };

  // ns-hugo-imp:/Users/colinw/Code/steinitz-website-hugo-source/assets/ts/view/app.ts
  function view(ctrl) {
    return layout_default(ctrl, selectRenderer(ctrl)(ctrl));
  }
  var selectRenderer = (ctrl) => {
    if (ctrl.page == "game") return ctrl.game ? renderGame(ctrl.game) : renderLoading;
    if (ctrl.page == "home") return renderHome;
    if (ctrl.page == "seek" && ctrl.seek) return renderSeek(ctrl.seek);
    if (ctrl.page == "challenge" && ctrl.challenge) return renderChallenge(ctrl.challenge);
    if (ctrl.page == "tv") return ctrl.tv ? renderTv(ctrl.tv) : renderLoading;
    return renderNotFound;
  };
  var renderLoading = (_) => [loadingBody()];
  var renderNotFound = (_) => [h("h1", "Not found")];
  var loadingBody = () => h("div.loading", spinner());
  var spinner = () => h("div.spinner-border.text-primary", { attrs: { role: "status" } }, h("span.visually-hidden", "Loading..."));

  // <stdin>
  var import_dropdown = __toESM(require_dropdown());
  var import_collapse = __toESM(require_collapse());
  async function runApp(element) {
    const patch = init([attributesModule, eventListenersModule, classModule]);
    const ctrl = new Ctrl(redraw);
    let vnode2 = patch(element, loadingBody());
    function redraw() {
      vnode2 = patch(vnode2, view(ctrl));
    }
    await ctrl.auth.init();
    routing_default(ctrl);
  }
  window.runApp = runApp;
})();
/*!
  * Bootstrap data.js v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap index.js v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap event-handler.js v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap manipulator.js v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap config.js v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap base-component.js v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap selector-engine.js v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap dropdown.js v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap collapse.js v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
