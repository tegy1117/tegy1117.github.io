// Calendar heatmap functionality (GitHub grass style)
(function() {
  const calendarContainer = document.getElementById('activity-calendar');
  if (!calendarContainer) return;
  
  // Generate calendar data for the last year
  function generateCalendarData() {
    const data = {};
    const today = new Date();
    const startDate = new Date(today);
    startDate.setMonth(today.getMonth() - 12);
    
    // Initialize all dates with 0 activity
    for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split('T')[0];
      data[dateStr] = 0;
    }
    
    return data;
  }
  
  // Calculate activity level (0-4) based on count
  function getActivityLevel(count) {
    if (count === 0) return 0;
    if (count <= 2) return 1;
    if (count <= 5) return 2;
    if (count <= 10) return 3;
    return 4;
  }
  
  // Render the calendar
  function renderCalendar(data) {
    const weeks = [];
    const dates = Object.keys(data).sort();
    
    // Group dates by week
    let currentWeek = [];
    dates.forEach((dateStr, index) => {
      const date = new Date(dateStr);
      const dayOfWeek = date.getDay();
      
      if (index === 0 && dayOfWeek !== 0) {
        // Pad the first week
        for (let i = 0; i < dayOfWeek; i++) {
          currentWeek.push(null);
        }
      }
      
      currentWeek.push({ date: dateStr, count: data[dateStr] });
      
      if (dayOfWeek === 6 || index === dates.length - 1) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
    });
    
    // Create HTML
    let html = '<div class="calendar-graph">';
    
    // Create rows (7 days of week)
    for (let day = 0; day < 7; day++) {
      html += '<div class="calendar-row">';
      weeks.forEach(week => {
        if (week[day]) {
          const level = getActivityLevel(week[day].count);
          html += `<div class="calendar-day level-${level}" data-date="${week[day].date}" data-count="${week[day].count}" title="${week[day].date}: ${week[day].count} activities"></div>`;
        } else {
          html += '<div style="width: 12px;"></div>';
        }
      });
      html += '</div>';
    }
    
    html += '</div>';
    
    // Add legend
    html += '<div class="calendar-legend">';
    html += '<span>Less</span>';
    html += '<div class="legend-items">';
    for (let i = 0; i <= 4; i++) {
      html += `<div class="legend-item level-${i}"></div>`;
    }
    html += '</div>';
    html += '<span>More</span>';
    html += '</div>';
    
    calendarContainer.innerHTML = html;
    
    // Add click handlers
    document.querySelectorAll('.calendar-day').forEach(day => {
      day.addEventListener('click', function() {
        const date = this.dataset.date;
        showActivitiesForDate(date);
      });
    });
  }
  
  // Show activities for a specific date
  function showActivitiesForDate(date) {
    const activityList = document.getElementById('activity-list');
    if (!activityList) return;
    
    // In a real implementation, this would fetch actual activities
    activityList.innerHTML = `
      <div class="card">
        <h3>${date}의 활동</h3>
        <p>이 날짜의 활동 내역이 여기에 표시됩니다.</p>
      </div>
    `;
  }
  
  // Render the activity calendar
  window.renderActivityCalendar = function() {
    const data = generateCalendarData();
    
    // In a real implementation, populate with actual activity data
    // For demo purposes, add some random activity
    const dates = Object.keys(data);
    dates.forEach(date => {
      if (Math.random() > 0.7) {
        data[date] = Math.floor(Math.random() * 15);
      }
    });
    
    renderCalendar(data);
  };
})();
