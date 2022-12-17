import { Row, Col, Container } from 'react-bootstrap';
import logoPython from '../img/python.png';

export default function Kelompok(){
    return(
        <Container fluid>
            <Container className='bg-sky-200 rounded-lg sm:px-7 lg:px-5 py-5'>
                <div className = 'text-center'>
                    <p>Kelompok 1</p>
                    <h1 className = 'text-4xl'>Anggota Kelompok</h1>
                </div>
                <Row className = 'mt-5'>
                    <Col lg = {1}></Col>
                    <Col lg = {3} md = {6} className = 'mb-3 m-auto'>
                        <div className = 'border-2 border-slate-900 rounded-lg p-3 d-flex justify-content-start items-center duration-300 transition-all hover:bg-slate-800 hover:text-white hover:duration-300 hover:transition-all'>
                            <img src = {logoPython} className = 'w-12' alt = 'python' />
                            <div className = 'ps-4'>
                                <h1 className = 'text-2xl pb-2 font-bold'>Gung Krisna</h1>
                                <p>2108561021</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg = {3} md = {6} className = 'mb-3 m-auto'>
                        <div className = 'border-2 border-slate-900 rounded-lg p-3 d-flex justify-content-start items-center duration-300 transition-all hover:bg-slate-800 hover:text-white hover:duration-300 hover:transition-all'>
                            <img src = {logoPython} className = 'w-12' alt = 'python' />
                            <div className = 'ps-4'>
                                <h1 className = 'text-2xl pb-2 font-bold'>Gung Krisna</h1>
                                <p>2108561021</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg = {3} md = {6} className = 'mb-3 m-auto'>
                        <div className = 'border-2 border-slate-900 rounded-lg p-3 d-flex justify-content-start items-center duration-300 transition-all hover:bg-slate-800 hover:text-white hover:duration-300 hover:transition-all'>
                            <img src = {logoPython} className = 'w-12' alt = 'python' />
                            <div className = 'ps-4'>
                                <h1 className = 'text-2xl pb-2 font-bold'>Gung Krisna</h1>
                                <p>2108561021</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg = {1}></Col>

                </Row>
                <Row>
                    <Col lg = {3}></Col>
                    <Col lg = {3} md = {6} className = 'mb-3 m-auto'>
                        <div className = 'border-2 border-slate-900 rounded-lg p-3 d-flex justify-content-start items-center duration-300 transition-all hover:bg-slate-800 hover:text-white hover:duration-300 hover:transition-all'>
                            <img src = {logoPython} className = 'w-12' alt = 'python' />
                            <div className = 'ps-4'>
                                <h1 className = 'text-2xl pb-2 font-bold'>Gung Krisna</h1>
                                <p>2108561021</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg = {3} md = {6} className = 'mb-3 m-auto'>
                        <div className = 'border-2 border-slate-900 rounded-lg p-3 d-flex justify-content-start items-center duration-300 transition-all hover:bg-slate-800 hover:text-white hover:duration-300 hover:transition-all'>
                            <img src = {logoPython} className = 'w-12' alt = 'python' />
                            <div className = 'ps-4'>
                                <h1 className = 'text-2xl pb-2 font-bold'>Gung Krisna</h1>
                                <p>2108561021</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg = {3}></Col>
                </Row>
            </Container>
        </Container>
    )
}