import {Container, Button, Col} from 'react-bootstrap';

export default function headerApp(){
    return(
        <Container fluid className = 'h-[60vh] d-flex justify-content-center align-items-center text-center bg-primary md:rounded-b-full'>
            <Container className = 'pb-24 pt-14'>
                <div>
                    <h1 className = 'text-5xl text-white font-bold'>Project Akhir TBO</h1>
                    <Col lg = {6} className = 'm-auto'>
                    <p className = 'pt-3 text-gray-100 font-light md:text-lg'>
                        Pengecekan Kalimat menggunakan python, reactJs, Tailwind dan Bootstrap. 
                        <b> Kelompok 1, kelas A.</b>
                    </p>
                    </Col>
                    <a href = '/'>
                        <Button className = 'mt-8 px-5 py-3 bg-white text-primary'>Coba Sekarang</Button>
                    </a>
                </div>
            </Container>
        </Container>
    )
}