import { redirect } from "next/navigation";

const StartInterview = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Redirect to the main interview page
  redirect(`/interview/${id}`);
};

export default StartInterview;
