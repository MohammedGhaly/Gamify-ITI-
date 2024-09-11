import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

function SearchInput({ onSearch }) {
  const ref = useRef(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={ref}
          placeholder="Search games..."
          borderRadius={15}
          width="35rem"
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
