// ===============================
// SILVER TECH ULTRA PRO
// CYBER CONTROL PANEL
// ===============================

// MD BOT URL
const MD_BOT_URL = "https://your-md-bot-link.com";

// ===============================
// PARTICLES SYSTEM
// ===============================

const particles = document.getElementById("particles");

if (particles) {

    for (let i = 0; i < 60; i++) {

        let p = document.createElement("div");

        p.className = "particle";

        p.style.position = "absolute";
        p.style.width = Math.random() * 4 + 2 + "px";
        p.style.height = p.style.width;

        p.style.background = "#00e5ff";
        p.style.borderRadius = "50%";

        p.style.left = Math.random() * 100 + "%";
        p.style.top = Math.random() * 100 + "%";

        p.style.opacity = Math.random() * 0.8;

        p.style.boxShadow =
            "0 0 10px #00e5ff";

        p.style.animation =
            `floatParticle ${4 + Math.random() * 8}s linear infinite`;

        particles.appendChild(p);
    }

    const style = document.createElement("style");

    style.innerHTML = `
    @keyframes floatParticle{
        0%{
            transform:translateY(0px);
        }
        50%{
            transform:translateY(-50px);
        }
        100%{
            transform:translateY(0px);
        }
    }
    `;

    document.head.appendChild(style);
}

// ===============================
// LAUNCH BUTTON
// ===============================

const launchBtn =
document.getElementById("launchBtn");

if (launchBtn) {

    launchBtn.addEventListener(
        "click",
        () => {

            launchBtn.innerHTML =
            '<i class="fas fa-spinner fa-spin"></i> CONNECTING...';

            setTimeout(() => {

                window.open(
                    MD_BOT_URL,
                    "_blank"
                );

                launchBtn.innerHTML =
                '<i class="fas fa-rocket"></i> LAUNCH MD BOT';

            }, 1200);
        }
    );
}

// ===============================
// COMMUNITY CARDS
// ===============================

document
.querySelectorAll(".community-card")
.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const url =
            card.getAttribute("data-url");

            if (url) {

                window.open(
                    url,
                    "_blank"
                );

            }

        }
    );

});

// ===============================
// CONTACT BUTTON
// ===============================

const contactBtn =
document.querySelector(".contact-btn");

if (contactBtn) {

    contactBtn.addEventListener(
        "click",
        () => {

            window.open(
                "https://t.me/SilverTechOfficial",
                "_blank"
            );

        }
    );

}

// ===============================
// LOGOUT BUTTON
// ===============================

const logoutBtn =
document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        () => {

            const confirmLogout =
            confirm(
                "Are you sure you want to logout?"
            );

            if (!confirmLogout) return;

            localStorage.clear();

            location.reload();

        }
    );

}

// ===============================
// LIVE STATUS EFFECT
// ===============================

const statusText =
document.querySelector(".online");

if (statusText) {

    setInterval(() => {

        statusText.style.opacity = "0.3";

        setTimeout(() => {

            statusText.style.opacity = "1";

        }, 500);

    }, 1000);

}

// ===============================
// CYBER GLOW EFFECT
// ===============================

setInterval(() => {

    document
    .querySelectorAll(
        ".community-card,.stat-box,.hero-card"
    )
    .forEach(el => {

        const glow =
        Math.random() * 25;

        el.style.boxShadow =
        `0 0 ${glow}px rgba(0,229,255,.15)`;

    });

}, 2500);

// ===============================
// CLOCK SYSTEM
// ===============================

function updateClock() {

    const now = new Date();

    const time =
        now.toLocaleTimeString();

    let clock =
    document.getElementById(
        "liveClock"
    );

    if (clock) {

        clock.innerText = time;

    }

}

setInterval(
    updateClock,
    1000
);

// ===============================
// WELCOME EFFECT
// ===============================

window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            console.log(
                "%cSILVER TECH CYBER PANEL ACTIVE",
                "color:#00e5ff;font-size:20px;font-weight:bold;"
            );

        }, 1000);

    }
);

// ===============================
// SECURITY NOTICE
// ===============================

document.addEventListener(
    "contextmenu",
    function(e){

        e.preventDefault();

    }
);

// ===============================
// END
// ===============================
