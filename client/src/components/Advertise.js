import './css/advertise.css'
import vedio from './css/video/Ad-Bus.mp4';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

function Adverties() {
    return(<>

     <div className='col-md col-sm col-lg'>
      <h1 className='text-center rehead'>GSRTC BUS </h1>
      <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
      <video width="1400" height="500" controls autoPlay muted loop >
        <source src={vedio} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </ThemeProvider>
    </div>
    
    <div className='icon' >
   <i className='bx bxl-instagram-alt bx-tada bx-rotate-90 ' ></i>
    <i className='bx bxl-linkedin-square bx-tada bx-rotate-90' ></i>
    <i className='bx bxl-facebook-circle bx-tada bx-rotate-90' ></i>
    <i className='bx bxl-linkedin-square so' ></i>
    <i className='bx bxl-twitter bx-tada bx-rotate-90' ></i>
    <i className='bx bxl-meta bx-tada bx-rotate-90' ></i>
    </div>
   
    </>
    )
    
}
export default Adverties