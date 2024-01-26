
const converter=()=>{
    let bangla=['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
    let value=document.getElementById('english').value;
    let english=String(value);
    let convert=[];
    for(i=0;i<english.length;i++){
        convert+=bangla[english[i]]
        document.getElementById('bangla').value=convert
    }
    
}
  