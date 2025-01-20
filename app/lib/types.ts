interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
}

interface ResumeUserInfo {
  id: number;
  user_first_name: string;
  user_last_name: string;
  user_heading: string;
  user_email: string;
  user_phone: string;
  user_address: string;
}

interface Skill {
  id: number;
  skill_name: string;
  skill_category_id: number;
}

interface SkillCategory {
  id: number;
  skill_type: string;
  resume_id: number;
  Skills: Skill[];
}

interface WorkInfo {
  id: number;
  title: string;
  company: string;
  start_date: string;
  end_date: string;
  description: string;
  location: string;
  sort_order: number;
  current_job: boolean;
}

interface WorkResume {
  id: number;
  resume_id: number;
  work_info_id: number;
  Work_info: WorkInfo;
}

interface CertificationInfo {
  id: number;
  certificacion_name: string;
  certificacion_institution: string;
  url: string;
  sort_order: number;
  resume_id: number;
}

interface CertificationResume {
  id: number;
  resume_id: number;
  certificacion_info_id: number;
  Certificacion_info: CertificationInfo;
}

interface LinkInfo {
  id: number;
  network_id: number;
  url: string;
  username: string;
}

interface LinkNetwork {
  id: number;
  network_name: string;
  resume_id: number;
  link_infoId: number;
  link_info: LinkInfo;
}

interface EducationInfo {
  id: number;
  education_end_date: string;
  degree: string;
  institution: string;
  location: string;
  score: number;
  score_type: string;
  start_date: string;
  study_type: string;
  sort_order: number;
}

interface EducationResume {
  id: number;
  resume_id: number;
  education_info_id: number;
}

export interface State {
  id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  template_id: number;
  resume_user_info_id: number;
  user: User;
  resume_user_info: ResumeUserInfo;
  Skills_categories: SkillCategory[];
  works_resumes: WorkResume[];
  certifications_resumes: CertificationResume[];
  links_networks: LinkNetwork[];
  education_info: EducationInfo[];
  education_resumes: EducationResume[];
}

export interface Action {
  type: string;
  field: string;
  value: any;
}