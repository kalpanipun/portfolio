// Demo data
const workData = [
  {company:'John Keells Holdings', role:'Data Scientist', period:'2024 - 2025', summary:'Led the design and implementation of end-to-end analytical projects using Azure Databricks focused on solving complex business problems through predictive modelling and mathematical optimisations.'},
  {company:'Dialog Axiata', role:'Data Scientist', period:'2021 - 2024', summary:'Role focused on developing dashboards using tableau and Power BI, building data pipelines and data marts using snowflake, while mentoring teams on query optimization and cost-efficient practices.'},
];

const projects = [
  {title:'Demand Forecasting and Truck dispatch scheduling', desc:'Developed machine learning models to forecast demand and optimize truck scheduling for logistics operations.', img:'https://www.slimstock.com/wp-content/uploads/2023/04/demand-forecasting-feature-image.webp'},
  {title:'Factory Production planning optimisation', desc:'Optimized factory production planning using advanced analytics and simulation techniques.', img:'https://www.marketing91.com/wp-content/uploads/2020/02/Types-of-Production-Planning.jpg'},
  {title:'Chun prediction project', desc:'Predicted customer churn using machine learning models and implemented a dashboard for tracking churn metrics.', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbFV0khYcZ_gWx0Gq0jyRx3B7hRai6a1oM0w&s'},
  {title:'Vehicle Routing Optimization', desc:'Optimized vehicle routing using machine learning and graph algorithms.', img:'https://d2908q01vomqb2.cloudfront.net/4d89d294cd4ca9f2ca57dc24a53ffb3ef5303122/2023/02/17/SCL-OptimizeRouting-VehicleRoutingProblem_s.jpg'}
];

// Render work
const workGrid = document.getElementById('work-grid');
workData.forEach(w=>{
  const el = document.createElement('div'); el.className='experience';
  el.innerHTML = `<h3>${w.role} — <span style="font-weight:600">${w.company}</span></h3>
  <div class="muted">${w.period}</div>
  <div>${w.summary}</div>`;
  workGrid.appendChild(el);
});

// Render projects
const projectsGrid = document.getElementById('projects-grid');
projects.forEach(p=>{
  const el = document.createElement('div'); el.className='project card';
  el.innerHTML = `<img src="${p.img}" alt="${p.title}">
  <div class="meta"><h3>${p.title}</h3><div class="muted">${p.desc}</div></div>`;
  projectsGrid.appendChild(el);
});

// Init tsParticles for AI-ish particle network
tsParticles.load("tsparticles", {
  fpsLimit: 60,
  background: { color: "transparent" },
  particles: {
    number: { value: 60 },
    color: { value: ["#7c3aed", "#06b6d4", "#a78bfa"] },
    shape: { type: "circle" },
    opacity: { value: 0.8 },
    size: { value: { min: 1, max: 6 } },
    links: { enable: true, distance: 160, color: "#7c3aed", opacity: 0.16, width: 1 },
    move: { enable: true, speed: 0.8, outModes: { default: "out" } }
  },
  interactivity: {
    events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
    modes: { repulse: { distance: 100 }, push: { quantity: 4 } }
  }
});

// Treemap chart
const treemapData = [{
  type: 'treemap',
  labels: ['Python', 'SQL', 'Azure','Databricks','Tableau','Power BI','ML','Data Analytics','Optimisation','PySpark'],
  parents: ['', '', '', '', '', '', '', '', '',''],
  values: [30, 20, 15, 15, 12, 20, 10, 8, 6,10],
  marker: {colors: ['#7c3aed', '#06b6d4', '#a78bfa', '#9333ea', '#0891b2', '#3406eb', '#a855f7', '#22d3ee', '#d8b4fe', '#b2e7f0']},
  textposition: 'middle center',
}];
const treemapLayout = {margin:{l:0,r:0,t:0,b:0},paper_bgcolor:'transparent',plot_bgcolor:'transparent',font:{color:'#e6eef8',family:'Inter'}};
Plotly.newPlot('treemapChart', treemapData, treemapLayout, {responsive:true,displayModeBar:false});

const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
  type:'doughnut',
  data:{labels:['Machine Learning','Data Analysis','Visualisation'],datasets:[{data:[45,30,25],backgroundColor:['#7c3aed','#06b6d4','#a78bfa']} ]},
  options:{responsive:true,plugins:{legend:{position:'bottom'}}}
});

// Small entrance animations
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      anime({targets:entry.target,translateY:[24,0],opacity:[0,1],duration:800,easing:'spring(1,80,10,0)'});
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.12});

document.querySelectorAll('.experience,.project,.section-title,.card').forEach(el=>observer.observe(el));

// Smooth link scrolling
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const href=a.getAttribute('href'); if(href==="#")return;
    e.preventDefault(); document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'});
  });
});
