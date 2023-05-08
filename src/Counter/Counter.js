import {useState} from "react"

function Counter(){
    // let hasil = 0;

    // versi state
    // membuat variabel state
    // memberikan nila awal 0
    // bikin fungsi untuk mengembalikan nilai
    // panggil fungsi state itu ke fungsi tambah
      const [hasil,setHasil] = useState(0);
    

function tambah(){
    // hasil = hasil + 1;
    // console.log(hasil);
    //  jalankan fungsi setHasil
    // untuk mengubah state
    setHasil(hasil+1);
}
    
    return (
        <div>

        <h1>Hasil : {hasil}</h1>
        <button onClick={tambah}>Tambah</button>
        
        </div>
       

    );
}

export default Counter