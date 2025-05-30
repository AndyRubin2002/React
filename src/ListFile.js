

export function ListFile(){
    const Fruits = ['mango','apple','banana','apple','banana','jackfruit','stawberry']
    return(
        <div>
            {
                Fruits.map((fruit,i)=>{
                    return(
                       <li key={i}>{fruit} index of {i}</li>
                    );
            })
            }
        </div>
    );
}