import {
  Box,
  Button,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../Redux/action";

const Homepage = () => {
  const countries = useSelector((state) => state.reducer.countries);
  const dispatch = useDispatch();
  const [country, setCountry] = useState(countries);
  useEffect(() => {
    if (countries.length === 0) {
      dispatch(getCountries());
    }
  }, [dispatch]);

  const handleSort = (e) => {
    const { value } = e.target;
    if (value === "asc") {
      countries.sort((a, b) => {
        console.log("asc");
        return a.population - b.population;
      });
    } else if (value === "desc") {
      countries.sort((a, b) => {
        console.log("des");
        return b - a;
      });
    }
  };
  const handleDelete = (id) => {
    const newData = countries.filter((data) => {
      console.log("dle");
      return data.id !== id;
    });
    dispatch(getCountries(newData));
  }; // console.log(countries);
  return (
    <Box marginTop="40px">
      {/* <Text>DASHBOARD</Text> */}
      <Flex padding="0 1rem" mb="2rem">
        <Text fontWeight="700" paddingRight="1rem">
          Sort by country population
        </Text>
        <RadioGroup>
          <Stack direction="row">
            <Radio data-cy="asc" value="asc" onChange={handleSort}>
              Ascending
            </Radio>
            <Radio data-cy="desc" value="desc" onChange={handleSort}>
              Descending
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Country</Th>
              <Th>Capital</Th>
              <Th>Population</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
            {countries.length > 0 &&
              countries.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td>{item.country}</Td>
                    <Td>{item.city}</Td>
                    <Td>{item.population}</Td>
                    <Td>
                      <Link to={`/country/${item.id}`}>
                        {" "}
                        <Button size="sm" colorScheme="blue">
                          Edit
                        </Button>
                      </Link>
                    </Td>
                    <Td>
                      <Button
                        size="sm"
                        colorScheme="red"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Homepage;
