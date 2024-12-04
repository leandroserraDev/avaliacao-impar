import '../../input.css';

import logo from '../../imagens/Logo-impar-normal.png'

function Header(){
    return (
        <div className=' fixed top-0  z-50  w-full'>

       <div className='flex 
        text-white
        flex-row
        justify-between
        items-center
                       w-full 
                       h-[60px]
                       p-1
                      bg-gradient-to-r
                    from-purple-900
                     via-fuchsia-900 to-pink-900
                       shadow-[0px_1px_20px_0px_#00000024]
                       shadow-black
                       
                    '>

               

            <div className='flex h-full m-4'>
                
           <img src={logo }/>
            </div>        
       </div>



       </div>

    )
}

export default Header;