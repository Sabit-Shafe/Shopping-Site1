import useAuth from '../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="card card-side bg-lime-100 shadow-xl ">
        <figure>
          <img className="w-full h-52" src={user?.photoURL} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {user?.displayName}</h2>
          <p>Email: {user?.email}.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary bg-fuchsia-800">Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;