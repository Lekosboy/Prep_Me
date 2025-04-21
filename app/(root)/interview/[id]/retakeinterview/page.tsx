import { getInterviewById } from "@/lib/actions/general.action";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RetakeInterview = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Fetch the interview details
  const interview = await getInterviewById(id);
  if (!interview) redirect("/");

  return (
    <section className="section-retake">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-semibold">
          Retake the <span className="capitalize">{interview.role}</span>{" "}
          Interview
        </h1>
        <p className="text-lg text-center">
          You are about to retake the interview for the role of{" "}
          <span className="font-bold">{interview.role}</span>. This will allow
          you to practice and improve your performance.
        </p>

        <div className="flex flex-row gap-4">
          <Button className="btn-secondary">
            <Link href="/" className="flex w-full justify-center">
              <p className="text-sm font-semibold text-primary-200 text-center">
                Cancel
              </p>
            </Link>
          </Button>

          <Button className="btn-primary">
            <Link
              href={`/interview/${id}/start`}
              className="flex w-full justify-center"
            >
              <p className="text-sm font-semibold text-black text-center">
                Start Interview
              </p>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RetakeInterview;
