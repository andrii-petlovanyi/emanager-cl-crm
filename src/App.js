import { useEffect } from 'react';
import { useLogInUserMutation } from 'redux/auth/authApiSlice';
import { logIn } from 'redux/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useGetOffersQuery } from 'redux/offers/offersApiSlice';
import { Heading } from '@chakra-ui/react';

const App = () => {
  const dispatch = useDispatch();
  const [logInUser] = useLogInUserMutation();
  const { data } = useGetOffersQuery();
  const username = 'okluk';
  const password = 'okluk';

  console.log(data);
  useEffect(() => {
    async function userLogin() {
      try {
        const { data } = await logInUser({ username, password });
        dispatch(logIn(data));
      } catch (error) {
        console.log(error);
      }
    }
    userLogin();
  }, []);

  return (
    <>
      <Heading fontSize={{ sm: '10px', md: '20px', lg: '30px' }}>
        Hello, Andrii
      </Heading>
    </>
  );
};

export default App;
