document.addEventListener('DOMContentLoaded', function() {
  // Market data
  const stateData = [
    {"State": "Andhra Pradesh", "Population_2025": 53.5, "Youth_Percentage": 25.1, "Internet_Penetration": 58, "Smartphone_Penetration": 52, "Digital_Literacy": 28, "Rural_Population": 67, "Per_Capita_Income": 242, "Health_Infrastructure_Score": 6.5, "Climate_Vulnerability": 8.5, "ABDM_Adoption_Score": 6.5, "Health_App_Usage": 45, "Literacy_Rate": 72.6, "Govt_Health_Spending": 2850, "Market_Attractiveness_Score": 3.4, "Priority_Category": "Long-term Focus"},
    {"State": "Arunachal Pradesh", "Population_2025": 1.6, "Youth_Percentage": 29.3, "Internet_Penetration": 65, "Smartphone_Penetration": 58, "Digital_Literacy": 35, "Rural_Population": 77, "Per_Capita_Income": 200, "Health_Infrastructure_Score": 5.8, "Climate_Vulnerability": 6.5, "ABDM_Adoption_Score": 4.5, "Health_App_Usage": 35, "Literacy_Rate": 78.5, "Govt_Health_Spending": 3200, "Market_Attractiveness_Score": 3.26, "Priority_Category": "Long-term Focus"},
    {"State": "Assam", "Population_2025": 36.4, "Youth_Percentage": 27.8, "Internet_Penetration": 60, "Smartphone_Penetration": 54, "Digital_Literacy": 25, "Rural_Population": 86, "Per_Capita_Income": 136, "Health_Infrastructure_Score": 6.2, "Climate_Vulnerability": 9.0, "ABDM_Adoption_Score": 5.5, "Health_App_Usage": 38, "Literacy_Rate": 79.2, "Govt_Health_Spending": 2650, "Market_Attractiveness_Score": 2.99, "Priority_Category": "Long-term Focus"},
    {"State": "Bihar", "Population_2025": 130.7, "Youth_Percentage": 27.9, "Internet_Penetration": 43, "Smartphone_Penetration": 38, "Digital_Literacy": 18, "Rural_Population": 89, "Per_Capita_Income": 60, "Health_Infrastructure_Score": 4.8, "Climate_Vulnerability": 8.0, "ABDM_Adoption_Score": 4.0, "Health_App_Usage": 25, "Literacy_Rate": 74.3, "Govt_Health_Spending": 1800, "Market_Attractiveness_Score": 2.63, "Priority_Category": "Long-term Focus"},
    {"State": "Chhattisgarh", "Population_2025": 30.9, "Youth_Percentage": 26.9, "Internet_Penetration": 55, "Smartphone_Penetration": 48, "Digital_Literacy": 26, "Rural_Population": 77, "Per_Capita_Income": 147, "Health_Infrastructure_Score": 6.0, "Climate_Vulnerability": 7.0, "ABDM_Adoption_Score": 5.0, "Health_App_Usage": 32, "Literacy_Rate": 78.8, "Govt_Health_Spending": 2400, "Market_Attractiveness_Score": 3.0, "Priority_Category": "Long-term Focus"},
    {"State": "Delhi", "Population_2025": 35.5, "Youth_Percentage": 28.5, "Internet_Penetration": 75, "Smartphone_Penetration": 68, "Digital_Literacy": 62, "Rural_Population": 3, "Per_Capita_Income": 462, "Health_Infrastructure_Score": 8.2, "Climate_Vulnerability": 6.0, "ABDM_Adoption_Score": 8.5, "Health_App_Usage": 68, "Literacy_Rate": 89.2, "Govt_Health_Spending": 6500, "Market_Attractiveness_Score": 7.25, "Priority_Category": "High Priority"},
    {"State": "Goa", "Population_2025": 1.6, "Youth_Percentage": 26.8, "Internet_Penetration": 71, "Smartphone_Penetration": 65, "Digital_Literacy": 58, "Rural_Population": 38, "Per_Capita_Income": 493, "Health_Infrastructure_Score": 7.5, "Climate_Vulnerability": 6.0, "ABDM_Adoption_Score": 7.0, "Health_App_Usage": 58, "Literacy_Rate": 93.6, "Govt_Health_Spending": 4500, "Market_Attractiveness_Score": 4.65, "Priority_Category": "Low Priority"},
    {"State": "Gujarat", "Population_2025": 73.2, "Youth_Percentage": 27.8, "Internet_Penetration": 65, "Smartphone_Penetration": 58, "Digital_Literacy": 42, "Rural_Population": 57, "Per_Capita_Income": 272, "Health_Infrastructure_Score": 7.2, "Climate_Vulnerability": 7.5, "ABDM_Adoption_Score": 6.8, "Health_App_Usage": 52, "Literacy_Rate": 82.4, "Govt_Health_Spending": 3800, "Market_Attractiveness_Score": 4.07, "Priority_Category": "Long-term Focus"},
    {"State": "Haryana", "Population_2025": 30.9, "Youth_Percentage": 28.1, "Internet_Penetration": 68, "Smartphone_Penetration": 62, "Digital_Literacy": 45, "Rural_Population": 65, "Per_Capita_Income": 326, "Health_Infrastructure_Score": 6.8, "Climate_Vulnerability": 7.0, "ABDM_Adoption_Score": 6.5, "Health_App_Usage": 55, "Literacy_Rate": 85.6, "Govt_Health_Spending": 3500, "Market_Attractiveness_Score": 3.98, "Priority_Category": "Long-term Focus"},
    {"State": "Himachal Pradesh", "Population_2025": 7.5, "Youth_Percentage": 29.1, "Internet_Penetration": 65, "Smartphone_Penetration": 58, "Digital_Literacy": 38, "Rural_Population": 90, "Per_Capita_Income": 235, "Health_Infrastructure_Score": 7.0, "Climate_Vulnerability": 6.5, "ABDM_Adoption_Score": 6.0, "Health_App_Usage": 42, "Literacy_Rate": 86.2, "Govt_Health_Spending": 3600, "Market_Attractiveness_Score": 3.48, "Priority_Category": "Long-term Focus"},
    {"State": "Jharkhand", "Population_2025": 40.5, "Youth_Percentage": 29.3, "Internet_Penetration": 50, "Smartphone_Penetration": 44, "Digital_Literacy": 22, "Rural_Population": 76, "Per_Capita_Income": 105, "Health_Infrastructure_Score": 5.5, "Climate_Vulnerability": 7.5, "ABDM_Adoption_Score": 4.8, "Health_App_Usage": 28, "Literacy_Rate": 76.8, "Govt_Health_Spending": 2200, "Market_Attractiveness_Score": 2.91, "Priority_Category": "Long-term Focus"},
    {"State": "Karnataka", "Population_2025": 68.1, "Youth_Percentage": 27.8, "Internet_Penetration": 65, "Smartphone_Penetration": 58, "Digital_Literacy": 48, "Rural_Population": 62, "Per_Capita_Income": 333, "Health_Infrastructure_Score": 7.8, "Climate_Vulnerability": 8.0, "ABDM_Adoption_Score": 7.5, "Health_App_Usage": 62, "Literacy_Rate": 84.1, "Govt_Health_Spending": 4200, "Market_Attractiveness_Score": 4.24, "Priority_Category": "Long-term Focus"},
    {"State": "Kerala", "Population_2025": 36.1, "Youth_Percentage": 26.8, "Internet_Penetration": 72, "Smartphone_Penetration": 66, "Digital_Literacy": 72, "Rural_Population": 52, "Per_Capita_Income": 281, "Health_Infrastructure_Score": 8.5, "Climate_Vulnerability": 5.5, "ABDM_Adoption_Score": 7.8, "Health_App_Usage": 68, "Literacy_Rate": 95.3, "Govt_Health_Spending": 4800, "Market_Attractiveness_Score": 4.6, "Priority_Category": "Low Priority"},
    {"State": "Madhya Pradesh", "Population_2025": 88.6, "Youth_Percentage": 26.9, "Internet_Penetration": 52, "Smartphone_Penetration": 46, "Digital_Literacy": 24, "Rural_Population": 72, "Per_Capita_Income": 143, "Health_Infrastructure_Score": 5.2, "Climate_Vulnerability": 7.5, "ABDM_Adoption_Score": 5.2, "Health_App_Usage": 28, "Literacy_Rate": 75.2, "Govt_Health_Spending": 2100, "Market_Attractiveness_Score": 3.08, "Priority_Category": "Long-term Focus"},
    {"State": "Maharashtra", "Population_2025": 128.3, "Youth_Percentage": 26.9, "Internet_Penetration": 70, "Smartphone_Penetration": 64, "Digital_Literacy": 52, "Rural_Population": 55, "Per_Capita_Income": 278, "Health_Infrastructure_Score": 7.6, "Climate_Vulnerability": 8.5, "ABDM_Adoption_Score": 7.2, "Health_App_Usage": 58, "Literacy_Rate": 86.5, "Govt_Health_Spending": 3900, "Market_Attractiveness_Score": 4.39, "Priority_Category": "Long-term Focus"},
    {"State": "Manipur", "Population_2025": 3.3, "Youth_Percentage": 29.3, "Internet_Penetration": 65, "Smartphone_Penetration": 58, "Digital_Literacy": 35, "Rural_Population": 70, "Per_Capita_Income": 112, "Health_Infrastructure_Score": 6.5, "Climate_Vulnerability": 7.0, "ABDM_Adoption_Score": 5.5, "Health_App_Usage": 38, "Literacy_Rate": 85.4, "Govt_Health_Spending": 2800, "Market_Attractiveness_Score": 3.35, "Priority_Category": "Long-term Focus"},
    {"State": "Meghalaya", "Population_2025": 3.4, "Youth_Percentage": 29.1, "Internet_Penetration": 60, "Smartphone_Penetration": 54, "Digital_Literacy": 32, "Rural_Population": 80, "Per_Capita_Income": 137, "Health_Infrastructure_Score": 6.2, "Climate_Vulnerability": 7.5, "ABDM_Adoption_Score": 5.0, "Health_App_Usage": 35, "Literacy_Rate": 82.1, "Govt_Health_Spending": 2600, "Market_Attractiveness_Score": 3.09, "Priority_Category": "Long-term Focus"},
    {"State": "Mizoram", "Population_2025": 1.3, "Youth_Percentage": 32.6, "Internet_Penetration": 68, "Smartphone_Penetration": 62, "Digital_Literacy": 45, "Rural_Population": 48, "Per_Capita_Income": 215, "Health_Infrastructure_Score": 8.0, "Climate_Vulnerability": 6.0, "ABDM_Adoption_Score": 6.5, "Health_App_Usage": 48, "Literacy_Rate": 98.2, "Govt_Health_Spending": 4000, "Market_Attractiveness_Score": 4.29, "Priority_Category": "Long-term Focus"},
    {"State": "Nagaland", "Population_2025": 2.3, "Youth_Percentage": 29.1, "Internet_Penetration": 65, "Smartphone_Penetration": 58, "Digital_Literacy": 35, "Rural_Population": 71, "Per_Capita_Income": 146, "Health_Infrastructure_Score": 6.0, "Climate_Vulnerability": 7.0, "ABDM_Adoption_Score": 5.2, "Health_App_Usage": 35, "Literacy_Rate": 88.4, "Govt_Health_Spending": 2900, "Market_Attractiveness_Score": 3.29, "Priority_Category": "Long-term Focus"},
    {"State": "Odisha", "Population_2025": 46.3, "Youth_Percentage": 26.9, "Internet_Penetration": 58, "Smartphone_Penetration": 52, "Digital_Literacy": 28, "Rural_Population": 83, "Per_Capita_Income": 163, "Health_Infrastructure_Score": 5.8, "Climate_Vulnerability": 8.0, "ABDM_Adoption_Score": 5.8, "Health_App_Usage": 35, "Literacy_Rate": 78.9, "Govt_Health_Spending": 2500, "Market_Attractiveness_Score": 3.08, "Priority_Category": "Long-term Focus"},
    {"State": "Punjab", "Population_2025": 31.1, "Youth_Percentage": 28.1, "Internet_Penetration": 65, "Smartphone_Penetration": 58, "Digital_Literacy": 42, "Rural_Population": 63, "Per_Capita_Income": 197, "Health_Infrastructure_Score": 7.8, "Climate_Vulnerability": 7.0, "ABDM_Adoption_Score": 6.8, "Health_App_Usage": 52, "Literacy_Rate": 84.7, "Govt_Health_Spending": 3800, "Market_Attractiveness_Score": 3.87, "Priority_Category": "Long-term Focus"},
    {"State": "Rajasthan", "Population_2025": 85.4, "Youth_Percentage": 27.8, "Internet_Penetration": 62, "Smartphone_Penetration": 55, "Digital_Literacy": 35, "Rural_Population": 75, "Per_Capita_Income": 185, "Health_Infrastructure_Score": 6.8, "Climate_Vulnerability": 8.5, "ABDM_Adoption_Score": 6.2, "Health_App_Usage": 42, "Literacy_Rate": 80.1, "Govt_Health_Spending": 2900, "Market_Attractiveness_Score": 3.45, "Priority_Category": "Long-term Focus"},
    {"State": "Sikkim", "Population_2025": 0.7, "Youth_Percentage": 29.5, "Internet_Penetration": 72, "Smartphone_Penetration": 65, "Digital_Literacy": 55, "Rural_Population": 25, "Per_Capita_Income": 628, "Health_Infrastructure_Score": 8.5, "Climate_Vulnerability": 5.5, "ABDM_Adoption_Score": 7.5, "Health_App_Usage": 65, "Literacy_Rate": 92.8, "Govt_Health_Spending": 5200, "Market_Attractiveness_Score": 5.12, "Priority_Category": "Medium Priority"},
    {"State": "Tamil Nadu", "Population_2025": 78.9, "Youth_Percentage": 27.2, "Internet_Penetration": 68, "Smartphone_Penetration": 62, "Digital_Literacy": 55, "Rural_Population": 52, "Per_Capita_Income": 312, "Health_Infrastructure_Score": 7.9, "Climate_Vulnerability": 8.0, "ABDM_Adoption_Score": 7.8, "Health_App_Usage": 62, "Literacy_Rate": 85.9, "Govt_Health_Spending": 4100, "Market_Attractiveness_Score": 4.68, "Priority_Category": "Medium Priority"},
    {"State": "Telangana", "Population_2025": 42.8, "Youth_Percentage": 28.8, "Internet_Penetration": 66, "Smartphone_Penetration": 60, "Digital_Literacy": 48, "Rural_Population": 61, "Per_Capita_Income": 348, "Health_Infrastructure_Score": 7.5, "Climate_Vulnerability": 7.5, "ABDM_Adoption_Score": 7.0, "Health_App_Usage": 58, "Literacy_Rate": 86.8, "Govt_Health_Spending": 3800, "Market_Attractiveness_Score": 4.22, "Priority_Category": "Long-term Focus"},
    {"State": "Tripura", "Population_2025": 4.2, "Youth_Percentage": 29.1, "Internet_Penetration": 58, "Smartphone_Penetration": 52, "Digital_Literacy": 32, "Rural_Population": 73, "Per_Capita_Income": 102, "Health_Infrastructure_Score": 6.2, "Climate_Vulnerability": 6.5, "ABDM_Adoption_Score": 5.2, "Health_App_Usage": 35, "Literacy_Rate": 94.2, "Govt_Health_Spending": 2400, "Market_Attractiveness_Score": 3.15, "Priority_Category": "Long-term Focus"},
    {"State": "Uttar Pradesh", "Population_2025": 241.5, "Youth_Percentage": 27.9, "Internet_Penetration": 48, "Smartphone_Penetration": 42, "Digital_Literacy": 22, "Rural_Population": 78, "Per_Capita_Income": 78, "Health_Infrastructure_Score": 5.5, "Climate_Vulnerability": 8.0, "ABDM_Adoption_Score": 4.5, "Health_App_Usage": 28, "Literacy_Rate": 77.5, "Govt_Health_Spending": 2200, "Market_Attractiveness_Score": 2.85, "Priority_Category": "Long-term Focus"},
    {"State": "Uttarakhand", "Population_2025": 11.8, "Youth_Percentage": 28.9, "Internet_Penetration": 65, "Smartphone_Penetration": 58, "Digital_Literacy": 42, "Rural_Population": 69, "Per_Capita_Income": 245, "Health_Infrastructure_Score": 7.2, "Climate_Vulnerability": 7.0, "ABDM_Adoption_Score": 6.5, "Health_App_Usage": 48, "Literacy_Rate": 87.4, "Govt_Health_Spending": 3200, "Market_Attractiveness_Score": 3.72, "Priority_Category": "Long-term Focus"},
    {"State": "West Bengal", "Population_2025": 102.6, "Youth_Percentage": 27.1, "Internet_Penetration": 58, "Smartphone_Penetration": 52, "Digital_Literacy": 35, "Rural_Population": 68, "Per_Capita_Income": 118, "Health_Infrastructure_Score": 6.5, "Climate_Vulnerability": 8.5, "ABDM_Adoption_Score": 5.8, "Health_App_Usage": 42, "Literacy_Rate": 82.9, "Govt_Health_Spending": 2800, "Market_Attractiveness_Score": 3.28, "Priority_Category": "Long-term Focus"},
    {"State": "Chandigarh", "Population_2025": 1.2, "Youth_Percentage": 28.2, "Internet_Penetration": 73, "Smartphone_Penetration": 66, "Digital_Literacy": 65, "Rural_Population": 2, "Per_Capita_Income": 385, "Health_Infrastructure_Score": 8.8, "Climate_Vulnerability": 5.8, "ABDM_Adoption_Score": 8.2, "Health_App_Usage": 72, "Literacy_Rate": 91.2, "Govt_Health_Spending": 5800, "Market_Attractiveness_Score": 6.42, "Priority_Category": "Medium Priority"}
  ];

  // Chart colors
  const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

  // Tab switching functionality
  function initializeTabs() {
    const tabButtons = document.querySelectorAll('.nav__link');
    const tabPanels = document.querySelectorAll('.tab');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.dataset.target;
        
        // Remove active class from all buttons and panels
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // Add active class to clicked button and corresponding panel
        button.classList.add('active');
        document.getElementById(targetId).classList.add('active');
      });
    });
  }

  // Calculate summary metrics
  function calculateSummaryMetrics() {
    const totalPopulation = stateData.reduce((sum, state) => sum + state.Population_2025, 0);
    const avgInternet = stateData.reduce((sum, state) => sum + state.Internet_Penetration, 0) / stateData.length;
    const avgSmartphone = stateData.reduce((sum, state) => sum + state.Smartphone_Penetration, 0) / stateData.length;
    const topScore = Math.max(...stateData.map(state => state.Market_Attractiveness_Score));

    document.getElementById('totalPopulationMetric').textContent = `${totalPopulation.toFixed(1)}M`;
    document.getElementById('avgInternetMetric').textContent = `${avgInternet.toFixed(1)}%`;
    document.getElementById('avgSmartphoneMetric').textContent = `${avgSmartphone.toFixed(1)}%`;
    document.getElementById('topScoreMetric').textContent = topScore.toFixed(2);
  }

  // Create priority distribution pie chart
  function createPriorityChart() {
    const priorityCounts = stateData.reduce((acc, state) => {
      acc[state.Priority_Category] = (acc[state.Priority_Category] || 0) + 1;
      return acc;
    }, {});

    const ctx = document.getElementById('priorityPie').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: Object.keys(priorityCounts),
        datasets: [{
          data: Object.values(priorityCounts),
          backgroundColor: chartColors.slice(0, Object.keys(priorityCounts).length)
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.parsed;
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = ((value / total) * 100).toFixed(1);
                return `${label}: ${value} states (${percentage}%)`;
              }
            }
          }
        }
      }
    });
  }

  // Create market attractiveness chart
  function createMarketChart() {
    const sortedStates = [...stateData].sort((a, b) => b.Market_Attractiveness_Score - a.Market_Attractiveness_Score).slice(0, 10);
    
    const ctx = document.getElementById('marketChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: sortedStates.map(state => state.State),
        datasets: [{
          label: 'Market Attractiveness Score',
          data: sortedStates.map(state => state.Market_Attractiveness_Score),
          backgroundColor: chartColors[0]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 8
          },
          x: {
            ticks: {
              maxRotation: 45
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

  // Populate top states table
  function populateTopStatesTable() {
    const sortedStates = [...stateData].sort((a, b) => b.Market_Attractiveness_Score - a.Market_Attractiveness_Score).slice(0, 10);
    const tbody = document.querySelector('#topStatesTable tbody');
    
    tbody.innerHTML = sortedStates.map((state, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${state.State}</td>
        <td>${state.Market_Attractiveness_Score.toFixed(2)}</td>
        <td>${state.Population_2025}</td>
        <td>${state.Internet_Penetration}%</td>
        <td>${state.Smartphone_Penetration}%</td>
        <td><span class="status status--${getPriorityClass(state.Priority_Category)}">${state.Priority_Category}</span></td>
      </tr>
    `).join('');
  }

  function getPriorityClass(priority) {
    switch(priority) {
      case 'High Priority': return 'error';
      case 'Medium Priority': return 'warning';
      case 'Low Priority': return 'success';
      default: return 'info';
    }
  }

  // State Analysis functionality
  function initializeStateAnalysis() {
    const stateSelect = document.getElementById('stateSelect');
    
    // Populate state dropdown
    stateSelect.innerHTML = '<option value="">Select a state...</option>' +
      stateData.map(state => `<option value="${state.State}">${state.State}</option>`).join('');
    
    stateSelect.addEventListener('change', function() {
      const selectedState = stateData.find(state => state.State === this.value);
      if (selectedState) {
        displayStateProfile(selectedState);
        createStateRadarChart(selectedState);
      }
    });
  }

  function displayStateProfile(state) {
    const profileBody = document.getElementById('stateProfileBody');
    profileBody.innerHTML = `
      <h3>${state.State} - Market Profile</h3>
      <div class="grid-cards mt-8">
        <div>
          <h4>Demographics</h4>
          <p><strong>Population (2025):</strong> ${state.Population_2025}M</p>
          <p><strong>Youth %:</strong> ${state.Youth_Percentage}%</p>
          <p><strong>Rural Population:</strong> ${state.Rural_Population}%</p>
          <p><strong>Literacy Rate:</strong> ${state.Literacy_Rate}%</p>
        </div>
        <div>
          <h4>Digital Readiness</h4>
          <p><strong>Internet Penetration:</strong> ${state.Internet_Penetration}%</p>
          <p><strong>Smartphone Penetration:</strong> ${state.Smartphone_Penetration}%</p>
          <p><strong>Digital Literacy:</strong> ${state.Digital_Literacy}%</p>
          <p><strong>Health App Usage:</strong> ${state.Health_App_Usage}%</p>
        </div>
        <div>
          <h4>Economic Indicators</h4>
          <p><strong>Per Capita Income:</strong> ₹${state.Per_Capita_Income}k</p>
          <p><strong>Govt Health Spending:</strong> ₹${state.Govt_Health_Spending}</p>
        </div>
        <div>
          <h4>Health & Risk</h4>
          <p><strong>Health Infrastructure:</strong> ${state.Health_Infrastructure_Score}/10</p>
          <p><strong>ABDM Adoption:</strong> ${state.ABDM_Adoption_Score}/10</p>
          <p><strong>Climate Vulnerability:</strong> ${state.Climate_Vulnerability}/10</p>
          <p><strong>Market Score:</strong> <span class="status status--${getPriorityClass(state.Priority_Category)}">${state.Market_Attractiveness_Score}</span></p>
        </div>
      </div>
    `;
  }

  function createStateRadarChart(state) {
    const ctx = document.getElementById('stateRadar').getContext('2d');
    
    // Clear existing chart
    if (window.stateRadarChart) {
      window.stateRadarChart.destroy();
    }
    
    const data = {
      labels: [
        'Internet Penetration',
        'Smartphone Penetration', 
        'Digital Literacy',
        'Health Infrastructure',
        'ABDM Adoption',
        'Health App Usage'
      ],
      datasets: [{
        label: state.State,
        data: [
          state.Internet_Penetration,
          state.Smartphone_Penetration,
          state.Digital_Literacy,
          state.Health_Infrastructure_Score * 10,
          state.ABDM_Adoption_Score * 10,
          state.Health_App_Usage
        ],
        backgroundColor: chartColors[0] + '40',
        borderColor: chartColors[0],
        borderWidth: 2
      }]
    };
    
    window.stateRadarChart = new Chart(ctx, {
      type: 'radar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  }

  // Comparison Tool functionality
  function initializeComparisonTool() {
    const comparisonSelect = document.getElementById('comparisonSelect');
    
    // Populate comparison dropdown
    comparisonSelect.innerHTML = stateData.map(state => 
      `<option value="${state.State}">${state.State}</option>`
    ).join('');
    
    comparisonSelect.addEventListener('change', function() {
      const selectedStates = Array.from(this.selectedOptions).map(option => option.value);
      if (selectedStates.length > 0 && selectedStates.length <= 4) {
        updateComparisonTable(selectedStates);
        createComparisonChart(selectedStates);
      }
    });

    // Export functionality
    document.getElementById('exportBtn').addEventListener('click', exportComparison);
  }

  function updateComparisonTable(selectedStateNames) {
    const selectedStates = stateData.filter(state => selectedStateNames.includes(state.State));
    const table = document.getElementById('comparisonTable');
    const thead = table.querySelector('thead tr');
    const tbody = table.querySelector('tbody');
    
    // Update header
    thead.innerHTML = '<th>Metric</th>' + selectedStates.map(state => `<th>${state.State}</th>`).join('');
    
    // Define metrics to compare
    const metrics = [
      { key: 'Population_2025', label: 'Population (M)', format: (val) => val },
      { key: 'Internet_Penetration', label: 'Internet Penetration (%)', format: (val) => val + '%' },
      { key: 'Smartphone_Penetration', label: 'Smartphone Penetration (%)', format: (val) => val + '%' },
      { key: 'Digital_Literacy', label: 'Digital Literacy (%)', format: (val) => val + '%' },
      { key: 'Health_Infrastructure_Score', label: 'Health Infrastructure', format: (val) => val + '/10' },
      { key: 'Market_Attractiveness_Score', label: 'Market Score', format: (val) => val.toFixed(2) },
      { key: 'Per_Capita_Income', label: 'Per Capita Income (₹k)', format: (val) => '₹' + val + 'k' },
      { key: 'ABDM_Adoption_Score', label: 'ABDM Adoption', format: (val) => val + '/10' }
    ];
    
    // Update body
    tbody.innerHTML = metrics.map(metric => `
      <tr>
        <td><strong>${metric.label}</strong></td>
        ${selectedStates.map(state => `<td>${metric.format(state[metric.key])}</td>`).join('')}
      </tr>
    `).join('');
  }

  function createComparisonChart(selectedStateNames) {
    const selectedStates = stateData.filter(state => selectedStateNames.includes(state.State));
    const ctx = document.getElementById('comparisonBar').getContext('2d');
    
    // Clear existing chart
    if (window.comparisonChart) {
      window.comparisonChart.destroy();
    }
    
    window.comparisonChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: selectedStates.map(state => state.State),
        datasets: [{
          label: 'Market Attractiveness Score',
          data: selectedStates.map(state => state.Market_Attractiveness_Score),
          backgroundColor: chartColors.slice(0, selectedStates.length)
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 8
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

  function exportComparison() {
    const comparisonSelect = document.getElementById('comparisonSelect');
    const selectedStateNames = Array.from(comparisonSelect.selectedOptions).map(option => option.value);
    
    if (selectedStateNames.length === 0) {
      alert('Please select states to compare before exporting');
      return;
    }
    
    const selectedStates = stateData.filter(state => selectedStateNames.includes(state.State));
    
    // Create CSV content
    const headers = ['Metric', ...selectedStates.map(state => state.State)];
    const metrics = [
      { key: 'Population_2025', label: 'Population (M)' },
      { key: 'Internet_Penetration', label: 'Internet Penetration (%)' },
      { key: 'Smartphone_Penetration', label: 'Smartphone Penetration (%)' },
      { key: 'Digital_Literacy', label: 'Digital Literacy (%)' },
      { key: 'Health_Infrastructure_Score', label: 'Health Infrastructure' },
      { key: 'Market_Attractiveness_Score', label: 'Market Score' }
    ];
    
    const csvContent = [
      headers.join(','),
      ...metrics.map(metric => [
        metric.label,
        ...selectedStates.map(state => state[metric.key])
      ].join(','))
    ].join('\n');
    
    // Download CSV
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'halla_health_state_comparison.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  // Initialize everything
  function init() {
    initializeTabs();
    calculateSummaryMetrics();
    createPriorityChart();
    createMarketChart();
    populateTopStatesTable();
    initializeStateAnalysis();
    initializeComparisonTool();
  }

  // Start the app
  init();
});