import './App.css';
import NavBar from './components/NavBar';
import AppRouter from './components/AppRouter';
import { Alert, Snackbar } from '@mui/material';
import { useClassroomStore } from './classroomStore';

const App = () => {
  const { toast, setToast } = useClassroomStore();

  const handleClose = () => {
    setToast(null);
  };

  return (
    <>
      <Snackbar
        open={Boolean(toast)}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        style={{ marginTop: "60px" }}
      >
        <Alert severity={toast?.severity}>
          {toast?.message}
        </Alert>
      </Snackbar>
      <div>
        <NavBar />
        <AppRouter />
      </div>
    </>
  );
}

export default App;