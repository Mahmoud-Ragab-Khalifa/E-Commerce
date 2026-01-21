import ThemeToggler from "@/components/ThemeToggler";

const Home = () => {
  return (
    <>
      <h1 className="text-6xl text-orange-700 dark:text-green-600">
        Home Page
      </h1>
      <h1 className="text-6xl">السلام عليكم</h1>
      <ThemeToggler />
    </>
  );
};

export default Home;
