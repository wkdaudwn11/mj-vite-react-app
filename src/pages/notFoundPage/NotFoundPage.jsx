import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClickGoHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>404 Page not found</h1>
      <button type='button' onClick={handleClickGoHome}>
        Go to home
      </button>
    </div>
  );
};

export default NotFoundPage;
