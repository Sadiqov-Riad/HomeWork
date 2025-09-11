import { Mail, Phone, MessageCircle } from "lucide-react";

const HelpSupport: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Help & Support
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email Support */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <Mail className="w-12 h-12 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Email Support</h2>
          <p className="text-gray-600 mb-4">
            Напишите нам, и мы ответим в течение 24 часов.
          </p>
          <a
            href="mailto:support@easybus.com"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Написать на почту
          </a>
        </div>

        {/* Phone Support */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <Phone className="w-12 h-12 text-green-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Phone Support</h2>
          <p className="text-gray-600 mb-4">
            Позвоните нам с 09:00 до 21:00 (GMT+4).
          </p>
          <a
            href="tel:+994123456789"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Позвонить
          </a>
        </div>

        {/* Live Chat */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <MessageCircle className="w-12 h-12 text-pink-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Live Chat</h2>
          <p className="text-gray-600 mb-4">
            Общайтесь с нашей поддержкой в реальном времени.
          </p>
          <button className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
            Начать чат
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
