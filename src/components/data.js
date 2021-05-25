import aven from './dataPic/aventodor.jpg';
import bmwm8 from './dataPic/bmwm8cabrio.jpg';
import bmwx6 from './dataPic/bmwx6.jpg';
import ford from './dataPic/ford.jpg';
import lada from './dataPic/ladalargus.jpg';
import mersc200 from './dataPic/mersc200.jpg';
import mersGLS from './dataPic/mresGLS.jpg';
import prius from './dataPic/priui.jpg';
import model3 from './dataPic/teslamodel3.jpg';
import models from './dataPic/teslamodel.jpg';
import t1 from './dataPic/vwt1.jpg';

export const data = [
    {
        brand: "BMW",
        model: "X6",
        year: 2008,
        fuel: "diesel", // (diesel, petrol, electric, hybrid)
        bodyType: "SUV", // (Hatchback, Estate, SUV, Sedan, MPV, Pickup, Cabrio)
        price: 2000000,
        img: bmwx6,
        horsepower: 450,
        transmission: "Manual"
    },
    {
        brand: "lada",
        model: "largus",
        year: 2018,
        fuel: "petrol", // (diesel, petrol, electric, hybrid)
        bodyType: "Estate", // (Hatchback, Estate, SUV, Sedan, MPV, Pickup, Cabrio)
        price: 800000,
        img: lada,
        horsepower: 110,
        transmission: "Manual"
    },
    {
        brand: "mercedes benz",
        model: "c200",
        year: 2020,
        fuel: "diesel", // (diesel, petrol, electric, hybrid)
        bodyType: "Sedan", // (Hatchback, Estate, SUV, Sedan, MPV, Pickup, Cabrio)
        price: 3000000,
        img:mersc200,
        horsepower: 184,
        transmission:"Automatic "
    },
    {
        brand: "mercedes benz",
        model: "GLS",
        year: 2016,
        fuel: "petrol", // (diesel, petrol, electric, hybrid)
        bodyType: "MPV", // (Hatchback, Estate, SUV, Sedan, MPV, Pickup, Cabrio)
        price: 4000000,
        img:mersGLS,
        horsepower: 450,
        transmission: "Automatic"
    },
    {
        brand: "tesla",
        model: "model 3",
        year: 2019,
        fuel: "electric", // (diesel, petrol, electric, hybrid)
        bodyType: "Sedan", // (Hatchback, Estate, SUV, Sedan, MPV, Pickup, Cabrio)
        price: 5000000,
        img:model3,
        horsepower: 350,
        transmission: "Automatic"
    },
    {
        brand: "tesla",
        model: "model s",
        year: 2017,
        fuel: "electric", // (diesel, petrol, electric, hybrid)
        bodyType: "Sedan", // (Hatchback, Estate, SUV, Sedan, MPV, Pickup, Cabrio)
        price: 8000000,
        img:models,
        horsepower: 700,
        transmission: "Automatic"
    },
    {
        brand: "BMW",
        model: "m8",
        year: 2021,
        fuel: "petrol", // (diesel, petrol, electric, hybrid)
        bodyType: "Cabrio", // (Hatchback, Estate, SUV, Sedan, MPV, Pickup, Cabrio)
        price: 10000000,
        img:bmwm8,
        horsepower: 631,
        transmission: "Automatic"
    },
    {
        brand: "Volkswagen",
        model: "T1",
        year: 1955,
        fuel: "petrol", // (diesel, petrol, electric, hybrid)
        bodyType: "MPV", // (Hatchback, Estate, SUV, Sedan, MPV, Pickup, Cabrio)
        price: 400000,
        img:t1,
        horsepower: 80,
        transmission:"Manual"
    },
    {
        brand: "toyota",
        model: "prius",
        year: 2015,
        fuel: "hybrid", // (diesel, petrol, electric, hybrid)
        bodyType: "Hatchback", // (Hatchback, Estate, SUV, Sedan, MPV, Pickup, Cabrio)
        price: 500000,
        img:prius,
        horsepower: 95,
        transmission: "Automatic "
    },
    {
        brand: "lamborghini",
        model: "Aventador",
        year: 2018,
        fuel: "petrol", // (diesel, petrol, electric, hybrid)
        bodyType: "Cabrio", // (Hatchback, Estate, SUV, Sedan, MPV, Pickup, Cabrio)
        price: 15000000,
        img:aven,
        horsepower: 710,
        transmission: "Semi-automatic and dual-clutch"
    },
    {
        brand: "Ford",
        model: "F-Series",
        year: 2018,
        fuel: "petrol", // (diesel, petrol, electric, hybrid)
        bodyType: "Pickup", // (Hatchback, Estate, SUV, Sedan, MPV, Pickup, Cabrio)
        price: 8000000,
        img:ford,
        horsepower: 550,
        transmission: "Automatic "
    }
]