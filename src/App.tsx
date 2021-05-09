import "./styles.css";
import { useAllUsers } from "./hooks/useAllUsers";
import { UserCard } from "./components/UserCard";

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchuser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFetchuser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>loading....</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
