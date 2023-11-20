import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { UserButton, auth } from "@clerk/nextjs";
import { get } from "http";
import { redirect } from "next/navigation";
import { CoursesList } from "../search/_components/courses-list";
import { InfoCard } from "./_components/info-card";
import { CheckCircle, Clock } from "lucide-react";
export default async function Dashboard() {

  const { userId } = auth();

  if(!userId){
    return redirect("/");
  }

  const { completedCourses, coursesInProgress } = await getDashboardCourses(userId);

  return (
    
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCard icon={Clock}
        label="In Progress"
        numberOfItems={coursesInProgress.length}/>
        <InfoCard icon={CheckCircle}
        label="Completed"
        numberOfItems={coursesInProgress.length}
        variant="success"/>
      </div>
      <CoursesList items={[...coursesInProgress, ...completedCourses ]}/>
    </div>
  );
}
