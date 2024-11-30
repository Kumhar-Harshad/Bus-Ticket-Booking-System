import './css/busserch.css';
function Busserch() {
    return(
        <>
            <div className="containero">
                <div className="itemserch">
                <label>Form Stop:</label><input type="text" list="form" placeholder="Serch Bus From..." />
                        <datalist id="form">
                            <option>Surat</option>
                            <option>Varodara</option>
                            <option>Vapi</option>
                            <option>Bharch</option>
                        </datalist> <br></br><br></br>

                        <label>To Stop:</label><input type="text" list="to" placeholder="Serch Bus To..." />
                        <datalist id="to">
                            <option>Surat</option>
                            <option>Varodara</option>
                            <option>Vapi</option>
                            <option>Bharch</option>
                        </datalist><br></br><br></br>

                        <label>Date:</label><input type="date" name="form" placeholder="Serch Bus From..." />
                        <br></br><br></br>
                        <button className="btn btn-outline-primary serch">Serch</button>
                </div>
            </div>
        
        </>
    )
}
export default Busserch