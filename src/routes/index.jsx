import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

function AppRoutes() {
  const token = localStorage.getItem("accessToken");
  return <>{token ? <PrivateRoutes /> : <PublicRoutes />}</>;
}
export default AppRoutes;
