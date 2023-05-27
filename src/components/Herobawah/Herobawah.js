import { useState } from "react";
import styles from "./Herobawah.module.css"
import { nanoid } from "nanoid";
function Herobawah( props){
const {movies,setMovies}=props;
// membuat state objeck 
const[formdata,setFormdata]=useState({
    title:"",
    date:"",
    poster:"",
    type:"",
})
// menbuat fungsi hendleChange untuk hendle sumua input form
function hendleChange(e){
    //console.log(e.target.name,e.target.value);
    const {name,value} = e.target;
    // console.log({...formdata});

    setFormdata ({
        ...formdata,
        [name]: value,
    });
}
// const [title,setTitle]=useState("");
// const [date,setDate]=useState("");
// const [gambar,setGambar]=useState("");
// const [selectedOption, setSelectedOption] =useState("");

//  membuat state title dan date error/empty
const [isTitleError,setIsTitleError]=useState(false);
const [isDateError,setIsDateError]=useState(false);
const [isGambarError,setIsGambarError]=useState(false);
const [isSelectError,setIsSelectError]=useState(false);

// function hendleTitle(e){
//     //open text saat user mengisi
//     setTitle(e.target.value);
//    //notice hilang saat user mengisi
//     if(e.target.value){
//         setIsTitleError(false)
//     }

// }
// function hendleDate(e){
//     //open text saat user mengisi
//     setDate(e.target.value);
//     // notice hilang saat user mengisi
//     if(e.target.value){
//         setIsDateError(false)

//     }
// }

// function hendleGambar(e){
//     //open text saat user mengisi
//     setGambar(e.target.value);
//     //notice hilang saat user mengisi
//     if(e.target.value){
//         setIsGambarError(false)
//     }

// }
// function handleOptionChange(e){
//     //open text saat user mengisi
//     setSelectedOption(e.target.value);
//     // notice hilang saat user mengisi
//     if(e.target.value){
//         setIsSelectError(false)
//     }
// }

const {title,date,poster,type}=formdata

function validate(){
    if(title===""){
        setIsTitleError(true);
        return false;
    }
    else if(date===""){
        setIsDateError(true)
        return false;

    }
    else if(date===""){
        setIsGambarError(true)
        return false;
    }
    else if(type===""){
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
        type:type,
        poster:poster,
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
                            <input onChange={hendleChange}  id="title" 
                            className={styles.input__text}
                            type="text" value= {title} name="title"></input>
                            {/* jika isTitleError true maka akan memunculkan error
                                jika isTitleError false maka akan memunculkan string kosong
                             */}
                          {isTitleError && <alert className={styles.keterangan}>text wajib diisi</alert>}
                            <p className={styles.herokanan__p}>Year</p>
                            <input onChange={hendleChange} id="date"
                            className={styles.input__year}
                            type="number" value= {date} name="date"></input>

                         {isDateError && <alert className={styles.keterangan}>Date wajib diisi</alert>}
                            <p className={styles.herokanan__p}>Gambar</p>
                            <input onChange={hendleChange} id="poster"
                            className={styles.input__year}
                            type="text" value= {poster} name="poster"></input>

                         {isGambarError && <alert className={styles.keterangan}>Gambar wajib diisi</alert> }
                           
                           <p className={styles.herokanan__p}>Option</p>
                                <select value={type} onChange={hendleChange} id="type" name="genre">
                                     <option className={styles.Wrapper__select} value=""></option> 
                                     <option className={styles.Wrapper__select} value="Action">Action</option>
                                     <option className={styles.Wrapper__select} value="Drama">Drama</option>
                                     <option className={styles.Wrapper__select} value="Horror">Horror</option>
                                     <option className={styles.Wrapper__select} value="Comedy">Comedy</option>
                                </select>
        
                                    {isSelectError && <alert className={styles.keterangan}>Opsition wajib diisi</alert>}
                                        <p>Anda memilih: {type}</p>
    
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