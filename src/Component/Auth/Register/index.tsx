import style from './index.module.css';
import Link from 'next/link';

const Register = () => {
  return (
    <div className={style.card_body}>
      <div className={style.card}>
        <h1>Register Page</h1>
        <form action=''>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Your Name'
          />
          <label htmlFor='name'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='example@gmail.com'
          />
          <p>
            already have an account?
            <Link href='/auth/login'>Login</Link>
          </p>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
