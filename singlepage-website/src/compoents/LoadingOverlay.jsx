import { useSelector } from 'react-redux';

const LoadingOverlay = () => {
  const { isLoading, message } = useSelector(state => state.loading);

  return (
    isLoading && (
      <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75 z-3">
        <div className="text-center">
          <div className="spinner-border text-light" role="status"></div>
          <p className="text-light mt-3">{message || 'Loading...'}</p>
        </div>
      </div>
    )
  );
};

export default LoadingOverlay;
