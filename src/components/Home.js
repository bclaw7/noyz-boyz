import React from 'react';
import { Container, Image } from 'react-bootstrap';
import concert from '../images/awesome-sound-concert-hands.jpg';

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${concert})`,
          backgroundSize: 'cover',
        }}
        className='py-5'>
        <Container className='text-center py-5'>
          <Image src='../background.png' fluid />
        </Container>
      </div>
    </>
  );
}
