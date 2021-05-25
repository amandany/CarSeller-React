import React, {useState} from "react";
import './App.css';
import Head from "./components/head";
import SearchLine from "./components/searchLine";
import SearchResult from "./components/searchResult";


function App() {

    const [search, setSearch] = useState('');
    const [option, setOption] = useState('');
    const onSearchChange = (info) => {
        setSearch(info)
    };
    const onOptionChange = (info) => {
        setOption(info)
    };

    return (
        <div className="App">
            <Head/>
            <div className="mainBlock">
                <SearchLine onSearchChange={onSearchChange} onOptionChange={onOptionChange}/>
                <SearchResult search={search} option={option} />
            </div>
        </div>
    );
}

export default App;
