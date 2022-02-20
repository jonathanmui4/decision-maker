import { Fragment } from 'react';
import Form from './Components/Form';
import Tasklist from './Components/Tasklist';


export default function App() {
  return (
    <Fragment>
      <header className='text-center text-zinc-300'>
        <h1 className='text-5xl font-bold m-4'>
          Decision Maker
        </h1>
      </header>
      <section className='text-center text-xl text-zinc-300 mb-4'>
        Struggling to make a decision? Leave the choices in the hands of a computer.
      </section>
      <div className='grid grid-cols-4'>
        <div className="col-start-2 col-span-2 bg-gray-100 shadow-lg rounded-lg p-8 pb-12 mb-8">
          <Tasklist />
          <Form />
        </div>
      </div>     
    </Fragment>    
  )
}

