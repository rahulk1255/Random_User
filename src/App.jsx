import { useState , useEffect} from 'react'
import './App.css'
import UserCard from './components/UserCard.jsx'
import SearchBar from './components/SearchBar.jsx';
import Pagination from './components/Pagination.jsx';



function App() {
  const [users,setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(null);

  useEffect(()=> {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.freeapi.app/api/v1/public/randomusers?page=${page}&limit=10`);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data.data.data);
        setTotalPages(data.data.totalPages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  },[page]);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  
  const filteredUsers = users.filter((user) =>{
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    return fullName.includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase());
  })
  
  return (
  <div>
   <SearchBar search={search} setSearch={setSearch} />
  <div className="users-container">
    {filteredUsers.map((user) => (
      <UserCard
        key={user.id}
        user={user}
      />
    ))}
  </div>
  <Pagination page={page} totalPages={totalPages} setPage={setPage} />
  </div>
);
}

export default App

