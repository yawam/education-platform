import { collectGenerateParams } from "next/dist/build/utils";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";


async function getData(): Promise<any[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

const CoursesPage = async () => {
  const {userId} = auth();

  if(!userId){
    return redirect("/")
  }

  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy:{
      createdAt: "desc"
    }
  });
  return (
    <div>
      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default CoursesPage;
