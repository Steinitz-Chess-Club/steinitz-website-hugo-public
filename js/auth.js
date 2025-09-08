// auth.js

async function verifyUser(idToken, { persist = true } = {}) {
    try {
        const response = await fetch("https://8gatyboaf6.execute-api.af-south-1.amazonaws.com/default/verifyUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: idToken })
        });

        const data = await response.json();
        console.log("Lambda response:", data);

        const userInfoEl = document.getElementById("user-info");
        const loginBtn = document.getElementById("login-btn");
        const logoutBtn = document.getElementById("logout-btn");

        if (data.authorized) {
            userInfoEl.textContent = `✅ Login successful! Welcome, ${data.email}`;
            loginBtn.style.display = "none";
            logoutBtn.style.display = "inline-block";

            if (persist) {
                // persist token + user info
                localStorage.setItem("authUser", JSON.stringify({
                    token: idToken,
                    email: data.email,
                    authorized: true
                }));
            }
        } else {
            userInfoEl.textContent = `❌ Access denied for ${data.email || "unknown user"}`;
            loginBtn.style.display = "inline-block";
            logoutBtn.style.display = "none";

            localStorage.removeItem("authUser");
            console.warn("Unauthorized user:", data.email, data.error || "");
        }

        return data;

    } catch (err) {
        console.error("Error verifying user:", err);
        document.getElementById("user-info").textContent = "⚠️ Error verifying login.";
        return { authorized: false };
    }
}

function onGoogleSignIn(response) {
    const idToken = response.credential;
    console.log("Google ID token received:", idToken);
    verifyUser(idToken, { persist: true });
}

function logout() {
    console.log("User logged out");
    const userInfoEl = document.getElementById("user-info");
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");

    userInfoEl.textContent = "👋 You have logged out.";
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";

    localStorage.removeItem("authUser");
}

// Restore session on page load by revalidating with Lambda
async function restoreSession() {
    const saved = localStorage.getItem("authUser");
    if (!saved) return;

    try {
        const user = JSON.parse(saved);
        console.log("Restoring session, verifying with Lambda…", user);

        // re-check token with Lambda
        const result = await verifyUser(user.token, { persist: false });

        if (!result.authorized) {
            console.log("Stored token invalid/expired, clearing session.");
            localStorage.removeItem("authUser");

            document.getElementById("user-info").textContent = "⚠️ Session expired, please log in again.";
            document.getElementById("login-btn").style.display = "inline-block";
            document.getElementById("logout-btn").style.display = "none";
        }
    } catch (err) {
        console.error("Failed to restore session:", err);
        localStorage.removeItem("authUser");
    }
}

// Expose globally for GIS and buttons
window.onGoogleSignIn = onGoogleSignIn;
window.logout = logout;

document.getElementById("logout-btn").addEventListener("click", logout);

// Revalidate session when page loads
restoreSession();
