import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecoundaryButton } from "./components/atoms/button/SecoundaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecoundaryButton>テスト</SecoundaryButton>
      <br />
      <SearchInput />
    </div>
  );
}
