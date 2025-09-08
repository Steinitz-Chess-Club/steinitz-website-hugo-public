// session.js

function updateAlwaysVisible() {
    document.querySelectorAll('.always-visible').forEach(el => el.style.display = '');
}

function updateAuthVisibility(isAuth) {
    document.querySelectorAll('.auth-only').forEach(el => el.style.display = isAuth ? '' : 'none');
    document.querySelectorAll('.guest-only').forEach(el => el.style.display = isAuth ? 'none' : '');
}

function restoreSession() {
    updateAlwaysVisible();
    const user = JSON.parse(localStorage.getItem('authUser') || 'null');
    if (user?.authorized) {
        updateAuthVisibility(true);

        // Optional: silently revalidate token with backend
        fetch('/verifyUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: user.token })
        })
            .then(res => res.json())
            .then(data => {
                if (!data.authorized) {
                    console.warn('Session expired');
                    localStorage.removeItem('authUser');
                    updateAuthVisibility(false);
                }
            })
            .catch(err => console.error('Session revalidation failed', err));
    } else {
        updateAuthVisibility(false);
    }
}

document.addEventListener('DOMContentLoaded', restoreSession);
