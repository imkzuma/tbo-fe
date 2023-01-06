import { Container, Col, Row, Form, Button, Tab, Tabs } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

export default function Search() {
    const [Input, setInput] = useState('');
    const [constInput, setConstInput] = useState('');

    const [hasilData, setData] = useState(null);
    const [hasilChecker, setChecker] = useState([]);

    const [loading, setLoading] = useState(false);

    const data = async (e) => {
        e.preventDefault();
        if (Input === '') { return; }

        try {
            setLoading(true);
            const Response = await axios.post("https://tbo-be-fp.vercel.app/parser", { string: Input });

            setData(Response.data.result);
            setChecker(Response.data.checker);

            setConstInput(Input);
            setInput("");

            setLoading(false);

        } catch (error) {
            console.error(error);
        }

    }

    const LoadPage = () => {
        return (
            <Container fluid className='py-20 bg-white overflow-hidden'>
                <div className='flex justify-center items-center'>
                    <div className='animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-primary'></div>
                </div>
            </Container>
        )
    }

    const fetchData = () => {
        return (
            <Col lg={12} className='sm:px-1 lg:px-3 relative h-auto'>
                <div className='sm:px-1 lg:px-3 py-2 mb-2'>
                    <Tabs activeKey={"String"} >
                        <Tab eventKey='String' title={
                            <p className='text-primary pb-2 border-b-2 border-sky-500'>Hasil Pengecekan</p>
                        }>
                            {loading ? <LoadPage /> : null}
                            <div className={`${loading ? 'hidden' : 'null'} px-3 mt-2 py-3 mb-2 rounded-md disabled ${hasilData === null ? "bg-gray-400" : hasilData ? "bg-green-300" : "bg-red-300"} `}>
                                <div className='text-gray-100 h-52'>
                                    {
                                        hasilData === null ? "Masukkan String terlebih dahulu"
                                            : hasilData
                                                ?
                                                <>
                                                    <h4 className='text-xl bg-green-700 rounded-md p-3'>String: {constInput}</h4>
                                                    <h5 className='text-xl text-slate-900 p-3'>Adalah: <span className='text-success font-bold'>Valid</span></h5>
                                                </>
                                                :
                                                <>
                                                    <h4 className='text-xl bg-red-700 rounded-md p-3'>String: {constInput}</h4>
                                                    <h5 className='text-xl text-slate-900 p-3'>Adalah: <span className='text-danger font-bold'>TIdak Valid</span></h5>
                                                </>
                                    }
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </Col>
        )
    }

    const kataChecker = () => {
        return(
            hasilChecker.length === 0 ? null :
            <Container className='p-2'>
                <div className='bg-gray-200 p-3 rounded-lg text-center'>

                    <div>
                        <h1 className='text-2xl text-slate-900 font-bold pb-3'>Hasil Pengecekan Kata</h1>
                        <h5 className='font-bold text-primary text-lg'> {constInput} </h5>

                        <div className='d-flex justify-content-center'> <h2 className='font-bold px-1 py-3'>Kosakata : </h2>{
                            hasilChecker.map((item, index) => {
                                return (
                                    <div key = { index } className='px-1 py-3'>
                                        <h2 className = 'font-bold '> {item} ,</h2>
                                    </div>
                                )
                            })
                        }</div>

                        <h2 className='py-1 text-lg font-bold text-danger'>Tidak ada dalam lexican</h2>

                    </div>

                </div>
            </Container>
        )
    }

    return (
        <>
            <Container className='sm:mt-[-5rem] lg:mt-[-10rem] sm:p-6'>
                <Row className='border-2 border-gray-300 bg-white rounded-lg py-4 shadow-md'>
                    <Col lg={6} className='sm:border-b-2 md:border-b-0 md:border-r-2 border-gray-400 pb-5'>
                        <Col lg={12} className='sm:px-1 lg:px-3'>
                            <div className='sm:px-1 lg:px-3 py-2 mb-2'>
                                <Tabs activeKey={"String"}>
                                    <Tab eventKey='String' title={
                                        <p className='text-primary pb-2 border-b-2 border-sky-500'>Bahasa Indonesia</p>
                                    }>
                                        <Form className='mt-2'>
                                            <Form.Group controllId="Search">
                                                <Form.Control
                                                    className='border-2 py-3 px-3 border-gray-300 transition-all duration-300 focus:duration-300 focus:transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent'
                                                    type="text"
                                                    placeholder="Masukkan String Disini"
                                                    onChange={(e) => setInput(e.target.value)}
                                                    value={Input}
                                                />
                                            </Form.Group>
                                            <Button type='submit' className='sm:w-full md:w-auto px-5 py-3 mt-4 bg-primary text-white float-right' onClick={(e) => data(e)}> Periksa </Button>
                                        </Form>
                                    </Tab>
                                </Tabs>
                            </div>
                        </Col>
                    </Col>
                    <Col lg={6} className='sm:pt-7 md:pt-0'>
                        { fetchData() }
                    </Col>
                </Row>
            </Container>
            
            { kataChecker() }
        </>
    )
}