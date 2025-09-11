import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-gray-800">
      <h1 className="text-9xl font-extrabold text-indigo-600 drop-shadow-lg">
        404
      </h1>
      <p className="mt-6 text-2xl font-semibold">Упс! Страница не найдена</p>
      <p className="mt-2 text-gray-600">
        Кажется, вы перешли по неверной или устаревшей ссылке.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 transition-all"
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;
