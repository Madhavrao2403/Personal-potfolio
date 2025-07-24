const lines = [{ text: "Hello I'm", id: "text1", cursor: "cursor1" },
{ text: "Peddinti Madhav Rao", id: "text2", cursor: "cursor2" }
]

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
    if (lineIndex >= lines.length) return;

    const { text, id, cursor } = lines[lineIndex];
    const span = document.getElementById(id);
    const cursorE1 = document.getElementById(cursor);

    lines.forEach((line, i) => {
        const c = document.getElementById(line.cursor);
        c.style.visibility = i === lineIndex ? "visible" : "hidden";
    });

    if (charIndex < text.length) {
        span.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeLine, 150);
    }
    else {
        lineIndex++;
        charIndex = 0;
        setTimeout(typeLine, 500);
    }
}

window.onload = () => {
    document.getElementById("cursor1").style.visibility = "visible";
    setTimeout(() => { typeLine(); }, 1500);
}


document.addEventListener("DOMContentLoaded", () => {
    tsParticles.load("tsparticles", {
        fullScreen: { enable: true, zIndex: -1 },
        background: {
            color: {
                value: "#141E30"
            }
        },
        particles: {
            number: {
                value: 60,
                density: {
                    enable: true,
                    area: 800
                }
            },
            color: {
                value: "#00d4ff"
            },
            opacity: {
                value: 0.6
            },
            size: {
                value: 3
            },
            move: {
                enable: true,
                speed: 1
            }
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse"
                }
            }
            ,
            modes: {
                repulse: {
                    distance: 50
                }
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    AOS.init({ duration: 800, once: true })
})

let username = 'Saimadhav2005';
let body = document.getElementById('leetcode-section');

fetch(`https://leetcode-stats-api.herokuapp.com/${username}`).then((res) => res.json()).then((data) => {
    if (data.status !== "success") {
        body.innerHTML = '<p>Cannot retrieve the data</p>';
        return;
    }
    let easy = Math.round((data.easySolved / data.totalEasy) * 100);
    let medium = Math.round((data.mediumSolved / data.totalMedium) * 100);
    let Hard = Math.round((data.hardSolved / data.totalHard) * 100);
    body.innerHTML = `

    <div class="row">
    <div class="col-12 col-md-6">
    <h5 class="text-white mt-2 fw-bolder">UserName : ${username}</h5>
    <h5 class="text-white">Total Solved : ${data.totalSolved}</h5>

    <h5 class="text-white">Easy:</h5>
    <div class="progress w-75 w-md-50">
    <div class="progress-bar fw-bold bg-info" role="progressbar" style="width: ${easy}%;" aria-valuenow="${easy}" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <span class="text-info">${data.easySolved}/${data.totalEasy}</span>

    <h5 class="text-white">Medium:</h5>
    <div class="progress w-75 w-md-50">
    <div class="progress-bar fw-bold bg-warning" role="progressbar" style="width: ${medium}%;" aria-valuenow="${medium}" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <span class="text-warning">${data.mediumSolved}/${data.totalMedium}</span>
        
    <h5 class="text-white">Hard:</h5>
    <div class="progress w-75 w-md-50">
    <div class="progress-bar fw-bold bg-danger" role="progressbar" style="width: ${Hard}%;" aria-valuenow="${Hard}" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <span class="text-danger">${data.hardSolved}/${data.totalHard}</span>
    </div>

    <div class="col-12 col-md-6">
      <h3 class="text-white">AcceptanceRate <i class="fas fa-check-circle text-success"></i></h3>
      <h1 class="text-white text-left">${data.acceptanceRate}%</h1>
      <h3 class="text-white">Ranking <i class="fas fa-award text-danger"></i></h3>
      <h1 class="text-white text-left">${(data.ranking).toLocaleString('en-IN')}</h1>
    </div>
    </div>
    `;
});

let body2 = document.getElementById('hackerrank-section')
let username1 = "smadhav426"
body2.innerHTML = `
<div class="text-white text-center my-3">
 <div class = "spinner-border text-light" role="status"></div>
 <p class="mt-2">Loading...</p>
 </div>
`
fetch(`https://codingprofileapi.onrender.com//hackerrank?username=${username1}`)
    .then(res => res.json())
    .then(data => {
        function stars(count) {
            let startsHtml = ""
            for (let i = 0; i < count; i++) {
                startsHtml += `<i class="fas fa-star text-warning me-2"></i>`
            }
            return startsHtml;
        }
        const badgesHTML = data.models.map(badge => {
            return `
        <div class="col-12 col-md-6">
          <p class="text-white mb-1 fw-bold">Badge Name: ${badge.badge_name}</p>
          <p class="text-white mb-1">Rank:${badge.rank}</p>
          <p class="text-white mb-1">Stars:&nbsp${stars(badge.stars)}</p>
          <p class="text-white">Problems Solved: ${badge.solved}/${badge.total}</p>
        </div>
      `;
        }).join('');
        body2.innerHTML = `
      <div class="row">
       <h5 class="text-white mt-2 fw-bolder">UserName : ${username1}</h5>
       <h5 class="text-white">Badges :</h5>
       ${badgesHTML}
      </div>
    `
    })
    .catch(err => {
        console.error("Fetch error:", err);
    });

let body3 = document.getElementById('gfg-section');

let username3 = '23951az5gl';
Promise.all([
    fetch(`https://gfg-stats.tashif.codes/${username3}/profile`).then(res => res.json()),
    fetch(`https://gfg-stats.tashif.codes/${username3}`).then(res => res.json())
])
    .then(([data, problemData]) => {
        console.log(data);
        body3.innerHTML = `
     <div class="col-12 col-md-8">
     <h5 class="text-white mt-4 fw-bolder">UserName : ${username3}</h5>
     <h5 class="text-white mt-4 fw-bolder">Institute : ${data.institute}</h5>
     <h5 class="text-white mt-4 fw-bolder">InstituteRank : ${data.instituteRank}</h5>
     <h5 class="text-white mt-4 fw-bolder">CurrentStreak : ${data.currentStreak} days</h5>
     </div>

     <div class="col-12 col-md-4 border border-light p-3 rounded d-flex flex-column justify-content-center align-items-center gc">
      <h5 class="mt-2 fw-bolder">Problems Solved: ${data.totalProblemsSolved}</h5>
      <h5 class="mt-2 fw-bolder">Basic: ${problemData.Basic}</h5>
      <h5 class="mt-2 fw-bolder">Easy: ${problemData.Easy}</h5>
      <h5 class="mt-2 fw-bolder">Medium: ${problemData.Medium}</h5>
      <h5 class="mt-2 fw-bolder">Hard: ${problemData.Hard}</h5>
    </div>
    `

    })
    .catch(err => {
        console.error("Fetch error:", err);
    });

document.querySelectorAll('.video-card video').forEach(video => {
    video.parentElement.addEventListener('mouseenter', () => {
        video.play();
        video.currentTime = 31;
    });
    video.parentElement.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
        video.load();
    })
});


const Contactform = document.getElementById('msgform');
const msg = document.getElementById('tsparticles');
const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_p6nnomf', 'template_bk07r84', '#msgform', 'oC7SPA_xYN1gwwP4y')
        .then(() => {
            console.log("Message sent sucessfully");
            msg.insertAdjacentHTML('beforeend', `
  <div class="position-fixed top-0 start-50 translate-middle-x mt-4 z-3" style="z-index: 9999; width: 80%;">
    <div class="alert alert-success fw-bold alert-dismissible fade show" role="alert">
      <i class="fa fa-check-circle text-white fs-5" aria-hidden="true"> </i>&nbsp; Message has been sent successfully!
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  </div>
`);
            Contactform.reset();
        })
        .catch(() => {
            console.error("Failed to send message");
            msg.insertAdjacentHTML('beforeend', `
                <div class="position-fixed top-0 start-50 translate-middle-x mt-4 z-3 " style="z-index: 9999; width: 80%;">
                  <div class="alert alert-danger fw-bold alert-dismissible fade show" role="alert">
                    <i class="fa fa-exclamation-triangle fs-5" aria-hidden="true"></i>&nbsp; Failed to send message!!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                </div>
            `);
        });
}

Contactform.addEventListener('submit', sendEmail);

