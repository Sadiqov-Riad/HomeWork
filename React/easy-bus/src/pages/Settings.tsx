import { useState } from "react";

const Settings: React.FC = () => {
  // Profile
  const [name, setName] = useState("Riad");
  const [email, setEmail] = useState("riad@example.com");

  // Preferences
  const [language, setLanguage] = useState("ru");
  const [notifications, setNotifications] = useState(true);

  // App Settings (Bus Ticket Theme)
  const [currency, setCurrency] = useState("AZN");
  const [busClass, setBusClass] = useState("standard");
  const [autoEmail, setAutoEmail] = useState(true);
  const [savePassengerData, setSavePassengerData] = useState(false);

  const handleSave = () => {
    // тут может быть запрос к API
    alert("Настройки сохранены!");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>

      <div className="bg-white rounded-2xl shadow-md p-6 max-w-2xl">
        {/* Profile Section */}
        <h2 className="text-xl font-semibold mb-4">Профиль</h2>
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-gray-700 mb-1">Имя</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Preferences Section */}
        <h2 className="text-xl font-semibold mb-4">Общие настройки</h2>
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-gray-700 mb-1">Язык</label>
            <select
              value={language}
              onChange={e => setLanguage(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="ru">Русский</option>
              <option value="en">English</option>
              <option value="az">Azərbaycan</option>
            </select>
          </div>
          <div className="flex items-center">
            <input
              id="notifications"
              type="checkbox"
              checked={notifications}
              onChange={e => setNotifications(e.target.checked)}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="notifications" className="ml-2 text-gray-700">
              Включить уведомления
            </label>
          </div>
        </div>

        {/* App Settings Section */}
        <h2 className="text-xl font-semibold mb-4">Настройки приложения</h2>
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-gray-700 mb-1">Валюта по умолчанию</label>
            <select
              value={currency}
              onChange={e => setCurrency(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="AZN">AZN (₼)</option>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Класс автобуса</label>
            <select
              value={busClass}
              onChange={e => setBusClass(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="standard">Стандарт</option>
              <option value="comfort">Комфорт</option>
              <option value="vip">VIP</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              id="autoEmail"
              type="checkbox"
              checked={autoEmail}
              onChange={e => setAutoEmail(e.target.checked)}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="autoEmail" className="ml-2 text-gray-700">
              Автоматически отправлять билеты на Email
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="savePassengerData"
              type="checkbox"
              checked={savePassengerData}
              onChange={e => setSavePassengerData(e.target.checked)}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="savePassengerData" className="ml-2 text-gray-700">
              Сохранять данные пассажира для быстрого бронирования
            </label>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Сохранить изменения
        </button>
      </div>
    </div>
  );
};

export default Settings;
