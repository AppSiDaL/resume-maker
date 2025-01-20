import bcrypt from "bcryptjs";
import {
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
} from "@/app/lib/placeholder-data";
import prisma from "@/app/lib/prisma";

async function clearDatabase() {
  await prisma.$executeRaw`TRUNCATE TABLE links_networks RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE link_info RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE works_resumes RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE work_info RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE certifications_resumes RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE certificacion_info RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE skills RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE skills_categories RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE resumes RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE resume_user_info RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE`;
}

async function seedUsers() {
  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return prisma.users.create({
        data: {
          name: user.name,
          email: user.email,
          password: hashedPassword,
          username: user.username,
        },
      });
    })
  );

  return insertedUsers;
}

async function seedResumeUserInfo() {
  const insertedResumeUserInfo = await Promise.all(
    resume_user_info.map((info) =>
      prisma.resume_user_info.create({
        data: {
          user_first_name: info.user_first_name,
          user_last_name: info.user_last_name,
          user_heading: info.user_heading,
          user_email: info.user_email,
          user_phone: info.user_phone,
          user_address: info.user_address,
        },
      })
    )
  );

  return insertedResumeUserInfo;
}

async function seedResumes() {
  const insertedResumes = await Promise.all(
    resumes.map((resume) =>
      prisma.resumes.create({
        data: {
          user_id: resume.user_id,
          created_at: resume.created_at,
          updated_at: resume.updated_at,
          template_id: resume.template_id,
          resume_user_info_id: resume.resume_user_info_id,
        },
      })
    )
  );

  return insertedResumes;
}

async function seedSkillsCategories() {
  const insertedSkillsCategories = await Promise.all(
    skills_categories.map((category) =>
      prisma.skills_categories.create({
        data: {
          skill_type: category.skill_type,
          resume_id: category.resume_id,
        },
      })
    )
  );

  return insertedSkillsCategories;
}

async function seedSkills() {
  const insertedSkills = await Promise.all(
    skills.map((skill) =>
      prisma.skills.create({
        data: {
          skill_name: skill.skill_name,
          skill_category_id: skill.skill_category_id,
        },
      })
    )
  );

  return insertedSkills;
}

async function seedCertificacionInfo() {
  const insertedCertificacionInfo = await Promise.all(
    certificacion_info.map((cert) =>
      prisma.certificacion_info.create({
        data: {
          certificacion_name: cert.certificacion_name,
          certificacion_institution: cert.certificacion_institution,
          url: cert.url,
          sort_order: cert.sort_order,
          resume_id: cert.resume_id,
        },
      })
    )
  );

  return insertedCertificacionInfo;
}

async function seedCertificationsResumes() {
  const insertedCertificationsResumes = await Promise.all(
    certifications_resumes.map((certResume) =>
      prisma.certifications_resumes.create({
        data: {
          resume_id: certResume.resume_id,
          certificacion_info_id: certResume.certificacion_info_id,
        },
      })
    )
  );

  return insertedCertificationsResumes;
}

async function seedWorkInfo() {
  const insertedWorkInfo = await Promise.all(
    work_info.map((work) =>
      prisma.work_info.create({
        data: {
          title: work.title,
          company: work.company,
          start_date: work.start_date,
          end_date: work.end_date,
          description: work.description,
          location: work.location,
          sort_order: work.sort_order,
          current_job: work.current_job,
        },
      })
    )
  );

  return insertedWorkInfo;
}

async function seedWorksResumes() {
  const insertedWorksResumes = await Promise.all(
    works_resumes.map((workResume) =>
      prisma.works_resumes.create({
        data: {
          resume_id: workResume.resume_id,
          work_info_id: workResume.work_info_id,
        },
      })
    )
  );

  return insertedWorksResumes;
}

async function seedLinkInfo() {
  const insertedLinkInfo = await Promise.all(
    link_info.map((link) =>
      prisma.link_info.create({
        data: {
          network_id: link.network_id,
          url: link.url,
          username: link.username,
        },
      })
    )
  );

  return insertedLinkInfo;
}

async function seedLinksNetworks() {
  const insertedLinksNetworks = await Promise.all(
    links_networks.map((linkNetwork) =>
      prisma.links_networks.create({
        data: {
          network_name: linkNetwork.network_name,
          resume_id: linkNetwork.resume_id,
          link_infoId: linkNetwork.link_infoId,
        },
      })
    )
  );

  return insertedLinksNetworks;
}

export async function GET() {
  try {
    await prisma.$transaction(async () => {
      await clearDatabase();
      await seedUsers();
      await seedResumeUserInfo();
      await seedResumes();
      await seedSkillsCategories();
      await seedSkills();
      await seedCertificacionInfo();
      await seedCertificationsResumes();
      await seedWorkInfo();
      await seedWorksResumes();
      await seedLinkInfo();
      await seedLinksNetworks();
    }, { timeout: 20000 });

    return new Response(
      JSON.stringify({ message: "Database seeded successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
    });
  }
}