import { Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <Container fluid className = 'mt-5'>
            <Container className = 'border-t-2 border-slate-300 p-4'>
                <div className = 'font-normal text-slate-900 text-center'>
                    <p>&copy; Kelompok 1 | Gungkrisna | All right reserved | 2022</p>
                </div>
            </Container>
        </Container>
    );
}
