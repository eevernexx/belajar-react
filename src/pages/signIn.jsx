import { useContext, useState } from 'react'
import AuthLayout from '../components/Layouts/AuthLayout'
import FormSignIn from '../components/Fragments/FormSignIn'
import { loginService } from '../services/authService'
import { AuthContext } from '../context/authContext'
import AppSnackbar from '../components/Elements/AppSnackbar'

function signIn() {
  const { login } = useContext(AuthContext);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleLogin = async (email, password) => {
    try {
      console.log("Attempting login with:", email);
      const response = await loginService(email, password);
      console.log("Login response:", response);

      const { refreshToken } = response;

      login(refreshToken);
      console.log("Login successful, token:", refreshToken);
    } catch (err) {
      console.error("Login error:", err);
      setSnackbar({ open: true, message: err.msg, severity: "error" });
    }
  };

  return (
    <AuthLayout>
        <FormSignIn onSubmit={handleLogin} />
        <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
    </AuthLayout>
  )
}

export default signIn