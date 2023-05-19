import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "../../redux/filter/slice";
import { useState } from "react";

import { Search2Icon, SmallCloseIcon } from "@chakra-ui/icons";
import {
    Box,
    Flex,
    Text,
    Input,
    IconButton,
    InputRightElement,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";
import { getStatusFilter } from "../../redux/contacts/selectors";

export const Filter = () => {
    const dispatch = useDispatch();
    const [isFilterLoading, setIsFilterLoading] = useState(false);
    const filter = useSelector(getStatusFilter);

    const handleFilterChange = (e) => {
        setIsFilterLoading(true);
        dispatch(setStatusFilter(e.target.value.toLowerCase()));
        setTimeout(() => {
            setIsFilterLoading(false);
        }, 500);
    };

    const clearInput = () => {
        dispatch(setStatusFilter(""));
    };

    return (
        <Box textAlign="left" maxW="400">
            <Text fontSize="xl">Find contacts by name</Text>
            <Flex as="form" gap="2">
                <InputGroup>
                    <InputLeftElement
                        children={
                            <IconButton
                                isLoading={isFilterLoading}
                                colorScheme="blue"
                                aria-label="Search database"
                                icon={<Search2Icon />}
                                variant="ghost"
                            />
                        }
                    />
                    <Input
                        placeholder="Try to search somebody..."
                        type="text"
                        name="key"
                        value={filter}
                        variant="flushed"
                        pl="16"
                        onChange={handleFilterChange}
                    />
                    <InputRightElement
                        children={
                            filter.length > 0 && (
                                <IconButton
                                    color="red.500"
                                    aria-label="Search database"
                                    icon={<SmallCloseIcon />}
                                    variant="ghost"
                                    onClick={clearInput}
                                />
                            )
                        }
                    />
                </InputGroup>
            </Flex>
        </Box>
    );
};
