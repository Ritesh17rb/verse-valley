import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to Know more about it
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout my website for top Organic products
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://greendelight.vercel.app/" target='_blank' rel='noopener noreferrer'>
                    Green Delight
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Champ_de_bl%C3%A9_C%C3%B4te-d%27Or_Bourgogne_avril_2014.jpg/243px-Champ_de_bl%C3%A9_C%C3%B4te-d%27Or_Bourgogne_avril_2014.jpg" />
        </div>
    </div>
  )
}