# index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>95%+ Half-Yearly Study Tracker</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

<header>
    <div class="header-content">
        <div>
            <h1>🎯 95%+ Study Tracker</h1>
            <p>Half-Yearly Examination • 21 September 2026</p>
        </div>

        <button id="themeBtn">🌙</button>
    </div>
</header>


<main>

    <!-- COUNTDOWN -->

    <section class="hero">

        <h2>🚀 Mission 95%+</h2>

        <div class="countdown">

            <div>
                <span id="days">0</span>
                <small>Days</small>
            </div>

            <div>
                <span id="hours">0</span>
                <small>Hours</small>
            </div>

            <div>
                <span id="minutes">0</span>
                <small>Minutes</small>
            </div>

            <div>
                <span id="seconds">0</span>
                <small>Seconds</small>
            </div>

        </div>

    </section>


    <!-- DASHBOARD -->

    <section class="dashboard">

        <div class="card">
            <h3>🎯 Target</h3>
            <strong>95%+</strong>
            <p>Half-Yearly</p>
        </div>

        <div class="card">
            <h3>📊 Today's Progress</h3>
            <strong id="progressText">0%</strong>

            <div class="progress-bar">
                <div id="progressBar"></div>
            </div>
        </div>

        <div class="card">
            <h3>🔥 Streak</h3>
            <strong id="streak">0</strong>
            <p>Days completed</p>
        </div>

        <div class="card">
            <h3>⏱️ Study Time</h3>
            <strong>
                <span id="studyHours">0</span> hrs
            </strong>

            <input
                type="number"
                id="studyInput"
                min="0"
                max="24"
                placeholder="Today's hours"
            >

            <button onclick="saveStudyHours()">Save</button>
        </div>

    </section>


    <!-- DATE -->

    <section class="date-section">

        <button onclick="previousDay()">← Previous</button>

        <div>
            <h2 id="currentDate"></h2>
            <p id="dayNumber"></p>
        </div>

        <button onclick="nextDay()">Next →</button>

    </section>


    <!-- TASKS -->

    <section class="tasks">

        <div class="section-title">
            <h2>📚 Today's Tasks</h2>

            <button onclick="resetTasks()">
                Reset Day
            </button>
        </div>

        <div id="taskContainer"></div>

    </section>


    <!-- SUBJECT PROGRESS -->

    <section class="subjects">

        <h2>📖 Subject Progress</h2>

        <div class="subject-grid">

            <div class="subject">
                <h3>🔬 Science</h3>

                <div class="progress-bar">
                    <div id="scienceBar"></div>
                </div>

                <p id="scienceText">0%</p>
            </div>


            <div class="subject">
                <h3>📐 Mathematics</h3>

                <div class="progress-bar">
                    <div id="mathBar"></div>
                </div>

                <p id="mathText">0%</p>
            </div>


            <div class="subject">
                <h3>🌍 Social Science</h3>

                <div class="progress-bar">
                    <div id="sstBar"></div>
                </div>

                <p id="sstText">0%</p>
            </div>


            <div class="subject">
                <h3>📘 English</h3>

                <div class="progress-bar">
                    <div id="englishBar"></div>
                </div>

                <p id="englishText">0%</p>
            </div>


            <div class="subject">
                <h3>🇮🇳 Hindi</h3>

                <div class="progress-bar">
                    <div id="hindiBar"></div>
                </div>

                <p id="hindiText">0%</p>
            </div>

        </div>

    </section>


    <!-- NOTES -->

    <section class="notes">

        <h2>📝 Today's Notes</h2>

        <textarea
            id="notes"
            placeholder="Write what you studied, difficult topics, mistakes, tomorrow's priorities..."
        ></textarea>

        <button onclick="saveNotes()">Save Notes</button>

    </section>


    <!-- MOTIVATION -->

    <section class="motivation">

        <h2>💪 Today's Mission</h2>

        <p id="quote"></p>

    </section>

</main>


<footer>

    <p>
        Made for <strong>Mission 95%+</strong> 🚀
    </p>

    <p>
        Half-Yearly Examination: 21 September 2026
    </p>

</footer>


<script src="script.js"></script>

</body>
</html>
