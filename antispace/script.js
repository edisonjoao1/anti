document.addEventListener('DOMContentLoaded', () => {
    const timer = document.querySelector('.timer');
    const startTimer = document.getElementById('startTimer');
    let time = 1500; // 25 minutes in seconds
    let timerInterval;

    function updateTimer() {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    startTimer.addEventListener('click', () => {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
            startTimer.textContent = 'BREAK';
        } else {
            timerInterval = setInterval(() => {
                time--;
                updateTimer();
                if (time === 0) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                    startTimer.textContent = 'BREAK';
                }
            }, 1000);
            startTimer.textContent = 'PAUSE';
        }
    });

    // Sample data for mail
    const mailItems = [
        { time: '08:00 AM', subject: 'Here we go again with another layoff. This w', from: 'Trending Bowl Posts' },
        { time: '07:53 AM', subject: 'Keep Going With More Jobs Like Senior Data', from: 'Jobot Alerts' },
        { time: '07:41 AM', subject: '[FREE WORKSHOP] How I create Notion tem', from: 'CreatorPascal' }
    ];

    const mailList = document.querySelector('.mail-list');
    mailItems.forEach(item => {
        const mailItem = document.createElement('div');
        mailItem.innerHTML = `<strong>${item.time}</strong> - ${item.subject} <br> From: ${item.from}`;
        mailList.appendChild(mailItem);
    });

    // Sample data for calendar events
    const eventItems = [
        { time: '8 AM', title: 'Learning Reminder' },
        { time: '4 PM', title: '📊 ☁️ Weekly Status Report' }
    ];

    const eventList = document.querySelector('.event-list');
    eventItems.forEach(item => {
        const eventItem = document.createElement('div');
        eventItem.innerHTML = `<strong>${item.time}</strong> - ${item.title}`;
        eventList.appendChild(eventItem);
    });

    // Sample data for notes
    const noteItems = [
        { date: '2.3.24', title: 'UNTITLED' },
        { date: '2.3.24', title: 'GENERAL THEORY OF RELATIVITY' }
    ];

    const noteList = document.querySelector('.note-list');
    noteItems.forEach(item => {
        const noteItem = document.createElement('div');
        noteItem.innerHTML = `<strong>${item.date}</strong> - ${item.title}`;
        noteList.appendChild(noteItem);
    });

    // Sample data for news
    const newsItems = [
        { title: 'Sonic Z-Treme project for the Sega Saturn game console', source: 'github.com' },
        { title: 'SnapDiagram – Instantly Convert Hand-Drawn Diagrams to Digital with AI', source: 'snapdiagram.com' }
    ];

    const newsList = document.querySelector('.news-list');
    newsItems.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.innerHTML = `${item.title} <br> <small>${item.source}</small>`;
        newsList.appendChild(newsItem);
    });
});