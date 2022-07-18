import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCountries } from "../Redux/action";

export const Editpage = () => {
  const [country, setCountry] = useState({});
  const { id } = useParams();
  const countries = useSelector((state) => state.reducer.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (countries?.length === 0) {
      dispatch(getCountries());
    }
  }, [countries?.length, dispatch]);
  useEffect(() => {
    if (id) {
      const temp = countries?.find((item) => item.id === Number(id));
      temp && setCountry(temp);
    }
  }, [countries, id]);
  const handleChange = (e) => {
    const { value } = e.target.value;
  };
  return (
    <Box>
      <Heading>Edit Page</Heading>
      <Box>
        <Text>Capital City</Text>
        <Input
          data-cy="capital-city"
          value={country?.city}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <Text>Population</Text>
        <Input
          data-cy="population"
          value={country?.population}
          onChange={handleChange}
        />
      </Box>
      <Link to={"/"}>
        <Button colorScheme="blue" marginTop="20px" data-cy="update-button">
          Update
        </Button>
      </Link>
    </Box>
  );
};

export default Editpage;
