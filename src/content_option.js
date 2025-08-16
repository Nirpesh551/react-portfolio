const logotext = "NIRPESH";
const meta = {
    title: "Nirpesh Bhattarai",
    description: "I’m Nirpesh Bhattarai, a Computer Engineering graduate specializing in Cybersecurity and DevOps.",
};

const introdata = {
    title: "I’m Nirpesh Bhattarai",
    animated: {
        first: "I secure digital systems",
        second: "I build secure pipelines",
        third: "I automate cybersecurity tools",
    },
    description: "A passionate cybersecurity enthusiast and DevOps practitioner with hands-on experience in network security, containerization, and threat detection.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d", // Keep placeholder or replace with your personal image URL
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I'm Nirpesh Bhattarai, a recent Computer Engineering graduate from Cosmos College of Management and Technology. With a focus on cybersecurity and DevOps, I've gained practical experience through internships and personal projects. My interests include cybersecurity research, threat intelligence, DevOps automation, and CTF challenges. In my free time, I enjoy playing cricket and football.",
};

const worktimeline = [{
        jobtitle: "System and Network Trainee",
        where: "Data Hub Pvt Ltd (Nepal’s Own Cloud Service Provider)",
        date: "Jun 2025 - Aug 2025",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Docker & Containerization",
        value: 85,
    },
    {
        name: "Network Security (TCP/IP, Firewalls)",
        value: 80,
    },
    {
        name: "DevOps (Jenkins, Git, Bitbucket Pipelines)",
        value: 75,
    },
    {
        name: "SIEM & Log Management (ELK Stack)",
        value: 70,
    },
    {
        name: "Web Security (OWASP Top 10, ZAP)",
        value: 80,
    },
    {
        name: "Linux Administration",
        value: 85,
    },
    {
        name: "Bash Scripting",
        value: 75,
    },
];

const services = [{
        title: "Cybersecurity & Threat Detection",
        description: "Expertise in SIEM platforms, IDS/IPS, phishing detection, and secure coding practices to protect against vulnerabilities.",
    },
    {
        title: "DevOps & Automation",
        description: "Building CI/CD pipelines, container orchestration with Docker, and monitoring solutions using Prometheus and Grafana.",
    },
    {
        title: "Network & System Administration",
        description: "Configuring firewalls, log analysis, virtual machines, and backup systems for robust infrastructure support.",
    },
];

const dataportfolio = [{
        img: "", // Replace with actual project image if available
        description: "CipherShield Sentinel: A Python GUI tool for password strength analysis and brute-force simulation, generating PDF reports with ReportLab and Tkinter. Demonstrated secure coding and user-focused design.",
        link: "#", // Add GitHub link if available
    },
    {
        img: "",
        description: "PhishGuard: A cybersecurity tool to detect phishing URLs using Google Safe Browsing and domain analysis, featuring batch scanning and visual risk indicators. Improved cybersecurity automation and API integration.",
        link: "#",
    },
    {
        img: "",
        description: "Secure Pipeline Project: Built a secure CI/CD pipeline for a Flask app, integrating Bandit and OWASP ZAP scans, deployed on Render.com with Gunicorn. Implemented security headers to mitigate XSS and clickjacking, achieving zero high/medium vulnerabilities.",
        link: "#",
    },
    {
        img: "",
        description: "Container Escape Challenge: Designed and exploited a vulnerable Docker container to study escape techniques, then hardened it with non-root users and auditd monitoring. Enhanced skills in container security and defensive hardening.",
        link: "#",
    },
    {
        img: "",
        description: "DevOps Project: Developed a Dockerized Node.js app with MongoDB, orchestrated via Docker Compose, with Nginx, Prometheus, and Grafana for monitoring. Automated CI/CD with Bitbucket Pipelines and scripted MongoDB backups.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "nirpeshbbhattarai551@gmail.com",
    YOUR_FONE: "+977 9816982649", // Phone not provided in CV; use a placeholder or update if available
    description: "Feel free to reach out for collaborations in cybersecurity, DevOps, or any exciting projects. I'm based in Nepal and open to opportunities in threat intelligence and automation.",
    // Create an emailjs.com account 
    // Check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Nirpesh551",
    linkedin: "https://linkedin.com/in/nirpesh-bhattarai-4b197a239",
    // Facebook and Twitter not mentioned in CV; remove or add placeholders if needed
    // facebook: "https://facebook.com",
    // twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
