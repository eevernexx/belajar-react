import { useState } from 'react'
import AuthLayout from '../components/Layouts/AuthLayout'
import FormSignUp from '../components/Fragments/FormSignUp'
import { registerService } from '../services/authService'
import { useNavigate } from 'react-router-dom'
import AppSnackbar from '../components/Elements/AppSnackbar'

function signUp() {
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleRegister = async (name, email, password) => {
    try {
      const response = await registerService(name, email, password);

      console.log("Register response:", response);

      setSnackbar({
        open: true,
        message: response.msg || "Registrasi berhasil! Silakan login.",
        severity: "success"
      });

      // Redirect ke login page setelah 2 detik
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      console.error("Register error:", err);
      setSnackbar({
        open: true,
        message: err.msg || "Registrasi gagal",
        severity: "error"
      });
    }
  };

  return (
    <AuthLayout>
        <FormSignUp onSubmit={handleRegister} />
        <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
    </AuthLayout>
  )
}

export default signUp
