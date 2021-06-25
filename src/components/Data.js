import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Container } from 'react-bootstrap'
import './Data.css'

const Data = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(
                    'https://private-anon-57b7f9fb2f-carsapi1.apiary-mock.com/manufacturers',
                );
                setData(result.data);
            }
            catch (err) {
                return (<div>Failed to fetch data from API.</div>);       /* error msg */
            }
        };

        fetchData();

    }, []);
    return (
        <Container>
            <Table bordered hover variant="light">
                <thead className="headings">
                    <tr>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>NUMBER OF MODELS</th>
                        <th>AVERAGE PRICE</th>
                    </tr>
                </thead>
                <tbody className="table-content">
                    {data.map(details => (
                        <tr>
                            <td><img src="{details.img_url}" alt="car-img"/></td>
                            <td>{details.name}</td>
                            <td>{details.num_models}</td>
                            <td>$ {details.avg_price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default Data;