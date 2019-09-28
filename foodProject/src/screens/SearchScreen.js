import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, err] = useResults();

  const filterResultsByPrice = price => {
    return results
      ? results.filter(result => {
          return result.price === price;
        })
      : [];
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {err !== "" && <Text>{err}</Text>}
      <ScrollView>
        <ResultList
          results={filterResultsByPrice("$")}
          title="Const Effective"
        />
        <ResultList
          results={filterResultsByPrice("$$")}
          title="Bit Pricier"
        />
        <ResultList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
