import { useState } from "react";
import styles from "./Herobawah.module.css"
import { nanoid } from "nanoid";
function Herobawah( props){
const {movies,setMovies}=props;
const [title,setTitle]=useState("");
const [date,setDate]=useState("");
const [gambar,setGambar]=useState("");
const [selectedOption, setSelectedOption] =useState("");

//  membuat state title dan date error/empty
const [isTitleError,setIsTitleError]=useState(false);
const [isDateError,setIsDateError]=useState(false);
const [isGambarError,setIsGambarError]=useState(false);
const [isSelectError,setIsSelectError]=useState(false);

function hendleTitle(e){
    //open text saat user mengisi
    setTitle(e.target.value);
   //notice hilang saat user mengisi
    if(e.target.value){
        setIsTitleError(false)
    }

}
function hendleDate(e){
    //open text saat user mengisi
    setDate(e.target.value);
    // notice hilang saat user mengisi
    if(e.target.value){
        setIsDateError(false)

    }
}

function hendleGambar(e){
    //open text saat user mengisi
    setGambar(e.target.value);
    //notice hilang saat user mengisi
    if(e.target.value){
        setIsGambarError(false)
    }

}
function handleOptionChange(e){
    //open text saat user mengisi
    setSelectedOption(e.target.value);
    // notice hilang saat user mengisi
    if(e.target.value){
        setIsSelectError(false)
    }
}

function validate(){
    if(title===""){
        setIsTitleError(true);
        return false;
    }
    else if(date===""){
        setIsDateError(true)
        return false;

    }
    else if(gambar===""){
        setIsGambarError(true)
        return false;
    }
    else if(selectedOption===""){
        setIsSelectError(true)
        return false;
    }
    else {
        setIsTitleError(false);
        setIsDateError(false);
        setIsGambarError(false);
        setIsSelectError(false);
        return true;
    }

}

function addMovie(){
    const movie = {
        id:nanoid(),
        title:title,
        year:date,
        type:selectedOption,
        poster:gambar,
        //https://picsum.photos/400/300
        
    };
    setMovies([...movies, movie]);
}

function hendleSubmit(e){
    e.preventDefault();
    // kondisi jika setTitle kosong,maka tampilkan true    
    validate () && addMovie ();
    
}
//console.log(movies);
    return (
        <div className={styles.Container}>
            <section className={styles.Herobawah}>
                <div className={styles.Herobawah__kiri}>
                    <div className={styles.Hero_content}>
                        <img className={styles.Hero__image} src="https://picsum.photos/400/300" alt=""/>
                    </div>
                </div>
                <div className={styles.Herobawah__kanan}>
                    <div className={styles.Hero__content}>
                     <div className={styles.wrapper}>       
                        <div className={styles.form__table}>
                            <h2 className={styles.Hero__title}>Add Movie</h2> 
                            <form onSubmit={hendleSubmit}>
                            <p className={styles.herokanan__p}>Title</p>
                            <input onChange={hendleTitle}  id="title" 
                            className={styles.input__text}
                            type="text" value= {title}></input>
                            {/* jika isTitleError true maka akan memunculkan error
                                jika isTitleError false maka akan memunculkan string kosong
                             */}
                          {isTitleError && <alert className={styles.keterangan}>text wajib diisi</alert>}
                            <p className={styles.herokanan__p}>Year</p>
                            <input onChange={hendleDate} id="date"
                            className={styles.input__year}
                            type="number" value= {date}></input>

                         {isDateError && <alert className={styles.keterangan}>Date wajib diisi</alert>}
                            <p className={styles.herokanan__p}>Gambar</p>
                            <input onChange={hendleGambar} id="poster"
                            className={styles.input__year}
                            type="text" value= {gambar}></input>

                         {isGambarError && <alert className={styles.keterangan}>Gambar wajib diisi</alert> }
                           <p className={styles.herokanan__p}>Option</p>
                                <select value={selectedOption} onChange={handleOptionChange} id="type">
                                     <option className={styles.Wrapper__select} value=""></option> 
                                     <option className={styles.Wrapper__select} value="Action">Action</option>
                                     <option className={styles.Wrapper__select} value="Drama">Drama</option>
                                     <option className={styles.Wrapper__select} value="Horror">Horror</option>
                                     <option className={styles.Wrapper__select} value="Comedy">Comedy</option>
                                </select>
        
                                    {isSelectError && <alert className={styles.keterangan}>Opsition wajib diisi</alert>}
                                        <p>Anda memilih: {selectedOption}</p>
    
                                 <button className={styles.button__input}>Kirim</button>
                           </form>                            
                        </div>     
                      </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Herobawah