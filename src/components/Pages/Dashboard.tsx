import { useState, useEffect } from "react";
import axios from "axios";

type User = {
  _id: string;
  name: string;
  email: string;
};

const Dashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [stats, setStats] = useState({ totalUsers: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_URL}/users`);
        setUsers(response.data);

        setStats({ totalUsers: response.data.length });
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Estatísticas</h2>
        <p className="text-gray-700">
          Total de Usuários:{" "}
          <span className="font-bold">{stats.totalUsers}</span>
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Usuários Cadastrados</h2>

        {loading ? (
          <p className="text-center text-gray-700">Carregando...</p>
        ) : (
          <div className="overflow-x-auto">
            {" "}
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 border border-gray-200 text-left">
                    Nº
                  </th>
                  <th className="px-4 py-2 border border-gray-200 text-left">
                    Nome
                  </th>
                  <th className="px-4 py-2 border border-gray-200 text-left">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id} className="odd:bg-gray-50">
                    <td className="px-4 py-2 border border-gray-200">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 border border-gray-200">
                      {user.name}
                    </td>
                    <td
                      className="px-4 py-2 border border-gray-200 truncate max-w-[250px] sm:max-w-[200px] lg:max-w-[300px]"
                      title={user.email}>
                      {user.email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
