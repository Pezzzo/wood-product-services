import Head from 'next/head'
import Image from 'next/image'
import { increment, decrement } from '../store/reducers/counter-reducer';
import { useTypedDispatch, useSelectors } from './../hooks/hooks';
import { Title} from '../styles/common';

const HomePage: React.FC = () => {

  return (
    <>
      <Title>home</Title>
    </>
  )
}

export default HomePage;
