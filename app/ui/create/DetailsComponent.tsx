import DropdownComponent from "@/app/ui/create/DropdownComponent";
import PersonalInfoForm from "@/app/ui/create/forms/PersonalInfoForm";
import { IconBooks, IconUser } from "@tabler/icons-react";
import EducationForm from "./forms/EducationForm";
import MultipleFormWrapper from "./MultipleFormWrapper";
export default function DetailsComponent() {
  return (
    <div>
      <DropdownComponent
        icon={<IconUser size={24} />}
        title="Personal Information"
        description="Add your personal information"
      >
        <PersonalInfoForm />
      </DropdownComponent>
      <DropdownComponent
        icon={<IconBooks size={24} />}
        title="Education"
        description="Add your education information"
      >
        <MultipleFormWrapper>
        <EducationForm />
        </MultipleFormWrapper>
      </DropdownComponent>
    </div>
  );
}
