const Register = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <div>
        <form action=''>
          <div>
            <label htmlFor='name'>name</label>
            <input
              type='text'
              name='name'
              id='name'
            />
          </div>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
