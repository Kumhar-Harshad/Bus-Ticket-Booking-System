import './css/growing.css'

function GrowingNumber() {
    return (
        <>
            <div className="growing-number ">
                <h3 className='gg'>GSRTC Growing Numbers</h3>
                <div className='container '>
                    <div className="row cad col-md col-sm col-lg">
                        <div className="col-3 card1">
                            <i className='bx bxl-android bx-flashing app1' ></i>
                            <h6 className='ahh'>Android App Downloaded</h6>
                            <h3 className='ah '>4297796+</h3>
                        </div>

                        <div className="col-3 card2">
                            <i className='bx bxl-apple bx-flashing app2' ></i>
                            <h6 className='ahh'>IOS App Downloaded</h6>
                            <h3 className='ah '>170845+</h3>
                        </div>

                        <div className="col-3 card3">

                            <i className='bx bxs-wallet bx-flashing app3' ></i>
                            <h6 className='ahh'>Wallet User Count</h6>
                            <h3 className='ah '>932161+</h3>
                        </div>

                        <div className="col-3 card4">
                            <i className='bx bxs-user-pin bx-flashing app4' ></i>
                            <h4 className='ahh'>Visitors Count</h4>
                            <h5 className='ah '>Over GSRTC Happy Customers</h5>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default GrowingNumber