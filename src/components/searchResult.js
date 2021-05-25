import React from 'react';
import {data} from './data';
import Card from "./card";
import styles from './searchResult.module.css';

const SearchResult = ({search, option}) => {

    const SearchedArr = () => {
        if (search.length === 0) {
            return data
        }

        return (
            data.filter((item) => ((item.model.toLowerCase()
                        .indexOf(search.toLowerCase()) > -1)
                    ||
                    (item.brand.toLowerCase()
                        .indexOf(search.toLowerCase()) > -1)
                )
            )
        )
    };

    const OptionFilter = () => {
        let newOptionArr;
        if (option === 'Default sort' || option === '') {
            return SearchedArr()
        }
        else if (option === 'YearHill') {
            newOptionArr = SearchedArr().sort((a, b) => a.year - b.year);
            return newOptionArr
        }
        else if (option === 'YearDown') {
            newOptionArr = SearchedArr().sort((a, b) => b.year - a.year);
            return newOptionArr
        }

        else if (option === 'PriceHill') {
            newOptionArr = SearchedArr().sort((a, b) => a.price - b.price);
            return newOptionArr
        }
        else if (option === 'PriceDown') {
            newOptionArr = SearchedArr().sort((a, b) => b.price - a.price);
            return newOptionArr
        }
        else if (option === 'Fuel') {
            newOptionArr = SearchedArr().sort((a, b) => {
                const x = a.fuel.toLowerCase();
                const y = b.fuel.toLowerCase();
                return x < y ? -1 : x > y ? 1 : 0;
            } );
            return newOptionArr
        }
    }


    const MainArr = OptionFilter().map((item, i) => {
        return <Card key={i} item={item} index={i}/>
    })

    return (
        <ul className={styles.locationItem}>
            {MainArr}
        </ul>
    )
}

export default SearchResult;