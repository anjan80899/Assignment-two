function DisplayData(props) {
  const data = [props.data];
  return (
    <div className="display">
      <table>
        <thead>
          <tr>
            <th>Login</th>
            <th>Id</th>
            <th>Nodeid</th>
            <th>Name</th>
            <th>public Repos</th>
            <th>Location</th>
            <th>Followers</th>
            <th>Following</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.login}</td>
                  <td>{val.id}</td>
                  <td>{val.node_id}</td>
                  <td>{val.name}</td>
                  <td>{val.public_repos}</td>
                  <td>{val.location}</td>
                  <td>{val.followers}</td>
                  <td>{val.following}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayData;
