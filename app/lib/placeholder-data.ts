const users = [
  {
    name: "test",
    email: "test@test.com",
    password: "test",
    username: "test",
  },
];

const resume_user_info = [
  {
    user_first_name: "John",
    user_last_name: "Doe",
    user_heading: "Software Engineer",
    user_email: "test@gmail.com",
    user_phone: "123-456-7890",
    user_address: "1234 Elm St, Springfield, IL 62701",
  },
];

const resumes = [
  {
    user_id: 1,
    created_at: new Date("2023-10-30T16:37:11.580Z"),
    updated_at: new Date("2023-10-30T16:37:11.580Z"),
    template_id: 1,
    resume_user_info_id: 1,
  },
];

const skills_categories = [
  {
    skill_type: "Programming Languages",
    resume_id: 1,
  },
  {
    skill_type: "Databases",
    resume_id: 1,
  },
  {
    skill_type: "Operating Systems",
    resume_id: 1,
  },
  {
    skill_type: "Frameworks",
    resume_id: 1,
  },
];

const skills = [
  {
    skill_name: "JavaScript",
    skill_category_id: 1,
  },
  {
    skill_name: "Python",
    skill_category_id: 1,
  },
  {
    skill_name: "Java",
    skill_category_id: 1,
  },
  {
    skill_name: "SQL",
    skill_category_id: 2,
  },
  {
    skill_name: "MongoDB",
    skill_category_id: 2,
  },
  {
    skill_name: "PostgreSQL",
    skill_category_id: 2,
  },
  {
    skill_name: "Linux",
    skill_category_id: 3,
  },
  {
    skill_name: "Windows",
    skill_category_id: 3,
  },
  {
    skill_name: "MacOS",
    skill_category_id: 3,
  },
  {
    skill_name: "React",
    skill_category_id: 4,
  },
  {
    skill_name: "Node.js",
    skill_category_id: 4,
  },
  {
    skill_name: "Spring",
    skill_category_id: 4,
  },
  {
    skill_name: "Flask",
    skill_category_id: 4,
  },
  {
    skill_name: "Django",
    skill_category_id: 4,
  },
  {
    skill_name: "Express.js",
    skill_category_id: 4,
  },
];

const certificacion_info = [
  {
    certificacion_name: "Certified Kubernetes Administrator",
    certificacion_institution: "CNCF",
    url: "https://www.cncf.io/certification/cka/",
    sort_order: 1,
    resume_id: 1,
  },
  {
    certificacion_name: "Certified Kubernetes Application Developer",
    certificacion_institution: "CNCF",
    url: "https://www.cncf.io/certification/ckad/",
    sort_order: 2,
    resume_id: 1,
  },
  {
    certificacion_name: "AWS Certified Solutions Architect - Associate",
    certificacion_institution: "Amazon Web Services",
    url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    sort_order: 3,
    resume_id: 1,
  },
  {
    certificacion_name: "AWS Certified Developer - Associate",
    certificacion_institution: "Amazon Web Services",
    url: "https://aws.amazon.com/certification/certified-developer-associate/",
    sort_order: 4,
    resume_id: 1,
  },
  {
    certificacion_name: "AWS Certified SysOps Administrator - Associate",
    certificacion_institution: "Amazon Web Services",
    url: "https://aws.amazon.com/certification/certified-sysops-admin-associate/",
    sort_order: 5,
    resume_id: 1,
  },
];

const certifications_resumes = [
  {
    resume_id: 1,
    certificacion_info_id: 1,
  },
  {
    resume_id: 1,
    certificacion_info_id: 2,
  },
  {
    resume_id: 1,
    certificacion_info_id: 3,
  },
  {
    resume_id: 1,
    certificacion_info_id: 4,
  },
  {
    resume_id: 1,
    certificacion_info_id: 5,
  },
];

const education_info = [
  {
    id: 1,
    education_end_date: new Date("2022-05-15"),
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    location: "Springfield, IL",
    score: 3.8,
    score_type: "GPA",
    start_date: new Date("2018-08-20"),
    study_type: "Full-time",
    sort_order: 1,
  },
  {
    id: 2,
    education_end_date: new Date("2020-05-15"),
    degree: "Master of Science in Software Engineering",
    institution: "Tech University",
    location: "Springfield, IL",
    score: 4.0,
    score_type: "GPA",
    start_date: new Date("2018-08-20"),
    study_type: "Full-time",
    sort_order: 2,
  },
];

const education_resumes = [
  {
    id: 1,
    resume_id: 1,
    education_info_id: 1,
  },
  {
    id: 2,
    resume_id: 1,
    education_info_id: 2,
  },
];

const work_info = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Company",
    start_date: new Date("2020-01-01"),
    end_date: new Date("2022-01-01"),
    description: "Developed and maintained web applications.",
    location: "Remote",
    sort_order: 1,
    current_job: false,
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    company: "Tech Company",
    start_date: new Date("2022-01-01"),
    end_date: new Date("2022-01-01"),
    description: "Lead a team of developers on a new project.",
    location: "Remote",
    sort_order: 2,
    current_job: false,
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Tech Company",
    start_date: new Date("2018-01-01"),
    end_date: new Date("2020-01-01"),
    description: "Developed and maintained web applications.",
    location: "Remote",
    sort_order: 3,
    current_job: false,
  },
  {
    id: 4,
    title: "Junior Software Engineer",
    company: "Tech Company",
    start_date: new Date("2016-01-01"),
    end_date: new Date("2018-01-01"),
    description: "Developed and maintained web applications.",
    location: "Remote",
    sort_order: 4,
    current_job: false,
  },
];

const works_resumes = [
  {
    id: 1,
    resume_id: 1,
    work_info_id: 1,
  },
  {
    id: 2,
    resume_id: 1,
    work_info_id: 2,
  },
  {
    id: 3,
    resume_id: 1,
    work_info_id: 3,
  },
  {
    id: 4,
    resume_id: 1,
    work_info_id: 4,
  },
];

const link_info = [
  {
    network_id: 1,
    url: "https://github.com/johndoe",
    username: "johndoe",
  },
  {
    network_id: 2,
    url: "https://www.linkedin.com/in/johndoe",
    username: "johndoe",
  },
  {
    network_id: 3,
    url: "https://johndoe.com",
    username: "johndoe",
  },
];

const links_networks = [
  {
    network_name: "GitHub",
    resume_id: 1,
    link_infoId: 1,
  },

  {
    network_name: "LinkedIn",
    resume_id: 1,
    link_infoId: 1,
  },
  {
    network_name: "Portfolio",
    resume_id: 1,
    link_infoId: 1,
  },
];

export {
  users,
  resume_user_info,
  resumes,
  skills_categories,
  skills,
  certificacion_info,
  certifications_resumes,
  work_info,
  works_resumes,
  link_info,
  links_networks,
};
