import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecoundaryButton } from "./components/atoms/button/SecoundaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

import "./styles.css";

const user = {
  name: "はち",
  image: "https://source.unsplash.com/mEdKuPYJe1I",
  email: "1234@example.com",
  phone: "070-1111-1111",
  company: {
    name: "おはっけい株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecoundaryButton>テスト</SecoundaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
