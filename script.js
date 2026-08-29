// ==========================================
// 95%+ HALF-YEARLY STUDY TRACKER
// ==========================================


// EXAMINATION DATE

const examDate = new Date("September 21, 2026 08:00:00");


// STUDY START DATE

const startDate = new Date("August 29, 2026");


// CURRENT SELECTED DAY

let selectedDate = new Date();

selectedDate.setHours(0, 0, 0, 0);


// ==========================================
// DAILY STUDY PLAN
// ==========================================

const studyPlan = {

    "2026-08-29": [
        ["Mathematics", "Revise important formulas"],
        ["Science", "Revise completed chapters"],
        ["SST", "Read History notes"],
        ["English", "Grammar practice"],
        ["Hindi", "Literature revision"],
        ["Revision", "Solve 20 mixed questions"]
    ],

    "2026-08-30": [
        ["Mathematics", "Practice NCERT exercises"],
        ["Science", "Physics numerical practice"],
        ["SST", "History important questions"],
        ["English", "Writing practice"],
        ["Hindi", "Grammar practice"],
        ["Revision", "Review today's mistakes"]
    ],

    "2026-08-31": [
        ["Mathematics", "Polynomials / Algebra practice"],
        ["Science", "Chemistry revision"],
        ["SST", "Geography revision"],
        ["English", "Literature questions"],
        ["Hindi", "Literature questions"],
        ["Test", "30-minute Mathematics test"]
    ],

    "2026-09-01": [
        ["Mathematics", "Quadratic-equation style problems"],
        ["Science", "Biology revision"],
        ["SST", "Civics revision"],
        ["English", "Grammar + vocabulary"],
        ["Hindi", "Writing section"],
        ["Revision", "Flash revision"]
    ],

    "2026-09-02": [
        ["Mathematics", "Geometry practice"],
        ["Science", "Physics concepts"],
        ["SST", "Economics revision"],
        ["English", "Reading comprehension"],
        ["Hindi", "Literature revision"],
        ["Test", "Science mini test"]
    ],

    "2026-09-03": [
        ["Mathematics", "NCERT examples"],
        ["Science", "Chemistry equations"],
        ["SST", "History questions"],
        ["English", "Writing practice"],
        ["Hindi", "Grammar"],
        ["Revision", "Previous mistakes"]
    ],

    "2026-09-04": [
        ["Mathematics", "Mixed chapter practice"],
        ["Science", "Biology diagrams"],
        ["SST", "Map work"],
        ["English", "Literature revision"],
        ["Hindi", "Literature revision"],
        ["Test", "Maths timed practice"]
    ],

    "2026-09-05": [
        ["Mathematics", "Difficult questions"],
        ["Science", "Difficult concepts"],
        ["SST", "Difficult chapters"],
        ["English", "Grammar test"],
        ["Hindi", "Grammar test"],
        ["Revision", "Weekly revision"]
    ],

    "2026-09-06": [
        ["Mathematics", "Weekly mock test"],
        ["Science", "Weekly mock test"],
        ["SST", "Weekly mock test"],
        ["English", "Weekly revision"],
        ["Hindi", "Weekly revision"],
        ["Analysis", "Analyse all mistakes"]
    ],

    "2026-09-07": [
        ["Mathematics", "Weak topics"],
        ["Science", "Weak topics"],
        ["SST", "Weak topics"],
        ["English", "Weak topics"],
        ["Hindi", "Weak topics"],
        ["Revision", "Error notebook"]
    ],

    "2026-09-08": [
        ["Mathematics", "Advanced practice"],
        ["Science", "Numerical practice"],
        ["SST", "Long answers"],
        ["English", "Writing section"],
        ["Hindi", "Writing section"],
        ["Revision", "Active recall"]
    ],

    "2026-09-09": [
        ["Mathematics", "NCERT + exemplar questions"],
        ["Science", "NCERT questions"],
        ["SST", "NCERT questions"],
        ["English", "Literature questions"],
        ["Hindi", "Literature questions"],
        ["Test", "Mixed subject test"]
    ],

    "2026-09-10": [
        ["Mathematics", "Formula revision"],
        ["Science", "Diagram revision"],
        ["SST", "Dates and facts"],
        ["English", "Grammar"],
        ["Hindi", "Grammar"],
        ["Revision", "Rapid revision"]
    ],

    "2026-09-11": [
        ["Mathematics", "Full chapter test"],
        ["Science", "Full chapter test"],
        ["SST", "Full chapter test"],
        ["English", "Writing test"],
        ["Hindi", "Writing test"],
        ["Analysis", "Correct mistakes"]
    ],

    "2026-09-12": [
        ["Mathematics", "Difficult problems"],
        ["Science", "Difficult problems"],
        ["SST", "Long-answer practice"],
        ["English", "Sample paper"],
        ["Hindi", "Sample paper"],
        ["Revision", "Error notebook"]
    ],

    "2026-09-13": [
        ["Mathematics", "Full mock test"],
        ["Science", "Full mock test"],
        ["SST", "Full mock test"],
        ["English", "Full mock test"],
        ["Hindi", "Full mock test"],
        ["Analysis", "Analyse performance"]
    ],

    "2026-09-14": [
        ["Mathematics", "Revise weak areas"],
        ["Science", "Revise weak areas"],
        ["SST", "Revise weak areas"],
        ["English", "Revise weak areas"],
        ["Hindi", "Revise weak areas"],
        ["Revision", "Error notebook"]
    ],

    "2026-09-15": [
        ["Mathematics", "Formula + theorem revision"],
        ["Science", "Definitions + diagrams"],
        ["SST", "Maps + important facts"],
        ["English", "Grammar"],
        ["Hindi", "Grammar"],
        ["Test", "Mixed MCQ test"]
    ],

    "2026-09-16": [
        ["Mathematics", "Previous-year questions"],
        ["Science", "Previous-year questions"],
        ["SST", "Previous-year questions"],
        ["English", "Previous-year questions"],
        ["Hindi", "Previous-year questions"],
        ["Analysis", "Mistake correction"]
    ],

    "2026-09-17": [
        ["Mathematics", "Final difficult questions"],
        ["Science", "Final difficult questions"],
        ["SST", "Final difficult questions"],
        ["English", "Final revision"],
        ["Hindi", "Final revision"],
        ["Revision", "Formula/fact sheet"]
    ],

    "2026-09-18": [
        ["Mathematics", "Full revision"],
        ["Science", "Full revision"],
        ["SST", "Full revision"],
        ["English", "Full revision"],
        ["Hindi", "Full revision"],
        ["Test", "Final mock test"]
    ],

    "2026-09-19": [
        ["Mathematics", "Important formulas"],
        ["Science", "Important concepts"],
        ["SST", "Important facts"],
        ["English", "Important formats"],
        ["Hindi", "Important formats"],
        ["Revision", "Mistake notebook"]
    ],

    "2026-09-20": [
        ["Revision", "Only weak topics"],
        ["Mathematics", "Formula revision"],
        ["Science", "Definitions + diagrams"],
        ["SST", "Maps + important facts"],
        ["English", "Formats"],
        ["Hindi", "Formats"],
        ["Preparation", "Sleep early"]
    ]

};


// ==========================================
// QUOTES
// ==========================================

const quotes = [
    "Consistency beats motivation. Keep going.",
    "95% is not achieved in one day. It is built every day.",
    "Don't study just to finish chapters. Study to master them.",
    "Your future marks are being created by today's habits.",
    "Small progress every day becomes a huge result.",
    "Revise. Practise. Analyse. Improve.",
    "One focused hour is better than three distracted hours.",
    "Don't fear difficult questions. Use them to become stronger."
];

document.getElementById("quote").innerText =
    quotes[Math.floor(Math.random() * quotes.length)];


// ==========================================
// DATE FUNCTIONS
// ==========================================

function formatDate(date) {

    const year = date.getFullYear();

    const month = String(date.getMonth() + 1).padStart(2, "0");

    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


function displayDate() {

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    document.getElementById("currentDate").innerText =
        selectedDate.toLocaleDateString("en-IN", options);


    const difference =
        Math.floor(
            (selectedDate - startDate) /
            (1000 * 60 * 60 * 24)
        );


    if (difference >= 0 && difference <= 22) {

        document.getElementById("dayNumber").innerText =
            `Day ${difference + 1} of 23`;

    } else {

        document.getElementById("dayNumber").innerText =
            "Exam preparation";

    }

    loadTasks();
    loadNotes();
}


function previousDay() {

    selectedDate.setDate(
        selectedDate.getDate() - 1
    );

    displayDate();
}


function nextDay() {

    selectedDate.setDate(
        selectedDate.getDate() + 1
    );

    displayDate();
}


// ==========================================
// TASK SYSTEM
// ==========================================

function loadTasks() {

    const container =
        document.getElementById("taskContainer");

    container.innerHTML = "";

    const dateKey = formatDate(selectedDate);

    let tasks = studyPlan[dateKey];


    if (!tasks) {

        tasks = [
            ["Revision", "Revise today's work"],
            ["Practice", "Solve practice questions"],
            ["Analysis", "Check your mistakes"],
            ["Reading", "Read NCERT"],
            ["Planning", "Plan tomorrow"],
            ["Health", "Sleep on time"]
        ];
    }


    tasks.forEach((task, index) => {

        const id =
            `task_${dateKey}_${index}`;

        const saved =
            localStorage.getItem(id) === "true";


        const div =
            document.createElement("div");

        div.className =
            saved ? "task completed" : "task";


        div.innerHTML = `
            <input
                type="checkbox"
                id="${id}"
                ${saved ? "checked" : ""}
            >

            <label for="${id}">
                <strong>${task[0]}</strong>
                — ${task[1]}
            </label>
        `;


        const checkbox =
            div.querySelector("input");


        checkbox.addEventListener("change", () => {

            localStorage.setItem(
                id,
                checkbox.checked
            );

            div.classList.toggle(
                "completed",
                checkbox.checked
            );

            updateProgress();
            updateStreak();

        });


        container.appendChild(div);

    });


    updateProgress();
}


// ==========================================
// PROGRESS
// ==========================================

function updateProgress() {

    const dateKey =
        formatDate(selectedDate);


    const tasks =
        document.querySelectorAll(
            "#taskContainer input"
        );


    if (tasks.length === 0) return;


    let completed = 0;


    tasks.forEach(task => {

        if (task.checked) {
            completed++;
        }

    });


    const percentage =
        Math.round(
            completed / tasks.length * 100
        );


    document.getElementById(
        "progressText"
    ).innerText = percentage + "%";


    document.getElementById(
        "progressBar"
    ).style.width = percentage + "%";


    updateSubjectProgress();

}


// ==========================================
// SUBJECT PROGRESS
// ==========================================

function updateSubjectProgress() {

    const subjects = {
        science: 0,
        math: 0,
        sst: 0,
        english: 0,
        hindi: 0
    };


    const totals = {
        science: 0,
        math: 0,
        sst: 0,
        english: 0,
        hindi: 0
    };


    const tasks =
        document.querySelectorAll(
            "#taskContainer .task"
        );


    tasks.forEach(task => {

        const text =
            task.innerText.toLowerCase();


        let subject = null;


        if (text.includes("science"))
            subject = "science";

        else if (text.includes("mathematics"))
            subject = "math";

        else if (text.includes("sst"))
            subject = "sst";

        else if (text.includes("english"))
            subject = "english";

        else if (text.includes("hindi"))
            subject = "hindi";


        if (subject) {

            totals[subject]++;

            if (
                task.querySelector("input").checked
            ) {
                subjects[subject]++;
            }

        }

    });


    Object.keys(subjects).forEach(subject => {

        let percentage = 0;

        if (totals[subject] > 0) {

            percentage =
                Math.round(
                    subjects[subject] /
                    totals[subject] *
                    100
                );

        }


        document.getElementById(
            subject + "Bar"
        ).style.width =
            percentage + "%";


        document.getElementById(
            subject + "Text"
        ).innerText =
            percentage + "%";

    });

}


// ==========================================
// RESET
// ==========================================

function resetTasks() {

    const dateKey =
        formatDate(selectedDate);


    const tasks =
        document.querySelectorAll(
            "#taskContainer input"
        );


    tasks.forEach((task, index) => {

        const id =
            `task_${dateKey}_${index}`;

        localStorage.removeItem(id);

        task.checked = false;

        task.parentElement.classList.remove(
            "completed"
        );

    });


    updateProgress();

}


// ==========================================
// STUDY HOURS
// ==========================================

function saveStudyHours() {

    const input =
        document.getElementById("studyInput");


    const hours =
        Number(input.value);


    if (hours < 0 || hours > 24) {

        alert("Enter study hours between 0 and 24.");

        return;

    }


    const dateKey =
        formatDate(selectedDate);


    localStorage.setItem(
        "studyHours_" + dateKey,
        hours
    );


    document.getElementById(
        "studyHours"
    ).innerText = hours;


    input.value = "";

}


// ==========================================
// LOAD STUDY HOURS
// ==========================================

function loadStudyHours() {

    const dateKey =
        formatDate(selectedDate);


    const hours =
        localStorage.getItem(
            "studyHours_" + dateKey
        ) || 0;


    document.getElementById(
        "studyHours"
    ).innerText = hours;

}


// ==========================================
// NOTES
// ==========================================

function saveNotes() {

    const dateKey =
        formatDate(selectedDate);


    const notes =
        document.getElementById(
            "notes"
        ).value;


    localStorage.setItem(
        "notes_" + dateKey,
        notes
    );


    alert("Notes saved successfully!");


}


function loadNotes() {

    const dateKey =
        formatDate(selectedDate);


    const notes =
        localStorage.getItem(
            "notes_" + dateKey
        ) || "";


    document.getElementById(
        "notes"
    ).value = notes;

}


// ==========================================
// STREAK
// ==========================================

function updateStreak() {

    let streak = 0;

    let date =
        new Date(startDate);


    while (date <= new Date("September 20, 2026")) {

        const dateKey =
            formatDate(date);


        const tasks =
            studyPlan[dateKey];


        if (!tasks) break;


        let completed = 0;


        tasks.forEach((task, index) => {

            const id =
                `task_${dateKey}_${index}`;


            if (
                localStorage.getItem(id)
                === "true"
            ) {
                completed++;
            }

        });


        if (
            completed === tasks.length
        ) {

            streak++;

        } else {

            break;

        }


        date.setDate(
            date.getDate() + 1
        );

    }


    document.getElementById(
        "streak"
    ).innerText = streak;

}


// ==========================================
// COUNTDOWN
// ==========================================

function updateCountdown() {

    const now = new Date();

    const difference =
        examDate - now;


    if (difference <= 0) {

        document.getElementById(
            "days"
        ).innerText = 0;

        document.getElementById(
            "hours"
        ).innerText = 0;

        document.getElementById(
            "minutes"
        ).innerText = 0;

        document.getElementById(
            "seconds"
        ).innerText = 0;

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference /
                1000) % 60
        );


    document.getElementById(
        "days"
    ).innerText = days;


    document.getElementById(
        "hours"
    ).innerText = hours;


    document.getElementById(
        "minutes"
    ).innerText = minutes;


    document.getElementById(
        "seconds"
    ).innerText = seconds;

}


setInterval(
    updateCountdown,
    1000
);


// ==========================================
// DARK MODE
// ==========================================

document.getElementById(
    "themeBtn"
).addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );


        const dark =
            document.body.classList.contains(
                "dark"
            );


        localStorage.setItem(
            "darkMode",
            dark
        );


        document.getElementById(
            "themeBtn"
        ).innerText =
            dark ? "☀️" : "🌙";

    }
);


function loadTheme() {

    const dark =
        localStorage.getItem(
            "darkMode"
        ) === "true";


    if (dark) {

        document.body.classList.add(
            "dark"
        );

        document.getElementById(
            "themeBtn"
        ).innerText = "☀️";

    }

}


// ==========================================
// INITIALIZE
// ==========================================

loadTheme();

displayDate();

loadStudyHours();

updateCountdown();

updateStreak();
