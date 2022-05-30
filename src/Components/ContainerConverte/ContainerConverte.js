import Header from '../Header/Header';
import CurrencyConverte from "../CurrencyConverte/CurrencyConverte";

import Axios from "axios";

import { useEffect, useState } from "react";
import { Paper, TextField, FormControl, Select, Button } from "@mui/material";

import "./ContainerConverte.css";


const ContainerConverte = () => {

    const [text1, settext1] = useState(1);
    const [text2, settext2] = useState(1);
    const [country, setcountry] = useState({});
    const [country2, setcountry2] = useState({});
    const [value1, setvalue1] = useState(1);
    const [value2, setvalue2] = useState(1);

    useEffect(() => {
        getdata();
    }, []);

    function convert(e) {
        e.preventDefault();
        let num = (value2 / value1);
        console.log(value2, value1, text1);
        settext2(num);
    };

    async function getdata() {
        const result = await Axios.get("http://data.fixer.io/api/latest?access_key=97658c79c0a10887a7244c74793168c2");
        console.log(result.data);
        setcountry(result.data.rates);
        setcountry2(result.data.rates);
    }

    // Axios.get("http://data.fixer.io/api/latest?access_key=97658c79c0a10887a7244c74793168c2")
    //     .then(res => {
    //         const data = res.data;
    //         console.log(data);
    //     })
    //     .catch(error => console.log(error));

    function currentCourseToUAH(val1) {

        return (country.UAH / val1).toFixed(2);
    }



    return (
        <div>
            <Header />
            <CurrencyConverte currencyAmount={currentCourseToUAH(country.USD)} currencyAmount2={currentCourseToUAH(country.EUR)} />
            <Paper className="paper">
                <form onSubmit={convert}>
                    <div>
                        <TextField variant="outlined" value={text1 || ''} onChange={(e) => settext1(e.target.value)} autoComplete="off" />
                        <FormControl className="dropdown" variant="outlined" onChange={(e) => setvalue1(e.target.value)}>
                            <Select native>
                                {Object.keys(country).map((value, index) =>
                                    <option key={index} value={country[value]}>{value}</option>)}
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <TextField variant="outlined" value={text2 || ''} onChange={(e) => settext2(e.target.value)} autoComplete="off" />
                        <FormControl className="dropdown" variant="outlined" onChange={(e) => setvalue2(e.target.value)}>
                            <Select native>
                                {Object.keys(country2).map((value, index) =>
                                    <option key={index} value={country[value]}>{value}</option>)}
                            </Select>
                        </FormControl>
                    </div>
                    <Button type="submit" className="button" variant="contained">
                        Conver
                    </Button>
                </form>
            </Paper>
        </div>
    );
}

export default ContainerConverte;