import { StateProvider } from "@/app/StateProvider";
import DetailsComponent from "@/app/ui/create/DetailsComponent";
import Resume from "@/app/ui/create/Resume";
import { getResumeUserInfo } from "@/app/lib/data";
import { State } from "@/app/lib/types";

const getServerSideProps = async () => {
  const data = await getResumeUserInfo();
  const newData: State = {
    ...data,
    created_at: data.created_at.toISOString(),
    updated_at: data.updated_at.toISOString(),

    works_resumes: data.works_resumes.map((work) => ({
      ...work,
      Work_info: {
        ...work.Work_info,
        start_date: work.Work_info.start_date.toISOString(),
        end_date: work.Work_info.end_date.toISOString(),
      },
    })),
    education_resumes: data.education_resumes.map((education) => ({
      ...education,
      Education_info: {
        ...education.Education_info,
        start_date: education.Education_info.start_date.toISOString(),
        end_date: education.Education_info.education_end_date.toISOString(),
      },
    })),
    links_networks: data.links_networks.map((link) => ({
      ...link,
      link_infoId: link.link_infoId ?? 0,
      link_info: link.link_info ?? {
        id: 0,
        network_id: 0,
        url: "",
        username: "",
      },
    })),
  };
  return newData;
};

export default async function Page() {
  try {
    const repo = await getServerSideProps();
    return (
      <StateProvider initialState={repo}>
        <div className="flex gap-4">
          <div className="w-1/5">
            <DetailsComponent />
          </div>
          <div className="w-4/5">
            <Resume />
          </div>
        </div>
      </StateProvider>
    );
  } catch (error) {
    return <div>Error fetching: {JSON.stringify(error)}</div>;
  }
}
