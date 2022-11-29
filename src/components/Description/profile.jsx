function Profile({host} ) {
    return (
        <>
        <h3>{host && host.name}</h3>
        <img src={host && host.picture} alt="" />
        </>
    );
  }
  export default Profile;