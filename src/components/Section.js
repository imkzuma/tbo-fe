import { Container, Row, Col } from 'react-bootstrap';
import logoReact from '../img/react.png';
import logoPython from '../img/python.png';
import logoFlask from '../img/flask.png';

export default function Section() {
    return (
        <Container fluid className='pb-5'>
            <Container className='mt-5 p-4'>
                <div className='text-center'>
                    <p>Kelompok 1</p>
                    <h1 className='text-4xl font-semibold'>Technology Use</h1>
                </div>

                <Row className='mt-5'>
                    <Col lg={4} className='text-center mb-3'>
                        <div className='bg-slate-700 duration-300 transition all hover:bg-slate-800 hover:duration-300 hover:transition-all p-3 py-5 rounded-lg'>
                            <img src={ logoReact } alt='logo react' className='m-auto w-1/2' />
                            <h1 className='text-3xl text-sky-300 font-bold pt-3'>
                                ReactJS
                            </h1>
                        </div>
                    </Col>

                    <Col lg={4} className='text-center mb-3'>
                        <div className='bg-slate-700 duration-300 transition all hover:bg-slate-800 hover:duration-300 hover:transition-all p-3 py-5 rounded-lg'>
                            <img src={ logoPython } alt='logo Python' className='m-auto w-1/2' />
                            <h1 className='text-3xl text-yellow-300 font-bold pt-3'>
                                Python
                            </h1>
                        </div>
                    </Col>

                    <Col lg={4} className='text-center mb-3'>
                        <div className='p-3 py-5 border-2 border-slate-900 duration-300 transition all hover:bg-slate-200 hover:duration-300 hover:transition-all rounded-lg'>
                            <img src={ logoFlask } alt='logo Flask' className='m-auto w-[37.5%]' />
                            <h1 className='text-3xl text-slate-900 font-bold pt-3'>
                                Flask
                            </h1>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={2}></Col>
                    
                    <Col lg={4} className='text-center mb-3 m-auto'>
                        <div className='py-5 border-2 bg-purple-700 duration-300 transition all hover:bg-purple-800 hover:duration-300 hover:transition-all rounded-lg'>
                            <img src="https://avatars.githubusercontent.com/u/2918581?s=280&v=4" className='m-auto w-1/2 rounded-lg' alt = 'Logo bootstrap' />
                            <h1 className='text-3xl text-white font-bold pt-3'>
                                Bootstrap
                            </h1>
                        </div>
                    </Col>

                    <Col lg={4} className='text-center mb-3 m-auto'>
                        <div className='py-5 border-2 bg-slate-700 duration-300 transition all hover:bg-slate-800 hover:duration-300 hover:transition-all rounded-lg'>
                            <img src="https://avatars.githubusercontent.com/u/67109815?s=280&v=4" alt = 'logo tailwind' className='m-auto w-1/2 rounded-lg' />
                            <h1 className='text-3xl text-white font-bold pt-3'>
                                Tailwind Css
                            </h1>
                        </div>
                    </Col>

                    <Col lg={2}></Col>
                </Row>
            </Container>
        </Container>
    )
}