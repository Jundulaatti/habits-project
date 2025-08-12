export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
        <p className="mb-4">There was an error processing your request.</p>
        <a
          href="/login"
          className="text-orange-400 hover:text-orange-500 underline"
        >
          Return to login
        </a>
      </div>
    </div>
  );
}
