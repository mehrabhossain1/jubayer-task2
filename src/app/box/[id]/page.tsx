const BoxDetailsPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-4xl font-bold">You clicked on Box {id}</h1>
    </div>
  );
};

export default BoxDetailsPage;
