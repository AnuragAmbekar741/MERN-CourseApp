import axios from 'axios';

interface UserCredentials {
  username: string;
  password: string;
}

const useAuth = () => {

  const authenticate = async (url: string, userCred: UserCredentials) => {
    try {
      const response = await axios.post(url, userCred);
      return response.data;
    } catch (error) {
      return { message: 'An error occurred during authentication.' };
    }
  };

  return { authenticate};
};

export default useAuth;
