
export default async function JobDetails({ params }) {
  const { id } = await params;

  return (
    <main>
      <h1>Job Details</h1>
      <p>Job ID: {id}</p>
    </main>
  );
}
