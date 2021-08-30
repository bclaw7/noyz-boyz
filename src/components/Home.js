import React from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import concert from '../images/awesome-sound-concert-hands.jpg';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${concert})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
      }}
      className='py-5'>
      <Container className='text-center py-4'>
        <Image src='../logo.png' fluid />
      </Container>
      <Container className='text-center pt-5 px-5 d-grid mx-auto'>
        <Button
          href='mailto:bclaw.design@gmail.com'
          variant='outline-info'
          size='lg'
          className='fs-2'>
          Get The Best Sound
        </Button>
      </Container>
    </div>
  );
}
