import { HeaderContainer, LogoExit } from "./styles";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <LogoExit onClick={() => [signout(), navigate("/")]} />
    </HeaderContainer>
  );
};

export default Header;
