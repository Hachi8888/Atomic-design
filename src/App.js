import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecoundaryButton } from "./components/atoms/button/SecoundaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";

import "./styles.css";

const user = {
  name: "はち",
  image: "https://source.unsplash.com/mEdKuPYJe1I",
  email: "1234@example.com",
  phone: "0X0-1111-1111",
  company: {
    name: "おはっけい株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecoundaryButton>テスト</SecoundaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
