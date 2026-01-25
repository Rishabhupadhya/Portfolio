const projects = [
  {
    title: "Secure Secrets Management Integration",
    description:
      "Designed and implemented a secure secrets management workflow by integrating AWS Secrets Manager with Terraform. Eliminated hardcoded credentials and .tfvars usage across deployments, enforced least-privilege IAM access, and enabled automated secret rotation with full auditability—improving infrastructure security posture and DevSecOps compliance.",
    tech: "AWS Secrets Manager, Terraform, IAM, GitLab CI/CD",
  },
  {
    title: "DevOps Monitoring & Cost Optimization Platform",
    description:
      "Built a centralized observability and cost-optimization dashboard using Prometheus, Grafana, and AWS CloudWatch. Identified idle resources, optimized auto-scaling thresholds, and implemented automated off-hours EC2 shutdown via AWS Lambda—reducing cloud costs by up to 35% and improving mean-time-to-detect (MTTD) by 45%.",
    tech: "AWS, Prometheus, Grafana, CloudWatch, Terraform, Lambda",
  },
  {
    title: "AI-Driven Resume Screening System",
    description:
      "Developed an NLP-based resume screening engine that matches resumes to job descriptions using BERT embeddings and TF-IDF scoring. Exposed the model via a Flask REST API and integrated it with a React frontend to automate candidate shortlisting and improve recruiter efficiency.",
    tech: "Python, NLP, BERT, TF-IDF, Flask, React",
  },
  {
    title: "BloodLink – Smart Donation Network",
    description:
      "Engineered an AI-powered platform to optimize blood donation workflows using predictive analytics and real-time availability tracking. Improved donor-recipient matching efficiency and reduced response time through intelligent scheduling and data-driven insights.",
    tech: "React, Node.js, MongoDB, Docker, Azure",
  },
];

export default projects;
