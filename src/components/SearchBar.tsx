import { Box, Input, InputGroup } from '@chakra-ui/react'
import { useRef, type FormEvent, type FC } from 'react'
import { FaSearch } from 'react-icons/fa'

interface Props {
    searchSubmitter: (text: string) => void
}

const SearchBar: FC<Props> = ({ searchSubmitter }) => {
    const inputElem = useRef<HTMLInputElement>(null);
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        searchSubmitter(inputElem.current?.value || "")
        inputElem.current?.blur();
    }
    return (
        <Box onSubmit={onSubmit} as="form" ml="auto">
            <InputGroup startElement={<FaSearch />} >
                <Input
                    ref={inputElem}
                    placeholder={"Search games"}
                    onFocus={() => inputElem.current?.value && (inputElem.current.value="")}
                    max-width={400}
                />
            </InputGroup>
        </Box>
    )
}

export default SearchBar